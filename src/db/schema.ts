import { pgTable, text, integer, timestamp, uuid, uniqueIndex, index, jsonb, boolean } from "drizzle-orm/pg-core";
import type { TaskSpec, Lesson, QuizQuestion, SurveyQuestion, SalaryEntry } from "@/lib/talent-types";

export const employees = pgTable("employees", {
  id: uuid("id").defaultRandom().primaryKey(),
  code: text("code").notNull().unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone").notNull().default(""),
  nationalId: text("national_id").notNull().default(""),
  department: text("department").notNull(),
  position: text("position").notNull(),
  hireDate: text("hire_date").notNull(),
  status: text("status").notNull().default("active"),
  baseSalary: integer("base_salary").notNull().default(18000000),
  leaveBalance: integer("leave_balance").notNull().default(26),
  avatar: text("avatar").notNull().default(""),
  maritalStatus: text("marital_status").notNull().default("single"),
  childrenCount: integer("children_count").notNull().default(0),
  insuranceNumber: text("insurance_number").notNull().default(""),
  address: text("address").notNull().default(""),
  nationalIdFront: text("national_id_front").notNull().default(""),
  nationalIdBack: text("national_id_back").notNull().default(""),
  identityPages: jsonb("identity_pages").$type<string[]>().notNull().default([]),
  birthDate: text("birth_date").notNull().default(""),
  otherDocuments: jsonb("other_documents").$type<string[]>().notNull().default([]),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [index("employee_department_idx").on(t.department)]);

export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(),
  employeeId: uuid("employee_id").references(() => employees.id, { onDelete: "cascade" }).unique(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  passwordHash: text("password_hash").notNull(),
  role: text("role").notNull().default("employee"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const sessions = pgTable("sessions", {
  tokenHash: text("token_hash").primaryKey(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  expiresAt: timestamp("expires_at").notNull(),
});

export const requests = pgTable("requests", {
  id: uuid("id").defaultRandom().primaryKey(),
  employeeId: uuid("employee_id").references(() => employees.id, { onDelete: "cascade" }).notNull(),
  type: text("type").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull().default(""),
  startDate: text("start_date").notNull(),
  endDate: text("end_date").notNull(),
  month: text("month").notNull(),
  amount: integer("amount").notNull().default(0),
  quantity: integer("quantity").notNull().default(1),
  amenityId: text("amenity_id").notNull().default(""),
  repaymentMonths: integer("repayment_months").notNull().default(1),
  paidMonth: text("paid_month"),
  stage: integer("stage").notNull().default(1),
  status: text("status").notNull().default("pending"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [index("request_employee_month_idx").on(t.employeeId, t.month)]);

export const requestEvents = pgTable("request_events", {
  id: uuid("id").defaultRandom().primaryKey(),
  requestId: uuid("request_id").references(() => requests.id, { onDelete: "cascade" }).notNull(),
  actorName: text("actor_name").notNull(),
  action: text("action").notNull(),
  note: text("note").notNull().default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const payrolls = pgTable("payrolls", {
  id: uuid("id").defaultRandom().primaryKey(),
  employeeId: uuid("employee_id").references(() => employees.id, { onDelete: "cascade" }).notNull(),
  month: text("month").notNull(),
  workDays: integer("work_days").notNull().default(30),
  baseSalary: integer("base_salary").notNull(),
  overtimeHours: integer("overtime_hours").notNull().default(0),
  overtimePay: integer("overtime_pay").notNull().default(0),
  fridayHours: integer("friday_hours").notNull().default(0),
  fridayPay: integer("friday_pay").notNull().default(0),
  nightHours: integer("night_hours").notNull().default(0),
  nightPay: integer("night_pay").notNull().default(0),
  missionAllowance: integer("mission_allowance").notNull().default(0),
  maritalAllowance: integer("marital_allowance").notNull().default(0),
  childAllowance: integer("child_allowance").notNull().default(0),
  bonus: integer("bonus").notNull().default(0),
  insurance: integer("insurance").notNull().default(0),
  employerInsurance: integer("employer_insurance").notNull().default(0),
  tax: integer("tax").notNull().default(0),
  deductions: integer("deductions").notNull().default(0),
  advanceDeduction: integer("advance_deduction").notNull().default(0),
  netPay: integer("net_pay").notNull(),
  status: text("status").notNull().default("draft"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("payroll_employee_month_idx").on(t.employeeId, t.month)]);

export const settings = pgTable("settings", {
  id: text("id").primaryKey().default("general"),
  companyName: text("company_name").notNull().default("پارک آبی آبان"),
  ticketQuota: integer("ticket_quota").notNull().default(4), // deprecated: replaced by `amenities`, kept to avoid a destructive column drop
  amenities: jsonb("amenities").$type<{ id: string; title: string; monthlyLimit: number }[]>().notNull().default([]),
  advanceLimit: integer("advance_limit").notNull().default(10000000),
  leaveApprovalSteps: integer("leave_approval_steps").notNull().default(2),
  insurancePercent: integer("insurance_percent").notNull().default(7),
  employerInsurancePercent: integer("employer_insurance_percent").notNull().default(23),
  taxPercent: integer("tax_percent").notNull().default(10),
  taxExemption: integer("tax_exemption").notNull().default(24000000),
  maritalAllowance: integer("marital_allowance").notNull().default(1500000),
  childAllowance: integer("child_allowance").notNull().default(750000),
  maxChildrenAllowance: integer("max_children_allowance").notNull().default(2),
});

export const messages = pgTable("messages", {
  id: uuid("id").defaultRandom().primaryKey(),
  senderId: uuid("sender_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  recipientId: uuid("recipient_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  body: text("body").notNull().default(""),
  attachment: text("attachment").notNull().default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  readAt: timestamp("read_at"),
}, (t) => [index("message_recipient_idx").on(t.recipientId, t.readAt), index("message_sender_idx").on(t.senderId)]);

export const notices = pgTable("notices", {
  id: uuid("id").defaultRandom().primaryKey(),
  title: text("title").notNull(),
  body: text("body").notNull().default(""),
  image: text("image").notNull().default(""),
  createdBy: text("created_by").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const noticeReads = pgTable("notice_reads", {
  id: uuid("id").defaultRandom().primaryKey(),
  noticeId: uuid("notice_id").references(() => notices.id, { onDelete: "cascade" }).notNull(),
  userId: uuid("user_id").references(() => users.id, { onDelete: "cascade" }).notNull(),
  readAt: timestamp("read_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("notice_read_unique").on(t.noticeId, t.userId)]);

export const smsLogs = pgTable("sms_logs", {
  id: uuid("id").defaultRandom().primaryKey(),
  phone: text("phone").notNull(),
  title: text("title").notNull().default(""),
  body: text("body").notNull().default(""),
  provider: text("provider").notNull().default("disabled"),
  status: text("status").notNull().default("skipped"),
  error: text("error").notNull().default(""),
  createdAt: timestamp("created_at").defaultNow().notNull(),
}, (t) => [index("sms_log_phone_idx").on(t.phone)]);

export const talentVersions = pgTable("talent_versions", { key: text("key").primaryKey(), createdAt: timestamp("created_at").defaultNow().notNull() });
export const jobs = pgTable("talent_jobs", {
  id: uuid("id").defaultRandom().primaryKey(), title: text("title").notNull(), department: text("department").notNull(), location: text("location").notNull().default("تهران"), contract: text("contract").notNull().default("تمام‌وقت"), description: text("description").notNull(), requirements: text("requirements").notNull().default(""), status: text("status").notNull().default("draft"), openings: integer("openings").notNull().default(1), salaryMin: integer("salary_min").notNull().default(0), salaryMax: integer("salary_max").notNull().default(0), hiringCost: integer("hiring_cost").notNull().default(0), deadline: text("deadline").notNull(), createdAt: timestamp("created_at").defaultNow().notNull(),
}, t => [index("talent_job_department_idx").on(t.department)]);
export const applicants = pgTable("talent_applicants", {
  id: uuid("id").defaultRandom().primaryKey(), jobId: uuid("job_id").notNull().references(() => jobs.id, { onDelete: "cascade" }), employeeId: uuid("employee_id").references(() => employees.id, { onDelete: "set null" }), name: text("name").notNull(), email: text("email").notNull(), phone: text("phone").notNull().default(""), source: text("source").notNull().default("سایت مجموعه"), tags: jsonb("tags").$type<string[]>().notNull().default([]), skills: text("skills").notNull().default(""), experience: integer("experience").notNull().default(0), expectedSalary: integer("expected_salary").notNull().default(0), stage: text("stage").notNull().default("new"), rating: integer("rating").notNull().default(0), summary: text("summary").notNull().default(""), createdAt: timestamp("created_at").defaultNow().notNull(), updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, t => [uniqueIndex("applicant_email_job_idx").on(t.email, t.jobId)]);
export const applicantNotes = pgTable("talent_applicant_notes", {
  id: uuid("id").defaultRandom().primaryKey(), applicantId: uuid("applicant_id").notNull().references(() => applicants.id, { onDelete: "cascade" }), actorName: text("actor_name").notNull(), kind: text("kind").notNull().default("note"), body: text("body").notNull(), score: integer("score").notNull().default(0), createdAt: timestamp("created_at").defaultNow().notNull(),
});
export const resumeFiles = pgTable("talent_resume_files", {
  id: uuid("id").defaultRandom().primaryKey(), applicantId: uuid("applicant_id").notNull().references(() => applicants.id, { onDelete: "cascade" }), name: text("name").notNull(), size: integer("size").notNull(), content: text("content").notNull(),
});
export const interviews = pgTable("talent_interviews", {
  id: uuid("id").defaultRandom().primaryKey(), applicantId: uuid("applicant_id").notNull().references(() => applicants.id, { onDelete: "cascade" }), interviewerId: uuid("interviewer_id").notNull().references(() => employees.id, { onDelete: "cascade" }), startsAt: timestamp("starts_at", { withTimezone: true }).notNull(), duration: integer("duration").notNull().default(45), mode: text("mode").notNull().default("حضوری"), location: text("location").notNull().default(""), status: text("status").notNull().default("scheduled"), feedback: text("feedback").notNull().default(""), score: integer("score").notNull().default(0),
}, t => [index("interview_schedule_idx").on(t.interviewerId, t.startsAt)]);
export const onboardingTemplates = pgTable("talent_onboarding_templates", {
  id: uuid("id").defaultRandom().primaryKey(), title: text("title").notNull(), department: text("department").notNull().default("all"), welcome: text("welcome").notNull(), tasks: jsonb("tasks").$type<TaskSpec[]>().notNull().default([]),
});
export const onboardingPlans = pgTable("talent_onboarding_plans", {
  id: uuid("id").defaultRandom().primaryKey(), templateId: uuid("template_id").references(() => onboardingTemplates.id, { onDelete: "set null" }), employeeId: uuid("employee_id").notNull().references(() => employees.id, { onDelete: "cascade" }), title: text("title").notNull(), welcome: text("welcome").notNull(), startDate: text("start_date").notNull(), createdAt: timestamp("created_at").defaultNow().notNull(),
});
export const onboardingTasks = pgTable("talent_onboarding_tasks", {
  id: uuid("id").defaultRandom().primaryKey(), planId: uuid("plan_id").notNull().references(() => onboardingPlans.id, { onDelete: "cascade" }), title: text("title").notNull(), ownerRole: text("owner_role").notNull().default("employee"), dueDate: text("due_date").notNull(), done: boolean("done").notNull().default(false), completedBy: text("completed_by").notNull().default(""), completedAt: timestamp("completed_at"),
});
export const courses = pgTable("talent_courses", {
  id: uuid("id").defaultRandom().primaryKey(), title: text("title").notNull(), category: text("category").notNull(), instructor: text("instructor").notNull(), description: text("description").notNull(), level: text("level").notNull().default("مقدماتی"), status: text("status").notNull().default("draft"), lessons: jsonb("lessons").$type<Lesson[]>().notNull().default([]), quiz: jsonb("quiz").$type<QuizQuestion[]>().notNull().default([]), passScore: integer("pass_score").notNull().default(70), createdAt: timestamp("created_at").defaultNow().notNull(),
});
export const enrollments = pgTable("talent_enrollments", {
  id: uuid("id").defaultRandom().primaryKey(), courseId: uuid("course_id").notNull().references(() => courses.id, { onDelete: "cascade" }), employeeId: uuid("employee_id").notNull().references(() => employees.id, { onDelete: "cascade" }), dueDate: text("due_date").notNull(), completedLessons: jsonb("completed_lessons").$type<string[]>().notNull().default([]), score: integer("score"), status: text("status").notNull().default("assigned"), completedAt: timestamp("completed_at"), createdAt: timestamp("created_at").defaultNow().notNull(),
}, t => [uniqueIndex("course_employee_idx").on(t.courseId, t.employeeId)]);
export const surveys = pgTable("talent_surveys", {
  id: uuid("id").defaultRandom().primaryKey(), title: text("title").notNull(), description: text("description").notNull(), department: text("department").notNull().default("all"), deadline: text("deadline").notNull(), status: text("status").notNull().default("draft"), questions: jsonb("questions").$type<SurveyQuestion[]>().notNull(), createdAt: timestamp("created_at").defaultNow().notNull(),
});
export const surveyAudience = pgTable("talent_survey_audience", {
  id: uuid("id").defaultRandom().primaryKey(), surveyId: uuid("survey_id").notNull().references(() => surveys.id, { onDelete: "cascade" }), employeeId: uuid("employee_id").references(() => employees.id, { onDelete: "set null" }), department: text("department").notNull(), participated: boolean("participated").notNull().default(false),
}, t => [uniqueIndex("survey_audience_unique").on(t.surveyId, t.employeeId)]);
export const surveyResponses = pgTable("talent_survey_responses", {
  id: uuid("id").defaultRandom().primaryKey(), surveyId: uuid("survey_id").notNull().references(() => surveys.id, { onDelete: "cascade" }), department: text("department").notNull(), answers: jsonb("answers").$type<Record<string, number>>().notNull(),
});
export const improvements = pgTable("talent_improvements", {
  id: uuid("id").defaultRandom().primaryKey(), surveyId: uuid("survey_id").notNull().references(() => surveys.id, { onDelete: "cascade" }), title: text("title").notNull(), employeeId: uuid("employee_id").notNull().references(() => employees.id, { onDelete: "cascade" }), dueDate: text("due_date").notNull(), status: text("status").notNull().default("open"), notes: text("notes").notNull().default(""),
});
export const salaryPolicies = pgTable("talent_salary_policies", {
  id: uuid("id").defaultRandom().primaryKey(), department: text("department").notNull().unique(), minimum: integer("minimum").notNull(), midpoint: integer("midpoint").notNull(), maximum: integer("maximum").notNull(), increasePercent: integer("increase_percent").notNull().default(20), complexityPercent: integer("complexity_percent").notNull().default(100), strategy: text("strategy").notNull().default("market"), source: text("source").notNull().default("بازه پیشنهادی داخلی؛ داده نمونه"),
});
export const salaryScenarios = pgTable("talent_salary_scenarios", {
  id: uuid("id").defaultRandom().primaryKey(), title: text("title").notNull(), status: text("status").notNull().default("draft"), entries: jsonb("entries").$type<SalaryEntry[]>().notNull(), createdBy: text("created_by").notNull(), createdAt: timestamp("created_at").defaultNow().notNull(), appliedAt: timestamp("applied_at"),
});
export const talentEvents = pgTable("talent_events", {
  id: uuid("id").defaultRandom().primaryKey(), module: text("module").notNull(), title: text("title").notNull(), actorName: text("actor_name").notNull(), employeeId: uuid("employee_id").references(() => employees.id, { onDelete: "cascade" }), createdAt: timestamp("created_at").defaultNow().notNull(),
});
