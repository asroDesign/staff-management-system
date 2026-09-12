"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import type { Employee, Page, Payroll, Request, Role, Workspace } from "@/lib/types";
import { fa, pageLabels } from "@/lib/types";
import { ApiError, apiRequest, connectionError } from "@/lib/api-client";
import { readBrowserValue } from "@/lib/browser-storage";
import { Check, CircleAlert, ExternalLink, LoaderCircle, RefreshCw, Waves, X } from "lucide-react";

export type ModalState = { type: "employee"; employee?: Employee; candidate?: boolean } | { type: "employee-detail"; employee: Employee } | { type: "request"; requestType: string; request?: Request } | { type: "request-detail"; request: Request } | { type: "payroll"; payroll?: Payroll; month?: string } | { type: "payslip"; payroll: Payroll } | { type: "import"; month?: string } | { type: "confirm"; title: string; description: string; action: string; payload: Record<string, unknown> } | { type: "help" } | null;
interface ContextValue { data: Workspace; page: Page; navigate: (page: Page) => void; search: string; setSearch: (s: string) => void; modal: ModalState; setModal: (m: ModalState) => void; busy: boolean; mutate: (action: string, payload: Record<string, unknown>, message?: string) => Promise<boolean>; refresh: () => Promise<void>; notify: (message: string, error?: boolean) => void; switchRole: (role: Role) => Promise<void> }
const Context = createContext<ContextValue | null>(null);
export const useWorkspace = () => { const context = useContext(Context); if (!context) throw new Error("Workspace provider is required"); return context; };

async function loadWorkspace(signal?: AbortSignal, onRetry?: (attempt: number) => void): Promise<Workspace> {
  const result = await apiRequest<Workspace>("/api/workspace", { signal }, { onRetry });
  if (!result.user?.id || !result.settings || !Array.isArray(result.employees) || !Array.isArray(result.requests) || !Array.isArray(result.payrolls) || !Array.isArray(result.events)) {
    throw new ApiError("اطلاعات فضای کاری کامل دریافت نشد. لطفاً دوباره تلاش کنید.", 200, "INVALID_WORKSPACE");
  }
  return result;
}

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<Workspace | null>(null);
  const [page, setPage] = useState<Page>("dashboard");
  const [search, setSearch] = useState("");
  const [modal, setModal] = useState<ModalState>(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);
  const [retryKey, setRetryKey] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [toast, setToast] = useState<{ message: string; error: boolean } | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const operationInFlight = useRef(false);

  function notify(message: string, isError = false) {
    if (timer.current) clearTimeout(timer.current);
    setToast({ message, error: isError });
    timer.current = setTimeout(() => setToast(null), 4500);
  }

  async function refresh() { setData(await loadWorkspace()); }

  function navigate(next: Page) {
    setPage(next);
    setSearch("");
    window.history.pushState(null, "", next === "dashboard" ? "/" : `/?view=${next}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    setError(null);
    setAttempt(0);

    async function boot() {
      try {
        let workspace: Workspace;
        try {
          workspace = await loadWorkspace(controller.signal, setAttempt);
        } catch (initialError) {
          if (!(initialError instanceof ApiError) || initialError.status !== 401) throw initialError;
          if (readBrowserValue("session", "aban-logged-out")) {
            window.location.replace("/login");
            return;
          }
          try {
            await apiRequest<{ ok: boolean }>("/api/auth/demo", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ role: "admin" }),
              signal: controller.signal,
            });
          } catch (authError) {
            if (authError instanceof ApiError && authError.code === "DEMO_ACCESS_DISABLED") {
              window.location.replace("/login");
              return;
            }
            throw authError;
          }
          try {
            workspace = await loadWorkspace(controller.signal, setAttempt);
          } catch (sessionError) {
            if (sessionError instanceof ApiError && sessionError.status === 401) {
              throw new ApiError("مرورگر اجازه نگهداری کوکی ورود در این قاب را نمی‌دهد. آبان را در یک پنجره مستقل باز کنید یا دسترسی کوکی این سایت را فعال کنید.", 401, "SESSION_UNAVAILABLE");
            }
            throw sessionError;
          }
        }
        if (active) { setData(workspace); setError(null); }
      } catch (failure) {
        if (active && !controller.signal.aborted) setError(connectionError(failure));
      }
    }

    void boot();
    return () => { active = false; controller.abort(); };
  }, [retryKey]);

  useEffect(() => {
    const onPop = () => {
      const view = new URLSearchParams(window.location.search).get("view") as Page;
      setPage(view && view in pageLabels ? view : "dashboard");
      setSearch("");
    };
    onPop();
    window.addEventListener("popstate", onPop);
    return () => { window.removeEventListener("popstate", onPop); if (timer.current) clearTimeout(timer.current); };
  }, []);

  useEffect(() => {
    if (data) return;
    const onOnline = () => setRetryKey(key => key + 1);
    window.addEventListener("online", onOnline);
    return () => window.removeEventListener("online", onOnline);
  }, [data]);

  async function mutate(action: string, payload: Record<string, unknown>, message = "تغییرات با موفقیت ذخیره شد.") {
    if (operationInFlight.current || !data) return false;
    operationInFlight.current = true;
    setBusy(true);
    const previous = data;
    let committed = false;
    if (action === "employee.delete") setData({ ...data, employees: data.employees.filter(e => e.id !== payload.id) });
    if (action === "request.delete") setData({ ...data, requests: data.requests.filter(r => r.id !== payload.id) });
    if (["request.approve", "request.reject", "request.pay"].includes(action)) {
      setData({ ...data, requests: data.requests.map(r => {
        if (r.id !== payload.id) return r;
        if (action === "request.reject") return { ...r, status: "rejected" };
        if (action === "request.pay") return { ...r, status: "paid" };
        const last = r.type === "leave" ? data.settings.leaveApprovalSteps : r.type === "advance" ? 3 : 1;
        return { ...r, status: r.stage >= last ? "approved" : "pending", stage: Math.min(last, r.stage + 1) };
      }) });
    }
    try {
      await apiRequest<{ ok: boolean }>("/api/workspace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action, data: payload }),
      });
      committed = true;
      await refresh();
      notify(message);
      return true;
    } catch (failure) {
      if (committed) {
        notify("تغییرات در سرور ثبت شد، اما دریافت فهرست تازه انجام نشد. صفحه را دوباره بارگذاری کنید؛ نیازی به ثبت مجدد نیست.", true);
        return true;
      }
      setData(previous);
      notify(connectionError(failure).message, true);
      return false;
    } finally { operationInFlight.current = false; setBusy(false); }
  }

  async function switchRole(role: Role) {
    if (operationInFlight.current) return;
    operationInFlight.current = true;
    setBusy(true);
    try {
      await apiRequest<{ ok: boolean }>("/api/auth/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role }),
      });
      await refresh();
      setModal(null);
      navigate("dashboard");
      notify("وارد فضای کاربری نمایشی شدید.");
    } catch (failure) { notify(connectionError(failure).message, true); }
    finally { operationInFlight.current = false; setBusy(false); }
  }

  if (!data) return <div className="boot-screen" aria-busy={!error}>
    <div className="boot-brand"><Waves size={35} /><strong>آبان</strong></div>
    {error ? <>
      <CircleAlert size={36} />
      <h2>{error.code === "SESSION_UNAVAILABLE" ? "نشست ورود در مرورگر ذخیره نشد" : "ارتباط با آبان برقرار نشد"}</h2>
      <p className="connection-description" role="alert">{error.message}</p>
      <div className="connection-actions">
        <button className="btn primary" onClick={() => { setError(null); setRetryKey(key => key + 1); }}><RefreshCw size={16} />تلاش دوباره</button>
        <a className="btn secondary" href="/" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />باز کردن در پنجره مستقل</a>
      </div>
      <a className="connection-login" href="/login">رفتن به صفحه ورود</a>
    </> : <>
      <div className="boot-loader"><LoaderCircle className="spin" size={24} /></div>
      <h2>فضای کاری شما آماده می‌شود</h2>
      <p role="status">{attempt ? `در حال برقراری مجدد ارتباط؛ تلاش ${fa(attempt + 1)} از ۳...` : "یک لحظه تا تجربه‌ای روان‌تر..."}</p>
      <div className="boot-skeleton"><i /><i /><i /></div>
    </>}
  </div>;

  return <Context.Provider value={{ data, page, navigate, search, setSearch, modal, setModal, busy, mutate, refresh, notify, switchRole }}>
    {children}
    {toast && <div className={`toast ${toast.error ? "toast-error" : ""}`} role="status">{toast.error ? <CircleAlert size={20} /> : <Check size={20} />}<span>{toast.message}</span><button aria-label="بستن پیام" onClick={() => setToast(null)}><X size={16} /></button></div>}
  </Context.Provider>;
}
