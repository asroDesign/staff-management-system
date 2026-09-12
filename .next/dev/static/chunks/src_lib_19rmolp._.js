(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/api-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "apiRequest",
    ()=>apiRequest,
    "connectionError",
    ()=>connectionError
]);
class ApiError extends Error {
    status;
    code;
    retryable;
    constructor(message, status = 0, code = "CONNECTION_ERROR", retryable = false){
        super(message), this.status = status, this.code = code, this.retryable = retryable;
        this.name = "ApiError";
    }
}
function statusMessage(status) {
    if (status === 401) return "نشست ورود شما معتبر نیست. لطفاً دوباره وارد حساب شوید.";
    if (status === 403) return "دسترسی به این عملیات مجاز نیست.";
    if (status === 429) return "تعداد درخواست‌ها زیاد است. کمی بعد دوباره تلاش کنید.";
    if (status >= 500) return "سرویس آبان موقتاً در دسترس نیست. چند لحظه دیگر دوباره تلاش کنید.";
    return "درخواست انجام نشد. لطفاً دوباره تلاش کنید.";
}
function wait(milliseconds, signal) {
    return new Promise((resolve, reject)=>{
        if (signal?.aborted) {
            reject(new DOMException("Aborted", "AbortError"));
            return;
        }
        const abort = ()=>{
            clearTimeout(timer);
            reject(new DOMException("Aborted", "AbortError"));
        };
        const timer = setTimeout(()=>{
            signal?.removeEventListener("abort", abort);
            resolve();
        }, milliseconds);
        signal?.addEventListener("abort", abort, {
            once: true
        });
    });
}
/**
 * Combines the caller's signal (e.g. an effect's cleanup abort) with a timeout
 * into a single signal for `fetch`. Using the platform's own `AbortSignal.any`
 * avoids manually re-implementing signal linking, which previously caused a
 * race: calling `controller.abort()` from inside a synchronously-invoked
 * "abort" listener (e.g. React Strict Mode's immediate effect cleanup, before
 * `fetch` had started) could surface as an unhandled rejection instead of
 * being funneled into this function's own try/catch.
 */ function combinedSignal(external, timeoutMs) {
    const timeout = AbortSignal.timeout(timeoutMs);
    return external ? AbortSignal.any([
        external,
        timeout
    ]) : timeout;
}
async function apiRequest(url, init = {}, options = {}) {
    const safeToRetry = (init.method || "GET").toUpperCase() === "GET";
    const retries = safeToRetry ? options.retries ?? 2 : 0;
    for(let attempt = 0;; attempt++){
        if (init.signal?.aborted) throw new DOMException("Aborted", "AbortError");
        const signal = combinedSignal(init.signal, options.timeoutMs ?? 20000);
        let failure;
        try {
            const headers = new Headers(init.headers);
            if (!headers.has("Accept")) headers.set("Accept", "application/json");
            const response = await fetch(url, {
                ...init,
                headers,
                cache: "no-store",
                credentials: "include",
                signal
            });
            const raw = await response.text();
            let body;
            try {
                body = JSON.parse(raw);
            } catch  {
                body = null;
            }
            const object = body && typeof body === "object" ? body : null;
            if (!response.ok) {
                throw new ApiError(typeof object?.error === "string" ? object.error : statusMessage(response.status), response.status, typeof object?.code === "string" ? object.code : `HTTP_${response.status}`, response.status >= 500 || response.status === 408 || response.status === 429);
            }
            if (!object) throw new ApiError("پاسخ معتبر از سرویس دریافت نشد. اتصال را دوباره بررسی می‌کنیم.", response.status, "INVALID_RESPONSE", true);
            return body;
        } catch (error) {
            if (init.signal?.aborted) throw new DOMException("Aborted", "AbortError");
            failure = error instanceof ApiError ? error : signal.aborted ? new ApiError("دریافت پاسخ از سرور طول کشید. لطفاً دوباره تلاش کنید.", 0, "REQUEST_TIMEOUT", true) : new ApiError("ارتباط با سرور قطع شد. اتصال اینترنت را بررسی کنید و دوباره تلاش کنید.", 0, "NETWORK_ERROR", true);
        }
        // Mutations are never replayed automatically: a lost response must not
        // duplicate a payment, employee record, or request.
        if (attempt >= retries || !failure.retryable) throw failure;
        options.onRetry?.(attempt + 1);
        await wait(Math.min(500 * 2 ** attempt, 2000), init.signal);
    }
}
function connectionError(error) {
    return error instanceof ApiError ? error : new ApiError("برقراری ارتباط انجام نشد. لطفاً دوباره تلاش کنید.");
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/browser-storage.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readBrowserValue",
    ()=>readBrowserValue,
    "removeBrowserValue",
    ()=>removeBrowserValue,
    "writeBrowserValue",
    ()=>writeBrowserValue
]);
const fallback = new Map();
// These helpers store UI preferences only, never session tokens. Some embedded
// or privacy-restricted browsers throw even when the Storage property is read.
function storage(kind) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return kind === "session" ? window.sessionStorage : window.localStorage;
    } catch  {
        return null;
    }
}
function readBrowserValue(kind, key) {
    try {
        return storage(kind)?.getItem(key) ?? fallback.get(`${kind}:${key}`) ?? null;
    } catch  {
        return fallback.get(`${kind}:${key}`) ?? null;
    }
}
function writeBrowserValue(kind, key, value) {
    fallback.set(`${kind}:${key}`, value);
    try {
        storage(kind)?.setItem(key, value);
    } catch  {}
}
function removeBrowserValue(kind, key) {
    fallback.delete(`${kind}:${key}`);
    try {
        storage(kind)?.removeItem(key);
    } catch  {}
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/cando-review.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "featureGroups",
    ()=>featureGroups,
    "reviewSources",
    ()=>reviewSources
]);
const reviewSources = [
    {
        title: "معرفی پلتفرم و سبد محصولات",
        url: "https://hrcando.ir/",
        scope: "پنج محور اصلی چرخه تجربه کارکنان"
    },
    {
        title: "مدیریت جذب و استخدام ATS",
        url: "https://hrcando.ir/ats/",
        scope: "بانک رزومه، کار تیمی، رتبه‌بندی، رویداد، برند کارفرمایی و گزارش"
    },
    {
        title: "راهنمای فایل‌های کارجو",
        url: "https://hrcando.ir/فایل-های-کارجو/",
        scope: "مشاهده و دریافت پیوست‌های پرونده کارجو"
    },
    {
        title: "آنبوردینگ",
        url: "https://hrcando.ir/onboarding/",
        scope: "صفحه خوش‌آمدگویی، الگوهای تکرارپذیر، مسئولیت و شخصی‌سازی"
    },
    {
        title: "مدیریت آموزش کارکنان",
        url: "https://hrcando.ir/learning/",
        scope: "محتوای اختصاصی، تخصیص آموزش، مسیر یادگیری و گزارش پیشرفت"
    },
    {
        title: "نبض‌سنج سازمان",
        url: "https://hrcando.ir/pulse-check/",
        scope: "پرسش‌نامه، تحلیل بخش‌ها، محرمانگی و اقدام اصلاحی"
    },
    {
        title: "دستیار تعیین حقوق",
        url: "https://hrcando.ir/salary-benchmark/",
        scope: "سیاست تیم، پیچیدگی، پیشنهاد حقوق و بودجه‌بندی"
    },
    {
        title: "گزارش استخدام داده‌محور",
        url: "https://hrcando.ir/data-driven-hiring-04/",
        scope: "تعریف شاخص‌های زمان جذب، تعداد مصاحبه و هزینه استخدام"
    },
    {
        title: "سیاست محرمانگی و تقویم",
        url: "https://hrcando.ir/ats/privacy-policy/",
        scope: "حفاظت از داده پرسنلی، دسترسی مجاز و یکپارچه‌سازی تقویم"
    }
];
const featureGroups = [
    {
        id: "ats",
        title: "جذب و استخدام",
        source: 1,
        description: "تبدیل فهرست متقاضیان ساده به مسیر تیمی جذب",
        features: [
            {
                title: "فرصت شغلی و ظرفیت جذب",
                implementation: "ایجاد، ویرایش، پیش‌نویس، انتشار، بستن آگهی، مهلت، شرح و شرایط احراز، بازه حقوق و هزینه جذب.",
                status: "done"
            },
            {
                title: "بانک یکپارچه رزومه",
                implementation: "پرونده تماس، سابقه، مهارت، خلاصه سوابق، برچسب و حقوق درخواستی؛ جستجو، فیلتر و خروجی اکسل.",
                status: "done"
            },
            {
                title: "مسیر مرحله‌ای جذب",
                implementation: "شش مرحله با برد قابل جابه‌جایی و تغییر مرحله از فرم؛ ثبت تاریخچه و کنترل تغییر هم‌زمان.",
                status: "done"
            },
            {
                title: "همکاری تیم استخدام",
                implementation: "مدیر واحد فقط فرصت‌ها و متقاضیان واحد خود را می‌بیند؛ یادداشت و ارزیابی امتیازی با نام ثبت‌کننده.",
                status: "done"
            },
            {
                title: "رتبه‌بندی و ارزیابی",
                implementation: "امتیاز انسانی ۱ تا ۵ و میانگین ارزیابی‌ها. رتبه‌بندی خودکار هوش مصنوعی ادعا نشده است.",
                status: "adapted"
            },
            {
                title: "رویدادهای مصاحبه",
                implementation: "حضوری، آنلاین، تلفنی و آزمون عملی؛ مسئول، ساعت، مدت، محل، بازخورد، لغو و کنترل تداخل زمانی.",
                status: "done"
            },
            {
                title: "رزومه و پیوست",
                implementation: "بارگذاری PDF تا ۲ مگابایت، ذخیره در PostgreSQL، دریافت پس از کنترل دسترسی و حذف پیوست.",
                status: "done"
            },
            {
                title: "صفحه فرصت‌های همکاری",
                implementation: "صفحه عمومی اختصاصی آبان، درخواست استخدام با رضایت‌نامه، جلوگیری از درخواست تکراری و کد پیگیری.",
                status: "done"
            },
            {
                title: "استخدام متصل به پرسنل",
                implementation: "ظرفیت و مرحله کنترل می‌شود؛ ایجاد اتمیک پرونده، حساب کارمند و برنامه ورود انتخابی.",
                status: "done"
            },
            {
                title: "گزارش استخدام داده‌محور",
                implementation: "قیف وضعیت فعلی، سهم منابع، میانگین زمان جذب و هزینه ثبت‌شده به ازای استخدام؛ بدون مقایسه جعلی بازار.",
                status: "done"
            },
            {
                title: "ورود خودکار از جاب‌بوردها",
                implementation: "ثبت منبع به‌صورت دستی و دریافت از صفحه آبان فعال است. اتصال خودکار جاب‌ویژن/جابینجا به قرارداد و API نیاز دارد.",
                status: "external"
            },
            {
                title: "ایمیل، پیامک و Google Calendar",
                implementation: "ثبت رویداد داخلی و دانلود فایل استاندارد ICS فعال است. ارسال ایمیل/پیامک و همگام‌سازی دوطرفه بدون ارائه‌دهنده و OAuth فعال نیست.",
                status: "external"
            }
        ]
    },
    {
        id: "onboarding",
        title: "آنبوردینگ و مسیر ورود",
        source: 3,
        description: "یک شروع شخصی‌سازی‌شده با مسئولیت روشن",
        features: [
            {
                title: "صفحه خوش‌آمدگویی",
                implementation: "صفحه اختصاصی هر همکار با متن قابل ویرایش، تاریخ شروع و راهنمای روزهای اول.",
                status: "done"
            },
            {
                title: "الگوهای قابل استفاده مجدد",
                implementation: "الگوی عمومی یا واحدی، وظایف با روز نسبی و نقش مسئول؛ یک‌بار طراحی و چندین‌بار تخصیص.",
                status: "done"
            },
            {
                title: "شخصی‌سازی برنامه هر همکار",
                implementation: "رونوشت مستقل از الگو، ویرایش متن برنامه و ایجاد، ویرایش یا حذف وظیفه اختصاصی.",
                status: "done"
            },
            {
                title: "پیگیری وظایف و مهلت‌ها",
                implementation: "درصد پیشرفت، وظایف معوق، نام تکمیل‌کننده و کنترل مسئول کارمند / مدیر واحد / منابع انسانی.",
                status: "done"
            },
            {
                title: "اتصال جذب به ورود",
                implementation: "هنگام استخدام از ATS می‌توان برنامه آنبوردینگ را خودکار ایجاد کرد.",
                status: "done"
            },
            {
                title: "صفحه‌ساز چندرسانه‌ای",
                implementation: "راهنمای متنی و دوره‌های دارای پیوند محتوا پیاده‌سازی شده؛ صفحه‌ساز آزاد تصویر/ویدیو و فایل عمومی آنبوردینگ در این نسخه نیست.",
                status: "adapted"
            }
        ]
    },
    {
        id: "learning",
        title: "آموزش و توسعه",
        source: 4,
        description: "کتابخانه داخلی همراه با تکلیف، آزمون و کارنامه",
        features: [
            {
                title: "محتوای آموزشی اختصاصی",
                implementation: "ساخت دوره با دسته، مدرس، سطح، درس‌های متنی و لینک اختیاری ویدیو یا فایل.",
                status: "done"
            },
            {
                title: "نقشه راه یادگیری",
                implementation: "درس‌های مرتب، مشاهده محتوا، ثبت پیشرفت و تکمیل مرحله‌ای مسیر.",
                status: "done"
            },
            {
                title: "محول کردن دوره",
                implementation: "تخصیص به فرد یا گروه واحد با مهلت، ثبت‌نام شخصی و کنترل دسترسی مدیر همان واحد.",
                status: "done"
            },
            {
                title: "ارزیابی و کارنامه",
                implementation: "آزمون چندگزینه‌ای، تصحیح سرور، پنهان بودن پاسخ درست برای کارکنان، حدنصاب و گواهی داخلی قابل چاپ.",
                status: "done"
            },
            {
                title: "گزارش آموزش",
                implementation: "پیشرفت و نمره هر تخصیص، نرخ تکمیل، وضعیت کارنامه و خروجی اکسل محدوده مجاز.",
                status: "done"
            },
            {
                title: "کتابخانه مکتب‌خونه",
                implementation: "حق دسترسی به دوره‌های تجاری همراه این پروژه نیست؛ محتوای نمونه داخلی مستقل تهیه شده است.",
                status: "external"
            }
        ]
    },
    {
        id: "pulse",
        title: "نبض‌سنج و تجربه کارکنان",
        source: 5,
        description: "شنیدن صدای تیم با حفاظت از گزارش فردی",
        features: [
            {
                title: "طراحی و انتشار پرسش‌نامه",
                implementation: "سؤال سفارشی با مقیاس ۱ تا ۵ و eNPS، شاخص، جامعه هدف و مهلت؛ پیش‌نویس پس از انتشار قفل می‌شود.",
                status: "done"
            },
            {
                title: "جامعه پاسخ‌دهندگان و مشارکت",
                implementation: "ثبت فهرست واجدان شرایط هنگام انتشار، نشانگر مشارکت و جلوگیری تراکنشی از پاسخ تکراری.",
                status: "done"
            },
            {
                title: "گزارش بی‌نام",
                implementation: "محتوای پاسخ بدون شناسه فرد و بدون زمان دقیق ذخیره می‌شود؛ نام پاسخ‌دهندگان در API گزارش منتشر نمی‌شود.",
                status: "done"
            },
            {
                title: "تحلیل شاخص و نقشه واحدها",
                implementation: "پس از پایان دوره و حداقل ۵ پاسخ؛ امتیاز صفر تا صد، eNPS و نقشه واحدها با سرکوب گروه کوچک.",
                status: "done"
            },
            {
                title: "اقدام اصلاحی",
                implementation: "پیشنهاد قاعده‌محور بر اساس شاخص کم‌امتیاز و ثبت اقدام با مسئول، مهلت، وضعیت و نتیجه.",
                status: "done"
            },
            {
                title: "پرسش‌نامه‌های استاندارد و بنچ‌مارک",
                implementation: "پرسش‌ها داخلی‌اند و اعتبارسنجی روان‌سنجی یا داده مقایسه سازمان‌های دیگر ندارند. کتابخانه اختصاصی کندو استفاده نشده است.",
                status: "external"
            },
            {
                title: "برش‌های سن و جنسیت",
                implementation: "برای کمینه‌سازی داده شخصی و خطر شناسایی افراد، فقط برش واحدهای دارای حداقل مشارکت پیاده شده است.",
                status: "adapted"
            }
        ]
    },
    {
        id: "salary",
        title: "دستیار تعیین حقوق",
        source: 6,
        description: "شبیه‌سازی داخلی قابل توضیح و قابل بازبینی",
        features: [
            {
                title: "سیاست پرداخت تیم",
                implementation: "بازه کف/میانه/سقف، افزایش هدف، پیچیدگی و استراتژی چهارگانه برای هر واحد.",
                status: "done"
            },
            {
                title: "محاسبه پیشنهاد کارکنان",
                implementation: "فرمول شفاف مبتنی بر حقوق فعلی و سیاست داخلی، بدون کاهش پایه فعلی و با گردکردن هزار تومان.",
                status: "done"
            },
            {
                title: "شبیه‌سازی بودجه",
                implementation: "سناریوی ذخیره‌شونده برای یک یا تمام واحدها، مقایسه نفر‌به‌نفر و تغییر مجموع بودجه.",
                status: "done"
            },
            {
                title: "تأیید و اتصال به حقوق پایه",
                implementation: "فقط مدیر سیستم؛ کنترل تغییر اطلاعات از زمان محاسبه، ثبت تراکنشی و عدم تغییر فیش‌های قبلی.",
                status: "done"
            },
            {
                title: "خروجی تصمیم‌های حقوق",
                implementation: "اکسل سناریو با پایه فعلی، پیشنهاد و اختلاف؛ عنوان و حذف پیش‌نویس قابل مدیریت است.",
                status: "done"
            },
            {
                title: "پنج مدل هوش مصنوعی و داده جاب‌ویژن",
                implementation: "داده تجاری رزومه، آگهی و نظرسنجی جاب‌ویژن و مدل‌های خصوصی در دسترس نیستند؛ محاسبه داخلی جایگزین آن‌ها معرفی شده است.",
                status: "external"
            },
            {
                title: "مصوبات سالانه وزارت کار",
                implementation: "ورودی افزایش و بازه توسط واحد مالی تنظیم می‌شود؛ به‌روزرسانی خودکار قوانین یا تأیید حقوقی ادعا نمی‌شود.",
                status: "adapted"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/comms-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "roleShortLabels",
    ()=>roleShortLabels
]);
const roleShortLabels = {
    admin: "مدیر سیستم",
    manager: "مدیر واحد",
    finance: "واحد مالی",
    employee: "همکار"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/image-client.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageInputError",
    ()=>ImageInputError,
    "estimateDataUriBytes",
    ()=>estimateDataUriBytes,
    "resizeImageFile",
    ()=>resizeImageFile
]);
"use client";
class ImageInputError extends Error {
}
function loadImage(dataUrl) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.onload = ()=>resolve(img);
        img.onerror = ()=>reject(new ImageInputError("فایل تصویری قابل خواندن نیست."));
        img.src = dataUrl;
    });
}
async function resizeImageFile(file, maxDim = 1000, quality = 0.82) {
    if (!/^image\/(jpeg|png|webp)$/.test(file.type)) throw new ImageInputError("فقط تصویر JPEG یا PNG پذیرفته می‌شود.");
    if (file.size > 10 * 1024 * 1024) throw new ImageInputError("حجم فایل انتخابی بیش از حد مجاز (۱۰ مگابایت) است.");
    const original = await new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result));
        reader.onerror = ()=>reject(new ImageInputError("خواندن فایل ناموفق بود."));
        reader.readAsDataURL(file);
    });
    const img = await loadImage(original);
    const scale = Math.min(1, maxDim / Math.max(img.width, img.height));
    const width = Math.max(1, Math.round(img.width * scale));
    const height = Math.max(1, Math.round(img.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new ImageInputError("پردازش تصویر پشتیبانی نمی‌شود.");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(img, 0, 0, width, height);
    return canvas.toDataURL("image/jpeg", quality);
}
function estimateDataUriBytes(dataUri) {
    const base64 = dataUri.split(",")[1] || "";
    return Math.ceil(base64.length * 3 / 4);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/jalali.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isLeapJalaaliYear",
    ()=>isLeapJalaaliYear,
    "isoToJalali",
    ()=>isoToJalali,
    "jalaaliMonthLength",
    ()=>jalaaliMonthLength,
    "jalaliMonthNames",
    ()=>jalaliMonthNames,
    "jalaliToIso",
    ()=>jalaliToIso,
    "jalaliWeekday",
    ()=>jalaliWeekday,
    "toGregorian",
    ()=>toGregorian,
    "toJalaali",
    ()=>toJalaali,
    "todayJalali",
    ()=>todayJalali,
    "weekdayLabels",
    ()=>weekdayLabels
]);
// Gregorian <-> Jalaali (Persian) calendar conversion.
// Implements the Borkowski algorithm (the same well-tested algorithm used by
// the widely-used jalaali-js library) so all calendar pickers in the app can
// convert reliably without adding an external runtime dependency.
const BREAKS = [
    -61,
    9,
    38,
    199,
    426,
    686,
    756,
    818,
    1111,
    1181,
    1210,
    1635,
    2060,
    2097,
    2192,
    2262,
    2324,
    2394,
    2456,
    3178
];
const div = (a, b)=>Math.trunc(a / b);
const mod = (a, b)=>a - Math.trunc(a / b) * b;
function jalCal(jy) {
    const bl = BREAKS.length;
    const gy = jy + 621;
    let leapJ = -14;
    let jp = BREAKS[0];
    let jm = 0;
    let jump = 0;
    if (jy < jp || jy >= BREAKS[bl - 1]) throw new RangeError(`سال شمسی ${jy} خارج از محدوده پشتیبانی‌شده است.`);
    for(let i = 1; i < bl; i++){
        jm = BREAKS[i];
        jump = jm - jp;
        if (jy < jm) break;
        leapJ += div(jump, 33) * 8 + div(mod(jump, 33), 4);
        jp = jm;
    }
    let n = jy - jp;
    leapJ += div(n, 33) * 8 + div(mod(n, 33) + 3, 4);
    if (mod(jump, 33) === 4 && jump - n === 4) leapJ += 1;
    const leapG = div(gy, 4) - div((div(gy, 100) + 1) * 3, 4) - 150;
    const march = 20 + leapJ - leapG;
    if (jump - n < 6) n = n - jump + div(jump + 4, 33) * 33;
    let leap = mod(mod(n + 1, 33) - 1, 4);
    if (leap === -1) leap = 4;
    return {
        leap,
        gy,
        march
    };
}
function g2d(gy, gm, gd) {
    let d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod(gm + 9, 12) + 2, 5) + gd - 34840408;
    d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
    return d;
}
function d2g(jdn) {
    let j = 4 * jdn + 139361631;
    j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908;
    const i = div(mod(j, 1461), 4) * 5 + 308;
    const gd = div(mod(i, 153), 5) + 1;
    const gm = mod(div(i, 153), 12) + 1;
    const gy = div(j, 1461) - 100100 + div(8 - gm, 6);
    return {
        gy,
        gm,
        gd
    };
}
function j2d(jy, jm, jd) {
    const r = jalCal(jy);
    return g2d(r.gy, 3, r.march) + (jm - 1) * 31 - div(jm, 7) * (jm - 7) + jd - 1;
}
function d2j(jdn) {
    const gy = d2g(jdn).gy;
    let jy = gy - 621;
    const r = jalCal(jy);
    const jdn1f = g2d(gy, 3, r.march);
    let k = jdn - jdn1f;
    let jm;
    let jd;
    if (k >= 0) {
        if (k <= 185) {
            jm = 1 + div(k, 31);
            jd = mod(k, 31) + 1;
            return {
                jy,
                jm,
                jd
            };
        }
        k -= 186;
    } else {
        jy -= 1;
        k += 179;
        if (r.leap === 1) k += 1;
    }
    jm = 7 + div(k, 30);
    jd = mod(k, 30) + 1;
    return {
        jy,
        jm,
        jd
    };
}
function isLeapJalaaliYear(jy) {
    return jalCal(jy).leap === 0;
}
function jalaaliMonthLength(jy, jm) {
    if (jm <= 6) return 31;
    if (jm <= 11) return 30;
    return isLeapJalaaliYear(jy) ? 30 : 29;
}
function toJalaali(gy, gm, gd) {
    return d2j(g2d(gy, gm, gd));
}
function toGregorian(jy, jm, jd) {
    return d2g(j2d(jy, jm, jd));
}
function isoToJalali(iso) {
    const [gy, gm, gd] = iso.split("-").map(Number);
    return toJalaali(gy, gm, gd);
}
function jalaliToIso(jy, jm, jd) {
    const { gy, gm: gmm, gd: gdd } = toGregorian(jy, jm, jd);
    return `${String(gy).padStart(4, "0")}-${String(gmm).padStart(2, "0")}-${String(gdd).padStart(2, "0")}`;
}
function jalaliWeekday(jy, jm, jd) {
    const { gy, gm: gmm, gd: gdd } = toGregorian(jy, jm, jd);
    const jsDay = new Date(gy, gmm - 1, gdd).getDay();
    return (jsDay + 1) % 7;
}
function todayJalali() {
    const now = new Date();
    return toJalaali(now.getFullYear(), now.getMonth() + 1, now.getDate());
}
const weekdayLabels = [
    "ش",
    "ی",
    "د",
    "س",
    "چ",
    "پ",
    "ج"
];
const jalaliMonthNames = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/talent-types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "percentComplete",
    ()=>percentComplete,
    "proposedSalary",
    ()=>proposedSalary,
    "sourceLabels",
    ()=>sourceLabels,
    "stages",
    ()=>stages,
    "strategyLabels",
    ()=>strategyLabels,
    "talentPages",
    ()=>talentPages,
    "taskRoleLabels",
    ()=>taskRoleLabels
]);
const stages = [
    {
        id: "new",
        label: "رزومه جدید",
        color: "#8a9caf"
    },
    {
        id: "screening",
        label: "بررسی اولیه",
        color: "#619ec5"
    },
    {
        id: "interview",
        label: "مصاحبه",
        color: "#a18ac6"
    },
    {
        id: "offer",
        label: "پیشنهاد همکاری",
        color: "#d5a24b"
    },
    {
        id: "hired",
        label: "استخدام‌شده",
        color: "#1fa68f"
    },
    {
        id: "rejected",
        label: "عدم همکاری",
        color: "#c68b93"
    }
];
const sourceLabels = [
    "سایت مجموعه",
    "معرفی همکار",
    "جاب‌ویژن (ثبت دستی)",
    "جابینجا (ثبت دستی)",
    "شبکه‌های اجتماعی",
    "سایر"
];
const taskRoleLabels = {
    employee: "همکار جدید",
    manager: "مدیر واحد",
    admin: "منابع انسانی"
};
const strategyLabels = {
    floor: "کف بازه داخلی",
    market: "میانه بازه داخلی",
    competitive: "رقابتی داخلی",
    top: "سقف بازه داخلی"
};
function proposedSalary(current, policy) {
    const anchor = policy.strategy === "floor" ? policy.minimum : policy.strategy === "top" ? policy.maximum : policy.strategy === "competitive" ? (policy.midpoint + policy.maximum) / 2 : policy.midpoint;
    const adjusted = anchor * policy.complexityPercent / 100;
    const raised = current * (1 + policy.increasePercent / 100);
    return Math.max(current, Math.round(Math.max(current, Math.min(policy.maximum * policy.complexityPercent / 100, Math.max(raised, adjusted))) / 1000) * 1000);
}
const percentComplete = (done, total)=>total ? Math.round(done / total * 100) : 0;
const talentPages = [
    "talent",
    "recruitment",
    "onboarding",
    "learning",
    "pulse",
    "compensation",
    "research"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/types.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "advanceBreakdownForMonth",
    ()=>advanceBreakdownForMonth,
    "advanceDeductionForMonth",
    ()=>advanceDeductionForMonth,
    "advanceInstallmentDue",
    ()=>advanceInstallmentDue,
    "calculatePayroll",
    ()=>calculatePayroll,
    "dateFa",
    ()=>dateFa,
    "departments",
    ()=>departments,
    "fa",
    ()=>fa,
    "getPeriod",
    ()=>getPeriod,
    "maritalStatusLabels",
    ()=>maritalStatusLabels,
    "money",
    ()=>money,
    "pageLabels",
    ()=>pageLabels,
    "periodAdd",
    ()=>periodAdd,
    "periodLabel",
    ()=>periodLabel,
    "persianMonths",
    ()=>persianMonths,
    "repaymentLabel",
    ()=>repaymentLabel,
    "requestLabels",
    ()=>requestLabels,
    "roleLabels",
    ()=>roleLabels,
    "statusLabel",
    ()=>statusLabel,
    "todayISO",
    ()=>todayISO
]);
const departments = [
    "عملیات و نجات غریق",
    "اداری و منابع انسانی",
    "مالی و حسابداری",
    "فروش و پذیرش",
    "تأسیسات و نگهداری",
    "خدمات و پشتیبانی"
];
const roleLabels = {
    admin: "مدیر سیستم",
    manager: "مدیر واحد",
    finance: "مدیر مالی",
    employee: "کارمند"
};
const pageLabels = {
    dashboard: "داشبورد",
    employees: "مدیریت کارکنان",
    recruitment: "جذب و استخدام",
    leave: "درخواست‌های مرخصی",
    tickets: "امکانات رفاهی",
    advances: "مساعده و تسهیلات",
    payroll: "حقوق و دستمزد",
    reports: "گزارش‌ها",
    settings: "تنظیمات سیستم",
    profile: "پروفایل من",
    talent: "رشد و تجربه کارکنان",
    onboarding: "آنبوردینگ و مسیر ورود",
    learning: "آکادمی آبان",
    pulse: "نبض سازمان",
    compensation: "دستیار تعیین حقوق",
    research: "گزارش بررسی و قابلیت‌ها",
    messages: "پیام‌ها",
    notices: "ابلاغیه‌ها"
};
const requestLabels = {
    leave: "مرخصی",
    ticket: "امکانات رفاهی",
    advance: "مساعده"
};
const maritalStatusLabels = {
    single: "مجرد",
    married: "متأهل"
};
const repaymentLabel = (months)=>months <= 1 ? "یکجا از حقوق" : `طی ${fa(months)} ماه`;
const fa = (n)=>new Intl.NumberFormat("fa-IR").format(Number(n) || 0);
const money = (n)=>`${fa(n)} تومان`;
const dateFa = (date)=>{
    try {
        return new Intl.DateTimeFormat("fa-IR", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }).format(new Date(date));
    } catch  {
        return "—";
    }
};
const todayISO = ()=>new Date().toISOString().slice(0, 10);
function getPeriod(date = new Date()) {
    const parts = new Intl.DateTimeFormat("en-US-u-ca-persian", {
        year: "numeric",
        month: "2-digit"
    }).formatToParts(date);
    return `${parts.find((p)=>p.type === "year")?.value}-${parts.find((p)=>p.type === "month")?.value}`;
}
const persianMonths = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند"
];
function periodLabel(period) {
    const [year, month] = period.split("-");
    return `${persianMonths[Number(month) - 1]} ${fa(year)}`;
}
function periodAdd(period, delta) {
    const [y, m] = period.split("-").map(Number);
    const serial = y * 12 + (m - 1) + delta;
    return `${Math.floor(serial / 12)}-${String((serial % 12 + 12) % 12 + 1).padStart(2, "0")}`;
}
function statusLabel(request) {
    if (request.status === "pending") return [
        "",
        "در انتظار مدیر واحد",
        "در انتظار منابع انسانی",
        "در انتظار پرداخت"
    ][request.stage] || "در انتظار بررسی";
    return ({
        approved: "تأیید شده",
        rejected: "رد شده",
        paid: "پرداخت شده",
        cancelled: "لغو شده"
    })[request.status] || request.status;
}
function advanceInstallmentDue(request, month) {
    if (request.type !== "advance" || request.status !== "paid" || !request.paidMonth) return 0;
    const months = Math.max(1, request.repaymentMonths || 1);
    const per = Math.ceil(request.amount / months);
    for(let i = 0; i < months; i++){
        if (periodAdd(request.paidMonth, i) === month) return i === months - 1 ? request.amount - per * (months - 1) : per;
    }
    return 0;
}
function advanceDeductionForMonth(requests, employeeId, month) {
    return requests.filter((r)=>r.employeeId === employeeId).reduce((sum, r)=>sum + advanceInstallmentDue(r, month), 0);
}
function advanceBreakdownForMonth(requests, employeeId, month) {
    return requests.filter((r)=>r.employeeId === employeeId).map((r)=>({
            id: r.id,
            title: r.title,
            amount: advanceInstallmentDue(r, month)
        })).filter((r)=>r.amount > 0);
}
function calculatePayroll(input, config) {
    const hourly = input.baseSalary / 220;
    const earned = Math.round(input.baseSalary * input.days / 30);
    const overtimePay = Math.round(hourly * 1.4 * input.overtimeHours);
    const fridayPay = Math.round(hourly * 1.4 * input.fridayHours);
    const nightPay = Math.round(hourly * 1.35 * input.nightHours);
    const missionAllowance = Math.max(0, input.missionAllowance);
    const maritalAllowance = input.maritalStatus === "married" ? config.maritalAllowance : 0;
    const childAllowance = config.childAllowance * Math.min(Math.max(0, input.childrenCount), config.maxChildrenAllowance);
    const gross = earned + overtimePay + fridayPay + nightPay + missionAllowance + input.bonus + maritalAllowance + childAllowance;
    const insuranceBase = earned + maritalAllowance + childAllowance;
    const insurance = Math.round(insuranceBase * config.insurancePercent / 100);
    const employerInsurance = Math.round(insuranceBase * config.employerInsurancePercent / 100);
    const tax = Math.round(Math.max(0, gross - config.taxExemption) * config.taxPercent / 100);
    const advanceDeduction = Math.max(0, input.advanceDeduction);
    const netPay = Math.max(0, gross - insurance - tax - input.deductions - advanceDeduction);
    return {
        baseSalary: earned,
        overtimePay,
        fridayPay,
        nightPay,
        missionAllowance,
        maritalAllowance,
        childAllowance,
        insurance,
        employerInsurance,
        tax,
        advanceDeduction,
        netPay
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_lib_19rmolp._.js.map