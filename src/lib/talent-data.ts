import { db } from "@/db";
import { and, eq, desc, inArray, or, sql } from "drizzle-orm";
import { employees, jobs, applicants, applicantNotes, interviews, resumeFiles, onboardingTemplates, onboardingPlans, onboardingTasks, courses, enrollments, surveys, surveyAudience, surveyResponses, improvements, salaryPolicies, salaryScenarios, talentEvents } from "@/db/schema";
import type { User } from "@/lib/types";
import type { TalentData, SurveyMetrics } from "@/lib/talent-types";
const emptyId = "00000000-0000-0000-0000-000000000000";
export async function talentScope(user: User) {
  const [me] = user.employeeId ? await db.select().from(employees).where(eq(employees.id, user.employeeId)) : [];
  const scope = await db.select({ id: employees.id, department: employees.department }).from(employees).where(user.role === "admin" ? undefined : user.role === "manager" ? eq(employees.department, me?.department || "") : eq(employees.id, user.employeeId || emptyId));
  return { department: me?.department || "", employeeIds: scope.map(e => e.id) };
}
export async function getTalentData(user: User): Promise<TalentData> {
  const admin = user.role === "admin", recruiting = admin || user.role === "manager", financial = admin || user.role === "finance";
  const scope = await talentScope(user); const ids = scope.employeeIds.length ? scope.employeeIds : [emptyId];
  const jobRows = recruiting ? await db.select().from(jobs).where(admin ? undefined : eq(jobs.department, scope.department)).orderBy(desc(jobs.createdAt)) : [];
  const candidateRows = jobRows.length ? await db.select().from(applicants).where(inArray(applicants.jobId, jobRows.map(j => j.id))).orderBy(desc(applicants.updatedAt)) : [];
  const candidateIds = candidateRows.map(c => c.id); const plans = await db.select().from(onboardingPlans).where(admin ? undefined : inArray(onboardingPlans.employeeId, ids)).orderBy(desc(onboardingPlans.createdAt));
  const [noteRows, interviewRows, files, templates, tasks, courseRows, enrollmentRows, surveyRows, actionRows, policies, scenarios, events] = await Promise.all([
    candidateIds.length ? db.select().from(applicantNotes).where(inArray(applicantNotes.applicantId, candidateIds)).orderBy(desc(applicantNotes.createdAt)) : [],
    candidateIds.length ? db.select().from(interviews).where(inArray(interviews.applicantId, candidateIds)).orderBy(interviews.startsAt) : [],
    candidateIds.length ? db.select({ id: resumeFiles.id, applicantId: resumeFiles.applicantId, name: resumeFiles.name, size: resumeFiles.size }).from(resumeFiles).where(inArray(resumeFiles.applicantId, candidateIds)) : [],
    recruiting ? db.select().from(onboardingTemplates).where(admin ? undefined : or(eq(onboardingTemplates.department, "all"), eq(onboardingTemplates.department, scope.department))) : [],
    plans.length ? db.select().from(onboardingTasks).where(inArray(onboardingTasks.planId, plans.map(p => p.id))).orderBy(onboardingTasks.dueDate) : [],
    db.select().from(courses).where(admin ? undefined : or(eq(courses.status, "published"), inArray(courses.id, db.select({ courseId: enrollments.courseId }).from(enrollments).where(inArray(enrollments.employeeId, ids))))).orderBy(desc(courses.createdAt)),
    db.select().from(enrollments).where(admin ? undefined : inArray(enrollments.employeeId, ids)),
    db.select().from(surveys).where(admin ? undefined : and(inArray(surveys.status, ["active", "closed"]), or(eq(surveys.department, "all"), eq(surveys.department, scope.department)))).orderBy(desc(surveys.createdAt)),
    db.select().from(improvements).where(admin ? undefined : inArray(improvements.employeeId, ids)),
    financial ? db.select().from(salaryPolicies) : [],
    financial ? db.select().from(salaryScenarios).orderBy(desc(salaryScenarios.createdAt)) : [],
    db.select().from(talentEvents).where(admin ? undefined : inArray(talentEvents.employeeId, ids)).orderBy(desc(talentEvents.createdAt)).limit(40),
  ]);
  const metrics: SurveyMetrics[] = [];
  for (const survey of surveyRows) {
    const audience = await db.select().from(surveyAudience).where(and(eq(surveyAudience.surveyId, survey.id), user.role === "manager" ? eq(surveyAudience.department, scope.department) : undefined));
    const self = user.employeeId ? audience.find(a => a.employeeId === user.employeeId) : undefined;
    const responseRows = recruiting && survey.status === "closed" ? await db.select().from(surveyResponses).where(and(eq(surveyResponses.surveyId, survey.id), admin ? undefined : eq(surveyResponses.department, scope.department))) : [];
    const responseCount = audience.filter(a => a.participated).length;
    const reportReady = recruiting && survey.status === "closed" && responseRows.length >= 5;
    const dimensions = reportReady ? survey.questions.map(q => { const average = responseRows.reduce((sum, r) => sum + (r.answers[q.id] || 0), 0) / responseRows.length; return { id: q.id, title: q.dimension, average: Math.round(average * 10) / 10, percent: Math.round(q.type === "enps" ? average * 10 : (average - 1) * 25), type: q.type }; }) : [];
    const enpsQ = survey.questions.find(q => q.type === "enps");
    const enps = reportReady && enpsQ ? Math.round((responseRows.filter(r => r.answers[enpsQ.id] >= 9).length - responseRows.filter(r => r.answers[enpsQ.id] <= 6).length) / responseRows.length * 100) : null;
    const scaleQuestions = survey.questions.filter(q => q.type === "scale");
    const scoreFor = (rows: typeof responseRows) => scaleQuestions.length ? Math.round(rows.reduce((sum, r) => sum + scaleQuestions.reduce((s, q) => s + (r.answers[q.id] - 1) * 25, 0) / scaleQuestions.length, 0) / rows.length) : null;
    metrics.push({ surveyId: survey.id, audience: recruiting ? audience.length : 0, responses: recruiting ? responseCount : 0, eligible: !!self, participated: !!self?.participated, reportReady, dimensions, departments: reportReady ? [...new Set(audience.map(a => a.department))].map(department => { const rows = responseRows.filter(r => r.department === department); return { department, count: rows.length, score: rows.length >= 5 ? scoreFor(rows) : null }; }) : [], enps, score: reportReady ? scoreFor(responseRows) : null });
  }
  return JSON.parse(JSON.stringify({ jobs: jobRows, applicants: candidateRows, notes: noteRows, interviews: interviewRows, files, templates, plans, tasks, courses: courseRows.map(c => ({ ...c, quiz: admin ? c.quiz : c.quiz.map(({ correct: _correct, ...q }) => q) })), enrollments: enrollmentRows, surveys: surveyRows, metrics, improvements: actionRows, policies, scenarios, activity: events }));
}
