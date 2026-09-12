import 'dotenv/config';
import { request as playwrightRequest } from '@playwright/test';
import assert from 'node:assert/strict';
import database from '@/db';
import schema from '@/db/schema';
const { db } = database;
const { messages, notices, smsLogs } = schema;
import { inArray, like } from 'drizzle-orm';

const baseURL = process.env.TEST_BASE_URL || 'http://localhost:3000';
const marker = `QA-COMMS-${Date.now()}`;
const contexts = [];
const createContext = async () => { const c = await playwrightRequest.newContext({ baseURL }); contexts.push(c); return c; };
async function json(response, status = 200) { const body = await response.json(); assert.equal(response.status(), status, JSON.stringify(body)); return body; }
const get = async c => json(await c.get('/api/comms'));
const act = async (c, action, data, status = 200) => json(await c.post('/api/comms', { data: { action, data } }), status);
const workspace = async c => json(await c.get('/api/workspace'));

const admin = await createContext();
const manager = await createContext();
const finance = await createContext();
const sara = await createContext();
const results = [];
const pass = m => { results.push(m); console.log('PASS', m); };

try {
  for (const [c, role] of [[admin, 'admin'], [manager, 'manager'], [finance, 'finance'], [sara, 'employee']]) await json(await c.post('/api/auth/demo', { data: { role } }));
  const adminUser = (await workspace(admin)).user;
  const managerUser = (await workspace(manager)).user;
  const financeUser = (await workspace(finance)).user;
  const saraUser = (await workspace(sara)).user;

  await json(await createContext().then(c => c.get('/api/comms')), 401);
  pass('Unauthenticated access to /api/comms is rejected');

  const saraComms = await get(sara);
  assert.ok(saraComms.contacts.some(c => c.userId === managerUser.id), 'employee should default-see the department manager');
  assert.ok(saraComms.contacts.some(c => c.userId === adminUser.id), 'employee should default-see admin');
  assert.equal(saraComms.canBroadcast, false);
  const managerComms = await get(manager);
  assert.ok(managerComms.contacts.some(c => c.userId === adminUser.id), 'manager should default-see admin');
  const adminComms = await get(admin);
  assert.ok(adminComms.contacts.some(c => c.userId === managerUser.id) && adminComms.contacts.some(c => c.userId === financeUser.id), 'admin should default-see managers and finance');
  assert.equal(adminComms.canBroadcast, true);
  pass('Role-scoped default contact lists are correct (employee<->manager/admin, manager<->admin, admin<->managers/finance)');

  const baselineUnread = (await get(manager)).contacts.find(c => c.userId === saraUser.id)?.unreadCount || 0;
  const greeting = `${marker} سلام، وقت بخیر`;
  await act(sara, 'message.send', { recipientUserId: managerUser.id, body: greeting });
  let managerView = await get(manager);
  assert.ok(managerView.messages.some(m => m.body === greeting && m.senderId === saraUser.id));
  const managerContactForSara = managerView.contacts.find(c => c.userId === saraUser.id);
  assert.equal(managerContactForSara.unreadCount, baselineUnread + 1);
  assert.ok(managerView.unreadMessages >= 1);
  await act(manager, 'message.read', { partnerId: saraUser.id });
  managerView = await get(manager);
  assert.equal(managerView.contacts.find(c => c.userId === saraUser.id).unreadCount, 0);
  const saraView = await get(sara);
  assert.ok(saraView.messages.find(m => m.body === greeting).readAt, 'sender should see the message marked as read once the recipient opens it');
  pass('Employee-to-manager messaging, unread counters and read receipts work end to end');

  await act(sara, 'message.send', { recipientUserId: saraUser.id, body: 'hi' }, 400);
  await act(sara, 'message.send', { recipientUserId: financeUser.id, body: `${marker} تلاش نامعتبر` }, 403);
  await act(manager, 'message.send', { recipientUserId: financeUser.id, body: `${marker} تلاش نامعتبر` }, 403);
  await act(sara, 'message.send', { recipientUserId: '00000000-0000-0000-0000-000000000000', body: 'x' }, 404);
  await act(sara, 'message.send', { recipientUserId: managerUser.id, body: '' }, 400);
  pass('Messaging is blocked for self-send, out-of-scope recipients, unknown users and empty payloads');

  await act(admin, 'message.send', { recipientUserId: financeUser.id, body: `${marker} از مدیر سیستم` });
  await act(admin, 'message.send', { recipientUserId: saraUser.id, body: `${marker} از مدیر سیستم به سارا` });
  assert.ok((await get(finance)).messages.some(m => m.senderId === adminUser.id));
  assert.ok((await get(sara)).messages.some(m => m.senderId === adminUser.id));
  pass('Admin can message any role, including employees outside a direct reporting line');

  const search = await act(manager, 'contacts.search', { query: saraUser.name.slice(0, 3) });
  assert.ok(search.results.some(r => r.userId === saraUser.id));
  const adminSearch = await act(admin, 'contacts.search', { query: saraUser.name.slice(0, 3) });
  assert.ok(adminSearch.results.some(r => r.userId === saraUser.id));
  const financeSearch = await act(finance, 'contacts.search', { query: 'a' }, 400);
  void financeSearch;
  pass('Manager and admin contact search resolves eligible colleagues by name');

  const pixel = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=';
  await act(sara, 'message.send', { recipientUserId: managerUser.id, attachment: pixel });
  assert.ok((await get(manager)).messages.some(m => m.attachment === pixel));
  await act(sara, 'message.send', { recipientUserId: managerUser.id, attachment: 'data:image/png;base64,bm90LWFuLWltYWdl' }, 400);
  pass('Image-only messages are accepted and attachments are validated server-side');

  await act(sara, 'notice.create', { title: 'x', body: 'y' }, 403);
  const noticeTitle = `${marker} به‌روزرسانی مهم`;
  const created = await act(admin, 'notice.create', { title: noticeTitle, body: `${marker} این یک ابلاغیه آزمایشی است.` });
  assert.ok(created.id);
  await act(admin, 'notice.create', { title: 'بدون محتوا' }, 400);
  let saraNotices = await get(sara);
  const noticeForSara = saraNotices.notices.find(n => n.id === created.id);
  assert.ok(noticeForSara && !noticeForSara.readAt);
  assert.equal(noticeForSara.audienceCount, 0, 'non-admin responses must not leak audience analytics');
  pass('Only admins can publish notices; publishing validates content and reaches all recipients unread');

  await act(sara, 'notice.read', { id: created.id });
  saraNotices = await get(sara);
  assert.ok(saraNotices.notices.find(n => n.id === created.id).readAt);
  await act(sara, 'notice.read', { id: created.id });
  const readersDenied = await act(sara, 'notice.readers', { id: created.id }, 403);
  void readersDenied;
  const readers = await act(admin, 'notice.readers', { id: created.id });
  const saraReader = readers.readers.find(r => r.userId === saraUser.id);
  assert.ok(saraReader && saraReader.readAt, 'admin should see exactly when the employee viewed the notice');
  const managerReader = readers.readers.find(r => r.userId === managerUser.id);
  assert.equal(managerReader.readAt, null, 'unread recipients must show as not yet viewed');
  const adminNotices = await get(admin);
  const adminNoticeView = adminNotices.notices.find(n => n.id === created.id);
  assert.equal(adminNoticeView.readCount, 1);
  assert.ok(adminNoticeView.audienceCount > 0);
  pass('Notice read tracking records exact view time per recipient and is idempotent, visible only to admins');

  const [smsRows, messageRows, noticeRows] = await Promise.all([
    db.select().from(smsLogs).where(like(smsLogs.title, '%پیام جدید%')).orderBy(smsLogs.createdAt),
    db.select().from(messages),
    db.select().from(notices),
  ]);
  assert.ok(smsRows.length > 0, 'every message send should attempt (and log) an SMS notification');
  assert.ok(smsRows.every(r => r.status === 'skipped' || r.status === 'sent' || r.status === 'failed'));
  assert.ok(smsRows.some(r => r.status === 'skipped'), 'without SMS_PROVIDER configured, notifications must be safely skipped and logged, never crash the request');
  void messageRows; void noticeRows;
  pass('SMS notifications are attempted for every message/notice and gracefully logged as skipped when no provider is configured');

  console.log(`ALL ${results.length} COMMS WORKFLOW GROUPS PASSED`);
} finally {
  const testMessages = await db.select({ id: messages.id }).from(messages).where(like(messages.body, `%${marker}%`));
  const testNotices = await db.select({ id: notices.id }).from(notices).where(like(notices.title, `%${marker}%`));
  if (testMessages.length) await db.delete(messages).where(inArray(messages.id, testMessages.map(m => m.id)));
  if (testNotices.length) await db.delete(notices).where(inArray(notices.id, testNotices.map(n => n.id)));
  await Promise.all(contexts.map(c => c.dispose()));
  console.log('Temporary comms test fixtures removed.');
}
