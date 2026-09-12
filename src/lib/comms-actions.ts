import { and, eq, isNull, ne, or, sql } from "drizzle-orm";
import { db } from "@/db";
import { employees, users, messages, notices, noticeReads } from "@/db/schema";
import type { User } from "@/lib/types";
import { dataImage } from "@/lib/image-validate";
import { sendSms, sendSmsToMany } from "@/lib/sms";
import { roleShortLabels, type NoticeReader } from "@/lib/comms-types";

export class CommsError extends Error { constructor(message: string, public status = 400) { super(message); } }
function fail(message: string, status = 400): never { throw new CommsError(message, status); }
function text(value: unknown, label: string, required = true, max = 4000) { const s = String(value ?? "").trim(); if ((required && !s) || s.length > max) fail(`${label} را به‌درستی وارد کنید.`); return s; }
function id(value: unknown, label = "شناسه") { const s = String(value || ""); if (!/^[a-f\d]{8}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{4}-[a-f\d]{12}$/i.test(s)) fail(`${label} معتبر نیست.`); return s; }
/** Case-insensitive partial match, used for the small role-scoped contact search. */
const likeMatch = (column: unknown, query: string) => sql<boolean>`lower(${column}) like ${"%" + query + "%"}`;

async function actorDepartment(employeeId: string | null): Promise<string | null> {
  if (!employeeId) return null;
  const [row] = await db.select({ department: employees.department }).from(employees).where(eq(employees.id, employeeId));
  return row?.department || null;
}

/** Enforces who may message whom: employee<->their department manager, and anyone<->admin. Admins may reach any user with an account. */
async function assertEligibleTarget(actor: User, targetUserId: string): Promise<{ name: string; phone: string }> {
  const [target] = await db.select({ id: users.id, name: users.name, role: users.role, employeeId: users.employeeId }).from(users).where(eq(users.id, targetUserId));
  if (!target) fail("گیرنده پیدا نشد.", 404);
  if (target.id === actor.id) fail("امکان ارسال پیام به خودتان وجود ندارد.");
  const targetEmployee = target.employeeId ? (await db.select({ department: employees.department, phone: employees.phone }).from(employees).where(eq(employees.id, target.employeeId)))[0] : undefined;
  if (actor.role === "admin" || target.role === "admin") return { name: target.name, phone: targetEmployee?.phone || "" };
  const department = await actorDepartment(actor.employeeId);
  if (actor.role === "manager" && target.role === "employee" && targetEmployee?.department === department) return { name: target.name, phone: targetEmployee.phone };
  if (actor.role === "employee" && target.role === "manager" && targetEmployee?.department === department) return { name: target.name, phone: targetEmployee.phone };
  fail("امکان ارسال پیام به این کاربر را ندارید.", 403);
}

export async function commsAction(user: User, action: string, data: Record<string, unknown>): Promise<Record<string, unknown>> {
  if (action === "message.send") {
    const recipientId = id(data.recipientUserId, "گیرنده");
    const body = text(data.body, "متن پیام", false, 4000);
    const attachment = data.attachment ? dataImage(data.attachment, "تصویر پیوست") : "";
    if (!body && !attachment) fail("متن پیام یا تصویر پیوست را وارد کنید.");
    const target = await assertEligibleTarget(user, recipientId);
    await db.insert(messages).values({ senderId: user.id, recipientId, body, attachment });
    if (target.phone) void sendSms(target.phone, "پیام جدید", `${user.name}: ${body ? body.slice(0, 120) : "یک تصویر برای شما ارسال کرد."}`);
    return { ok: true };
  }
  if (action === "message.read") {
    const partnerId = id(data.partnerId, "طرف مکاتبه");
    await db.update(messages).set({ readAt: new Date() }).where(and(eq(messages.senderId, partnerId), eq(messages.recipientId, user.id), isNull(messages.readAt)));
    return { ok: true };
  }
  if (action === "contacts.search") {
    const query = text(data.query, "عبارت جستجو", true, 100).toLowerCase();
    if (query.length < 2) fail("حداقل ۲ نویسه برای جستجو وارد کنید.");
    const department = await actorDepartment(user.employeeId);
    if (user.role === "admin") {
      const rows = await db.select({ userId: users.id, name: users.name, role: users.role, code: employees.code, department: employees.department, avatar: employees.avatar }).from(users).leftJoin(employees, eq(users.employeeId, employees.id)).where(and(ne(users.id, user.id), or(likeMatch(users.name, query), likeMatch(employees.code, query)))).limit(20);
      return { ok: true, results: rows };
    }
    if (user.role === "manager" && department) {
      const rows = await db.select({ userId: users.id, name: users.name, role: users.role, code: employees.code, department: employees.department, avatar: employees.avatar }).from(users).innerJoin(employees, eq(users.employeeId, employees.id)).where(and(eq(users.role, "employee"), eq(employees.department, department), or(likeMatch(users.name, query), likeMatch(employees.code, query)))).limit(20);
      return { ok: true, results: rows };
    }
    return { ok: true, results: [] };
  }
  if (action === "notice.create") {
    if (user.role !== "admin") fail("فقط مدیر سیستم می‌تواند ابلاغیه ثبت کند.", 403);
    const title = text(data.title, "عنوان ابلاغیه", true, 200);
    const body = text(data.body, "متن ابلاغیه", false, 6000);
    const image = data.image ? dataImage(data.image, "تصویر ابلاغیه", 3_500_000) : "";
    if (!body && !image) fail("متن ابلاغیه یا تصویر آن را وارد کنید.");
    const [saved] = await db.insert(notices).values({ title, body, image, createdBy: user.name }).returning();
    const recipients = await db.select({ phone: employees.phone }).from(users).innerJoin(employees, eq(users.employeeId, employees.id)).where(ne(users.id, user.id));
    const phones = recipients.map(r => r.phone).filter(Boolean);
    if (phones.length) void sendSmsToMany(phones.map(phone => ({ phone })), "ابلاغیه جدید", `${title} — برای مشاهده کامل وارد پنل آبان شوید.`);
    return { ok: true, id: saved.id };
  }
  if (action === "notice.read") {
    const noticeId = id(data.id, "ابلاغیه");
    await db.insert(noticeReads).values({ noticeId, userId: user.id }).onConflictDoNothing();
    return { ok: true };
  }
  if (action === "notice.readers") {
    if (user.role !== "admin") fail("فقط مدیر سیستم به فهرست مشاهده‌کنندگان دسترسی دارد.", 403);
    const noticeId = id(data.id, "ابلاغیه");
    const [notice] = await db.select().from(notices).where(eq(notices.id, noticeId));
    if (!notice) fail("ابلاغیه پیدا نشد.", 404);
    const allUsers = await db.select({ userId: users.id, name: users.name, role: users.role, department: employees.department }).from(users).leftJoin(employees, eq(users.employeeId, employees.id)).where(ne(users.id, user.id)).orderBy(users.name);
    const reads = await db.select().from(noticeReads).where(eq(noticeReads.noticeId, noticeId));
    const readByUser = new Map(reads.map(r => [r.userId, r.readAt]));
    const readers: NoticeReader[] = allUsers.map(u => ({ userId: u.userId, name: u.name, role: roleShortLabels[u.role] || u.role, department: u.department || "", readAt: readByUser.get(u.userId)?.toISOString() || null }));
    readers.sort((a, b) => { if (!!a.readAt === !!b.readAt) return Date.parse(b.readAt || "0") - Date.parse(a.readAt || "0"); return a.readAt ? -1 : 1; });
    return { ok: true, readers, readCount: reads.length, audienceCount: allUsers.length };
  }
  fail("عملیات ناشناخته است.", 404);
}
