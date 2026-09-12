import { departments } from "@/lib/types";
export class TalentError extends Error { constructor(message: string, public status = 400) { super(message); } }
export const fail = (message: string, status = 400): never => { throw new TalentError(message, status); };
export function text(value: unknown, label: string, max = 2000, required = true) { const s = String(value ?? "").trim(); if ((required && !s) || s.length > max) fail(`${label} را به‌درستی وارد کنید.`); return s; }
export function number(value: unknown, label: string, min = 0, max = 1000000000) { const n = Number(value); if (!Number.isSafeInteger(n) || n < min || n > max) fail(`${label} خارج از محدوده مجاز است.`); return n; }
export function id(value: unknown) { const s = String(value || ""); if (!/^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i.test(s)) fail("شناسه معتبر نیست."); return s; }
export function choice(value: unknown, choices: string[], label: string) { const s = String(value); if (!choices.includes(s)) fail(`${label} معتبر نیست.`); return s; }
export function department(value: unknown, all = false) { return choice(value, [...departments, ...(all ? ["all"] : [])], "واحد سازمانی"); }
export function date(value: unknown) { const s = String(value || ""); if (!/^\d{4}-\d{2}-\d{2}$/.test(s) || !Number.isFinite(Date.parse(s)) || new Date(s).toISOString().slice(0, 10) !== s) fail("تاریخ معتبر وارد کنید."); return s; }
export function email(value: unknown) { const s = text(value, "ایمیل", 254).toLowerCase(); if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)) fail("ایمیل معتبر نیست."); return s; }
export function safeUrl(value: unknown) { const s = text(value, "نشانی محتوا", 1500, false); if (!s) return ""; try { const u = new URL(s); if (!["https:", "http:"].includes(u.protocol)) fail("فقط پیوند وب معتبر مجاز است."); return u.toString(); } catch { return fail("نشانی وب معتبر نیست."); } }
export function array(value: unknown, label: string, min = 1, max = 30): Record<string, unknown>[] { if (!Array.isArray(value) || value.length < min || value.length > max || value.some(v => !v || typeof v !== "object" || Array.isArray(v))) fail(`${label} باید بین ${min} تا ${max} مورد داشته باشد.`); return value as Record<string, unknown>[]; }
export function uniqueIds(rows: { id: string }[]) { if (new Set(rows.map(r => r.id)).size !== rows.length) fail("شناسه سؤال یا درس تکراری است."); }
