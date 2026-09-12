"use client";
import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { LoaderCircle, RefreshCw, Waves } from "lucide-react";
import { apiRequest, connectionError } from "@/lib/api-client";
import { useWorkspace } from "@/components/workspace-context";
import type { TalentData } from "@/lib/talent-types";
export interface TalentDialog { kind: string; item?: Record<string, unknown>; extra?: Record<string, unknown> }
interface TalentContextValue { data: TalentData; busy: boolean; dialog: TalentDialog | null; open: (kind: string, item?: object, extra?: object) => void; close: () => void; reload: () => Promise<void>; mutate: (action: string, data: Record<string, unknown>, message?: string) => Promise<Record<string, unknown> | null> }
const Context = createContext<TalentContextValue | null>(null);
export function useTalent() { const value = useContext(Context); if (!value) throw new Error("TalentProvider missing"); return value; }
export function TalentProvider({ children }: { children: ReactNode }) {
  const { data: workspace, notify, refresh } = useWorkspace(); const [data, setData] = useState<TalentData | null>(null); const [busy, setBusy] = useState(false); const [error, setError] = useState(""); const [version, setVersion] = useState(0); const [dialog, setDialog] = useState<TalentDialog | null>(null); const running = useRef(false);
  async function reload() { const result = await apiRequest<TalentData>("/api/talent"); setData(result); }
  useEffect(() => { const c = new AbortController(); setData(null); setError(""); setDialog(null); apiRequest<TalentData>("/api/talent", { signal: c.signal }).then(setData).catch(e => { if (!c.signal.aborted) setError(connectionError(e).message); }); return () => c.abort(); }, [workspace.user.id, version]);
  function open(kind: string, item?: object, extra?: object) { setDialog({ kind, item: item as Record<string, unknown>, extra: extra as Record<string, unknown> }); }
  function close() { if (!running.current) setDialog(null); }
  async function mutate(action: string, payload: Record<string, unknown>, message = "تغییرات با موفقیت ذخیره شد.") {
    if (running.current || !data) return null; running.current = true; setBusy(true); const previous = data; let committed = false;
    if (action === "applicant.move") setData({ ...data, applicants: data.applicants.map(a => a.id === payload.id ? { ...a, stage: String(payload.stage) } : a) });
    if (action === "task.toggle") setData({ ...data, tasks: data.tasks.map(t => t.id === payload.id ? { ...t, done: !!payload.done } : t) });
    try { const result = await apiRequest<Record<string, unknown>>("/api/talent", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, data: payload }) }); committed = true; await reload(); if (["applicant.hire", "salary.apply"].includes(action)) await refresh(); notify(message); return result; }
    catch (e) { if (committed) { notify("تغییر ثبت شد، اما تازه‌سازی اطلاعات انجام نشد؛ دوباره بارگذاری کنید و عملیات را تکرار نکنید.", true); return { ok: true }; } setData(previous); notify(connectionError(e).message, true); return null; }
    finally { running.current = false; setBusy(false); }
  }
  if (!data) return <section className="card talent-loading" aria-busy={!error}><span className="tl-loading-icon">{error ? <RefreshCw size={30} /> : <Waves size={32} />}</span><h2>{error ? "اطلاعات این بخش دریافت نشد" : "در حال آماده‌سازی مسیر رشد تیم"}</h2><p>{error || "فرصت‌های تازه، یادگیری بیشتر، همراهی بهتر."}</p>{error ? <button className="btn primary" onClick={() => setVersion(v => v + 1)}>تلاش دوباره</button> : <LoaderCircle size={20} className="spin" />}</section>;
  return <Context.Provider value={{ data, busy, dialog, open, close, reload, mutate }}>{children}</Context.Provider>;
}
