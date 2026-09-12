"use client";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { LoaderCircle, RefreshCw, Waves } from "lucide-react";
import { apiRequest, connectionError } from "@/lib/api-client";
import { useWorkspace } from "@/components/workspace-context";
import type { CommsData } from "@/lib/comms-types";

interface CommsContextValue { data: CommsData; busy: boolean; reload: () => Promise<void>; act: (action: string, data: Record<string, unknown>) => Promise<Record<string, unknown> | null> }
const Context = createContext<CommsContextValue | null>(null);
export function useComms() { const value = useContext(Context); if (!value) throw new Error("CommsProvider missing"); return value; }

export function CommsProvider({ children }: { children: ReactNode }) {
  const { data: workspace, notify } = useWorkspace();
  const [data, setData] = useState<CommsData | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [version, setVersion] = useState(0);

  async function reload() { setData(await apiRequest<CommsData>("/api/comms")); }

  useEffect(() => {
    const controller = new AbortController();
    setError("");
    apiRequest<CommsData>("/api/comms", { signal: controller.signal }).then(setData).catch(e => { if (!controller.signal.aborted) setError(connectionError(e).message); });
    return () => controller.abort();
  }, [workspace.user.id, version]);

  async function act(action: string, payload: Record<string, unknown>) {
    if (busy) return null;
    setBusy(true);
    try { const result = await apiRequest<Record<string, unknown>>("/api/comms", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action, data: payload }) }); await reload(); return result; }
    catch (e) { notify(connectionError(e).message, true); return null; }
    finally { setBusy(false); }
  }

  if (!data) return <section className="card talent-loading" aria-busy={!error}>
    <span className="tl-loading-icon">{error ? <RefreshCw size={30} /> : <Waves size={32} />}</span>
    <h2>{error ? "اطلاعات این بخش دریافت نشد" : "در حال آماده‌سازی فضای گفت‌وگو"}</h2>
    <p>{error || "پیام‌ها و ابلاغیه‌های شما به‌زودی نمایش داده می‌شود."}</p>
    {error ? <button className="btn primary" onClick={() => setVersion(v => v + 1)}>تلاش دوباره</button> : <LoaderCircle size={20} className="spin" />}
  </section>;

  return <Context.Provider value={{ data, busy, reload, act }}>{children}</Context.Provider>;
}
