import { sql, eq } from "drizzle-orm";
import { db } from "@/db";
import { employees, users, messages, notices, noticeReads, talentVersions } from "@/db/schema";
import { ensureSeed } from "@/lib/seed";

let preparing: Promise<void> | undefined;
export function ensureCommsSeed() { return preparing ||= seed().catch(error => { preparing = undefined; throw error; }); }

async function seed() {
  await ensureSeed();
  await db.transaction(async tx => {
    await tx.execute(sql`select pg_advisory_xact_lock(827403)`);
    if ((await tx.select().from(talentVersions).where(eq(talentVersions.key, "comms-v1"))).length) return;
    const [admin] = await tx.select().from(users).where(eq(users.email, "admin@aban.ir"));
    const [manager] = await tx.select().from(users).where(eq(users.email, "manager@aban.ir"));
    const [sara] = await tx.select().from(users).where(eq(users.email, "sara@aban.ir"));
    if (!admin || !manager || !sara) { await tx.insert(talentVersions).values({ key: "comms-v1" }); return; }
    const ago = (minutes: number) => new Date(Date.now() - minutes * 60000);
    await tx.insert(messages).values([
      { senderId: sara.id, recipientId: manager.id, body: "سلام، وقت بخیر. درخواست مرخصی هفته آینده‌ام را ثبت کردم؛ لطفاً بررسی بفرمایید.", createdAt: ago(180), readAt: ago(170) },
      { senderId: manager.id, recipientId: sara.id, body: "سلام سارا جان، حتماً امروز بررسی می‌کنم و نتیجه را اطلاع می‌دهم.", createdAt: ago(170), readAt: ago(160) },
      { senderId: sara.id, recipientId: manager.id, body: "ممنون از پیگیری شما 🙏", createdAt: ago(160), readAt: null },
      { senderId: manager.id, recipientId: admin.id, body: "سلام، گزارش کارکرد این ماه واحد عملیات آماده شد و برای بررسی نهایی ارسال می‌شود.", createdAt: ago(90), readAt: ago(60) },
      { senderId: admin.id, recipientId: manager.id, body: "دستتون درد نکنه، بررسی می‌کنم.", createdAt: ago(60), readAt: null },
    ]);
    const [notice1] = await tx.insert(notices).values({ title: "به‌روزرسانی ساعات کاری فصل تابستان", body: "همکاران گرامی، از هفته آینده ساعت شروع شیفت صبح به ۷:۳۰ تغییر می‌کند. لطفاً برنامه حضور خود را با سرپرست واحد هماهنگ کنید.", image: "", createdBy: "امیر محمدی" }).returning();
    const [notice2] = await tx.insert(notices).values({ title: "برگزاری جلسه هم‌اندیشی منابع انسانی", body: "جلسه هم‌اندیشی سالانه منابع انسانی پنجشنبه این هفته ساعت ۱۰ در سالن اجتماعات برگزار می‌شود. حضور مدیران واحدها الزامی است.", image: "", createdBy: "امیر محمدی" }).returning();
    await tx.insert(noticeReads).values([{ noticeId: notice1.id, userId: manager.id }, { noticeId: notice1.id, userId: sara.id }]);
    void notice2;
    await tx.insert(talentVersions).values({ key: "comms-v1" });
  });
}
