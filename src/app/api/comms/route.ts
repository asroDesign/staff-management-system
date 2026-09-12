import { NextRequest, NextResponse } from "next/server";
import { getSession, checkOrigin } from "@/lib/auth";
import { ensureCommsSeed } from "@/lib/comms-seed";
import { getCommsData } from "@/lib/comms-data";
import { commsAction, CommsError } from "@/lib/comms-actions";

export const dynamic = "force-dynamic";

function errorResponse(error: unknown) {
  if (error instanceof CommsError) return NextResponse.json({ error: error.message }, { status: error.status });
  const e = error as { code?: string; cause?: { code?: string } };
  console.error("Comms API error", { code: e.cause?.code || e.code });
  return NextResponse.json({ error: "عملیات انجام نشد. دوباره تلاش کنید." }, { status: 500 });
}

export async function GET() {
  try {
    const user = await getSession();
    if (!user) return NextResponse.json({ error: "ورود به حساب لازم است." }, { status: 401 });
    await ensureCommsSeed();
    return NextResponse.json(await getCommsData(user), { headers: { "Cache-Control": "private, no-store" } });
  } catch (error) { return errorResponse(error); }
}

export async function POST(request: NextRequest) {
  if (!checkOrigin(request)) return NextResponse.json({ error: "مبدأ درخواست معتبر نیست." }, { status: 403 });
  if (Number(request.headers.get("content-length")) > 5 * 1024 * 1024) return NextResponse.json({ error: "حجم درخواست بیش از حد مجاز است." }, { status: 413 });
  try {
    const user = await getSession();
    if (!user) return NextResponse.json({ error: "ورود به حساب لازم است." }, { status: 401 });
    const body = await request.json().catch(() => null);
    if (!body || typeof body.action !== "string" || !body.data || typeof body.data !== "object" || Array.isArray(body.data)) return NextResponse.json({ error: "ورودی نامعتبر است." }, { status: 400 });
    await ensureCommsSeed();
    return NextResponse.json(await commsAction(user, body.action, body.data));
  } catch (error) { return errorResponse(error); }
}
