import { randomUUID } from "node:crypto";
import { isDeepStrictEqual } from "node:util";
import { and, eq, inArray, ne, sql } from "drizzle-orm";
import { db } from "@/db";
import * as s from "@/db/schema";
import { hashPassword } from "@/lib/auth";
import { talentScope } from "@/lib/talent-data";
import { shiftDate } from "@/lib/talent-seed";
import { todayISO, type User } from "@/lib/types";
import { proposedSalary, stages, strategyLabels, taskRoleLabels, type SalaryPolicy, type SurveyQuestion } from "@/lib/talent-types";
import * as v from "@/lib/talent-validation";
type Tx = Parameters<Parameters<typeof db.transaction>[0]>[0];
type Input = Record<string, unknown>;

async function createPlan(tx: Tx, templateId: string, employeeId: string, startDate: string) {
  const [template] = await tx.select().from(s.onboardingTemplates).where(eq(s.onboardingTemplates.id, templateId));
  if (!template) return v.fail("الگوی آنبوردینگ پیدا نشد.", 404);
  const [employee] = await tx.select().from(s.employees).where(eq(s.employees.id, employeeId));
  if (!employee || (template.department !== "all" && template.department !== employee.department)) return v.fail("الگو متعلق به واحد این همکار نیست.");
  const [plan] = await tx.insert(s.onboardingPlans).values({ templateId, employeeId, title: template.title, welcome: template.welcome, startDate }).returning();
  await tx.insert(s.onboardingTasks).values(template.tasks.map(t => ({ planId: plan.id, title: t.title, ownerRole: t.ownerRole, dueDate: shiftDate(t.offsetDays, new Date(startDate)) })));
  return plan;
}

export async function talentAction(user: User, action: string, d: Input): Promise<Record<string, unknown>> {
  const admin = user.role === "admin", manager = user.role === "manager", finance = user.role === "finance";
  const scope = await talentScope(user);
  const requireAdmin = () => { if (!admin) v.fail("دسترسی مدیر سیستم لازم است.", 403); };
  const requireRecruiter = () => { if (!admin && !manager) v.fail("دسترسی تیم جذب لازم است.", 403); };
  const requireFinance = () => { if (!admin && !finance) v.fail("دسترسی مدیریت یا واحد مالی لازم است.", 403); };
  return db.transaction(async tx => {
    const employee = async (value: unknown) => { const eid = v.id(value); const [e] = await tx.select().from(s.employees).where(eq(s.employees.id, eid)).for("update"); if (!e) return v.fail("کارمند پیدا نشد.", 404); if (!admin && !(finance && action.startsWith("salary.")) && !scope.employeeIds.includes(eid)) return v.fail("این کارمند در محدوده دسترسی شما نیست.", 403); return e; };
    const job = async (value: unknown) => { requireRecruiter(); const [j] = await tx.select().from(s.jobs).where(eq(s.jobs.id, v.id(value))).for("update"); if (!j) return v.fail("فرصت شغلی پیدا نشد.", 404); if (!admin && j.department !== scope.department) return v.fail("این فرصت متعلق به واحد شما نیست.", 403); return j; };
    const candidate = async (value: unknown) => { requireRecruiter(); const [c] = await tx.select().from(s.applicants).where(eq(s.applicants.id, v.id(value))).for("update"); if (!c) return v.fail("متقاضی پیدا نشد.", 404); await job(c.jobId); return c; };
    const event = async (module: string, title: string, employeeId?: string) => { await tx.insert(s.talentEvents).values({ module, title, actorName: user.name, employeeId: employeeId || user.employeeId || null }); };
    const note = async (applicantId: string, body: string, kind = "event", score = 0) => { await tx.insert(s.applicantNotes).values({ applicantId, actorName: user.name, body, kind, score }); };
    const plan = async (value: unknown) => { const [p] = await tx.select().from(s.onboardingPlans).where(eq(s.onboardingPlans.id, v.id(value))).for("update"); if (!p) return v.fail("برنامه ورود پیدا نشد.", 404); await employee(p.employeeId); return p; };
    const course = async (value: unknown) => {
      const [c] = await tx.select().from(s.courses).where(eq(s.courses.id, v.id(value))).for("update");
      if (!c) return v.fail("دوره در دسترس نیست.", 404);
      if (!admin && c.status !== "published") {
        const [assigned] = scope.employeeIds.length ? await tx.select({ id: s.enrollments.id }).from(s.enrollments).where(and(eq(s.enrollments.courseId, c.id), inArray(s.enrollments.employeeId, scope.employeeIds))).limit(1) : [];
        if (!assigned) return v.fail("دوره در دسترس نیست.", 404);
      }
      return c;
    };
    if (action === "job.save") {
      requireRecruiter(); const department = v.department(d.department); if (!admin && department !== scope.department) v.fail("فقط برای واحد خود می‌توانید آگهی ایجاد کنید.", 403);
      const values = { title: v.text(d.title, "عنوان", 180), department, location: v.text(d.location, "محل کار", 200), contract: v.choice(d.contract, ["تمام‌وقت", "پاره‌وقت", "شیفتی", "قراردادی"], "نوع همکاری"), description: v.text(d.description, "شرح شغل", 10000), requirements: v.text(d.requirements, "شرایط احراز", 6000, false), status: v.choice(d.status, ["draft", "open", "closed"], "وضعیت"), openings: v.number(d.openings, "ظرفیت", 1, 1000), salaryMin: v.number(d.salaryMin, "حداقل حقوق"), salaryMax: v.number(d.salaryMax, "حداکثر حقوق"), hiringCost: v.number(d.hiringCost || 0, "هزینه جذب"), deadline: v.date(d.deadline) };
      if (values.salaryMin > values.salaryMax) v.fail("حداکثر حقوق از حداقل کمتر است.");
      if (d.id) { await job(d.id); await tx.update(s.jobs).set(values).where(eq(s.jobs.id, v.id(d.id))); } else await tx.insert(s.jobs).values(values);
      await event("recruitment", `${d.id ? "ویرایش" : "ثبت"} فرصت شغلی ${values.title}`);
    } else if (action === "job.delete") {
      const j = await job(d.id); if ((await tx.select().from(s.applicants).where(and(eq(s.applicants.jobId, j.id), eq(s.applicants.stage, "hired")))).length) v.fail("فرصت دارای استخدام نهایی را ببندید؛ حذف سابقه مجاز نیست."); await tx.delete(s.jobs).where(eq(s.jobs.id, j.id));
    } else if (action === "applicant.save") {
      await job(d.jobId); const values = { jobId: v.id(d.jobId), name: v.text(d.name, "نام", 150), email: v.email(d.email), phone: v.text(d.phone, "تلفن", 30, false), source: v.text(d.source || "سایر", "منبع", 100), tags: String(d.tags || "").split(/[,،]/).map(t => t.trim()).filter(Boolean).slice(0, 8).map(t => v.text(t, "برچسب", 40)), skills: v.text(d.skills, "مهارت‌ها", 2000, false), experience: v.number(d.experience || 0, "سابقه", 0, 50), expectedSalary: v.number(d.expectedSalary || 0, "حقوق درخواستی"), summary: v.text(d.summary, "خلاصه رزومه", 5000, false), updatedAt: new Date() };
      if (d.id) { const c = await candidate(d.id); if (c.stage === "hired") v.fail("پرونده استخدام‌شده فقط از مدیریت کارکنان ویرایش می‌شود."); await tx.update(s.applicants).set(values).where(eq(s.applicants.id, c.id)); await note(c.id, "اطلاعات متقاضی ویرایش شد."); } else { const [c] = await tx.insert(s.applicants).values(values).returning(); await note(c.id, `رزومه از منبع ${values.source} ثبت شد.`); }
      await event("recruitment", `پرونده ${values.name} به‌روزرسانی شد`);
    } else if (action === "applicant.move") {
      const c = await candidate(d.id); if (c.stage === "hired") v.fail("استخدام نهایی قابل جابه‌جایی نیست."); if (d.fromStage && c.stage !== d.fromStage) v.fail("مرحله قبلاً تغییر کرده است؛ اطلاعات را تازه کنید.", 409);
      const stage = v.choice(d.stage, stages.filter(s => s.id !== "hired").map(s => s.id), "مرحله");
      await tx.update(s.applicants).set({ stage, updatedAt: new Date() }).where(eq(s.applicants.id, c.id)); await note(c.id, `انتقال به ${stages.find(s => s.id === stage)!.label}${d.reason ? `: ${v.text(d.reason, "دلیل", 1000)}` : ""}`);
    } else if (action === "applicant.delete") {
      const c = await candidate(d.id); if (c.stage === "hired") v.fail("سوابق متقاضی استخدام‌شده قابل حذف نیست."); await tx.delete(s.applicants).where(eq(s.applicants.id, c.id));
    } else if (action === "applicant.note") {
      const c = await candidate(d.id); const body = v.text(d.body, "یادداشت", 4000); const kind = v.choice(d.kind || "note", ["note", "evaluation"], "نوع یادداشت"); const score = kind === "evaluation" ? v.number(d.score, "امتیاز", 1, 5) : 0; await note(c.id, body, kind, score);
      const ratings = await tx.select().from(s.applicantNotes).where(and(eq(s.applicantNotes.applicantId, c.id), eq(s.applicantNotes.kind, "evaluation")));
      await tx.update(s.applicants).set({ rating: ratings.length ? Math.round(ratings.reduce((sum, n) => sum + n.score, 0) / ratings.length) : 0, updatedAt: new Date() }).where(eq(s.applicants.id, c.id));
    } else if (action === "applicant.hire") {
      requireAdmin(); const c = await candidate(d.id); const j = await job(c.jobId); if (c.stage !== "offer") v.fail("متقاضی باید در مرحله پیشنهاد همکاری باشد.", 409);
      const filled = await tx.select().from(s.applicants).where(and(eq(s.applicants.jobId, j.id), eq(s.applicants.stage, "hired"))); if (filled.length >= j.openings) v.fail("ظرفیت این فرصت تکمیل شده است.");
      const password = v.text(d.password, "رمز اولیه", 128); if (password.length < 8) v.fail("رمز اولیه حداقل ۸ نویسه باشد.");
      const [e] = await tx.insert(s.employees).values({ name: c.name, email: c.email, phone: c.phone, code: v.text(d.code, "کد پرسنلی", 30), department: j.department, position: j.title, hireDate: v.date(d.hireDate), baseSalary: v.number(d.baseSalary, "حقوق پایه", 1), status: "active" }).returning();
      await tx.insert(s.users).values({ employeeId: e.id, name: e.name, email: e.email, passwordHash: hashPassword(password), role: "employee" });
      await tx.update(s.applicants).set({ stage: "hired", employeeId: e.id, updatedAt: new Date() }).where(eq(s.applicants.id, c.id)); await note(c.id, `استخدام نهایی؛ حساب کارمندی با کد ${e.code} ایجاد شد.`);
      if (d.templateId) await createPlan(tx, v.id(d.templateId), e.id, e.hireDate);
      await event("onboarding", `آغاز همکاری ${e.name}`, e.id); return { employeeId: e.id };
    } else if (action === "interview.save") {
      const c = await candidate(d.applicantId); if (["hired", "rejected"].includes(c.stage)) v.fail("برای پرونده نهایی‌شده مصاحبه ثبت نمی‌شود.");
      const interviewer = await employee(d.interviewerId); const startsAt = new Date(String(d.startsAt)); if (!Number.isFinite(startsAt.getTime())) v.fail("زمان جلسه معتبر نیست."); const duration = v.number(d.duration, "مدت جلسه", 15, 240);
      const status = v.choice(d.status || "scheduled", ["scheduled", "completed", "cancelled"], "وضعیت مصاحبه");
      if (d.id) { const [old] = await tx.select().from(s.interviews).where(eq(s.interviews.id, v.id(d.id))); if (!old || old.applicantId !== c.id) v.fail("جلسه پیدا نشد.", 404); }
      const other = await tx.select().from(s.interviews).where(and(eq(s.interviews.interviewerId, interviewer.id), eq(s.interviews.status, "scheduled"), d.id ? ne(s.interviews.id, v.id(d.id)) : undefined));
      if (status === "scheduled" && other.some(i => startsAt.getTime() < i.startsAt.getTime() + i.duration * 60000 && startsAt.getTime() + duration * 60000 > i.startsAt.getTime())) v.fail("این زمان با جلسه دیگری از مصاحبه‌کننده تداخل دارد.");
      const values = { applicantId: c.id, interviewerId: interviewer.id, startsAt, duration, mode: v.choice(d.mode, ["حضوری", "آنلاین", "تلفنی", "آزمون عملی"], "نوع جلسه"), location: v.text(d.location, "محل یا لینک", 1000, false), status, feedback: v.text(d.feedback, "بازخورد", 4000, false), score: v.number(d.score || 0, "امتیاز", 0, 5) };
      if (d.id) await tx.update(s.interviews).set(values).where(eq(s.interviews.id, v.id(d.id))); else await tx.insert(s.interviews).values(values);
      if (["new", "screening"].includes(c.stage)) await tx.update(s.applicants).set({ stage: "interview", updatedAt: new Date() }).where(eq(s.applicants.id, c.id));
      await note(c.id, `جلسه ${values.mode} با ${interviewer.name} ${status === "cancelled" ? "لغو" : "ثبت / ویرایش"} شد.`); await event("recruitment", `جلسه ${c.name} با شما برنامه‌ریزی شد`, interviewer.id);
    } else if (action === "interview.delete") {
      const [i] = await tx.select().from(s.interviews).where(eq(s.interviews.id, v.id(d.id))); if (!i) v.fail("جلسه پیدا نشد.", 404); await candidate(i.applicantId); await tx.delete(s.interviews).where(eq(s.interviews.id, i.id));
    } else if (action === "template.save") {
      requireAdmin(); const tasks = v.array(d.tasks, "وظایف", 1, 30).map(t => ({ title: v.text(t.title, "عنوان وظیفه", 200), ownerRole: v.choice(t.ownerRole, Object.keys(taskRoleLabels), "مسئول"), offsetDays: v.number(t.offsetDays, "روز نسبی", -30, 180) }));
      const values = { title: v.text(d.title, "عنوان الگو", 180), department: v.department(d.department, true), welcome: v.text(d.welcome, "متن خوش‌آمدگویی", 10000), tasks };
      if (d.id) { const saved = await tx.update(s.onboardingTemplates).set(values).where(eq(s.onboardingTemplates.id, v.id(d.id))).returning(); if (!saved.length) v.fail("الگو پیدا نشد.", 404); } else await tx.insert(s.onboardingTemplates).values(values);
    } else if (action === "template.delete") { requireAdmin(); await tx.delete(s.onboardingTemplates).where(eq(s.onboardingTemplates.id, v.id(d.id))); }
    else if (action === "plan.create") {
      requireRecruiter(); const e = await employee(d.employeeId); if (!["active", "on_leave"].includes(e.status)) v.fail("کارمند باید فعال باشد."); const p = await createPlan(tx, v.id(d.templateId), e.id, v.date(d.startDate)); await event("onboarding", `برنامه ${p.title} برای شما ایجاد شد`, e.id);
    } else if (action === "plan.save") { requireRecruiter(); const p = await plan(d.id); await tx.update(s.onboardingPlans).set({ title: v.text(d.title, "عنوان", 180), welcome: v.text(d.welcome, "خوش‌آمدگویی", 10000) }).where(eq(s.onboardingPlans.id, p.id)); }
    else if (action === "plan.delete") { requireRecruiter(); const p = await plan(d.id); await tx.delete(s.onboardingPlans).where(eq(s.onboardingPlans.id, p.id)); }
    else if (action === "task.save") {
      requireRecruiter(); const p = await plan(d.planId); const values = { planId: p.id, title: v.text(d.title, "عنوان وظیفه", 200), ownerRole: v.choice(d.ownerRole, Object.keys(taskRoleLabels), "مسئول"), dueDate: v.date(d.dueDate) }; if (d.id) { const updated = await tx.update(s.onboardingTasks).set(values).where(and(eq(s.onboardingTasks.id, v.id(d.id)), eq(s.onboardingTasks.planId, p.id))).returning(); if (!updated.length) v.fail("وظیفه پیدا نشد.", 404); } else await tx.insert(s.onboardingTasks).values(values);
    } else if (["task.toggle", "task.delete"].includes(action)) {
      const [task] = await tx.select().from(s.onboardingTasks).where(eq(s.onboardingTasks.id, v.id(d.id))).for("update"); if (!task) v.fail("وظیفه پیدا نشد.", 404); const p = await plan(task.planId);
      if (action === "task.delete") { requireRecruiter(); await tx.delete(s.onboardingTasks).where(eq(s.onboardingTasks.id, task.id)); }
      else { if (!admin && !(manager && task.ownerRole === "manager") && !(p.employeeId === user.employeeId && task.ownerRole === "employee")) v.fail("فقط مسئول این وظیفه می‌تواند آن را تکمیل کند.", 403); if (typeof d.done !== "boolean") v.fail("وضعیت وظیفه معتبر نیست."); await tx.update(s.onboardingTasks).set({ done: Boolean(d.done), completedBy: d.done ? user.name : "", completedAt: d.done ? new Date() : null }).where(eq(s.onboardingTasks.id, task.id)); await event("onboarding", `${task.title}: ${d.done ? "تکمیل شد" : "بازگشایی شد"}`, p.employeeId); }
    } else if (action === "course.save") {
      requireAdmin(); const lessons = v.array(d.lessons, "درس‌ها", 1, 30).map(l => ({ id: v.text(l.id || randomUUID(), "شناسه درس", 80), title: v.text(l.title, "عنوان درس", 200), content: v.text(l.content, "محتوای درس", 20000), url: v.safeUrl(l.url), minutes: v.number(l.minutes, "مدت درس", 1, 1000) })); v.uniqueIds(lessons);
      const quiz = v.array(d.quiz, "سؤال‌های آزمون", 1, 20).map(q => { if (!Array.isArray(q.options) || q.options.length < 2 || q.options.length > 6) return v.fail("هر سؤال باید ۲ تا ۶ گزینه داشته باشد."); return { id: v.text(q.id || randomUUID(), "شناسه سؤال", 80), text: v.text(q.text, "صورت سؤال", 1000), options: q.options.map(o => v.text(o, "گزینه", 500)), correct: v.number(q.correct, "پاسخ درست", 0, q.options.length - 1) }; }); v.uniqueIds(quiz);
      const values = { title: v.text(d.title, "نام دوره", 200), category: v.text(d.category, "دسته‌بندی", 100), instructor: v.text(d.instructor, "مدرس", 150), description: v.text(d.description, "معرفی", 4000), level: v.choice(d.level, ["مقدماتی", "متوسط", "پیشرفته"], "سطح"), status: v.choice(d.status, ["draft", "published", "archived"], "وضعیت"), lessons, quiz, passScore: v.number(d.passScore, "حدنصاب", 1, 100) };
      if (d.id) { const old = await course(d.id); const hasEnrollment = (await tx.select().from(s.enrollments).where(eq(s.enrollments.courseId, old.id)).limit(1)).length; if (hasEnrollment && (!isDeepStrictEqual(old.lessons, lessons) || !isDeepStrictEqual(old.quiz, quiz) || old.passScore !== values.passScore)) v.fail("دوره تخصیص‌یافته قفل محتوایی است؛ برای محتوای جدید یک دوره جدید بسازید."); await tx.update(s.courses).set(values).where(eq(s.courses.id, old.id)); } else await tx.insert(s.courses).values(values);
      await event("learning", `دوره ${values.title} ذخیره شد`);
    } else if (action === "course.delete") { requireAdmin(); const c = await course(d.id); if ((await tx.select().from(s.enrollments).where(eq(s.enrollments.courseId, c.id)).limit(1)).length) v.fail("دوره دارای کارنامه را بایگانی کنید؛ حذف مجاز نیست."); await tx.delete(s.courses).where(eq(s.courses.id, c.id)); }
    else if (action === "enrollment.assign") {
      const c = await course(d.courseId); if (c.status !== "published") v.fail("فقط دوره منتشرشده قابل تخصیص است."); const ids = Array.isArray(d.employeeIds) && (admin || manager) ? [...new Set(d.employeeIds.map(v.id))] : user.employeeId ? [user.employeeId] : []; if (!ids.length || ids.length > 1000) v.fail("حداقل یک و حداکثر ۱۰۰۰ همکار انتخاب کنید."); const dueDate = v.date(d.dueDate);
      for (const eid of ids.sort()) { const e = await employee(eid); if (!["active", "on_leave"].includes(e.status)) v.fail("دوره فقط به کارکنان فعال تخصیص می‌یابد."); }
      for (let i = 0; i < ids.length; i += 200) await tx.insert(s.enrollments).values(ids.slice(i, i + 200).map(employeeId => ({ courseId: c.id, employeeId, dueDate }))).onConflictDoNothing();
      await event("learning", `دوره ${c.title} به ${ids.length} همکار تخصیص یافت`);
    } else if (["enrollment.lesson", "enrollment.quiz", "enrollment.delete"].includes(action)) {
      const [enrollment] = await tx.select().from(s.enrollments).where(eq(s.enrollments.id, v.id(d.id))).for("update"); if (!enrollment) v.fail("ثبت‌نام پیدا نشد.", 404); await employee(enrollment.employeeId); const c = await course(enrollment.courseId);
      if (action === "enrollment.delete") { requireRecruiter(); if (enrollment.status === "completed") v.fail("کارنامه تکمیل‌شده قابل حذف نیست."); await tx.delete(s.enrollments).where(eq(s.enrollments.id, enrollment.id)); }
      else { if (enrollment.employeeId !== user.employeeId) v.fail("یادگیری و آزمون فقط توسط خود کارمند ثبت می‌شود.", 403); if (enrollment.status === "completed") v.fail("این دوره قبلاً تکمیل شده است.", 409);
        if (action === "enrollment.lesson") { const lessonId = String(d.lessonId); if (!c.lessons.some(l => l.id === lessonId)) v.fail("درس معتبر نیست."); await tx.update(s.enrollments).set({ completedLessons: [...new Set([...enrollment.completedLessons, lessonId])], status: "in_progress" }).where(eq(s.enrollments.id, enrollment.id)); }
        else { if (c.lessons.some(l => !enrollment.completedLessons.includes(l.id))) v.fail("ابتدا همه درس‌ها را مطالعه کنید."); const answers = d.answers && typeof d.answers === "object" ? d.answers as Record<string, unknown> : {}; let correct = 0; for (const q of c.quiz) { const answer = v.number(answers[q.id], "پاسخ سؤال", 0, q.options.length - 1); if (answer === q.correct) correct++; } const score = Math.round(correct / c.quiz.length * 100); const passed = score >= c.passScore; await tx.update(s.enrollments).set({ score, status: passed ? "completed" : "in_progress", completedAt: passed ? new Date() : null }).where(eq(s.enrollments.id, enrollment.id)); await event("learning", `نتیجه آزمون ${c.title}: ${score} از ۱۰۰`, enrollment.employeeId); return { score, passed }; }
      }
    } else if (action === "survey.save") {
      requireAdmin(); const questions: SurveyQuestion[] = v.array(d.questions, "سؤالات", 1, 20).map(q => ({ id: v.text(q.id || randomUUID(), "شناسه سؤال", 80), text: v.text(q.text, "سؤال", 1000), type: v.choice(q.type, ["scale", "enps"], "نوع سؤال") as "scale" | "enps", dimension: v.text(q.dimension, "شاخص", 100) })); v.uniqueIds(questions); if (questions.filter(q => q.type === "enps").length > 1) v.fail("فقط یک سؤال eNPS مجاز است.");
      const values = { title: v.text(d.title, "عنوان", 200), description: v.text(d.description, "توضیحات", 3000), department: v.department(d.department, true), deadline: v.date(d.deadline), questions };
      if (d.id) { const [old] = await tx.select().from(s.surveys).where(eq(s.surveys.id, v.id(d.id))).for("update"); if (!old) v.fail("نظرسنجی پیدا نشد.", 404); if (old.status !== "draft") v.fail("نظرسنجی منتشرشده قابل ویرایش نیست."); await tx.update(s.surveys).set(values).where(eq(s.surveys.id, old.id)); } else await tx.insert(s.surveys).values(values);
    } else if (["survey.publish", "survey.close", "survey.delete", "survey.respond"].includes(action)) {
      const [survey] = await tx.select().from(s.surveys).where(eq(s.surveys.id, v.id(d.id))).for("update"); if (!survey) v.fail("نظرسنجی پیدا نشد.", 404);
      if (action === "survey.respond") {
        if (!user.employeeId) v.fail("پاسخ‌گویی نیاز به پرونده کارمندی دارد.", 403); if (survey.status !== "active" || survey.deadline < todayISO()) v.fail("مهلت پاسخ‌گویی پایان یافته است."); const [audience] = await tx.select().from(s.surveyAudience).where(and(eq(s.surveyAudience.surveyId, survey.id), eq(s.surveyAudience.employeeId, user.employeeId!))).for("update"); if (!audience) v.fail("شما در جامعه مخاطبان این نظرسنجی نیستید.", 403); if (audience.participated) v.fail("پاسخ شما قبلاً ثبت شده است.", 409);
        const input = d.answers && typeof d.answers === "object" ? d.answers as Record<string, unknown> : {}; const answers: Record<string, number> = {}; for (const q of survey.questions) answers[q.id] = v.number(input[q.id], "پاسخ سؤال", q.type === "enps" ? 0 : 1, q.type === "enps" ? 10 : 5);
        await tx.insert(s.surveyResponses).values({ surveyId: survey.id, department: audience.department, answers }); await tx.update(s.surveyAudience).set({ participated: true }).where(eq(s.surveyAudience.id, audience.id));
        // Deliberately no respondent identity or exact timestamp in response or audit records.
      } else {
        requireAdmin(); if (action === "survey.publish") { if (survey.status !== "draft") v.fail("فقط پیش‌نویس قابل انتشار است.", 409); if (survey.deadline < todayISO()) v.fail("مهلت نظرسنجی گذشته است."); const audience = await tx.select().from(s.employees).where(and(inArray(s.employees.status, ["active", "on_leave"]), survey.department === "all" ? undefined : eq(s.employees.department, survey.department))); if (!audience.length) v.fail("این نظرسنجی مخاطب فعالی ندارد."); for (let i = 0; i < audience.length; i += 200) await tx.insert(s.surveyAudience).values(audience.slice(i, i + 200).map(e => ({ surveyId: survey.id, employeeId: e.id, department: e.department }))); await tx.update(s.surveys).set({ status: "active" }).where(eq(s.surveys.id, survey.id)); await event("pulse", `نظرسنجی ${survey.title} منتشر شد`); }
        else if (action === "survey.close") { if (survey.status !== "active") v.fail("نظرسنجی فعال نیست."); await tx.update(s.surveys).set({ status: "closed" }).where(eq(s.surveys.id, survey.id)); }
        else { if (survey.status !== "draft") v.fail("فقط پیش‌نویس نظرسنجی قابل حذف است."); await tx.delete(s.surveys).where(eq(s.surveys.id, survey.id)); }
      }
    } else if (action === "improvement.save") {
      requireRecruiter(); const e = await employee(d.employeeId); const [survey] = await tx.select().from(s.surveys).where(eq(s.surveys.id, v.id(d.surveyId))); if (!survey || (!admin && !["all", scope.department].includes(survey.department))) v.fail("نظرسنجی در دسترس نیست.", 403);
      const values = { surveyId: survey.id, employeeId: e.id, title: v.text(d.title, "اقدام", 250), dueDate: v.date(d.dueDate), status: v.choice(d.status, ["open", "in_progress", "done"], "وضعیت"), notes: v.text(d.notes, "توضیحات", 3000, false) };
      if (d.id) { const [old] = await tx.select().from(s.improvements).where(eq(s.improvements.id, v.id(d.id))); if (!old) v.fail("اقدام پیدا نشد.", 404); await employee(old.employeeId); await tx.update(s.improvements).set(values).where(eq(s.improvements.id, old.id)); } else await tx.insert(s.improvements).values(values);
    } else if (action === "improvement.delete") { requireRecruiter(); const [old] = await tx.select().from(s.improvements).where(eq(s.improvements.id, v.id(d.id))); if (!old) v.fail("اقدام پیدا نشد.", 404); await employee(old.employeeId); await tx.delete(s.improvements).where(eq(s.improvements.id, old.id)); }
    else if (action === "salary.policy") {
      requireFinance(); const values = { department: v.department(d.department), minimum: v.number(d.minimum, "حداقل", 1), midpoint: v.number(d.midpoint, "میانه", 1), maximum: v.number(d.maximum, "حداکثر", 1), increasePercent: v.number(d.increasePercent, "افزایش", 0, 100), complexityPercent: v.number(d.complexityPercent, "پیچیدگی", 50, 200), strategy: v.choice(d.strategy, Object.keys(strategyLabels), "استراتژی"), source: v.text(d.source, "منبع", 500) }; if (values.minimum > values.midpoint || values.midpoint > values.maximum) v.fail("باید حداقل ≤ میانه ≤ حداکثر باشد."); await tx.insert(s.salaryPolicies).values(values).onConflictDoUpdate({ target: s.salaryPolicies.department, set: values }); await event("compensation", `سیاست حقوق ${values.department} به‌روزرسانی شد`);
    } else if (action === "salary.simulate") {
      requireFinance(); const department = v.department(d.department || "all", true); const staff = await tx.select().from(s.employees).where(and(inArray(s.employees.status, ["active", "on_leave"]), department === "all" ? undefined : eq(s.employees.department, department), d.employeeId ? eq(s.employees.id, v.id(d.employeeId)) : undefined)).orderBy(s.employees.code); const policies = await tx.select().from(s.salaryPolicies); if (!staff.length) v.fail("همکار فعالی برای محاسبه وجود ندارد."); const entries = staff.map(e => { const p = policies.find(p => p.department === e.department); if (!p) return v.fail(`سیاست حقوق برای ${e.department} تعریف نشده است.`); return { employeeId: e.id, name: e.name, code: e.code, department: e.department, current: e.baseSalary, proposed: v.number(proposedSalary(e.baseSalary, p as SalaryPolicy), "حقوق پیشنهادی", 1), policyId: p.id, strategy: p.strategy }; });
      const [scenario] = await tx.insert(s.salaryScenarios).values({ title: v.text(d.title, "نام سناریو", 200), entries, createdBy: user.name }).returning(); return { scenarioId: scenario.id };
    } else if (["salary.apply", "salary.delete", "salary.rename"].includes(action)) {
      requireFinance(); const [scenario] = await tx.select().from(s.salaryScenarios).where(eq(s.salaryScenarios.id, v.id(d.id))).for("update"); if (!scenario) v.fail("سناریو پیدا نشد.", 404); if (scenario.status !== "draft") v.fail("سناریوی اعمال‌شده قابل تغییر نیست.", 409);
      if (action === "salary.delete") await tx.delete(s.salaryScenarios).where(eq(s.salaryScenarios.id, scenario.id));
      else if (action === "salary.rename") await tx.update(s.salaryScenarios).set({ title: v.text(d.title, "عنوان", 200) }).where(eq(s.salaryScenarios.id, scenario.id));
      else { requireAdmin(); const current = await tx.select().from(s.employees).where(inArray(s.employees.id, scenario.entries.map(e => e.employeeId).sort())).orderBy(s.employees.id).for("update"); if (scenario.entries.some(entry => { const e = current.find(e => e.id === entry.employeeId); return !e || e.baseSalary !== entry.current || !["active", "on_leave"].includes(e.status); })) v.fail("اطلاعات کارمند از زمان محاسبه تغییر کرده است؛ یک سناریوی تازه بسازید.", 409); for (const entry of scenario.entries) await tx.update(s.employees).set({ baseSalary: entry.proposed }).where(eq(s.employees.id, entry.employeeId)); await tx.update(s.salaryScenarios).set({ status: "applied", appliedAt: new Date() }).where(eq(s.salaryScenarios.id, scenario.id)); await event("compensation", `سناریوی ${scenario.title} در حقوق پایه ${scenario.entries.length} همکار اعمال شد؛ فیش‌های قبلی بدون تغییر ماندند`); }
    } else v.fail("عملیات ناشناخته است.", 404);
    return { ok: true };
  });
}
