import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { jobs, applicants, applicantNotes, resumeFiles, talentEvents } from "@/db/schema";
import { and, eq, gte } from "drizzle-orm";
import { ensureTalentSeed } from "@/lib/talent-seed";
import { checkOrigin } from "@/lib/auth";
import { todayISO } from "@/lib/types";
import * as v from "@/lib/talent-validation";
import { validateResume } from "@/lib/resume";
const limits = new Map<string, { count: number; expires: number }>();
export async function GET() { try { await ensureTalentSeed(); const rows = await db.select().from(jobs).where(and(eq(jobs.status, "open"), gte(jobs.deadline, todayISO()))); return NextResponse.json({ jobs: rows.map(({ hiringCost: _hiringCost, ...job }) => job) }, { headers: { "Cache-Control": "no-store" } }); } catch { return NextResponse.json({ error: "فرصت‌های شغلی موقتاً در دسترس نیستند." }, { status: 503 }); } }
export async function POST(request: NextRequest) {
  if (!checkOrigin(request)) return NextResponse.json({ error: "درخواست نامعتبر" }, { status: 403 });
  try {
    if (Number(request.headers.get("content-length")) > 3 * 1024 * 1024) v.fail("حجم فایل زیاد است.", 413);
    const key = request.headers.get("x-forwarded-for")?.split(",")[0] || "local"; const old = limits.get(key); const limit = old && old.expires > Date.now() ? old : { count: 0, expires: Date.now() + 3600000 }; if (limit.count >= 15) v.fail("تعداد ارسال‌ها زیاد است. ساعتی دیگر دوباره تلاش کنید.", 429); limit.count++; limits.set(key, limit); if (limits.size > 5000) for (const [k, item] of limits) if (item.expires < Date.now()) limits.delete(k);
    const form = await request.formData(); if (form.get("website")) v.fail("درخواست نامعتبر"); if (form.get("consent") !== "true") v.fail("رضایت به پردازش اطلاعات برای بررسی استخدام الزامی است.");
    const values = { jobId: v.id(form.get("jobId")), name: v.text(form.get("name"), "نام", 150), email: v.email(form.get("email")), phone: v.text(form.get("phone"), "تلفن", 30), skills: v.text(form.get("skills"), "مهارت‌ها", 2000, false), experience: v.number(form.get("experience") || 0, "سابقه", 0, 50), summary: v.text(form.get("summary"), "معرفی", 5000, false), source: "سایت مجموعه" };
    const file = await validateResume(form.get("file")); await ensureTalentSeed();
    const result = await db.transaction(async tx => { const [job] = await tx.select().from(jobs).where(eq(jobs.id, values.jobId)).for("update"); if (!job || job.status !== "open" || job.deadline < todayISO()) return v.fail("مهلت دریافت درخواست این فرصت پایان یافته است."); const [candidate] = await tx.insert(applicants).values(values).returning(); if (file) await tx.insert(resumeFiles).values({ ...file, applicantId: candidate.id }); await tx.insert(applicantNotes).values({ applicantId: candidate.id, actorName: "سامانه فرصت‌های همکاری", kind: "event", body: "درخواست از صفحه عمومی با رضایت متقاضی ثبت شد." }); await tx.insert(talentEvents).values({ module: "recruitment", title: `رزومه جدید برای ${job.title}`, actorName: "صفحه فرصت‌های همکاری" }); return candidate.id; });
    return NextResponse.json({ ok: true, trackingCode: result.slice(0, 8).toUpperCase(), message: "درخواست شما برای بررسی به تیم جذب رسید." });
  } catch (error) { if (error instanceof v.TalentError) return NextResponse.json({ error: error.message }, { status: error.status }); const e = error as { code?: string; cause?: { code?: string } }; return NextResponse.json({ error: (e.code || e.cause?.code) === "23505" ? "با این ایمیل برای این فرصت قبلاً درخواست ارسال شده است." : "ارسال درخواست انجام نشد. دوباره تلاش کنید." }, { status: (e.code || e.cause?.code) === "23505" ? 409 : 500 }); }
}
