export interface Job { id: string; title: string; department: string; location: string; contract: string; description: string; requirements: string; status: string; openings: number; salaryMin: number; salaryMax: number; hiringCost: number; deadline: string; createdAt: string }
export interface Applicant { id: string; jobId: string; employeeId: string | null; name: string; email: string; phone: string; source: string; tags: string[]; skills: string; experience: number; expectedSalary: number; stage: string; rating: number; summary: string; createdAt: string; updatedAt: string }
export interface ApplicantNote { id: string; applicantId: string; actorName: string; kind: string; body: string; score: number; createdAt: string }
export interface Interview { id: string; applicantId: string; interviewerId: string; startsAt: string; duration: number; mode: string; location: string; status: string; feedback: string; score: number }
export interface ResumeFile { id: string; applicantId: string; name: string; size: number }
export interface TaskSpec { title: string; ownerRole: string; offsetDays: number }
export interface OnboardingTemplate { id: string; title: string; department: string; welcome: string; tasks: TaskSpec[] }
export interface OnboardingPlan { id: string; templateId: string | null; employeeId: string; title: string; welcome: string; startDate: string; createdAt: string }
export interface OnboardingTask { id: string; planId: string; title: string; ownerRole: string; dueDate: string; done: boolean; completedBy: string; completedAt: string | null }
export interface Lesson { id: string; title: string; content: string; url: string; minutes: number }
export interface QuizQuestion { id: string; text: string; options: string[]; correct?: number }
export interface Course { id: string; title: string; category: string; instructor: string; description: string; level: string; status: string; lessons: Lesson[]; quiz: QuizQuestion[]; passScore: number; createdAt: string }
export interface Enrollment { id: string; courseId: string; employeeId: string; dueDate: string; completedLessons: string[]; score: number | null; status: string; completedAt: string | null; createdAt: string }
export interface SurveyQuestion { id: string; text: string; type: "scale" | "enps"; dimension: string }
export interface Survey { id: string; title: string; description: string; department: string; deadline: string; status: string; questions: SurveyQuestion[]; createdAt: string }
export interface SurveyMetrics { surveyId: string; audience: number; responses: number; eligible: boolean; participated: boolean; reportReady: boolean; dimensions: { id: string; title: string; average: number; percent: number; type: string }[]; departments: { department: string; count: number; score: number | null }[]; enps: number | null; score: number | null }
export interface Improvement { id: string; surveyId: string; title: string; employeeId: string; dueDate: string; status: string; notes: string }
export interface SalaryPolicy { id: string; department: string; minimum: number; midpoint: number; maximum: number; increasePercent: number; complexityPercent: number; strategy: string; source: string }
export interface SalaryEntry { employeeId: string; name: string; code: string; department: string; current: number; proposed: number; policyId: string; strategy: string }
export interface SalaryScenario { id: string; title: string; status: string; entries: SalaryEntry[]; createdBy: string; createdAt: string; appliedAt: string | null }
export interface TalentEvent { id: string; module: string; title: string; actorName: string; employeeId: string | null; createdAt: string }
export interface TalentData { jobs: Job[]; applicants: Applicant[]; notes: ApplicantNote[]; interviews: Interview[]; files: ResumeFile[]; templates: OnboardingTemplate[]; plans: OnboardingPlan[]; tasks: OnboardingTask[]; courses: Course[]; enrollments: Enrollment[]; surveys: Survey[]; metrics: SurveyMetrics[]; improvements: Improvement[]; policies: SalaryPolicy[]; scenarios: SalaryScenario[]; activity: TalentEvent[] }
export const stages = [{ id: "new", label: "رزومه جدید", color: "#8a9caf" }, { id: "screening", label: "بررسی اولیه", color: "#619ec5" }, { id: "interview", label: "مصاحبه", color: "#a18ac6" }, { id: "offer", label: "پیشنهاد همکاری", color: "#d5a24b" }, { id: "hired", label: "استخدام‌شده", color: "#1fa68f" }, { id: "rejected", label: "عدم همکاری", color: "#c68b93" }];
export const sourceLabels = ["سایت مجموعه", "معرفی همکار", "جاب‌ویژن (ثبت دستی)", "جابینجا (ثبت دستی)", "شبکه‌های اجتماعی", "سایر"];
export const taskRoleLabels: Record<string, string> = { employee: "همکار جدید", manager: "مدیر واحد", admin: "منابع انسانی" };
export const strategyLabels: Record<string, string> = { floor: "کف بازه داخلی", market: "میانه بازه داخلی", competitive: "رقابتی داخلی", top: "سقف بازه داخلی" };
export function proposedSalary(current: number, policy: SalaryPolicy) { const anchor = policy.strategy === "floor" ? policy.minimum : policy.strategy === "top" ? policy.maximum : policy.strategy === "competitive" ? (policy.midpoint + policy.maximum) / 2 : policy.midpoint; const adjusted = anchor * policy.complexityPercent / 100; const raised = current * (1 + policy.increasePercent / 100); return Math.max(current, Math.round(Math.max(current, Math.min(policy.maximum * policy.complexityPercent / 100, Math.max(raised, adjusted))) / 1000) * 1000); }
export const percentComplete = (done: number, total: number) => total ? Math.round(done / total * 100) : 0;
export const talentPages = ["talent", "recruitment", "onboarding", "learning", "pulse", "compensation", "research"];
