import { db } from "@/db";
import { smsLogs } from "@/db/schema";

// Best-effort transactional SMS delivery for in-app notifications, using the
// "pattern" (template/lookup) method of Kavenegar or SMS.ir so no raw
// marketing line is required. Every call is logged to `sms_logs` for
// visibility, and this module NEVER throws — a missing/invalid provider
// configuration must not break the feature that triggered the notification.

function normalizePhone(phone: string): string {
  const digits = String(phone || "").replace(/[^\d]/g, "");
  if (!digits) return "";
  if (digits.startsWith("0")) return digits;
  if (digits.startsWith("98")) return `0${digits.slice(2)}`;
  if (digits.startsWith("9") && digits.length === 10) return `0${digits}`;
  return digits;
}

interface ProviderResult { ok: boolean; error?: string }

async function sendViaKavenegar(phone: string, title: string, message: string): Promise<ProviderResult> {
  const apiKey = process.env.KAVENEGAR_API_KEY;
  const template = process.env.KAVENEGAR_TEMPLATE;
  if (!apiKey || !template) return { ok: false, error: "KAVENEGAR_API_KEY یا KAVENEGAR_TEMPLATE تنظیم نشده است." };
  try {
    const body = new URLSearchParams({ receptor: phone, token: title.slice(0, 100), token2: message.slice(0, 150), template });
    const response = await fetch(`https://api.kavenegar.com/v1/${encodeURIComponent(apiKey)}/verify/lookup.json`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(10000),
    });
    const payload = await response.json().catch(() => null) as { return?: { status?: number; message?: string } } | null;
    if (!response.ok || payload?.return?.status !== 200) return { ok: false, error: (payload?.return?.message || `HTTP ${response.status}`).slice(0, 300) };
    return { ok: true };
  } catch (error) { return { ok: false, error: error instanceof Error ? error.message.slice(0, 300) : "خطای ناشناخته در ارسال با کاوه‌نگار" }; }
}

async function sendViaSmsIr(phone: string, title: string, message: string): Promise<ProviderResult> {
  const apiKey = process.env.SMSIR_API_KEY;
  const templateId = Number(process.env.SMSIR_TEMPLATE_ID);
  if (!apiKey || !Number.isFinite(templateId)) return { ok: false, error: "SMSIR_API_KEY یا SMSIR_TEMPLATE_ID تنظیم نشده است." };
  const titleParam = process.env.SMSIR_PARAM_TITLE || "TITLE";
  const messageParam = process.env.SMSIR_PARAM_MESSAGE || "MESSAGE";
  try {
    const response = await fetch("https://api.sms.ir/v1/send/verify", {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "text/plain", "x-api-key": apiKey },
      body: JSON.stringify({ mobile: phone, templateId, parameters: [{ name: titleParam, value: title.slice(0, 100) }, { name: messageParam, value: message.slice(0, 150) }] }),
      signal: AbortSignal.timeout(10000),
    });
    const raw = await response.text();
    let payload: { status?: number; message?: string } | null = null;
    try { payload = JSON.parse(raw); } catch { /* SMS.ir may reply with plain text on failure */ }
    if (!response.ok || (payload?.status && payload.status !== 1 && payload.status !== 100)) return { ok: false, error: (payload?.message || raw || `HTTP ${response.status}`).slice(0, 300) };
    return { ok: true };
  } catch (error) { return { ok: false, error: error instanceof Error ? error.message.slice(0, 300) : "خطای ناشناخته در ارسال با SMS.ir" }; }
}

async function log(phone: string, title: string, body: string, provider: string, status: string, error: string) {
  try { await db.insert(smsLogs).values({ phone, title: title.slice(0, 250), body: body.slice(0, 2000), provider, status, error: error.slice(0, 500) }); }
  catch (dbError) { console.error("Failed to write sms_logs entry", dbError); }
}

/** Sends a single pattern-based notification SMS. Always resolves; never throws. */
export async function sendSms(phone: string, title: string, message: string): Promise<void> {
  const cleanPhone = normalizePhone(phone);
  const provider = (process.env.SMS_PROVIDER || "").trim().toLowerCase();
  if (!cleanPhone) { await log(phone || "", title, message, provider || "disabled", "skipped", "شماره تماس معتبر نیست."); return; }
  if (!provider) { await log(cleanPhone, title, message, "disabled", "skipped", "هیچ سرویس‌دهنده پیامکی در تنظیمات محیطی فعال نشده است."); return; }
  try {
    const result = provider === "kavenegar" ? await sendViaKavenegar(cleanPhone, title, message)
      : provider === "sms.ir" || provider === "smsir" ? await sendViaSmsIr(cleanPhone, title, message)
      : { ok: false, error: `سرویس‌دهنده «${provider}» پشتیبانی نمی‌شود.` };
    await log(cleanPhone, title, message, provider, result.ok ? "sent" : "failed", result.error || "");
  } catch (error) { await log(cleanPhone, title, message, provider, "failed", error instanceof Error ? error.message : "خطای ناشناخته"); }
}

/** Fire-and-forget bulk notification with bounded concurrency (used for company-wide notices and payroll payment runs). */
export async function sendSmsToMany(recipients: { phone: string }[], title: string, message: string, concurrency = 15): Promise<void> {
  const queue = recipients.filter(r => r.phone).slice(0, 5000);
  let index = 0;
  async function worker() { while (index < queue.length) { const current = queue[index++]; await sendSms(current.phone, title, message); } }
  await Promise.all(Array.from({ length: Math.min(concurrency, Math.max(1, queue.length)) }, worker));
}
