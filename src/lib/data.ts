import { db } from "@/db";
import { employees, requests, payrolls, settings, requestEvents } from "@/db/schema";
import { eq, desc, inArray } from "drizzle-orm";
import type { User, Workspace } from "@/lib/types";
export async function getWorkspace(user: User): Promise<Workspace> {
  let employeeRows = await db.select().from(employees).orderBy(desc(employees.createdAt));
  if (user.role === "employee") employeeRows = employeeRows.filter(e => e.id === user.employeeId);
  if (user.role === "manager") { const me = employeeRows.find(e => e.id === user.employeeId); employeeRows = employeeRows.filter(e => e.department === me?.department); }
  const ids = employeeRows.map(e => e.id);
  const restricted = user.role === "employee" || user.role === "manager";
  const requestRows = ids.length ? await db.select().from(requests).where(restricted ? inArray(requests.employeeId, ids) : undefined).orderBy(desc(requests.createdAt)) : [];
  const salaryRows = user.role === "manager" ? [] : await db.select().from(payrolls).where(user.role === "employee" && user.employeeId ? eq(payrolls.employeeId, user.employeeId) : undefined).orderBy(desc(payrolls.month), desc(payrolls.createdAt));
  const [config] = await db.select().from(settings).limit(1);
  const eventRows = requestRows.length ? await db.select().from(requestEvents).where(inArray(requestEvents.requestId, requestRows.map(r => r.id))).orderBy(desc(requestEvents.createdAt)).limit(200) : [];
  // Sensitive personal documents, birth date and home address are only visible to the employee themself and the system admin.
  if (user.role === "manager" || user.role === "finance") employeeRows = employeeRows.map(e => ({ ...e, address: "", nationalIdFront: "", nationalIdBack: "", identityPages: [], otherDocuments: [], birthDate: "" }));
  if (user.role === "manager") employeeRows = employeeRows.map(e => ({ ...e, baseSalary: 0, nationalId: "", insuranceNumber: "" }));
  return JSON.parse(JSON.stringify({ user, employees: employeeRows, requests: requestRows, payrolls: salaryRows, settings: config, events: eventRows }));
}
