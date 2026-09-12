"use client";
import { useEffect, useRef, useState } from "react";
import { CalendarDays, ChevronLeft, ChevronRight, Clock3 } from "lucide-react";
import { fa } from "@/lib/types";
import { isoToJalali, jalaliToIso, jalaliWeekday, jalaaliMonthLength, todayJalali, weekdayLabels, jalaliMonthNames } from "@/lib/jalali";

function useClickAway(open: boolean, onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    function handle(event: MouseEvent) { if (ref.current && !ref.current.contains(event.target as Node)) onClose(); }
    function handleKey(event: KeyboardEvent) { if (event.key === "Escape") onClose(); }
    document.addEventListener("mousedown", handle); document.addEventListener("keydown", handleKey);
    return () => { document.removeEventListener("mousedown", handle); document.removeEventListener("keydown", handleKey); };
  }, [open, onClose]);
  return ref;
}

/** Plain Persian-digit conversion (no thousands grouping), appropriate for a bare calendar year. */
const faYear = (n: number) => String(n).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
function formatDisplay(iso: string) { if (!iso) return ""; try { const { jy, jm, jd } = isoToJalali(iso); return `${fa(jd)} ${jalaliMonthNames[jm - 1]} ${faYear(jy)}`; } catch { return ""; } }

export function JalaliDatePicker({ value, onChange, min, max, ariaLabel, placeholder = "انتخاب تاریخ", required, disabled, id }: { value: string; onChange: (iso: string) => void; min?: string; max?: string; ariaLabel?: string; placeholder?: string; required?: boolean; disabled?: boolean; id?: string }) {
  const [open, setOpen] = useState(false);
  const today = todayJalali();
  const [view, setView] = useState(() => { try { return value ? isoToJalali(value) : today; } catch { return today; } });
  const ref = useClickAway(open, () => setOpen(false));
  useEffect(() => { if (open) { try { setView(value ? isoToJalali(value) : today); } catch { setView(today); } } }, [open]);
  const monthLength = jalaaliMonthLength(view.jy, view.jm);
  const firstWeekday = jalaliWeekday(view.jy, view.jm, 1);
  const cells: (number | null)[] = [...Array(firstWeekday).fill(null), ...Array.from({ length: monthLength }, (_, i) => i + 1)];
  function changeMonth(delta: number) { const serial = view.jy * 12 + (view.jm - 1) + delta; setView({ jy: Math.floor(serial / 12), jm: (serial % 12 + 12) % 12 + 1, jd: 1 }); }
  function pick(day: number) { const iso = jalaliToIso(view.jy, view.jm, day); if (min && iso < min) return; if (max && iso > max) return; onChange(iso); setOpen(false); }
  return <div className="jalali-picker" ref={ref}>
    <button type="button" id={id} className={`jalali-input ${disabled ? "disabled" : ""}`} aria-haspopup="dialog" aria-expanded={open} aria-label={ariaLabel || placeholder} disabled={disabled} onClick={() => setOpen(o => !o)}>
      <CalendarDays size={16} /><span className={value ? "" : "placeholder"}>{value ? formatDisplay(value) : placeholder}</span>
    </button>
    {required && <input tabIndex={-1} aria-hidden className="jalali-shadow-input" required value={value} onChange={() => {}} />}
    {open && <div className="jalali-popover" role="dialog" aria-label="تقویم شمسی">
      <div className="jalali-head">
        <button type="button" aria-label="ماه بعد" onClick={() => changeMonth(1)}><ChevronRight size={16} /></button>
        <strong>{jalaliMonthNames[view.jm - 1]} {fa(view.jy)}</strong>
        <button type="button" aria-label="ماه قبل" onClick={() => changeMonth(-1)}><ChevronLeft size={16} /></button>
      </div>
      <div className="jalali-weekdays">{weekdayLabels.map(w => <span key={w}>{w}</span>)}</div>
      <div className="jalali-grid">{cells.map((day, i) => { if (!day) return <span key={`empty-${i}`} className="jalali-cell empty" />; const iso = jalaliToIso(view.jy, view.jm, day); const isToday = view.jy === today.jy && view.jm === today.jm && day === today.jd; const isSelected = iso === value; const disabledCell = (min && iso < min) || (max && iso > max); return <button type="button" key={day} disabled={!!disabledCell} className={`jalali-cell ${isSelected ? "selected" : ""} ${isToday ? "today" : ""}`} onClick={() => pick(day)}>{fa(day)}</button>; })}</div>
      <div className="jalali-footer"><button type="button" className="jalali-today-btn" onClick={() => { const iso = jalaliToIso(today.jy, today.jm, today.jd); if ((!min || iso >= min) && (!max || iso <= max)) { onChange(iso); setOpen(false); } }}>امروز</button>{value && <button type="button" className="jalali-clear-btn" onClick={() => { onChange(""); setOpen(false); }}>پاک کردن</button>}</div>
    </div>}
  </div>;
}

export function JalaliDateTimePicker({ value, onChange, ariaLabel }: { value: string; onChange: (iso: string) => void; ariaLabel?: string }) {
  const [datePart, timePart] = value ? [value.slice(0, 10), value.slice(11, 16)] : ["", "10:00"];
  function set(nextDate: string, nextTime: string) { if (!nextDate) { onChange(""); return; } onChange(`${nextDate}T${nextTime || "00:00"}:00`); }
  return <div className="jalali-datetime">
    <JalaliDatePicker value={datePart} onChange={iso => set(iso, timePart)} ariaLabel={ariaLabel} />
    <div className="jalali-time-input"><Clock3 size={15} /><input type="time" aria-label="ساعت" value={timePart} onChange={e => set(datePart, e.target.value)} /></div>
  </div>;
}

export function JalaliMonthPicker({ value, onChange, ariaLabel = "انتخاب ماه" }: { value: string; onChange: (period: string) => void; ariaLabel?: string }) {
  const [open, setOpen] = useState(false);
  const [y, m] = value.split("-").map(Number);
  const [viewYear, setViewYear] = useState(y || todayJalali().jy);
  const ref = useClickAway(open, () => setOpen(false));
  useEffect(() => { if (open) setViewYear(y || todayJalali().jy); }, [open]);
  return <div className="jalali-picker" ref={ref}>
    <button type="button" className="jalali-input" aria-haspopup="dialog" aria-expanded={open} aria-label={ariaLabel} onClick={() => setOpen(o => !o)}>
      <CalendarDays size={16} /><span>{jalaliMonthNames[(m || 1) - 1]} {fa(y || todayJalali().jy)}</span>
    </button>
    {open && <div className="jalali-popover month-mode" role="dialog" aria-label="انتخاب ماه شمسی">
      <div className="jalali-head"><button type="button" aria-label="سال بعد" onClick={() => setViewYear(v => v + 1)}><ChevronRight size={16} /></button><strong>{fa(viewYear)}</strong><button type="button" aria-label="سال قبل" onClick={() => setViewYear(v => v - 1)}><ChevronLeft size={16} /></button></div>
      <div className="jalali-month-grid">{jalaliMonthNames.map((name, i) => <button type="button" key={name} className={y === viewYear && m === i + 1 ? "selected" : ""} onClick={() => { onChange(`${viewYear}-${String(i + 1).padStart(2, "0")}`); setOpen(false); }}>{name}</button>)}</div>
      <div className="jalali-footer"><button type="button" className="jalali-today-btn" onClick={() => { const t = todayJalali(); onChange(`${t.jy}-${String(t.jm).padStart(2, "0")}`); setOpen(false); }}>ماه جاری</button></div>
    </div>}
  </div>;
}
