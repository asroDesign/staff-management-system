import { NextRequest, NextResponse } from "next/server";
import { and, eq, ne, inArray, sql } from "drizzle-orm";
import { db } from "@/db";
import { employees, users, requests, requestEvents, payrolls, settings } from "@/db/schema";
import { getSession, checkOrigin, hashPassword, verifyPassword } from "@/lib/auth";
import { ensureSeed } from "@/lib/seed";
import { getWorkspace } from "@/lib/data";
import { calculatePayroll, departments, getPeriod, advanceDeductionForMonth, todayISO, type AmenityConfig, type Request as RequestRow } from "@/lib/types";
import { dataImage, imageOrKeep, imageListOrKeep } from "@/lib/image-validate";
import { sendSms, sendSmsToMany } from "@/lib/sms";
import { requestLabels } from "@/lib/types";

class AppError extends Error { constructor(message: string, public status = 400) { super(message); } }
function text(value: unknown, label: string, required = true, max = 250) { const result = String(value ?? "").trim(); if ((required && !result) || result.length > max) throw new AppError(`${label} را به‌درستی وارد کنید.`); return result; }
function integer(value: unknown, label: string, min = 0, max = 1000000000) { const n = Number(value); if (!Number.isSafeInteger(n) || n < min || n > max) throw new AppError(`${label} باید بین ${min} و ${max} باشد.`); return n; }
function validDate(value: unknown) { const result = text(value, "تاریخ"); if (!/^\d{4}-\d{2}-\d{2}$/.test(result) || !Number.isFinite(Date.parse(result)) || new Date(result).toISOString().slice(0, 10) !== result) throw new AppError("تاریخ معتبر وارد کنید."); return result; }
function validMonth(value: unknown) { const result = text(value, "ماه"); if (!/^14\d{2}-(0[1-9]|1[0-2])$/.test(result)) throw new AppError("ماه باید مانند 1405-04 باشد."); return result; }
const daysBetween = (start: string, end: string) => Math.round((Date.parse(end) - Date.parse(start)) / 86400000) + 1;

/** Wraps the shared image validators so any thrown `ValidationError` surfaces as this route's `AppError` (matching status code + response shape). */
function asAppError<T>(fn: () => T): T { try { return fn(); } catch (error) { if (error instanceof Error) throw new AppError(error.message, (error as { status?: number }).status || 400); throw error; } }
function amenitiesField(value: unknown): AmenityConfig[] {
  if (!Array.isArray(value) || !value.length || value.length > 20) throw new AppError("حداقل یک امکان رفاهی را تعریف کنید (حداکثر ۲۰ مورد).");
  const seen = new Set<string>();
  return value.map((item, index) => {
    if (!item || typeof item !== "object") throw new AppError("هر امکان رفاهی باید عنوان و سقف ماهانه معتبر داشته باشد.");
    const row = item as Record<string, unknown>; const id = text(row.id, `شناسه امکان ${index + 1}`, true, 80);
    if (seen.has(id)) throw new AppError("شناسه امکانات رفاهی تکراری است."); seen.add(id);
    const title = text(row.title, `عنوان امکان رفاهی ${index + 1}`, true, 150); const monthlyLimit = integer(row.monthlyLimit, `سقف ماهانه «${title}»`, 0, 1000);
    return { id, title, monthlyLimit };
  });
}

export async function GET() {
  const headers = { "Cache-Control": "private, no-store" };
  try {
    await ensureSeed();
    const user = await getSession();
    if (!user) return NextResponse.json({ error: "لطفاً وارد حساب کاربری شوید.", code: "SESSION_REQUIRED" }, { status: 401, headers });
    return NextResponse.json(await getWorkspace(user), { headers });
  } catch (error) {
    const detail = error as { name?: string; code?: string; cause?: { code?: string } };
    console.error("Aban workspace unavailable", { name: detail?.name, code: detail?.cause?.code || detail?.code });
    return NextResponse.json({ error: "بارگذاری اطلاعات موقتاً انجام نشد. چند لحظه دیگر دوباره تلاش کنید.", code: "WORKSPACE_UNAVAILABLE" }, { status: 503, headers: { ...headers, "Retry-After": "2" } });
  }
}

export async function POST(request: NextRequest) {
  if (!checkOrigin(request)) return NextResponse.json({ error: "درخواست نامعتبر" }, { status: 403 });
  if (Number(request.headers.get("content-length")) > 9 * 1024 * 1024) return NextResponse.json({ error: "حجم درخواست بیش از حد مجاز است." }, { status: 413 });
  try {
    const user = await getSession(); if (!user) throw new AppError("لطفاً وارد حساب کاربری شوید.", 401);
    const body = await request.json(); const { action, data = {} } = body;
    const admin = user.role === "admin"; const financial = admin || user.role === "finance";
    const requireAdmin = () => { if (!admin) throw new AppError("این عملیات فقط برای مدیر سیستم مجاز است.", 403); };
    const requireFinance = () => { if (!financial) throw new AppError("دسترسی واحد مالی یا مدیریت لازم است.", 403); };
    if (action === "employee.save") {
      requireAdmin();
      const name = text(data.name, "نام و نام خانوادگی"); const email = text(data.email, "ایمیل").toLowerCase();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new AppError("نشانی ایمیل معتبر نیست.");
      const department = text(data.department, "واحد سازمانی"); if (!departments.includes(department)) throw new AppError("واحد سازمانی معتبر نیست.");
      const status = text(data.status || "active", "وضعیت"); if (!["active", "inactive", "on_leave", "candidate"].includes(status)) throw new AppError("وضعیت نامعتبر است.");
      const maritalStatus = text(data.maritalStatus || "single", "وضعیت تأهل"); if (!["single", "married"].includes(maritalStatus)) throw new AppError("وضعیت تأهل معتبر نیست.");
      const baseValues = { name, email, code: text(data.code, "کد پرسنلی"), phone: text(data.phone, "تلفن", false), nationalId: text(data.nationalId, "کد ملی", false), department, position: text(data.position, "عنوان شغلی"), hireDate: validDate(data.hireDate || todayISO()), birthDate: data.birthDate ? validDate(data.birthDate) : "", status, baseSalary: integer(data.baseSalary, "حقوق پایه", 1), leaveBalance: integer(data.leaveBalance ?? 26, "مانده مرخصی", 0, 365), maritalStatus, childrenCount: integer(data.childrenCount ?? 0, "تعداد فرزندان", 0, 20), insuranceNumber: text(data.insuranceNumber, "شماره بیمه", false, 30), address: text(data.address, "آدرس منزل", false, 600) };
      let isNewHire = false;
      await db.transaction(async tx => {
        let previous = { avatar: "", nationalIdFront: "", nationalIdBack: "", identityPages: [] as string[], otherDocuments: [] as string[] };
        if (data.id) {
          const [existing] = await tx.select().from(employees).where(eq(employees.id, data.id)).limit(1).for("update"); if (!existing) throw new AppError("کارمند پیدا نشد.", 404);
          if (["sara@aban.ir", "manager@aban.ir", "finance@aban.ir"].includes(existing.email) && email !== existing.email) throw new AppError("ایمیل حساب نمایشی قابل تغییر نیست.");
          previous = existing;
        }
        const values = asAppError(() => ({ ...baseValues, avatar: imageOrKeep(data.avatar, previous.avatar, "تصویر پرسنلی"), nationalIdFront: imageOrKeep(data.nationalIdFront, previous.nationalIdFront, "تصویر روی کارت ملی"), nationalIdBack: imageOrKeep(data.nationalIdBack, previous.nationalIdBack, "تصویر پشت کارت ملی"), identityPages: imageListOrKeep(data.identityPages, previous.identityPages, "صفحات شناسنامه یا گذرنامه", 10), otherDocuments: imageListOrKeep(data.otherDocuments, previous.otherDocuments, "سایر مدارک", 10) }));
        if (data.id) {
          await tx.update(employees).set(values).where(eq(employees.id, data.id));
          const account: { name: string; email: string; passwordHash?: string } = { name, email };
          if (data.password) { if (String(data.password).length < 8) throw new AppError("رمز عبور باید حداقل ۸ نویسه باشد."); account.passwordHash = hashPassword(String(data.password)); }
          await tx.update(users).set(account).where(eq(users.employeeId, data.id));
        } else {
          const password = text(data.password, "رمز عبور اولیه"); if (password.length < 8) throw new AppError("رمز عبور باید حداقل ۸ نویسه باشد.");
          const [employee] = await tx.insert(employees).values(values).returning();
          await tx.insert(users).values({ employeeId: employee.id, name, email, passwordHash: hashPassword(password), role: "employee" });
          isNewHire = true;
        }
      });
      if (isNewHire && baseValues.phone) void sendSms(baseValues.phone, "خوش آمدید", `${baseValues.name} عزیز، پرونده همکاری شما در ${"پارک آبی آبان"} ایجاد شد. اطلاعات ورود را از واحد منابع انسانی دریافت کنید.`);
    } else if (action === "employee.delete") {
      requireAdmin();
      const [account] = await db.select().from(users).where(eq(users.employeeId, text(data.id, "شناسه"))).limit(1);
      if (account && ["admin@aban.ir", "sara@aban.ir", "manager@aban.ir", "finance@aban.ir"].includes(account.email)) throw new AppError("حساب‌های ورود نمایشی قابل حذف نیستند.");
      const deleted = await db.delete(employees).where(eq(employees.id, data.id)).returning(); if (!deleted.length) throw new AppError("کارمند پیدا نشد.", 404);
    } else if (action === "request.save") {
      await db.transaction(async tx => {
        const employeeId = admin ? text(data.employeeId, "کارمند") : user.employeeId; if (!employeeId) throw new AppError("پرونده کارمندی انتخاب نشده است.");
        const [employee] = await tx.select().from(employees).where(eq(employees.id, employeeId)).for("update"); if (!employee || ["candidate", "inactive"].includes(employee.status)) throw new AppError("پرونده کارمند فعال نیست.");
        if (data.id) { const [existing] = await tx.select().from(requests).where(eq(requests.id, data.id)).for("update"); if (!existing || existing.employeeId !== employeeId || existing.status !== "pending" || existing.stage !== 1) throw new AppError("فقط درخواست در انتظار مرحله اول قابل ویرایش است."); }
        const type = text(data.type, "نوع درخواست"); if (!["leave", "ticket", "advance"].includes(type)) throw new AppError("نوع درخواست نامعتبر است.");
        const startDate = validDate(data.startDate || todayISO()); const endDate = validDate(data.endDate || startDate); const month = getPeriod(new Date(startDate));
        if (endDate < startDate) throw new AppError("تاریخ پایان باید پس از تاریخ شروع باشد.");
        const [config] = await tx.select().from(settings).limit(1);
        const existing = await tx.select().from(requests).where(and(eq(requests.employeeId, employeeId), inArray(requests.status, ["pending", "approved", "paid"]), data.id ? ne(requests.id, data.id) : undefined));
        const quantity = type === "ticket" ? integer(data.quantity, "تعداد درخواستی", 1, 100) : type === "leave" ? daysBetween(startDate, endDate) : 1;
        const amount = type === "advance" ? integer(data.amount, "مبلغ مساعده", 1, config.advanceLimit) : 0;
        const repaymentMonths = type === "advance" ? integer(data.repaymentMonths ?? 1, "تعداد ماه‌های اقساط", 1, 24) : 1;
        let amenityId = ""; let amenityTitle = "";
        if (type === "ticket") {
          const amenity = config.amenities.find(a => a.id === text(data.amenityId, "امکان رفاهی")); if (!amenity) throw new AppError("امکان رفاهی انتخاب‌شده معتبر نیست.");
          const used = existing.filter(r => r.type === "ticket" && r.month === month && r.amenityId === amenity.id).reduce((sum, r) => sum + r.quantity, 0);
          if (used + quantity > amenity.monthlyLimit) throw new AppError(`سهمیه «${amenity.title}» در این ماه کافی نیست. سهمیه باقی‌مانده: ${Math.max(0, amenity.monthlyLimit - used)}`);
          amenityId = amenity.id; amenityTitle = amenity.title;
        }
        if (type === "leave") { const reserved = existing.filter(r => r.type === "leave" && r.status === "pending").reduce((sum, r) => sum + daysBetween(r.startDate, r.endDate), 0); if (quantity > employee.leaveBalance - reserved) throw new AppError("مانده مرخصی با احتساب درخواست‌های در انتظار کافی نیست."); if (existing.some(r => r.type === "leave" && startDate <= r.endDate && endDate >= r.startDate)) throw new AppError("این بازه با مرخصی ثبت‌شده تداخل دارد."); }
        if (type === "advance" && existing.some(r => r.type === "advance" && r.month === month)) throw new AppError("در این ماه یک درخواست مساعده فعال دارید.");
        const title = type === "ticket" ? amenityTitle : text(data.title || ({ leave: "مرخصی استحقاقی", advance: "درخواست مساعده حقوق" } as Record<string, string>)[type], "عنوان");
        const values = { employeeId, type, title, description: text(data.description, "توضیحات", false, 2000), startDate, endDate, month, quantity, amount, amenityId, repaymentMonths };
        const [saved] = data.id ? await tx.update(requests).set(values).where(eq(requests.id, data.id)).returning() : await tx.insert(requests).values(values).returning();
        await tx.insert(requestEvents).values({ requestId: saved.id, actorName: user.name, action: data.id ? "درخواست را ویرایش کرد" : "درخواست جدید ثبت کرد", note: values.title });
        if (!data.id) {
          const approver = employee.department ? (await tx.select({ phone: employees.phone }).from(users).innerJoin(employees, eq(users.employeeId, employees.id)).where(and(eq(users.role, "manager"), eq(employees.department, employee.department))).limit(1))[0] : undefined;
          const phone = approver?.phone;
          if (phone) void sendSms(phone, "درخواست جدید", `درخواست ${requestLabels[type]} از ${employee.name} برای بررسی ثبت شد.`);
        }
      });
    } else if (["request.approve", "request.reject", "request.pay", "request.delete"].includes(action)) {
      let notify: { phone: string; title: string; body: string } | null = null;
      await db.transaction(async tx => {
        const [item] = await tx.select().from(requests).where(eq(requests.id, text(data.id, "شناسه"))).for("update"); if (!item) throw new AppError("درخواست پیدا نشد.", 404);
        if (action === "request.delete") { if (!admin && !(item.employeeId === user.employeeId && item.stage === 1 && item.status === "pending")) throw new AppError("امکان حذف این درخواست وجود ندارد.", 403); if (["paid", "approved"].includes(item.status)) throw new AppError("درخواست نهایی‌شده قابل حذف نیست."); await tx.delete(requests).where(eq(requests.id, item.id)); return; }
        if (item.status !== "pending") throw new AppError("این درخواست قبلاً بررسی شده است.", 409);
        const [employee] = await tx.select().from(employees).where(eq(employees.id, item.employeeId)).for("update");
        if (!admin) { if (user.role === "manager" && item.stage === 1) { const [manager] = await tx.select().from(employees).where(eq(employees.id, user.employeeId || "00000000-0000-0000-0000-000000000000")); if (!manager || manager.department !== employee.department || item.employeeId === user.employeeId) throw new AppError("فقط درخواست کارکنان واحد خود را می‌توانید تأیید کنید.", 403); } else if (!(user.role === "finance" && item.type === "advance" && item.stage === 3)) throw new AppError("دسترسی تأیید این مرحله را ندارید.", 403); }
        let status = "pending"; let stage = item.stage; let eventAction = "درخواست را تأیید کرد"; let extra: { paidMonth?: string } = {};
        if (action === "request.reject") { status = "rejected"; eventAction = "درخواست را رد کرد"; }
        else if (action === "request.pay") { requireFinance(); if (item.type !== "advance" || item.stage !== 3) throw new AppError("مساعده هنوز تأییدهای لازم را دریافت نکرده است."); text(data.note, "شماره پیگیری یا توضیح پرداخت", true, 1000); status = "paid"; eventAction = "پرداخت خزانه‌داری را ثبت کرد"; extra = { paidMonth: getPeriod() }; }
        else { if (item.stage === 3) throw new AppError("برای این درخواست ثبت پرداخت خزانه‌داری لازم است."); const [config] = await tx.select().from(settings).limit(1); const lastStage = item.type === "leave" ? config.leaveApprovalSteps : item.type === "advance" ? 3 : 1; if (stage < lastStage) stage++; else { status = "approved"; if (item.type === "leave") { const days = daysBetween(item.startDate, item.endDate); if (employee.leaveBalance < days) throw new AppError("مانده مرخصی کافی نیست."); await tx.update(employees).set({ leaveBalance: sql`${employees.leaveBalance} - ${days}` }).where(eq(employees.id, employee.id)); } } }
        await tx.update(requests).set({ status, stage, ...extra }).where(eq(requests.id, item.id));
        await tx.insert(requestEvents).values({ requestId: item.id, actorName: user.name, action: eventAction, note: text(data.note, "یادداشت", false, 1000) || (status === "pending" ? `ارسال به مرحله ${stage}` : item.title) });
        if (employee.phone && status !== "pending") notify = { phone: employee.phone, title: status === "rejected" ? "درخواست رد شد" : status === "paid" ? "پرداخت مساعده" : "درخواست تأیید شد", body: status === "rejected" ? `درخواست ${item.title} شما رد شد.` : status === "paid" ? `مساعده ${item.title} شما پرداخت شد.` : `درخواست ${item.title} شما تأیید نهایی شد.` };
      });
      if (notify) { const n = notify as { phone: string; title: string; body: string }; void sendSms(n.phone, n.title, n.body); }
    } else if (action === "settings.save") {
      requireAdmin();
      const values = { companyName: text(data.companyName, "نام مجموعه"), amenities: amenitiesField(data.amenities), advanceLimit: integer(data.advanceLimit, "سقف مساعده", 1), leaveApprovalSteps: integer(data.leaveApprovalSteps, "مراحل تأیید مرخصی", 1, 2), insurancePercent: integer(data.insurancePercent, "نرخ بیمه کارمند", 0, 100), employerInsurancePercent: integer(data.employerInsurancePercent, "نرخ بیمه کارفرما", 0, 100), taxPercent: integer(data.taxPercent, "نرخ مالیات", 0, 100), taxExemption: integer(data.taxExemption, "معافیت مالیاتی"), maritalAllowance: integer(data.maritalAllowance, "حق تأهل", 0), childAllowance: integer(data.childAllowance, "حق اولاد (هر فرزند)", 0), maxChildrenAllowance: integer(data.maxChildrenAllowance, "حداکثر فرزند مشمول حق اولاد", 0, 10) };
      await db.update(settings).set(values).where(eq(settings.id, "general"));
    } else if (action === "payroll.save") {
      requireFinance();
      const employeeId = text(data.employeeId, "کارمند"); const month = validMonth(data.month); const workDays = integer(data.workDays, "روزهای کارکرد", 0, 31); const overtimeHours = integer(data.overtimeHours, "ساعات اضافه‌کاری", 0, 200); const fridayHours = integer(data.fridayHours ?? 0, "ساعات جمعه‌کاری", 0, 200); const nightHours = integer(data.nightHours ?? 0, "ساعات شب‌کاری", 0, 300); const missionAllowance = integer(data.missionAllowance ?? 0, "حق مأموریت", 0); const bonus = integer(data.bonus, "مزایا"); const deductions = integer(data.deductions, "کسورات");
      const [employee] = await db.select().from(employees).where(eq(employees.id, employeeId)); if (!employee) throw new AppError("کارمند پیدا نشد.", 404); const [config] = await db.select().from(settings).limit(1);
      await db.transaction(async tx => {
        await tx.select().from(employees).where(eq(employees.id, employeeId)).for("update");
        const [old] = await tx.select().from(payrolls).where(and(eq(payrolls.employeeId, employeeId), eq(payrolls.month, month))); if (old?.status === "paid") throw new AppError("فیش پرداخت‌شده قابل تغییر نیست.");
        const advanceRequests = await tx.select().from(requests).where(and(eq(requests.employeeId, employeeId), eq(requests.type, "advance"), eq(requests.status, "paid")));
        const advanceDeduction = advanceDeductionForMonth(advanceRequests as unknown as RequestRow[], employeeId, month);
        const calculated = calculatePayroll({ baseSalary: employee.baseSalary, days: workDays, overtimeHours, fridayHours, nightHours, missionAllowance, bonus, deductions, advanceDeduction, maritalStatus: employee.maritalStatus, childrenCount: employee.childrenCount }, config);
        Object.values(calculated).forEach(value => integer(value, "مبلغ محاسبه‌شده حقوق", 0, 2147483647));
        const values = { employeeId, month, workDays, overtimeHours, fridayHours, nightHours, bonus, deductions, ...calculated };
        await tx.insert(payrolls).values(values).onConflictDoUpdate({ target: [payrolls.employeeId, payrolls.month], set: values });
      });
    } else if (action === "payroll.pay") {
      requireFinance(); const month = validMonth(data.month); let paidPhones: string[] = [];
      await db.transaction(async tx => {
        const drafts = await tx.select({ employeeId: payrolls.employeeId }).from(payrolls).where(and(eq(payrolls.month, month), eq(payrolls.status, "draft")));
        if (!drafts.length) throw new AppError("فیش پیش‌نویسی برای پرداخت وجود ندارد.", 409);
        const paidEmployees = await tx.select().from(employees).where(inArray(employees.id, drafts.map(p => p.employeeId).sort())).orderBy(employees.id).for("update");
        const paid = await tx.update(payrolls).set({ status: "paid" }).where(and(eq(payrolls.month, month), eq(payrolls.status, "draft"))).returning({ id: payrolls.id });
        if (!paid.length) throw new AppError("پرداخت این فیش‌ها قبلاً ثبت شده است.", 409);
        paidPhones = paidEmployees.map(e => e.phone).filter(Boolean);
      });
      if (paidPhones.length) void sendSmsToMany(paidPhones.map(phone => ({ phone })), "پرداخت حقوق", `فیش حقوقی ${month} شما پرداخت شد.`);
    }
    else if (action === "payroll.delete") { requireFinance(); const result = await db.delete(payrolls).where(and(eq(payrolls.id, text(data.id, "شناسه")), eq(payrolls.status, "draft"))).returning(); if (!result.length) throw new AppError("فقط فیش پیش‌نویس قابل حذف است."); }
    else if (action === "profile.save") {
      const name = text(data.name, "نام"); await db.transaction(async tx => { const patch: { name: string; passwordHash?: string } = { name }; if (data.password) { if (String(data.password).length < 8) throw new AppError("رمز عبور باید حداقل ۸ نویسه باشد."); const [account] = await tx.select().from(users).where(eq(users.id, user.id)); if (!verifyPassword(String(data.currentPassword || ""), account.passwordHash)) throw new AppError("رمز عبور فعلی صحیح نیست."); patch.passwordHash = hashPassword(String(data.password)); } await tx.update(users).set(patch).where(eq(users.id, user.id)); if (user.employeeId) await tx.update(employees).set({ name, phone: text(data.phone, "تلفن", false) }).where(eq(employees.id, user.employeeId)); });
    } else throw new AppError("عملیات ناشناخته است.");
    return NextResponse.json({ ok: true, message: "تغییرات با موفقیت ذخیره شد." });
  } catch (error) {
    if (error instanceof AppError) return NextResponse.json({ error: error.message }, { status: error.status });
    const err = error as { code?: string; cause?: { code?: string } };
    if (err.code === "23505" || err.cause?.code === "23505") return NextResponse.json({ error: "ایمیل یا کد پرسنلی قبلاً ثبت شده است." }, { status: 409 });
    if (err.code === "22P02" || err.cause?.code === "22P02") return NextResponse.json({ error: "شناسه نامعتبر است." }, { status: 400 });
    console.error(error); return NextResponse.json({ error: "ذخیره اطلاعات انجام نشد. لطفاً دوباره تلاش کنید." }, { status: 500 });
  }
}
