import { randomUUID } from "node:crypto";
import { db } from "@/db";
import { employees, users, requests, requestEvents, payrolls, settings } from "@/db/schema";
import { sql } from "drizzle-orm";
import { hashPassword } from "@/lib/auth";
import { departments, getPeriod, periodAdd, calculatePayroll, advanceDeductionForMonth, todayISO, type AmenityConfig, type Request } from "@/lib/types";

const DEFAULT_AMENITIES: AmenityConfig[] = [
  { id: randomUUID(), title: "بلیت استخر و سرسره (روزانه)", monthlyLimit: 4 },
  { id: randomUUID(), title: "بلیت ویژه خانواده (آخر هفته)", monthlyLimit: 2 },
  { id: randomUUID(), title: "بن تخفیف رستوران مجموعه", monthlyLimit: 6 },
  { id: randomUUID(), title: "کارت ورود سالن بدنسازی", monthlyLimit: 8 },
];

let seeding: Promise<void> | undefined;
export function ensureSeed() { if (!seeding) seeding = seed().catch(error => { seeding = undefined; throw error; }); return seeding; }
async function seed() {
  await db.transaction(async tx => {
    await tx.execute(sql`select pg_advisory_xact_lock(827401)`);
    const [existing] = await tx.select().from(settings).limit(1);
    if (existing) {
      // Backfill demo welfare facilities for databases seeded before this feature existed.
      if (!existing.amenities || !existing.amenities.length) await tx.update(settings).set({ amenities: DEFAULT_AMENITIES }).where(sql`id = 'general'`);
      return;
    }
    const config = { id: "general", companyName: "پارک آبی آبان", amenities: DEFAULT_AMENITIES, advanceLimit: 10000000, leaveApprovalSteps: 2, insurancePercent: 7, employerInsurancePercent: 23, taxPercent: 10, taxExemption: 24000000, maritalAllowance: 1500000, childAllowance: 750000, maxChildrenAllowance: 2 };
    await tx.insert(settings).values(config);
    const firstNames = ["سارا", "علی", "محمد", "نرگس", "رضا", "زهرا", "حسین", "مریم", "امیر", "فاطمه", "مهدی", "الهام", "پویا", "ریحانه", "سامان", "نگین", "آرش", "سپیده", "محسن", "حدیث"];
    const lastNames = ["رحیمی", "رضایی", "حسینی", "احمدی", "کریمی", "موسوی", "محمدی", "جعفری", "عباسی", "صادقی", "اکبری", "نجفی", "مرادی", "قاسمی", "نوری", "شریفی", "زارعی", "یزدانی", "بهشتی", "رستمی", "سلطانی", "هاشمی", "عابدی", "کاظمی", "امینی", "ملکی", "توحیدی", "نصیری", "زمانی", "فرهادی", "باقری", "ایزدی", "حیدری", "سعیدی", "غفاری", "فراهانی", "قدیری", "کمالی", "مقدم", "فلاح", "حقیقی", "حاتمی", "محمودی", "طالبی", "رجبی", "فاضلی", "دهقانی", "هادیان", "سلیمانی", "یوسفی"];
    const positions = ["کارشناس نجات غریق", "کارشناس منابع انسانی", "حسابدار", "کارشناس پذیرش", "تکنسین تأسیسات", "کارشناس پشتیبانی"];
    const rows = Array.from({ length: 1000 }, (_, i) => { const dept = i < 6 ? [0, 4, 0, 1, 5, 2][i] : i % 10 < 4 ? 0 : (i % 5) + 1; const first = firstNames[i % 20]; const last = i < 20 ? lastNames[i] : lastNames[Math.floor(i / 20) % 50]; const married = i % 3 !== 0; return { id: randomUUID(), code: String(1001 + i), name: `${first} ${last}`, email: i === 0 ? "sara@aban.ir" : i === 2 ? "manager@aban.ir" : i === 5 ? "finance@aban.ir" : `staff${1001 + i}@aban.ir`, phone: `0912${String(3450000 + i)}`, nationalId: String(1234500000 + i), department: departments[dept], position: positions[dept], hireDate: new Date(Date.now() - (i < 10 ? i + 1 : 60 + i % 800) * 86400000).toISOString().slice(0, 10), birthDate: new Date(Date.now() - (8000 + i % 6000) * 86400000).toISOString().slice(0, 10), status: i >= 988 ? "candidate" : i > 970 ? "inactive" : i > 946 ? "on_leave" : "active", baseSalary: 16000000 + (i % 15) * 1000000, leaveBalance: 26 - i % 12, avatar: i === 0 ? "/images/sara.jpg" : i === 1 ? "/images/ali.jpg" : "", maritalStatus: married ? "married" : "single", childrenCount: married ? i % 4 : 0, insuranceNumber: String(9870000000 + i), address: `تهران، خیابان نمونه، پلاک ${1 + i % 90}`, createdAt: new Date(Date.now() - i * 3600000) }; });
    for (let i = 0; i < rows.length; i += 200) await tx.insert(employees).values(rows.slice(i, i + 200));
    const passwordHash = hashPassword(process.env.DEMO_PASSWORD || "Aban@1404");
    await tx.insert(users).values([{ name: "امیر محمدی", email: "admin@aban.ir", passwordHash, role: "admin" }, { name: "محمد حسینی", email: "manager@aban.ir", passwordHash, role: "manager", employeeId: rows[2].id }, { name: "زهرا موسوی", email: "finance@aban.ir", passwordHash, role: "finance", employeeId: rows[5].id }]);
    const staffUsers = rows.filter((_, i) => i !== 2 && i !== 5).map(e => ({ name: e.name, email: e.email, passwordHash, role: "employee", employeeId: e.id }));
    for (let i = 0; i < staffUsers.length; i += 200) await tx.insert(users).values(staffUsers.slice(i, i + 200));
    const period = getPeriod(); const previousPeriod = periodAdd(period, -1);
    const requestRows = Array.from({ length: 84 }, (_, i) => {
      const type = i < 6 ? ["leave", "advance", "ticket", "leave", "advance", "ticket"][i] : ["leave", "leave", "ticket", "advance", "ticket", "leave", "advance", "ticket"][i % 8];
      let status = i < 6 ? ["pending", "pending", "approved", "pending", "rejected", "approved"][i] : i % 7 === 0 ? "rejected" : i % 3 === 0 ? "approved" : "pending";
      if (type === "advance" && status === "approved") status = "paid";
      const createdAt = new Date(Date.now() - (i < 6 ? i * 47 + 12 : (1 + (i * 7) % 29) * 1440 + i * 13) * 60000);
      const startDate = new Date(createdAt.getTime() + (2 + i % 3) * 86400000).toISOString().slice(0, 10);
      const amenity = DEFAULT_AMENITIES[i % DEFAULT_AMENITIES.length];
      const repaymentMonths = type === "advance" ? [1, 1, 3, 6][i % 4] : 1;
      const paidMonth = type === "advance" && status === "paid" ? (i % 2 === 0 ? previousPeriod : period) : null;
      return { id: randomUUID(), employeeId: rows[i < 6 ? i : i * 7].id, type, title: type === "leave" ? "مرخصی استحقاقی" : type === "advance" ? "درخواست مساعده حقوق" : amenity.title, description: type === "leave" ? "جهت رسیدگی به امور شخصی و خانوادگی" : type === "advance" ? "درخواست مساعده از حقوق این ماه، با تشکر" : "استفاده از امکانات رفاهی مجموعه برای خانواده", startDate, endDate: type === "leave" ? new Date(new Date(startDate).getTime() + 86400000).toISOString().slice(0, 10) : startDate, month: getPeriod(new Date(startDate)), amount: type === "advance" ? 3000000 + (i % 6) * 1000000 : 0, quantity: type === "ticket" ? 1 + i % 4 : type === "leave" ? 2 : 1, amenityId: type === "ticket" ? amenity.id : "", repaymentMonths, paidMonth, stage: type === "advance" && (i === 1 || status === "paid") ? 3 : i === 3 || i % 4 === 0 && type !== "ticket" ? 2 : 1, status, createdAt };
    });
    await tx.insert(requests).values(requestRows);
    await tx.insert(requestEvents).values(requestRows.flatMap(r => {
      const events = [{ requestId: r.id, actorName: rows.find(e => e.id === r.employeeId)!.name, action: "درخواست جدید ثبت کرد", note: r.title, createdAt: r.createdAt }];
      const last = r.type === "leave" ? 2 : r.type === "advance" ? 3 : 1;
      const completed = ["approved", "paid"].includes(r.status) ? last : r.stage - 1;
      for (let stage = 1; stage <= completed; stage++) events.push({ requestId: r.id, actorName: ["", "محمد حسینی", "امیر محمدی", "زهرا موسوی"][stage], action: stage === 3 ? "پرداخت خزانه‌داری را ثبت کرد" : "درخواست را تأیید کرد", note: stage === 3 ? `پرداخت نمونه با شناسه AB-${r.id.slice(0, 6).toUpperCase()}` : `تأیید مرحله ${stage}`, createdAt: new Date(r.createdAt.getTime() + stage * 60000) });
      if (r.status === "rejected") events.push({ requestId: r.id, actorName: "امیر محمدی", action: "درخواست را رد کرد", note: "عدم انطباق با برنامه کاری واحد؛ لطفاً زمان دیگری انتخاب شود.", createdAt: new Date(r.createdAt.getTime() + 4 * 60000) });
      return events;
    }));
    const paidAdvances = requestRows.filter(r => r.type === "advance" && r.status === "paid" && !!r.paidMonth) as unknown as Request[];
    const salaries = rows.filter(e => e.status !== "candidate").map((e, i) => { const overtimeHours = 10 + i % 26; const fridayHours = i % 5 === 0 ? 8 + i % 8 : 0; const nightHours = i % 4 === 0 ? 20 + i % 30 : 0; const missionAllowance = i % 9 === 0 ? 1200000 : 0; const bonus = 1500000; const deductions = i % 4 === 0 ? 500000 : 0; const advanceDeduction = advanceDeductionForMonth(paidAdvances, e.id, period); const calculated = calculatePayroll({ baseSalary: e.baseSalary, days: 30, overtimeHours, fridayHours, nightHours, missionAllowance, bonus, deductions, advanceDeduction, maritalStatus: e.maritalStatus, childrenCount: e.childrenCount }, config); return { employeeId: e.id, month: period, workDays: 30, overtimeHours, fridayHours, nightHours, bonus, deductions, ...calculated, status: i < 940 ? "paid" : "draft" }; });
    for (let i = 0; i < salaries.length; i += 200) await tx.insert(payrolls).values(salaries.slice(i, i + 200));
    void todayISO;
  });
}
