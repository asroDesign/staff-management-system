import { randomBytes, scryptSync, timingSafeEqual, createHash } from "node:crypto";
import { cookies, headers } from "next/headers";
import { and, eq, gt, inArray } from "drizzle-orm";
import { db } from "@/db";
import { sessions, users } from "@/db/schema";
import type { User, Role } from "@/lib/types";

const SECURE_SESSION_COOKIE = "__Host-aban_session";
const LOCAL_SESSION_COOKIE = "aban_session";
const SESSION_SECONDS = 7 * 24 * 60 * 60;

export function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  return `${salt}:${scryptSync(password, salt, 64).toString("hex")}`;
}

export function verifyPassword(password: string, stored: string) {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const candidate = scryptSync(password, salt, 64);
  const expected = Buffer.from(hash, "hex");
  return candidate.length === expected.length && timingSafeEqual(candidate, expected);
}

const tokenHash = (token: string) => createHash("sha256").update(token).digest("hex");
const firstHeaderValue = (value: string | null) => value?.split(",")[0]?.trim().toLowerCase() || "";

async function sessionCookieOptions() {
  const h = await headers();
  const protocol = firstHeaderValue(h.get("x-forwarded-proto"));
  const trustedHosts = [h.get("x-forwarded-host"), h.get("host")].map(firstHeaderValue).filter(Boolean);
  const host = trustedHosts[0] || "";
  const local = /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(host);
  let secureOrigin = false;
  try {
    const origin = new URL(h.get("origin") || h.get("referer") || "");
    secureOrigin = origin.protocol === "https:" && trustedHosts.includes(origin.host.toLowerCase());
  } catch { /* Non-browser API requests may not carry an Origin. */ }
  // TLS may terminate at an outer proxy whose inner hop reports HTTP. The
  // already-validated browser Origin still identifies the public HTTPS scheme.
  const secure = protocol === "https" || secureOrigin || (!local && process.env.NODE_ENV === "production");

  // A Lax cookie is not sent by a cross-site preview iframe. CHIPS keeps the
  // HTTPS session isolated to its embedding site without exposing the token to JS.
  return {
    httpOnly: true,
    secure,
    sameSite: secure ? "none" as const : "lax" as const,
    partitioned: secure,
    path: "/",
    priority: "high" as const,
  };
}

export async function createSession(userId: string) {
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + SESSION_SECONDS * 1000);
  await db.insert(sessions).values({ tokenHash: tokenHash(token), userId, expiresAt });
  const options = await sessionCookieOptions();
  (await cookies()).set(options.secure ? SECURE_SESSION_COOKIE : LOCAL_SESSION_COOKIE, token, {
    ...options,
    expires: expiresAt,
    maxAge: SESSION_SECONDS,
  });
}

export async function getSession(): Promise<User | null> {
  const jar = await cookies();
  const token = jar.get(SECURE_SESSION_COOKIE)?.value || jar.get(LOCAL_SESSION_COOKIE)?.value;
  if (!token || !/^[a-f0-9]{64}$/.test(token)) return null;
  const [result] = await db.select({
    id: users.id,
    name: users.name,
    email: users.email,
    role: users.role,
    employeeId: users.employeeId,
  }).from(sessions).innerJoin(users, eq(sessions.userId, users.id))
    .where(and(eq(sessions.tokenHash, tokenHash(token)), gt(sessions.expiresAt, new Date())))
    .limit(1);
  return result ? { ...result, role: result.role as Role } : null;
}

export async function destroySession() {
  const jar = await cookies();
  const tokens = [...jar.getAll(SECURE_SESSION_COOKIE), ...jar.getAll(LOCAL_SESSION_COOKIE)]
    .map(cookie => cookie.value).filter(value => /^[a-f0-9]{64}$/.test(value));
  if (tokens.length) await db.delete(sessions).where(inArray(sessions.tokenHash, [...new Set(tokens.map(tokenHash))]));
  const options = await sessionCookieOptions();

  // Expiration must use the same partition and path as creation. A plain
  // cookies().delete() does not remove an HTTPS partitioned session.
  if (options.secure) jar.set(SECURE_SESSION_COOKIE, "", { ...options, maxAge: 0, expires: new Date(0) });
  jar.set(LOCAL_SESSION_COOKIE, "", {
    httpOnly: true,
    secure: options.secure,
    sameSite: "lax",
    path: "/",
    maxAge: 0,
    expires: new Date(0),
  });
}

export function checkOrigin(request: globalThis.Request) {
  const origin = request.headers.get("origin");
  if (!origin) return request.headers.get("sec-fetch-site") !== "cross-site";
  try {
    const source = new URL(origin);
    if (!["http:", "https:"].includes(source.protocol)) return false;
    const hosts = [request.headers.get("host"), request.headers.get("x-forwarded-host"), new URL(request.url).host]
      .map(firstHeaderValue).filter(Boolean);
    return hosts.includes(source.host.toLowerCase());
  } catch { return false; }
}
