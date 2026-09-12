import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { and, eq, inArray } from "drizzle-orm";
import { db } from "@/db";
import { employees, settings, payrolls, requests } from "@/db/schema";
import { getSession, checkOrigin } from "@/lib/auth";
import { calculatePayroll, advanceDeductionForMonth, type Request as RequestRow } from "@/lib/types";
const COLUMNS = ["code", "workDays", "overtimeHours", "fridayHours", "nightHours", "missionAllowance", "bonus", "deductions"];
export async function POST(request: NextRequest) {
  if (!checkOrigin(request)) return NextResponse.json({ error: "درخواست نامعتبر" }, { status: 403 });
  const user = await getSession(); if (!user || !["admin", "finance"].includes(user.role)) return NextResponse.json({ error: "دسترسی مالی لازم است." }, { status: 403 });
  try {
    const form = await request.formData(); const file = form.get("file"); const month = String(form.get("month") || "");
    if (!/^14\d{2}-(0[1-9]|1[0-2])$/.test(month)) throw new Error("ماه حقوق معتبر نیست.");
    if (!(file instanceof File) || !file.name.toLowerCase().endsWith(".xlsx")) throw new Error("فقط فایل اکسل با پسوند xlsx پذیرفته می‌شود.");
    if (file.size > 5 * 1024 * 1024) throw new Error("حداکثر حجم فایل ۵ مگابایت است.");
    const workbook = new ExcelJS.Workbook(); await workbook.xlsx.load(await file.arrayBuffer());
    const sheet = workbook.worksheets[0]; if (!sheet || sheet.rowCount < 2) throw new Error("فایل فاقد ردیف اطلاعات است."); if (sheet.rowCount > 1001) throw new Error("در هر فایل حداکثر ۱۰۰۰ کارمند وارد کنید.");
    if (COLUMNS.some((value, i) => String(sheet.getRow(1).getCell(i + 1).value).trim() !== value)) throw new Error("ستون‌های فایل صحیح نیستند. از فایل الگو استفاده کنید.");
    const [config] = await db.select().from(settings).limit(1);
    const allEmployees = await db.select().from(employees);
    const advanceRequests = await db.select().from(requests).where(and(eq(requests.type, "advance"), eq(requests.status, "paid")));
    const rows: (typeof payrolls.$inferInsert)[] = []; const seen = new Set<string>();
    sheet.eachRow((row, number) => {
      if (number === 1) return;
      const code = String(row.getCell(1).value ?? "").trim(); if (!code && row.actualCellCount === 0) return;
      if (seen.has(code)) throw new Error(`کد پرسنلی تکراری در ردیف ${number}`); seen.add(code);
      const employee = allEmployees.find(e => e.code === code); if (!employee || employee.status === "candidate") throw new Error(`ردیف ${number}: کد پرسنلی ${code} معتبر نیست.`);
      const readNumber = (column: number, max: number) => { const raw = row.getCell(column).value; if (raw === null || raw === undefined || typeof raw === "object") throw new Error(`ردیف ${number}: تمام ستون‌های عددی باید تکمیل شوند.`); const value = Number(raw); if (!Number.isSafeInteger(value) || value < 0 || value > max) throw new Error(`ردیف ${number}: مقدار ستون ${COLUMNS[column - 1]} نامعتبر است.`); return value; };
      const workDays = readNumber(2, 31); const overtimeHours = readNumber(3, 200); const fridayHours = readNumber(4, 200); const nightHours = readNumber(5, 300); const missionAllowance = readNumber(6, 1000000000); const bonus = readNumber(7, 1000000000); const deductions = readNumber(8, 1000000000);
      const advanceDeduction = advanceDeductionForMonth(advanceRequests as unknown as RequestRow[], employee.id, month);
      const calculated = calculatePayroll({ baseSalary: employee.baseSalary, days: workDays, overtimeHours, fridayHours, nightHours, missionAllowance, bonus, deductions, advanceDeduction, maritalStatus: employee.maritalStatus, childrenCount: employee.childrenCount }, config);
      if (Object.values(calculated).some(value => !Number.isSafeInteger(value) || value < 0 || value > 2147483647)) throw new Error(`ردیف ${number}: مبلغ محاسبه‌شده از محدوده مجاز فراتر است.`);
      rows.push({ employeeId: employee.id, month, workDays, overtimeHours, fridayHours, nightHours, bonus, deductions, ...calculated });
    });
    if (!rows.length) throw new Error("هیچ ردیف معتبری در فایل وجود ندارد.");
    await db.transaction(async tx => {
      const ids = rows.map(r => r.employeeId).sort(); await tx.select().from(employees).where(inArray(employees.id, ids)).orderBy(employees.id).for("update");
      const paid = await tx.select().from(payrolls).where(and(eq(payrolls.month, month), eq(payrolls.status, "paid"), inArray(payrolls.employeeId, ids)));
      if (paid.length) throw new Error("فایل شامل فیش پرداخت‌شده است؛ برای حفظ سوابق مالی امکان بازنویسی وجود ندارد.");
      for (const row of rows) await tx.insert(payrolls).values(row).onConflictDoUpdate({ target: [payrolls.employeeId, payrolls.month], set: row });
    });
    return NextResponse.json({ ok: true, count: rows.length, message: `${rows.length} فیش حقوقی محاسبه و ذخیره شد.` });
  } catch (error) { console.error(error); return NextResponse.json({ error: error instanceof Error ? error.message : "فایل اکسل قابل خواندن نیست." }, { status: 400 }); }
}
