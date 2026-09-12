import { db } from "@/db";
import { employees, users, messages, notices, noticeReads } from "@/db/schema";
import { and, desc, eq, inArray, or, sql } from "drizzle-orm";
import type { User } from "@/lib/types";
import type { CommsData, Contact } from "@/lib/comms-types";

async function actorDepartment(userId: string | null): Promise<string | null> {
  if (!userId) return null;
  const [row] = await db.select({ department: employees.department }).from(employees).where(eq(employees.id, userId));
  return row?.department || null;
}

/** Default (pinned) contact user ids visible even before any message has been exchanged. */
async function defaultContactIds(user: User, department: string | null): Promise<string[]> {
  if (user.role === "admin") {
    const rows = await db.select({ id: users.id }).from(users).where(inArray(users.role, ["manager", "finance"]));
    return rows.map(r => r.id);
  }
  if (user.role === "manager" || user.role === "finance") {
    const rows = await db.select({ id: users.id }).from(users).where(eq(users.role, "admin"));
    return rows.map(r => r.id);
  }
  // employee: their department's manager(s) plus every admin
  const managerRows = department ? await db.select({ id: users.id }).from(users).innerJoin(employees, eq(users.employeeId, employees.id)).where(and(eq(users.role, "manager"), eq(employees.department, department))) : [];
  const adminRows = await db.select({ id: users.id }).from(users).where(eq(users.role, "admin"));
  return [...managerRows.map(r => r.id), ...adminRows.map(r => r.id)];
}

export async function getCommsData(user: User): Promise<CommsData> {
  const department = await actorDepartment(user.employeeId);
  const [defaults, involvedMessages] = await Promise.all([
    defaultContactIds(user, department),
    db.select().from(messages).where(or(eq(messages.senderId, user.id), eq(messages.recipientId, user.id))).orderBy(desc(messages.createdAt)).limit(600),
  ]);
  const partnerIds = new Set<string>(defaults);
  for (const m of involvedMessages) partnerIds.add(m.senderId === user.id ? m.recipientId : m.senderId);
  partnerIds.delete(user.id);

  const partnerRows = partnerIds.size ? await db.select({ id: users.id, name: users.name, role: users.role, employeeId: users.employeeId }).from(users).where(inArray(users.id, [...partnerIds])) : [];
  const employeeIds = partnerRows.map(p => p.employeeId).filter((id): id is string => !!id);
  const employeeRows = employeeIds.length ? await db.select({ id: employees.id, department: employees.department, avatar: employees.avatar }).from(employees).where(inArray(employees.id, employeeIds)) : [];
  const employeeById = new Map(employeeRows.map(e => [e.id, e]));

  const contacts: Contact[] = partnerRows.map(p => {
    const relevant = involvedMessages.filter(m => m.senderId === p.id || m.recipientId === p.id);
    const last = relevant[0];
    const unreadCount = relevant.filter(m => m.senderId === p.id && m.recipientId === user.id && !m.readAt).length;
    const emp = p.employeeId ? employeeById.get(p.employeeId) : undefined;
    return { userId: p.id, employeeId: p.employeeId, name: p.name, role: p.role, department: emp?.department || "", avatar: emp?.avatar || "", lastMessageAt: last ? last.createdAt.toISOString() : null, lastMessageBody: last?.body || "", lastMessageMine: last ? last.senderId === user.id : false, unreadCount };
  }).sort((a, b) => (b.unreadCount - a.unreadCount) || ((b.lastMessageAt ? Date.parse(b.lastMessageAt) : 0) - (a.lastMessageAt ? Date.parse(a.lastMessageAt) : 0)));

  const unreadMessages = involvedMessages.filter(m => m.recipientId === user.id && !m.readAt).length;

  const [noticeRows, myReads] = await Promise.all([
    db.select().from(notices).orderBy(desc(notices.createdAt)).limit(100),
    db.select().from(noticeReads).where(eq(noticeReads.userId, user.id)),
  ]);
  const myReadByNotice = new Map(myReads.map(r => [r.noticeId, r.readAt]));
  let audienceCount = 0;
  const canBroadcast = user.role === "admin";
  let readCounts = new Map<string, number>();
  if (canBroadcast && noticeRows.length) {
    const [{ count: totalUsers } = { count: 0 }] = await db.select({ count: sql<number>`count(*)::int` }).from(users);
    audienceCount = Number(totalUsers) || 0;
    const counts = await db.select({ noticeId: noticeReads.noticeId, count: sql<number>`count(*)::int` }).from(noticeReads).where(inArray(noticeReads.noticeId, noticeRows.map(n => n.id))).groupBy(noticeReads.noticeId);
    readCounts = new Map(counts.map(c => [c.noticeId, Number(c.count)]));
  }
  const noticeList = noticeRows.map(n => ({ id: n.id, title: n.title, body: n.body, image: n.image, createdBy: n.createdBy, createdAt: n.createdAt.toISOString(), readAt: myReadByNotice.get(n.id)?.toISOString() || null, readCount: readCounts.get(n.id) || 0, audienceCount }));
  const unreadNotices = noticeList.filter(n => !n.readAt).length;

  const messageList = involvedMessages.map(m => ({ id: m.id, senderId: m.senderId, recipientId: m.recipientId, body: m.body, attachment: m.attachment, createdAt: m.createdAt.toISOString(), readAt: m.readAt ? m.readAt.toISOString() : null }));
  return { contacts, messages: messageList, notices: noticeList, canBroadcast, unreadMessages, unreadNotices };
}
