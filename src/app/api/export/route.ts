import { NextRequest, NextResponse } from "next/server";
import ExcelJS from "exceljs";
import { getSession } from "@/lib/auth";
import { getWorkspace } from "@/lib/data";
import { getPeriod, maritalStatusLabels, repaymentLabel, requestLabels, statusLabel } from "@/lib/types";
export async function GET(request: NextRequest) {
  const user = await getSession(); if (!user) return NextResponse.json({ error: "ورود به حساب لازم است." }, { status: 401 });
  const type = request.nextUrl.searchParams.get("type") || "report";
  const month = request.nextUrl.searchParams.get("month") || getPeriod();
  if (["template", "payroll"].includes(type) && !["admin", "finance"].includes(user.role)) return NextResponse.json({ error: "دسترسی واحد مالی لازم است." }, { status: 403 });
  const data = await getWorkspace(user); const workbook = new ExcelJS.Workbook(); workbook.creator = "Aban HR";
  const addSheet = (name: string, headers: string[], rows: (string | number)[][]) => { const sheet = workbook.addWorksheet(name, { views: [{ rightToLeft: true, state: "frozen", ySplit: 1 }] }); sheet.addRow(headers); sheet.addRows(rows); sheet.columns.forEach(c => { c.width = 24; }); sheet.getRow(1).font = { bold: true, color: { argb: "FFFFFFFF" }, name: "Arial", size: 11 }; sheet.getRow(1).fill = { type: "pattern", pattern: "solid", fgColor: { argb: "FF159C98" } }; sheet.getRow(1).height = 28; sheet.autoFilter = { from: { row: 1, column: 1 }, to: { row: 1, column: headers.length } }; return sheet; };
  if (type === "template") {
    const candidates = data.employees.filter(e => e.status !== "candidate" && !data.payrolls.some(p => p.employeeId === e.id && p.month === month && p.status === "paid")).slice(0, 10);
    addSheet("کارکرد ماهانه", ["code", "workDays", "overtimeHours", "fridayHours", "nightHours", "missionAllowance", "bonus", "deductions"], candidates.map(e => [e.code, 30, 20, 0, 0, 0, 1500000, 0]));
    addSheet("راهنما", ["ستون", "توضیح"], [["code", "کد پرسنلی"], ["workDays", "روز کارکرد: صفر تا ۳۱"], ["overtimeHours", "ساعات اضافه‌کاری: صفر تا ۲۰۰"], ["fridayHours", "ساعات جمعه‌کاری: صفر تا ۲۰۰"], ["nightHours", "ساعات شب‌کاری: صفر تا ۳۰۰"], ["missionAllowance", "حق مأموریت به تومان"], ["bonus", "مزایا به تومان"], ["deductions", "سایر کسورات به تومان"], ["ماه انتخابی", month], ["توجه", "حق تأهل، حق اولاد و کسر قسط مساعده به‌صورت خودکار از پرونده هر کارمند محاسبه می‌شود."], ["توجه", "فیش‌های پرداخت‌شده قابل بازنویسی نیستند."]]);
  } else if (type === "payroll") {
    addSheet("حقوق و دستمزد", ["کد پرسنلی", "نام", "ماه", "روز کارکرد", "حقوق پایه", "اضافه‌کاری", "جمعه‌کاری", "شب‌کاری", "حق مأموریت", "حق تأهل", "حق اولاد", "مزایا", "بیمه کارمند", "بیمه کارفرما", "مالیات", "سایر کسورات", "کسر قسط مساعده", "خالص پرداختی", "وضعیت"], data.payrolls.filter(p => p.month === month).map(p => { const e = data.employees.find(e => e.id === p.employeeId); return [e?.code || "", e?.name || "", p.month, p.workDays, p.baseSalary, p.overtimePay, p.fridayPay, p.nightPay, p.missionAllowance, p.maritalAllowance, p.childAllowance, p.bonus, p.insurance, p.employerInsurance, p.tax, p.deductions, p.advanceDeduction, p.netPay, p.status === "paid" ? "پرداخت شده" : "پیش‌نویس"]; }));
  } else {
    if (type === "employees" || type === "report") addSheet("کارکنان", ["کد پرسنلی", "نام", "واحد", "عنوان شغلی", "ایمیل", "تلفن", "وضعیت تأهل", "تعداد فرزندان", "شماره بیمه", "تاریخ استخدام", "وضعیت", "مانده مرخصی"], data.employees.map(e => [e.code, e.name, e.department, e.position, e.email, e.phone, maritalStatusLabels[e.maritalStatus] || e.maritalStatus, e.childrenCount, e.insuranceNumber, e.hireDate, e.status, e.leaveBalance]));
    if (type === "requests" || type === "report") addSheet("درخواست‌ها", ["نام کارمند", "نوع", "عنوان", "تاریخ شروع", "تاریخ پایان", "مبلغ", "تعداد", "نحوه کسر مساعده", "وضعیت"], data.requests.map(r => [data.employees.find(e => e.id === r.employeeId)?.name || "", requestLabels[r.type], r.title, r.startDate, r.endDate, r.amount, r.quantity, r.type === "advance" ? repaymentLabel(r.repaymentMonths) : "—", statusLabel(r)]));
  }
  if (!workbook.worksheets.length) return NextResponse.json({ error: "نوع خروجی نامعتبر است." }, { status: 400 });
  const buffer = await workbook.xlsx.writeBuffer();
  return new Response(new Uint8Array(buffer), { headers: { "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "Content-Disposition": `attachment; filename="aban-${type}-${month}.xlsx"`, "Cache-Control": "no-store" } });
}
