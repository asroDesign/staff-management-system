import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { createSession, destroySession, getSession, verifyPassword, checkOrigin } from "@/lib/auth";
import { ensureSeed } from "@/lib/seed";

export const dynamic = "force-dynamic";
const attempts = new Map<string, { count: number; reset: number }>();
const respond = (body: Record<string, unknown>, status = 200) => NextResponse.json(body, {
  status,
  headers: { "Cache-Control": "private, no-store", ...(status === 503 ? { "Retry-After": "2" } : {}) },
});

function unavailable(error: unknown) {
  const detail = error as { name?: string; code?: string; cause?: { code?: string } };
  console.error("Aban authentication unavailable", { name: detail?.name, code: detail?.cause?.code || detail?.code });
  return respond({ error: "سرویس ورود موقتاً در دسترس نیست. چند لحظه دیگر دوباره تلاش کنید.", code: "AUTH_UNAVAILABLE" }, 503);
}

export async function POST(request: NextRequest, context: { params: Promise<{ action: string }> }) {
  if (!checkOrigin(request)) return respond({ error: "مبدأ درخواست معتبر نیست. صفحه آبان را دوباره باز کنید.", code: "INVALID_ORIGIN" }, 403);
  try {
    const { action } = await context.params;
    if (action === "logout") { await destroySession(); return respond({ ok: true }); }
    if (!["demo", "login"].includes(action)) return respond({ error: "مسیر نامعتبر", code: "NOT_FOUND" }, 404);
    if (action === "demo" && process.env.ENABLE_DEMO_ACCESS === "false") {
      return respond({ error: "ورود نمایشی غیرفعال است. با حساب سازمانی خود وارد شوید.", code: "DEMO_ACCESS_DISABLED" }, 403);
    }
    const body = await request.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) return respond({ error: "اطلاعات ورود معتبر نیست.", code: "INVALID_INPUT" }, 400);
    await ensureSeed();

    if (action === "demo") {
      const roleEmails: Record<string, string> = { admin: "admin@aban.ir", employee: "sara@aban.ir", finance: "finance@aban.ir", manager: "manager@aban.ir" };
      const email = roleEmails[String(body.role || "admin")];
      if (!email) return respond({ error: "نقش نامعتبر است", code: "INVALID_ROLE" }, 400);
      const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
      if (!user) return respond({ error: "حساب نمایشی در دسترس نیست", code: "DEMO_UNAVAILABLE" }, 404);
      await destroySession();
      await createSession(user.id);
      return respond({ ok: true });
    }

    const email = String(body.email || "").trim().toLowerCase();
    const password = String(body.password || "");
    if (email.length > 254 || password.length > 1024) return respond({ error: "اطلاعات ورود معتبر نیست.", code: "INVALID_INPUT" }, 400);
    const key = `${request.headers.get("x-forwarded-for") || "local"}:${email}`;
    const previous = attempts.get(key);
    const entry = previous && previous.reset > Date.now() ? previous : { count: 0, reset: Date.now() + 900000 };
    if (entry.count >= 10) return respond({ error: "تلاش‌های ورود بیش از حد مجاز است. ۱۵ دقیقه بعد تلاش کنید.", code: "RATE_LIMITED" }, 429);
    entry.count++;
    attempts.set(key, entry);
    const [user] = await db.select().from(users).where(eq(users.email, email)).limit(1);
    if (!user || !verifyPassword(password, user.passwordHash)) return respond({ error: "ایمیل یا رمز عبور صحیح نیست.", code: "INVALID_CREDENTIALS" }, 401);
    attempts.delete(key);
    await destroySession();
    await createSession(user.id);
    return respond({ ok: true });
  } catch (error) { return unavailable(error); }
}

export async function GET() {
  try { return respond({ user: await getSession() }); }
  catch (error) { return unavailable(error); }
}
