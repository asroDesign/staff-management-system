"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Clock3, Eye, ImagePlus, LoaderCircle, Megaphone, Plus, ShieldCheck, Users, X } from "lucide-react";
import { Avatar, EmptyState, Field, ImageLightbox, Modal, PageHeading, RelativeTime, SubmitButton } from "@/components/ui";
import { resizeImageFile, ImageInputError } from "@/lib/image-client";
import { dateFa, fa } from "@/lib/types";
import type { NoticeReader } from "@/lib/comms-types";
import { useComms } from "./context";

export function NoticesPage() {
  const { data, act, busy, reload } = useComms();
  const [composing, setComposing] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const [readers, setReaders] = useState<string | null>(null);

  return <div className="page-enter comms-page"><PageHeading eyebrow="اطلاع‌رسانی سازمانی" title="ابلاغیه‌ها" subtitle="ابلاغ متن یا تصویر به همه کارکنان و مدیران، با پیگیری دقیق زمان مشاهده هر نفر.">{data.canBroadcast && <button className="btn primary" onClick={() => setComposing(true)}><Plus size={17} />ابلاغیه جدید</button>}</PageHeading>
    <div className="comms-notice-grid">{data.notices.length ? data.notices.map(n => <article className={`card comms-notice-card ${n.readAt ? "" : "unread"}`} key={n.id}>
      {!n.readAt && <span className="comms-notice-dot" aria-hidden />}
      {n.image && <button className="comms-notice-image" onClick={() => setOpen(n.id)}><img src={n.image} alt={n.title} /></button>}
      <div className="comms-notice-body">
        <h3>{n.title}</h3>
        <p>{n.body ? (n.body.length > 160 ? `${n.body.slice(0, 160)}…` : n.body) : ""}</p>
        <div className="comms-notice-meta"><span>{n.createdBy}</span><span>·</span><RelativeTime date={n.createdAt} /></div>
        <div className="comms-notice-actions">
          <button className="btn small secondary" onClick={() => setOpen(n.id)}><Eye size={14} />{n.readAt ? "مشاهده مجدد" : "مشاهده و علامت‌گذاری"}</button>
          {data.canBroadcast && <button className="text-button" onClick={() => setReaders(n.id)}><Users size={14} />{fa(n.readCount)} از {fa(n.audienceCount)} نفر دیده‌اند</button>}
          {n.readAt && <span className="comms-seen-tag"><CheckCircle2 size={13} />دیده‌شده در {dateFa(n.readAt)}</span>}
        </div>
      </div>
    </article>) : <EmptyState title="ابلاغیه‌ای ثبت نشده است" description="ابلاغیه‌های تازه مدیریت اینجا نمایش داده می‌شود." icon={Megaphone} />}</div>
    <p className="page-footnote"><ShieldCheck size={14} />زمان مشاهده هر ابلاغیه برای پیگیری مدیریت ثبت می‌شود.</p>
    {composing && <ComposeNotice close={() => setComposing(false)} />}
    {open && <NoticeDetail id={open} close={() => setOpen(null)} />}
    {readers && <ReadersModal id={readers} close={() => setReaders(null)} />}
  </div>;
  function NoticeDetail({ id, close }: { id: string; close: () => void }) {
    const notice = data.notices.find(n => n.id === id);
    useEffect(() => { if (notice && !notice.readAt) void act("notice.read", { id }).then(() => reload()); }, [id]);
    if (!notice) return null;
    return <Modal title={notice.title} subtitle={`${notice.createdBy} · ${dateFa(notice.createdAt)}`} onClose={close} wide>
      <div className="modal-body comms-notice-detail">{notice.image && <img src={notice.image} alt={notice.title} className="comms-notice-detail-image" />}<p>{notice.body}</p><div className="inline-info"><ShieldCheck size={16} />زمان مشاهده شما توسط مدیریت قابل پیگیری است.</div></div>
      <div className="modal-footer"><button className="btn secondary" onClick={close}>بستن</button></div>
    </Modal>;
  }
  function ReadersModal({ id, close }: { id: string; close: () => void }) {
    const [list, setList] = useState<NoticeReader[] | null>(null);
    const [error, setError] = useState("");
    useEffect(() => { let alive = true; act("notice.readers", { id }).then(r => { if (alive && r) setList(r.readers as NoticeReader[]); else if (alive) setError("دریافت فهرست بازدیدها انجام نشد."); }); return () => { alive = false; }; }, [id]);
    const notice = data.notices.find(n => n.id === id);
    return <Modal title="وضعیت مشاهده ابلاغیه" subtitle={notice?.title} onClose={close} wide>
      <div className="modal-body">{!list ? <div className="talent-loading" style={{ minHeight: 160 }}><LoaderCircle className="spin" size={22} /></div> : error ? <p className="inline-error">{error}</p> : <div className="comms-readers-list">{list.map(r => <div className="comms-reader-row" key={r.userId}><Avatar name={r.name} size="small" /><div><strong>{r.name}</strong><small>{r.role}{r.department ? ` · ${r.department}` : ""}</small></div>{r.readAt ? <span className="comms-seen-tag"><CheckCircle2 size={13} />{dateFa(r.readAt)}</span> : <span className="comms-unseen-tag"><Clock3 size={13} />هنوز مشاهده نکرده</span>}</div>)}</div>}</div>
      <div className="modal-footer"><button className="btn secondary" onClick={close}>بستن</button></div>
    </Modal>;
  }
}

function ComposeNotice({ close }: { close: () => void }) {
  const { act, busy, reload } = useComms();
  const [title, setTitle] = useState(""); const [body, setBody] = useState(""); const [image, setImage] = useState(""); const [busyImage, setBusyImage] = useState(false); const [error, setError] = useState(""); const input = useRef<HTMLInputElement>(null);
  async function handleImage(file?: File) { if (!file) return; setBusyImage(true); setError(""); try { setImage(await resizeImageFile(file, 1200)); } catch (e) { setError(e instanceof ImageInputError ? e.message : "بارگذاری تصویر ناموفق بود."); } finally { setBusyImage(false); if (input.current) input.current.value = ""; } }
  async function submit(e: FormEvent) { e.preventDefault(); if (!body.trim() && !image) { setError("متن ابلاغیه یا تصویر آن را وارد کنید."); return; } const result = await act("notice.create", { title, body, image }); if (result) { await reload(); close(); } }
  return <Modal title="ثبت ابلاغیه جدید" subtitle="این ابلاغیه برای همه کارکنان و مدیران ارسال می‌شود." onClose={close} wide>
    <form onSubmit={submit}><div className="modal-body">
      <Field label="عنوان ابلاغیه *"><input required maxLength={200} value={title} onChange={e => setTitle(e.target.value)} placeholder="مثلاً تغییر ساعات کاری" /></Field>
      <Field label="متن ابلاغیه" className="spaced-field"><textarea rows={5} maxLength={6000} value={body} onChange={e => setBody(e.target.value)} placeholder="متن کامل ابلاغیه را بنویسید..." /></Field>
      <div className="form-section-label spaced-field"><ImagePlus size={16} />تصویر ابلاغیه (اختیاری)</div>
      {image ? <div className="comms-notice-image-picker"><img src={image} alt="پیش‌نمایش ابلاغیه" /><button type="button" className="icon-button danger-hover" aria-label="حذف تصویر" onClick={() => setImage("")}><X size={15} /></button></div> : <button type="button" className="doc-upload-card" onClick={() => input.current?.click()} disabled={busyImage}>{busyImage ? <LoaderCircle size={20} className="spin" /> : <><ImagePlus size={22} /><span className="doc-upload-label">افزودن تصویر</span></>}</button>}
      <input ref={input} type="file" accept="image/jpeg,image/png" className="hidden-file-input" onChange={e => handleImage(e.target.files?.[0])} />
      {error && <div className="inline-error">{error}</div>}
      <div className="inline-info"><ShieldCheck size={16} />ابلاغیه بلافاصله برای همه حساب‌های فعال ارسال و پیامک اطلاع‌رسانی نیز (در صورت فعال بودن) ارسال می‌شود.</div>
    </div><div className="modal-footer"><button type="button" className="btn secondary" onClick={close}>انصراف</button><SubmitButton busy={busy}>ارسال ابلاغیه<Megaphone size={16} /></SubmitButton></div></form>
  </Modal>;
}
