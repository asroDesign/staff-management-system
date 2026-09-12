"use client";
import { useState, type FormEvent } from "react";
import { ArrowLeft, BadgeCheck, Building2, ChevronLeft, CircleAlert, ExternalLink, Eye, EyeOff, KeyRound, LoaderCircle, Mail, ShieldCheck, Sparkles, Users, Wallet, Waves } from "lucide-react";
import { Field } from "@/components/ui";
import type { Role, User } from "@/lib/types";
import { ApiError, apiRequest, connectionError } from "@/lib/api-client";
import { removeBrowserValue } from "@/lib/browser-storage";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ApiError | null>(null);

  async function login(role?: Role) {
    if (loading) return;
    setLoading(true);
    setError(null);
    try {
      await apiRequest<{ ok: boolean }>(`/api/auth/${role ? "demo" : "login"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(role ? { role } : { email, password }),
      });
      // Verify that the browser retained the cookie before navigating. Otherwise
      // a blocked cookie would send the user back into an endless login loop.
      const result = await apiRequest<{ user: User | null }>("/api/auth/session");
      if (!result.user) throw new ApiError("مرورگر کوکی ورود را در این قاب ذخیره نکرد. برای ادامه، آبان را در پنجره مستقل باز کنید.", 401, "SESSION_UNAVAILABLE");
      removeBrowserValue("session", "aban-logged-out");
      window.location.href = "/";
    } catch (failure) {
      setError(connectionError(failure));
      setLoading(false);
    }
  }

  function submit(event: FormEvent) { event.preventDefault(); void login(); }

  return <div className="login-page">
    <section className="login-story">
      <img src="/images/waterpark.jpg" alt="پارک آبی آبان" />
      <a href="/" className="login-logo"><Waves size={34} /><div><strong>آبان</strong><small>سامانه مدیریت سرمایه انسانی</small></div></a>
      <div className="login-story-text"><span><Sparkles size={13} />همه‌چیز در یک مسیر روان</span><h1>تیمی هماهنگ،<br /><em>تجربه‌ای بهتر.</em></h1><p>از اولین روز همکاری تا لحظه‌های خوش در آبان؛ همه آنچه برای مدیریت یک تیم همراه نیاز دارید، در یک فضای یکپارچه.</p></div>
      <div className="login-story-footer"><span><Users size={15} />همراه یک تیم هزارنفره</span><span><ShieldCheck size={14} />امن، ساده و همیشه در دسترس</span></div>
    </section>
    <section className="login-panel"><div className="login-form-wrap">
      <a href="/" className="login-back">بازگشت به فضای کاری<ArrowLeft size={13} /></a>
      <div className="login-welcome-icon"><BadgeCheck size={27} /></div>
      <h2>دوباره به آبان خوش آمدید</h2>
      <p className="login-subtitle">برای ورود به فضای کاری خود، اطلاعات حسابتان را وارد کنید.</p>
      <form onSubmit={submit}>
        <Field label="نشانی ایمیل"><div className="login-input-wrap"><Mail size={17} /><input type="email" required autoComplete="username" placeholder="name@aban.ir" dir="ltr" value={email} onChange={e => setEmail(e.target.value)} disabled={loading} /></div></Field>
        <Field label="رمز عبور"><div className="login-input-wrap"><KeyRound size={17} /><input type={visible ? "text" : "password"} className={visible ? "password-visible" : ""} required autoComplete="current-password" placeholder="رمز عبور خود را وارد کنید" dir="ltr" value={password} onChange={e => setPassword(e.target.value)} disabled={loading} /><button type="button" aria-label={visible ? "مخفی کردن رمز" : "نمایش رمز"} onClick={() => setVisible(!visible)}>{visible ? <EyeOff size={16} /> : <Eye size={16} />}</button></div></Field>
        <p className="login-hint"><ShieldCheck size={13} />ایمیل و رمز اولیه را از واحد منابع انسانی دریافت کنید.</p>
        {error && <div className="inline-error" role="alert"><CircleAlert size={17} />{error.message}</div>}
        {error?.code === "SESSION_UNAVAILABLE" && <a className="btn secondary" href="/login" target="_blank" rel="noopener noreferrer"><ExternalLink size={16} />باز کردن در پنجره مستقل</a>}
        <button className="btn primary login-submit" disabled={loading} type="submit">{loading ? "در حال ورود به آبان..." : "ورود به فضای کاری"}{loading ? <LoaderCircle size={17} className="spin" /> : <ArrowLeft size={17} />}</button>
      </form>
      <div className="demo-divider">تجربه سریع با حساب‌های نمایشی</div>
      <div className="login-demo-grid">{[{ role: "admin" as Role, label: "مدیر سیستم", Icon: ShieldCheck }, { role: "employee" as Role, label: "پنل کارمند", Icon: Users }, { role: "manager" as Role, label: "مدیر واحد", Icon: Building2 }, { role: "finance" as Role, label: "واحد مالی", Icon: Wallet }].map(({ role, label, Icon }) => <button disabled={loading} onClick={() => login(role)} key={role}><Icon size={16} />{label}<ChevronLeft size={13} /></button>)}</div>
      <p className="login-legal">این محیط با داده‌های نمونه آماده شده است.<br />آبان؛ همراه تیم شما در هر موج.</p>
    </div></section>
  </div>;
}
