"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import { Check, CheckCheck, ImagePlus, LoaderCircle, MessageSquareText, Search, Send, ShieldCheck, X } from "lucide-react";
import { useWorkspace } from "@/components/workspace-context";
import { Avatar, EmptyState, ImageLightbox, PageHeading, RelativeTime } from "@/components/ui";
import { apiRequest } from "@/lib/api-client";
import { resizeImageFile, ImageInputError } from "@/lib/image-client";
import { fa } from "@/lib/types";
import { roleShortLabels } from "@/lib/comms-types";
import { useComms } from "./context";

interface SearchResult { userId: string; name: string; role: string; code: string | null; department: string | null; avatar: string | null }

export function MessagesPage() {
  const { data, act, busy, reload } = useComms();
  const { data: workspace } = useWorkspace();
  const [selected, setSelected] = useState<string>(data.contacts[0]?.userId || "");
  const [draft, setDraft] = useState("");
  const [attachment, setAttachment] = useState("");
  const [attachBusy, setAttachBusy] = useState(false);
  const [attachError, setAttachError] = useState("");
  const [zoom, setZoom] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [searching, setSearching] = useState(false);
  const canSearch = workspace.user.role === "admin" || workspace.user.role === "manager";
  const fileInput = useRef<HTMLInputElement>(null);
  const threadEnd = useRef<HTMLDivElement>(null);

  const activeContact = data.contacts.find(c => c.userId === selected);
  const thread = useMemo(() => data.messages.filter(m => (m.senderId === selected && m.recipientId === workspace.user.id) || (m.recipientId === selected && m.senderId === workspace.user.id)).sort((a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)), [data.messages, selected, workspace.user.id]);

  useEffect(() => { if (!selected && data.contacts[0]) setSelected(data.contacts[0].userId); }, [data.contacts, selected]);
  useEffect(() => { threadEnd.current?.scrollIntoView({ block: "nearest" }); }, [thread.length, selected]);
  useEffect(() => { if (selected && thread.some(m => m.senderId === selected && !m.readAt)) void act("message.read", { partnerId: selected }); }, [selected, thread]);
  useEffect(() => {
    if (!canSearch || query.trim().length < 2) { setResults([]); return; }
    const timer = setTimeout(async () => { setSearching(true); try { const r = await apiRequest<{ results: SearchResult[] }>("/api/comms", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "contacts.search", data: { query } }) }); setResults(r.results); } catch { setResults([]); } finally { setSearching(false); } }, 350);
    return () => clearTimeout(timer);
  }, [query, canSearch]);

  async function handleAttach(file?: File) { if (!file) return; setAttachBusy(true); setAttachError(""); try { setAttachment(await resizeImageFile(file, 900)); } catch (e) { setAttachError(e instanceof ImageInputError ? e.message : "بارگذاری تصویر ناموفق بود."); } finally { setAttachBusy(false); if (fileInput.current) fileInput.current.value = ""; } }
  async function send() { if (!selected || (!draft.trim() && !attachment)) return; const body = draft; const image = attachment; setDraft(""); setAttachment(""); const ok = await act("message.send", { recipientUserId: selected, body, attachment: image }); if (!ok) { setDraft(body); setAttachment(image); } }
  function pickContact(userId: string) { setSelected(userId); setQuery(""); setResults([]); }
  async function pickSearchResult(r: SearchResult) { pickContact(r.userId); await reload(); }

  return <div className="page-enter comms-page"><PageHeading eyebrow="ارتباط مستقیم و سریع" title="پیام‌ها" subtitle="مکاتبه مستقیم کارمندان با مدیران و برعکس؛ ساده، امن و قابل پیگیری." />
    <section className="card comms-shell">
      <aside className="comms-contacts">
        {canSearch && <div className="comms-search"><Search size={15} /><input value={query} onChange={e => setQuery(e.target.value)} placeholder="جستجوی همکار برای شروع گفت‌وگو..." aria-label="جستجوی مخاطب" />{searching && <LoaderCircle size={14} className="spin" />}</div>}
        {results.length > 0 && <div className="comms-search-results">{results.map(r => <button key={r.userId} onClick={() => pickSearchResult(r)}><Avatar name={r.name} image={r.avatar || undefined} size="small" /><span><strong>{r.name}</strong><small>{r.department || roleShortLabels[r.role]}</small></span></button>)}</div>}
        <div className="comms-contact-list">{data.contacts.length ? data.contacts.map(c => <button key={c.userId} className={`comms-contact-row ${selected === c.userId ? "active" : ""}`} onClick={() => pickContact(c.userId)}>
          <Avatar name={c.name} image={c.avatar || undefined} />
          <span className="comms-contact-info"><strong>{c.name}</strong><small>{c.lastMessageBody ? `${c.lastMessageMine ? "شما: " : ""}${c.lastMessageBody.slice(0, 34)}` : roleShortLabels[c.role] || c.department}</small></span>
          <span className="comms-contact-meta">{c.lastMessageAt && <RelativeTime date={c.lastMessageAt} />}{c.unreadCount > 0 && <b className="comms-unread-badge">{fa(c.unreadCount)}</b>}</span>
        </button>) : <EmptyState title="هنوز مخاطبی ثبت نشده" description="با جستجوی نام همکار، اولین گفت‌وگو را آغاز کنید." icon={MessageSquareText} />}</div>
      </aside>
      <div className="comms-thread">
        {activeContact ? <>
          <header className="comms-thread-head"><Avatar name={activeContact.name} image={activeContact.avatar || undefined} /><div><strong>{activeContact.name}</strong><small>{roleShortLabels[activeContact.role] || activeContact.role}{activeContact.department ? ` · ${activeContact.department}` : ""}</small></div></header>
          <div className="comms-thread-body">{thread.length ? thread.map(m => { const mine = m.senderId === workspace.user.id; return <div key={m.id} className={`comms-bubble-row ${mine ? "mine" : ""}`}><div className="comms-bubble">{m.attachment && <img src={m.attachment} alt="پیوست پیام" onClick={() => setZoom(m.attachment)} role="button" />}{m.body && <p>{m.body}</p>}<span className="comms-bubble-meta">{new Intl.DateTimeFormat("fa-IR", { hour: "2-digit", minute: "2-digit" }).format(new Date(m.createdAt))}{mine && (m.readAt ? <CheckCheck size={13} /> : <Check size={13} />)}</span></div></div>; }) : <EmptyState title="گفت‌وگویی ثبت نشده" description="اولین پیام خود را ارسال کنید." icon={MessageSquareText} />}<div ref={threadEnd} /></div>
          <div className="comms-composer">{attachment && <div className="comms-attach-preview"><img src={attachment} alt="پیش‌نمایش پیوست" /><button type="button" aria-label="حذف پیوست" onClick={() => setAttachment("")}><X size={13} /></button></div>}
            <div className="comms-composer-row"><button type="button" className="icon-button" aria-label="افزودن تصویر" disabled={attachBusy} onClick={() => fileInput.current?.click()}>{attachBusy ? <LoaderCircle size={17} className="spin" /> : <ImagePlus size={18} />}</button><input ref={fileInput} type="file" accept="image/jpeg,image/png" className="hidden-file-input" onChange={e => handleAttach(e.target.files?.[0])} /><textarea rows={1} value={draft} placeholder="پیام خود را بنویسید..." onChange={e => setDraft(e.target.value)} onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); void send(); } }} /><button type="button" className="btn primary comms-send" disabled={busy || (!draft.trim() && !attachment)} onClick={send}>{busy ? <LoaderCircle size={16} className="spin" /> : <Send size={16} />}</button></div>
            {attachError && <small className="upload-error">{attachError}</small>}
          </div>
        </> : <EmptyState title="مخاطبی انتخاب نشده" description="از فهرست کنار صفحه یک همکار را برای گفت‌وگو انتخاب کنید." icon={MessageSquareText} />}
      </div>
    </section>
    <p className="page-footnote"><ShieldCheck size={14} />پیام‌های شما فقط بین فرستنده و گیرنده رد و بدل می‌شود و در صورت فعال بودن پیامک، اطلاع‌رسانی پیامکی نیز ارسال خواهد شد.</p>
    {zoom && <ImageLightbox src={zoom} onClose={() => setZoom(null)} />}
  </div>;
}
