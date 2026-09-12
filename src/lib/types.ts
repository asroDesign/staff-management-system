export type Role = "admin" | "manager" | "finance" | "employee";
export type Page = "dashboard" | "employees" | "recruitment" | "leave" | "tickets" | "advances" | "payroll" | "reports" | "settings" | "profile" | "talent" | "onboarding" | "learning" | "pulse" | "compensation" | "research" | "messages" | "notices";
export interface User { id: string; name: string; email: string; role: Role; employeeId: string | null }
export interface AmenityConfig { id: string; title: string; monthlyLimit: number }
export interface Employee { id: string; code: string; name: string; email: string; phone: string; nationalId: string; department: string; position: string; hireDate: string; birthDate: string; status: string; baseSalary: number; leaveBalance: number; avatar: string; maritalStatus: string; childrenCount: number; insuranceNumber: string; address: string; nationalIdFront: string; nationalIdBack: string; identityPages: string[]; otherDocuments: string[]; createdAt: string }
export interface Request { id: string; employeeId: string; type: string; title: string; description: string; startDate: string; endDate: string; month: string; amount: number; quantity: number; amenityId: string; repaymentMonths: number; paidMonth: string | null; stage: number; status: string; createdAt: string }
export interface Payroll { id: string; employeeId: string; month: string; workDays: number; baseSalary: number; overtimeHours: number; overtimePay: number; fridayHours: number; fridayPay: number; nightHours: number; nightPay: number; missionAllowance: number; maritalAllowance: number; childAllowance: number; bonus: number; insurance: number; employerInsurance: number; tax: number; deductions: number; advanceDeduction: number; netPay: number; status: string; createdAt: string }
export interface Settings { id: string; companyName: string; amenities: AmenityConfig[]; advanceLimit: number; leaveApprovalSteps: number; insurancePercent: number; employerInsurancePercent: number; taxPercent: number; taxExemption: number; maritalAllowance: number; childAllowance: number; maxChildrenAllowance: number }
export interface RequestEvent { id: string; requestId: string; actorName: string; action: string; note: string; createdAt: string }
export interface Workspace { user: User; employees: Employee[]; requests: Request[]; payrolls: Payroll[]; settings: Settings; events: RequestEvent[] }
export const departments = ["عملیات و نجات غریق", "اداری و منابع انسانی", "مالی و حسابداری", "فروش و پذیرش", "تأسیسات و نگهداری", "خدمات و پشتیبانی"];
export const roleLabels: Record<string, string> = { admin: "مدیر سیستم", manager: "مدیر واحد", finance: "مدیر مالی", employee: "کارمند" };
export const pageLabels: Record<Page, string> = { dashboard: "داشبورد", employees: "مدیریت کارکنان", recruitment: "جذب و استخدام", leave: "درخواست‌های مرخصی", tickets: "امکانات رفاهی", advances: "مساعده و تسهیلات", payroll: "حقوق و دستمزد", reports: "گزارش‌ها", settings: "تنظیمات سیستم", profile: "پروفایل من", talent: "رشد و تجربه کارکنان", onboarding: "آنبوردینگ و مسیر ورود", learning: "آکادمی آبان", pulse: "نبض سازمان", compensation: "دستیار تعیین حقوق", research: "گزارش بررسی و قابلیت‌ها", messages: "پیام‌ها", notices: "ابلاغیه‌ها" };
export const requestLabels: Record<string, string> = { leave: "مرخصی", ticket: "امکانات رفاهی", advance: "مساعده" };
export const maritalStatusLabels: Record<string, string> = { single: "مجرد", married: "متأهل" };
export const repaymentLabel = (months: number) => months <= 1 ? "یکجا از حقوق" : `طی ${fa(months)} ماه`;
export const fa = (n: number | string) => new Intl.NumberFormat("fa-IR").format(Number(n) || 0);
export const money = (n: number) => `${fa(n)} تومان`;
export const dateFa = (date: string | Date) => { try { return new Intl.DateTimeFormat("fa-IR", { year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(date)); } catch { return "—"; } };
export const todayISO = () => new Date().toISOString().slice(0, 10);
export function getPeriod(date = new Date()) { const parts = new Intl.DateTimeFormat("en-US-u-ca-persian", { year: "numeric", month: "2-digit" }).formatToParts(date); return `${parts.find(p => p.type === "year")?.value}-${parts.find(p => p.type === "month")?.value}`; }
export const persianMonths = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];
export function periodLabel(period: string) { const [year, month] = period.split("-"); return `${persianMonths[Number(month) - 1]} ${fa(year)}`; }
/** Adds `delta` Jalali months to a "YYYY-MM" period string, handling year rollover. */
export function periodAdd(period: string, delta: number) { const [y, m] = period.split("-").map(Number); const serial = y * 12 + (m - 1) + delta; return `${Math.floor(serial / 12)}-${String((serial % 12 + 12) % 12 + 1).padStart(2, "0")}`; }
export function statusLabel(request: Request) { if (request.status === "pending") return ["", "در انتظار مدیر واحد", "در انتظار منابع انسانی", "در انتظار پرداخت"][request.stage] || "در انتظار بررسی"; return ({ approved: "تأیید شده", rejected: "رد شده", paid: "پرداخت شده", cancelled: "لغو شده" } as Record<string, string>)[request.status] || request.status; }

/** Amount of a paid advance that is scheduled to be deducted in a given payroll month, based purely on the installment plan (no separate ledger table is needed since the schedule is fully deterministic). */
export function advanceInstallmentDue(request: Pick<Request, "type" | "status" | "amount" | "repaymentMonths" | "paidMonth">, month: string): number {
  if (request.type !== "advance" || request.status !== "paid" || !request.paidMonth) return 0;
  const months = Math.max(1, request.repaymentMonths || 1);
  const per = Math.ceil(request.amount / months);
  for (let i = 0; i < months; i++) { if (periodAdd(request.paidMonth, i) === month) return i === months - 1 ? request.amount - per * (months - 1) : per; }
  return 0;
}
export function advanceDeductionForMonth(requests: Request[], employeeId: string, month: string) { return requests.filter(r => r.employeeId === employeeId).reduce((sum, r) => sum + advanceInstallmentDue(r, month), 0); }
export function advanceBreakdownForMonth(requests: Request[], employeeId: string, month: string) { return requests.filter(r => r.employeeId === employeeId).map(r => ({ id: r.id, title: r.title, amount: advanceInstallmentDue(r, month) })).filter(r => r.amount > 0); }

export interface PayrollCalcInput { baseSalary: number; days: number; overtimeHours: number; fridayHours: number; nightHours: number; missionAllowance: number; bonus: number; deductions: number; advanceDeduction: number; maritalStatus: string; childrenCount: number }
export interface PayrollCalcConfig { insurancePercent: number; employerInsurancePercent: number; taxPercent: number; taxExemption: number; maritalAllowance: number; childAllowance: number; maxChildrenAllowance: number }
export function calculatePayroll(input: PayrollCalcInput, config: PayrollCalcConfig) {
  const hourly = input.baseSalary / 220;
  const earned = Math.round(input.baseSalary * input.days / 30);
  const overtimePay = Math.round(hourly * 1.4 * input.overtimeHours);
  const fridayPay = Math.round(hourly * 1.4 * input.fridayHours);
  const nightPay = Math.round(hourly * 1.35 * input.nightHours);
  const missionAllowance = Math.max(0, input.missionAllowance);
  const maritalAllowance = input.maritalStatus === "married" ? config.maritalAllowance : 0;
  const childAllowance = config.childAllowance * Math.min(Math.max(0, input.childrenCount), config.maxChildrenAllowance);
  const gross = earned + overtimePay + fridayPay + nightPay + missionAllowance + input.bonus + maritalAllowance + childAllowance;
  const insuranceBase = earned + maritalAllowance + childAllowance;
  const insurance = Math.round(insuranceBase * config.insurancePercent / 100);
  const employerInsurance = Math.round(insuranceBase * config.employerInsurancePercent / 100);
  const tax = Math.round(Math.max(0, gross - config.taxExemption) * config.taxPercent / 100);
  const advanceDeduction = Math.max(0, input.advanceDeduction);
  const netPay = Math.max(0, gross - insurance - tax - input.deductions - advanceDeduction);
  return { baseSalary: earned, overtimePay, fridayPay, nightPay, missionAllowance, maritalAllowance, childAllowance, insurance, employerInsurance, tax, advanceDeduction, netPay };
}
