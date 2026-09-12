(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/talent/context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentProvider",
    ()=>TalentProvider,
    "useTalent",
    ()=>useTalent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/refresh-cw.mjs [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/waves-horizontal.mjs [app-client] (ecmascript) <export default as Waves>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace-context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const Context = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
function useTalent() {
    _s();
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(Context);
    if (!value) throw new Error("TalentProvider missing");
    return value;
}
_s(useTalent, "ksutO2/Ix3UeCrGnhyM+QEP505Y=");
function TalentProvider({ children }) {
    _s1();
    const { data: workspace, notify, refresh } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [version, setVersion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [dialog, setDialog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const running = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    async function reload() {
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/api/talent");
        setData(result);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TalentProvider.useEffect": ()=>{
            const c = new AbortController();
            setData(null);
            setError("");
            setDialog(null);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/api/talent", {
                signal: c.signal
            }).then(setData).catch({
                "TalentProvider.useEffect": (e)=>{
                    if (!c.signal.aborted) setError((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionError"])(e).message);
                }
            }["TalentProvider.useEffect"]);
            return ({
                "TalentProvider.useEffect": ()=>c.abort()
            })["TalentProvider.useEffect"];
        }
    }["TalentProvider.useEffect"], [
        workspace.user.id,
        version
    ]);
    function open(kind, item, extra) {
        setDialog({
            kind,
            item: item,
            extra: extra
        });
    }
    function close() {
        if (!running.current) setDialog(null);
    }
    async function mutate(action, payload, message = "تغییرات با موفقیت ذخیره شد.") {
        if (running.current || !data) return null;
        running.current = true;
        setBusy(true);
        const previous = data;
        let committed = false;
        if (action === "applicant.move") setData({
            ...data,
            applicants: data.applicants.map((a)=>a.id === payload.id ? {
                    ...a,
                    stage: String(payload.stage)
                } : a)
        });
        if (action === "task.toggle") setData({
            ...data,
            tasks: data.tasks.map((t)=>t.id === payload.id ? {
                    ...t,
                    done: !!payload.done
                } : t)
        });
        try {
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/api/talent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    action,
                    data: payload
                })
            });
            committed = true;
            await reload();
            if ([
                "applicant.hire",
                "salary.apply"
            ].includes(action)) await refresh();
            notify(message);
            return result;
        } catch (e) {
            if (committed) {
                notify("تغییر ثبت شد، اما تازه‌سازی اطلاعات انجام نشد؛ دوباره بارگذاری کنید و عملیات را تکرار نکنید.", true);
                return {
                    ok: true
                };
            }
            setData(previous);
            notify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionError"])(e).message, true);
            return null;
        } finally{
            running.current = false;
            setBusy(false);
        }
    }
    if (!data) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "card talent-loading",
        "aria-busy": !error,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tl-loading-icon",
                children: error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                    size: 30
                }, void 0, false, {
                    fileName: "[project]/src/components/talent/context.tsx",
                    lineNumber: 25,
                    columnNumber: 124
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$waves$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Waves$3e$__["Waves"], {
                    size: 32
                }, void 0, false, {
                    fileName: "[project]/src/components/talent/context.tsx",
                    lineNumber: 25,
                    columnNumber: 150
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/context.tsx",
                lineNumber: 25,
                columnNumber: 81
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: error ? "اطلاعات این بخش دریافت نشد" : "در حال آماده‌سازی مسیر رشد تیم"
            }, void 0, false, {
                fileName: "[project]/src/components/talent/context.tsx",
                lineNumber: 25,
                columnNumber: 177
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: error || "فرصت‌های تازه، یادگیری بیشتر، همراهی بهتر."
            }, void 0, false, {
                fileName: "[project]/src/components/talent/context.tsx",
                lineNumber: 25,
                columnNumber: 259
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "btn primary",
                onClick: ()=>setVersion((v)=>v + 1),
                children: "تلاش دوباره"
            }, void 0, false, {
                fileName: "[project]/src/components/talent/context.tsx",
                lineNumber: 25,
                columnNumber: 330
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                size: 20,
                className: "spin"
            }, void 0, false, {
                fileName: "[project]/src/components/talent/context.tsx",
                lineNumber: 25,
                columnNumber: 424
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/context.tsx",
        lineNumber: 25,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Context.Provider, {
        value: {
            data,
            busy,
            dialog,
            open,
            close,
            reload,
            mutate
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/talent/context.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_s1(TalentProvider, "kneeWx4MUq+b7vBygojEjjrZbd4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = TalentProvider;
var _c;
__turbopack_context__.k.register(_c, "TalentProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/details.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentDetails",
    ()=>TalentDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.mjs [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as LoaderCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.mjs [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.mjs [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/printer.mjs [app-client] (ecmascript) <export default as Printer>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.mjs [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api-client.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/talent-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function TalentDetails() {
    _s();
    const { dialog, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    if (!dialog) return null;
    const { kind, item } = dialog;
    if (kind === "applicant-detail") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "پرونده متقاضی",
        subtitle: "شناخت بهتر، تصمیم منصفانه‌تر",
        onClose: close,
        wide: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ApplicantDetail, {
            initial: item
        }, void 0, false, {
            fileName: "[project]/src/components/talent/details.tsx",
            lineNumber: 15,
            columnNumber: 133
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 15,
        columnNumber: 43
    }, this);
    if (kind === "plan-detail") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "مسیر ورود همکار",
        subtitle: "هر قدم، یک شروع مطمئن‌تر",
        onClose: close,
        wide: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanDetail, {
            initial: item
        }, void 0, false, {
            fileName: "[project]/src/components/talent/details.tsx",
            lineNumber: 16,
            columnNumber: 126
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 16,
        columnNumber: 38
    }, this);
    if (kind === "course-player") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "مسیر یادگیری",
        subtitle: "آکادمی داخلی آبان",
        onClose: close,
        wide: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CoursePlayer, {
            initial: item
        }, void 0, false, {
            fileName: "[project]/src/components/talent/details.tsx",
            lineNumber: 17,
            columnNumber: 118
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 17,
        columnNumber: 40
    }, this);
    if (kind === "survey-response") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "صدای شما شنیده می‌شود",
        subtitle: "پاسخ‌ها فقط به‌صورت تجمیعی و بدون نام گزارش خواهند شد.",
        onClose: close,
        wide: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SurveyResponse, {
            survey: item
        }, void 0, false, {
            fileName: "[project]/src/components/talent/details.tsx",
            lineNumber: 18,
            columnNumber: 166
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 18,
        columnNumber: 42
    }, this);
    if (kind === "survey-report") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "گزارش نبض سازمان",
        subtitle: "بینش قابل اقدام، با حفظ محرمانگی",
        onClose: close,
        wide: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SurveyReport, {
            survey: item
        }, void 0, false, {
            fileName: "[project]/src/components/talent/details.tsx",
            lineNumber: 19,
            columnNumber: 137
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 19,
        columnNumber: 40
    }, this);
    if (kind === "scenario-detail") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: "بررسی سناریوی حقوق",
        subtitle: "مقایسه شفاف پیش از تأیید نهایی",
        onClose: close,
        wide: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScenarioDetail, {
            initial: item
        }, void 0, false, {
            fileName: "[project]/src/components/talent/details.tsx",
            lineNumber: 20,
            columnNumber: 139
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 20,
        columnNumber: 42
    }, this);
    return null;
}
_s(TalentDetails, "6zU5W5yQ1xChLoaM/Fyh3bep2/U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"]
    ];
});
_c = TalentDetails;
function ApplicantDetail({ initial }) {
    _s1();
    const { data, open, mutate, busy, reload, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("profile");
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const candidate = data.applicants.find((c)=>c.id === initial.id) || initial;
    const job = data.jobs.find((j)=>j.id === candidate.jobId);
    const files = data.files.filter((f)=>f.applicantId === candidate.id);
    const notes = data.notes.filter((n)=>n.applicantId === candidate.id);
    async function upload(file) {
        if (!file) return;
        setUploading(true);
        try {
            const form = new FormData();
            form.append("file", file);
            form.append("applicantId", candidate.id);
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])("/api/talent/files", {
                method: "POST",
                body: form
            });
            await reload();
            notify("رزومه با موفقیت ذخیره شد.");
        } catch (e) {
            notify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionError"])(e).message, true);
        } finally{
            setUploading(false);
            if (fileInput.current) fileInput.current.value = "";
        }
    }
    async function removeFile(id) {
        if (!window.confirm("پیوست انتخاب‌شده حذف شود؟")) return;
        setUploading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiRequest"])(`/api/talent/files?id=${id}`, {
                method: "DELETE"
            });
            await reload();
            notify("پیوست حذف شد.");
        } catch (e) {
            notify((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2d$client$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["connectionError"])(e).message, true);
        } finally{
            setUploading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-body tl-detail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-profile-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                name: candidate.name,
                                size: "large"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 27,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: candidate.name
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 27,
                                        columnNumber: 135
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            job?.title,
                                            " · ",
                                            job?.department
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 27,
                                        columnNumber: 160
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-stars",
                                        children: [
                                            Array.from({
                                                length: 5
                                            }, (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 14,
                                                    fill: i < candidate.rating ? "#dabb75" : "none"
                                                }, i, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 27,
                                                    columnNumber: 262
                                                }, this)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(candidate.rating),
                                                    " از ۵"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 27,
                                                columnNumber: 339
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 27,
                                        columnNumber: 199
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 27,
                                columnNumber: 130
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "badge blue",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].find((s)=>s.id === candidate.stage)?.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 27,
                                columnNumber: 391
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 27,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentTabs"], {
                        active: tab,
                        onChange: setTab,
                        tabs: [
                            {
                                id: "profile",
                                label: "اطلاعات و سوابق"
                            },
                            {
                                id: "files",
                                label: "رزومه و فایل‌ها",
                                count: files.length
                            },
                            {
                                id: "notes",
                                label: "یادداشت و تاریخچه",
                                count: notes.length
                            },
                            {
                                id: "interviews",
                                label: "مصاحبه‌ها"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 27,
                        columnNumber: 484
                    }, this),
                    tab === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-profile-facts",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 69
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                dir: "ltr",
                                                children: candidate.email
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 87
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 63
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 134
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                dir: "ltr",
                                                children: candidate.phone || "ثبت نشده"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 153
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 128
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 214
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: [
                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(candidate.experience),
                                                    " سال سابقه مرتبط"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 234
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 208
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 296
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: candidate.expectedSalary ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(candidate.expectedSalary) : "حقوق توافقی"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 316
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 290
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 28,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-detail-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "مهارت‌ها و سوابق"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 447
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: candidate.skills || "مهارتی ثبت نشده است."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 472
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: candidate.summary || "خلاصه رزومه‌ای ثبت نشده است."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 523
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-candidate-tags",
                                        children: candidate.tags.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: t
                                            }, t, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 643
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 583
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 28,
                                columnNumber: 412
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-detail-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: "اطلاعات جذب"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 716
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-profile-facts",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "منبع رزومه ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: candidate.source
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 787
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 770
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    "تاریخ دریافت ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(candidate.createdAt)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 28,
                                                        columnNumber: 838
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 28,
                                                columnNumber: 819
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 28,
                                        columnNumber: 736
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 28,
                                columnNumber: 681
                            }, this),
                            candidate.stage !== "hired" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                label: "مرحله فعلی در فرایند جذب",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "aria-label": "تغییر مرحله متقاضی",
                                    value: candidate.stage,
                                    disabled: busy,
                                    onChange: (e)=>mutate("applicant.move", {
                                            id: candidate.id,
                                            fromStage: candidate.stage,
                                            stage: e.target.value
                                        }),
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].filter((s)=>s.id !== "hired").map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: s.id,
                                            children: s.label
                                        }, s.id, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 28,
                                            columnNumber: 1206
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 28,
                                    columnNumber: 965
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 28,
                                columnNumber: 925
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 28,
                        columnNumber: 27
                    }, this),
                    tab === "files" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-detail-section",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                        title: "فایل‌های متقاضی",
                                        subtitle: "PDF تا ۲ مگابایت؛ حداکثر ۵ پیوست",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btn small primary",
                                                disabled: uploading,
                                                onClick: ()=>fileInput.current?.click(),
                                                children: [
                                                    uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LoaderCircle$3e$__["LoaderCircle"], {
                                                        size: 15,
                                                        className: "spin"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 258
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        size: 15
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 304
                                                    }, this),
                                                    "بارگذاری رزومه"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 29,
                                                columnNumber: 143
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "file",
                                                accept: ".pdf",
                                                ref: fileInput,
                                                hidden: true,
                                                onChange: (e)=>upload(e.target.files?.[0])
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 29,
                                                columnNumber: 348
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 29,
                                        columnNumber: 62
                                    }, this),
                                    files.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-file-list",
                                        children: files.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tl-module-icon blue",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                                            size: 21
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/details.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 580
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 542
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: f.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/details.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 615
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Math.round(f.size / 1024)),
                                                                    " کیلوبایت · PDF"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/details.tsx",
                                                                lineNumber: 29,
                                                                columnNumber: 640
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 609
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        className: "icon-button",
                                                        href: `/api/talent/files?id=${f.id}`,
                                                        "aria-label": `دانلود ${f.name}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                            size: 17
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/details.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 805
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 708
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "icon-button danger-hover",
                                                        disabled: uploading,
                                                        onClick: ()=>removeFile(f.id),
                                                        "aria-label": "حذف پیوست",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 16
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/details.tsx",
                                                            lineNumber: 29,
                                                            columnNumber: 953
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 29,
                                                        columnNumber: 831
                                                    }, this)
                                                ]
                                            }, f.id, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 29,
                                                columnNumber: 526
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 29,
                                        columnNumber: 480
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                        title: "هنوز پیوستی ثبت نشده",
                                        description: "رزومه متقاضی را به این پرونده اضافه کنید."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 29,
                                        columnNumber: 999
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 29,
                                columnNumber: 27
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "tl-page-note",
                                children: "فایل‌ها فقط پس از احراز هویت دریافت می‌شوند. پیوست‌های ناشناس را با نرم‌افزار به‌روز باز کنید؛ اسکن بدافزار به این نسخه متصل نیست."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 29,
                                columnNumber: 1105
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 29,
                        columnNumber: 25
                    }, this),
                    tab === "notes" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-detail-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "گفت‌وگوی تیم جذب",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn small primary",
                                    onClick: ()=>open("note", {
                                            id: candidate.id
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 30,
                                            columnNumber: 187
                                        }, this),
                                        "یادداشت / ارزیابی"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 30,
                                    columnNumber: 98
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 30,
                                columnNumber: 60
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-timeline",
                                children: notes.map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 30,
                                                columnNumber: 306
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: n.actorName
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/details.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 321
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelativeTime"], {
                                                                    date: n.createdAt
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                                    lineNumber: 30,
                                                                    columnNumber: 358
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/details.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 351
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 316
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: n.body
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 407
                                                    }, this),
                                                    n.kind === "evaluation" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "badge amber",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/details.tsx",
                                                                lineNumber: 30,
                                                                columnNumber: 480
                                                            }, this),
                                                            "امتیاز ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(n.score),
                                                            " از ۵"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 30,
                                                        columnNumber: 450
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 30,
                                                columnNumber: 311
                                            }, this)
                                        ]
                                    }, n.id, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 30,
                                        columnNumber: 290
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 30,
                                columnNumber: 245
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 30,
                        columnNumber: 25
                    }, this),
                    tab === "interviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-detail-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "جلسه‌های آشنایی",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn small primary",
                                    onClick: ()=>open("interview", undefined, {
                                            applicantId: candidate.id
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 31,
                                            columnNumber: 216
                                        }, this),
                                        "ثبت مصاحبه"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 31,
                                    columnNumber: 102
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 31,
                                columnNumber: 65
                            }, this),
                            data.interviews.filter((i)=>i.applicantId === candidate.id).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tl-interview-mini",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                            size: 21
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 31,
                                            columnNumber: 383
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(i.startsAt),
                                                        " · ",
                                                        new Intl.DateTimeFormat("fa-IR", {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        }).format(new Date(i.startsAt))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 414
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: [
                                                        i.mode,
                                                        " · ",
                                                        i.location
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 557
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: [
                                                        workspace.employees.find((e)=>e.id === i.interviewerId)?.name,
                                                        i.feedback && ` — ${i.feedback}`
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 31,
                                                    columnNumber: 587
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 31,
                                            columnNumber: 409
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                            status: i.status
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 31,
                                            columnNumber: 705
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                            kind: "interview",
                                            item: i
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 31,
                                            columnNumber: 735
                                        }, this)
                                    ]
                                }, i.id, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 31,
                                    columnNumber: 337
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 31,
                        columnNumber: 30
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 27,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row-actions",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn secondary",
                                onClick: close,
                                children: "بستن"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 32,
                                columnNumber: 68
                            }, this),
                            candidate.stage !== "hired" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn secondary",
                                onClick: ()=>open("applicant", candidate),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 32,
                                        columnNumber: 242
                                    }, this),
                                    "ویرایش پرونده"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 32,
                                columnNumber: 163
                            }, this),
                            candidate.stage !== "hired" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "icon-button danger-hover",
                                "aria-label": "حذف متقاضی",
                                onClick: ()=>open("confirm", {
                                        action: "applicant.delete",
                                        id: candidate.id,
                                        title: "حذف متقاضی",
                                        description: "پرونده، پیوست‌ها و تاریخچه این متقاضی حذف شود؟"
                                    }),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 32,
                                    columnNumber: 552
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 32,
                                columnNumber: 317
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 32,
                        columnNumber: 39
                    }, this),
                    candidate.stage === "offer" && workspace.user.role === "admin" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("hire", candidate),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 32,
                                columnNumber: 727
                            }, this),
                            "تأیید استخدام"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 32,
                        columnNumber: 655
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 27,
        columnNumber: 10
    }, this);
}
_s1(ApplicantDetail, "Wa3SIj3X8aHUPl9nyAJxBSEvfMg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c1 = ApplicantDetail;
function PlanDetail({ initial }) {
    _s2();
    const { data, open, mutate, busy, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const plan = data.plans.find((p)=>p.id === initial.id) || initial;
    const e = workspace.employees.find((e)=>e.id === plan.employeeId);
    const tasks = data.tasks.filter((t)=>t.planId === plan.id);
    const done = tasks.filter((t)=>t.done).length;
    const admin = workspace.user.role === "admin", manager = workspace.user.role === "manager";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-body tl-detail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-plan-welcome",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                employee: e,
                                size: "large"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 36,
                                columnNumber: 83
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: [
                                            e?.name,
                                            "، به آبان خوش آمدید 🌊"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 36,
                                        columnNumber: 124
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            plan.title,
                                            " · شروع ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(plan.startDate)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 36,
                                        columnNumber: 164
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 36,
                                columnNumber: 119
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 36,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "tl-welcome-text",
                        children: plan.welcome
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 36,
                        columnNumber: 227
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-detail-section",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "قدم‌به‌قدم کنار شما",
                                subtitle: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(done)} از ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(tasks.length)} وظیفه تکمیل شده است`,
                                children: (admin || manager) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn small secondary",
                                    onClick: ()=>open("task", undefined, {
                                            planId: plan.id
                                        }),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 36,
                                            columnNumber: 544
                                        }, this),
                                        "وظیفه جدید"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 36,
                                    columnNumber: 443
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 36,
                                columnNumber: 311
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(done, tasks.length)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 36,
                                columnNumber: 596
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-checklist",
                                children: tasks.map((t)=>{
                                    const allowed = admin || manager && t.ownerRole === "manager" || workspace.user.employeeId === plan.employeeId && t.ownerRole === "employee";
                                    const overdue = !t.done && t.dueDate < (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])();
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: t.done ? "completed" : "",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                role: "checkbox",
                                                "aria-checked": t.done,
                                                "aria-label": `تکمیل ${t.title}`,
                                                className: "tl-task-checkbox",
                                                disabled: !allowed || busy,
                                                onClick: ()=>mutate("task.toggle", {
                                                        id: t.id,
                                                        done: !t.done
                                                    }),
                                                children: t.done && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 1167
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 36,
                                                columnNumber: 954
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: t.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 1201
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskRoleLabels"][t.ownerRole],
                                                            " · ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(t.dueDate),
                                                            t.done && ` · ${t.completedBy}`
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 36,
                                                        columnNumber: 1227
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 36,
                                                columnNumber: 1196
                                            }, this),
                                            overdue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge amber",
                                                children: "نیاز به پیگیری"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 36,
                                                columnNumber: 1344
                                            }, this),
                                            (admin || manager) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                kind: "task",
                                                item: t,
                                                deleteAction: "task.delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 36,
                                                columnNumber: 1419
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 36,
                                        columnNumber: 900
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 36,
                                columnNumber: 652
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 36,
                        columnNumber: 276
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 36,
                                columnNumber: 1537
                            }, this),
                            "هر وظیفه فقط توسط مسئول مربوط یا مدیر سیستم تکمیل می‌شود."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 36,
                        columnNumber: 1508
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 36,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: close,
                        children: "بستن برنامه"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 36,
                        columnNumber: 1661
                    }, this),
                    (admin || manager) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("plan-edit", plan),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 36,
                                columnNumber: 1826
                            }, this),
                            "شخصی‌سازی راهنما"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 36,
                        columnNumber: 1754
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 36,
                columnNumber: 1631
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 36,
        columnNumber: 10
    }, this);
}
_s2(PlanDetail, "93aXyCwSgZRvubkcPxJ42URy/vg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c2 = PlanDetail;
function CoursePlayer({ initial }) {
    _s3();
    const { data, mutate, busy, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace, notify } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const course = data.courses.find((c)=>c.id === initial.id) || initial;
    const enrollment = data.enrollments.find((e)=>e.courseId === course.id && e.employeeId === workspace.user.employeeId);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [quizMode, setQuizMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const lesson = course.lessons[index];
    async function enroll() {
        await mutate("enrollment.assign", {
            courseId: course.id,
            dueDate: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10)
        }, "مسیر یادگیری شما آغاز شد.");
    }
    async function mark() {
        if (!enrollment || !lesson) return;
        const result = await mutate("enrollment.lesson", {
            id: enrollment.id,
            lessonId: lesson.id
        }, "پیشرفت شما ثبت شد.");
        if (result) {
            if (index < course.lessons.length - 1) setIndex((i)=>i + 1);
            else setQuizMode(true);
        }
    }
    async function submit(e) {
        e.preventDefault();
        if (!enrollment) return;
        const result = await mutate("enrollment.quiz", {
            id: enrollment.id,
            answers
        }, "آزمون شما در سرور ارزیابی شد.");
        if (result) notify(result.passed ? `تبریک! نمره شما ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Number(result.score))} از ۱۰۰ است.` : `نمره شما ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Number(result.score))} است. درس‌ها را مرور و دوباره تلاش کنید.`, !result.passed);
    }
    if (enrollment?.status === "completed") return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-body",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "tl-certificate print-document",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "tl-certificate-icon",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                size: 54,
                                strokeWidth: 1.3
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 43,
                                columnNumber: 165
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 127
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            children: "آکادمی داخلی پارک آبی آبان"
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 209
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "گواهی تکمیل مسیر یادگیری"
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 268
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "همکار گرامی ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    children: workspace.user.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 43,
                                    columnNumber: 316
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 301
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: [
                                "دوره «",
                                course.title,
                                "» را با موفقیت به پایان رسانده است."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 358
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tl-certificate-score",
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(enrollment.score || 0),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                    children: "از ۱۰۰ امتیاز"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 43,
                                    columnNumber: 485
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 420
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(enrollment.completedAt || new Date().toISOString())
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 43,
                                    columnNumber: 524
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: [
                                        "شناسه: ",
                                        enrollment.id.slice(0, 8).toUpperCase()
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 43,
                                    columnNumber: 597
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 519
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                            children: "گواهی داخلی مجموعه؛ فاقد اعتبار حرفه‌ای یا مجوز فعالیت تخصصی."
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 43,
                            columnNumber: 664
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/talent/details.tsx",
                    lineNumber: 43,
                    columnNumber: 80
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 43,
                columnNumber: 52
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: close,
                        children: "بستن"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 43,
                        columnNumber: 782
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>window.print(),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 43,
                                columnNumber: 908
                            }, this),
                            "چاپ کارنامه"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 43,
                        columnNumber: 845
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 43,
                columnNumber: 752
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 43,
        columnNumber: 50
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-body tl-detail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-course-heading",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tl-module-icon teal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    size: 29
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 44,
                                    columnNumber: 123
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 44,
                                columnNumber: 85
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: course.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 44,
                                        columnNumber: 162
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            course.instructor,
                                            " · ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(course.lessons.length),
                                            " درس · حدنصاب ",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(course.passScore),
                                            "٪"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 44,
                                        columnNumber: 185
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 44,
                                columnNumber: 157
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 44,
                        columnNumber: 50
                    }, this),
                    enrollment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(enrollment.completedLessons.length, course.lessons.length)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 44,
                        columnNumber: 305
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-player",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                                children: [
                                    course.lessons.map((l, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: !quizMode && index === i ? "active" : "",
                                            onClick: ()=>{
                                                setIndex(i);
                                                setQuizMode(false);
                                            },
                                            children: [
                                                enrollment?.completedLessons.includes(l.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 241
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 270
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: l.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 295
                                                }, this)
                                            ]
                                        }, l.id, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 69
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: quizMode ? "active" : "",
                                        onClick: ()=>setQuizMode(true),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 45,
                                                columnNumber: 411
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "آزمون پایان دوره"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 45,
                                                columnNumber: 438
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 45,
                                        columnNumber: 332
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 45,
                                columnNumber: 32
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: !quizMode ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "eyebrow",
                                            children: [
                                                "درس ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(index + 1),
                                                " · ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(lesson?.minutes || 0),
                                                " دقیقه مطالعه"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 512
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: lesson?.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 606
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "tl-lesson-content",
                                            children: lesson?.content
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 630
                                        }, this),
                                        lesson?.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "btn secondary small",
                                            href: lesson.url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 795
                                                }, this),
                                                "محتوای تکمیلی"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 700
                                        }, this),
                                        enrollment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn primary",
                                            disabled: busy,
                                            onClick: mark,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 916
                                                }, this),
                                                "مطالعه کردم؛ ادامه مسیر"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 853
                                        }, this) : workspace.user.employeeId ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "btn primary",
                                            disabled: busy || course.status !== "published",
                                            onClick: enroll,
                                            children: [
                                                "شروع یادگیری",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 1108
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 998
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "inline-info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 1172
                                                }, this),
                                                "پیش‌نمایش مدیر؛ تخصیص دوره از کتابخانه انجام می‌شود."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 1143
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 45,
                                    columnNumber: 510
                                }, this) : !enrollment || course.lessons.some((l)=>!enrollment.completedLessons.includes(l.id)) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                    title: "ابتدا مسیر یادگیری را طی کنید",
                                    description: "پس از ثبت مطالعه همه درس‌ها، آزمون در دسترس شما قرار می‌گیرد.",
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 45,
                                    columnNumber: 1342
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    onSubmit: submit,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "آنچه یاد گرفتیم"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 1513
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "tl-page-note",
                                            children: "پاسخ همه سؤال‌ها را انتخاب کنید. ارزیابی در سرور انجام می‌شود."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 1537
                                        }, this),
                                        course.quiz.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                                                className: "tl-quiz-question",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1),
                                                            ". ",
                                                            q.text
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/details.tsx",
                                                        lineNumber: 45,
                                                        columnNumber: 1708
                                                    }, this),
                                                    q.options.map((option, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    required: true,
                                                                    type: "radio",
                                                                    name: q.id,
                                                                    checked: answers[q.id] === index,
                                                                    onChange: ()=>setAnswers((a)=>({
                                                                                ...a,
                                                                                [q.id]: index
                                                                            }))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                                    lineNumber: 45,
                                                                    columnNumber: 1799
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: option
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                                    lineNumber: 45,
                                                                    columnNumber: 1936
                                                                }, this)
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/components/talent/details.tsx",
                                                            lineNumber: 45,
                                                            columnNumber: 1780
                                                        }, this))
                                                ]
                                            }, q.id, true, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 45,
                                                columnNumber: 1658
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmitButton"], {
                                            busy: busy,
                                            children: [
                                                "ثبت و ارزیابی آزمون",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 2025
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 1980
                                        }, this),
                                        enrollment.score !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "inline-info",
                                            children: [
                                                "نمره آخرین تلاش: ",
                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(enrollment.score),
                                                " از ۱۰۰"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 45,
                                            columnNumber: 2089
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 45,
                                    columnNumber: 1489
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 45,
                                columnNumber: 488
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 45,
                        columnNumber: 5
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 44,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: close,
                        children: "بستن مسیر یادگیری"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 45,
                        columnNumber: 2227
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tl-page-note",
                        children: "پیشرفت شما ذخیره می‌شود."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 45,
                        columnNumber: 2303
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 45,
                columnNumber: 2197
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 44,
        columnNumber: 10
    }, this);
}
_s3(CoursePlayer, "norAgnzJNGUbPEJo5kr69tiX2x0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c3 = CoursePlayer;
function SurveyResponse({ survey }) {
    _s4();
    const { mutate, busy, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    async function submit(e) {
        e.preventDefault();
        if (await mutate("survey.respond", {
            id: survey.id,
            answers
        }, "از همراهی شما ممنونیم؛ پاسخ بی‌نام شما ثبت شد.")) close();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: submit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-body tl-detail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-survey-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                size: 34
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 50,
                                columnNumber: 105
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: survey.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 50,
                                columnNumber: 129
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: survey.description
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 50,
                                columnNumber: 152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 50,
                        columnNumber: 72
                    }, this),
                    survey.questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                            className: "tl-rating-question",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 50,
                                            columnNumber: 277
                                        }, this),
                                        q.text
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 50,
                                    columnNumber: 269
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `tl-rating-scale ${q.type === "enps" ? "enps" : ""}`,
                                    children: Array.from({
                                        length: q.type === "enps" ? 11 : 5
                                    }, (_, index)=>q.type === "enps" ? index : index + 1).map((n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: answers[q.id] === n ? "selected" : "",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    type: "radio",
                                                    name: q.id,
                                                    value: n,
                                                    checked: answers[q.id] === n,
                                                    onChange: ()=>setAnswers((a)=>({
                                                                ...a,
                                                                [q.id]: n
                                                            }))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 567
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(n)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 50,
                                                    columnNumber: 706
                                                }, this)
                                            ]
                                        }, n, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 50,
                                            columnNumber: 502
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 50,
                                    columnNumber: 318
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tl-rating-labels",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: q.type === "enps" ? "اصلاً توصیه نمی‌کنم" : "کاملاً مخالفم"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 50,
                                            columnNumber: 776
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: q.type === "enps" ? "حتماً توصیه می‌کنم" : "کاملاً موافقم"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 50,
                                            columnNumber: 850
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 50,
                                    columnNumber: 742
                                }, this)
                            ]
                        }, q.id, true, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 50,
                            columnNumber: 217
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 50,
                                columnNumber: 971
                            }, this),
                            "برای جلوگیری از پاسخ تکراری فقط وضعیت مشارکت ثبت می‌شود؛ محتوای پاسخ به شناسه کارمند متصل نیست و نتایج فردی در پنل نمایش داده نمی‌شود."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 50,
                        columnNumber: 942
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 50,
                columnNumber: 34
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        type: "button",
                        onClick: close,
                        children: "بعداً پاسخ می‌دهم"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 50,
                        columnNumber: 1172
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmitButton"], {
                        busy: busy,
                        children: [
                            "ثبت نهایی پاسخ‌ها",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 50,
                                columnNumber: 1305
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 50,
                        columnNumber: 1262
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 50,
                columnNumber: 1142
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 50,
        columnNumber: 10
    }, this);
}
_s4(SurveyResponse, "arTKi01sRwozZUo78n5fS3eGw50=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"]
    ];
});
_c4 = SurveyResponse;
function SurveyReport({ survey }) {
    _s5();
    const { data, open, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const m = data.metrics.find((m)=>m.surveyId === survey.id);
    if (!m.reportReady) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                title: "هنوز شرایط انتشار گزارش فراهم نیست",
                description: `گزارش پس از پایان نظرسنجی و دریافت حداقل ۵ پاسخ نمایش داده می‌شود. تعداد پاسخ فعلی: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(m.responses)}`,
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 53,
                columnNumber: 136
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn secondary",
                    onClick: close,
                    children: "بستن"
                }, void 0, false, {
                    fileName: "[project]/src/components/talent/details.tsx",
                    lineNumber: 53,
                    columnNumber: 361
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 53,
                columnNumber: 331
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 53,
        columnNumber: 134
    }, this);
    const lowest = [
        ...m.dimensions
    ].filter((d)=>d.type === "scale").sort((a, b)=>a.percent - b.percent)[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-body tl-detail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-survey-intro",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                size: 32
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 83
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: survey.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 107
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(m.responses),
                                    " پاسخ از ",
                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(m.audience),
                                    " همکار · گزارش تجمیعی بدون نام"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 130
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-report-kpis",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "امتیاز تجربه همکاری"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 252
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            m.score === null ? "—" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(m.score),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "/ ۱۰۰"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 55,
                                                columnNumber: 330
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 284
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 247
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "شاخص توصیه همکاری eNPS"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 370
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        dir: "ltr",
                                        children: [
                                            m.enps === null ? "—" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(m.enps),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "از ۱۰۰− تا ۱۰۰+"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 55,
                                                columnNumber: 459
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 405
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 365
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "مشارکت در نظرسنجی"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 509
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(m.responses, m.audience)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "درصد"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 55,
                                                columnNumber: 593
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 539
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 504
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 215
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                        title: "شاخص‌های تجربه کارکنان",
                        subtitle: "مقیاس رضایت ۱ تا ۵ به صفر تا صد تبدیل شده است."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 633
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-dimension-bars",
                        children: m.dimensions.filter((d)=>d.type === "scale").map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: d.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 843
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                        value: d.percent
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 865
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(d.average),
                                            " / ۵"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 895
                                    }, this)
                                ]
                            }, d.id, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 827
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 737
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                        title: "نقشه وضعیت واحدها",
                        subtitle: "گروه‌های کمتر از ۵ پاسخ برای حفظ محرمانگی نمایش داده نمی‌شوند."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 945
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-heatmap",
                        children: m.departments.map((d)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: d.score === null ? "hidden-score" : d.score < 55 ? "low-score" : "good-score",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: d.department
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 1226
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: d.score === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 55,
                                            columnNumber: 1281
                                        }, this) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(d.score)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 1253
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                        children: d.score === null ? "مشارکت کمتر از حد انتشار" : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(d.count)} پاسخ · از ۱۰۰`
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 1330
                                    }, this)
                                ]
                            }, d.department, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 1112
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 1060
                    }, this),
                    lowest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-recommendation",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 23
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 1485
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        children: [
                                            "فرصت بهبود: ",
                                            lowest.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 1512
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "برای شناخت بهتر تجربه این حوزه، گفت‌وگوی تیمی برگزار کنید و یک اقدام مشخص با مسئول و زمان‌بندی تعریف کنید. این پیشنهاد قاعده‌محور است، نه تحلیل هوش مصنوعی."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 1547
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "text-button",
                                        onClick: ()=>open("improvement", undefined, {
                                                surveyId: survey.id,
                                                title: `بهبود ${lowest.title} با مشارکت تیم`
                                            }),
                                        children: [
                                            "تبدیل به اقدام اصلاحی",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 55,
                                                columnNumber: 1880
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 55,
                                        columnNumber: 1709
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 1507
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 1450
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "tl-page-note",
                        children: "eNPS = درصد امتیازهای ۹ و ۱۰، منهای درصد امتیازهای صفر تا ۶؛ امتیازهای ۷ و ۸ خنثی‌اند."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 1925
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 55,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: close,
                        children: "بستن گزارش"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 2079
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "btn primary",
                        href: "/api/talent/export?type=pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 55,
                                columnNumber: 2212
                            }, this),
                            "خروجی گزارش تجمیعی"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 55,
                        columnNumber: 2148
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 55,
                columnNumber: 2049
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 55,
        columnNumber: 10
    }, this);
}
_s5(SurveyReport, "MkF5/Qhl4hKK3+pKDWdKJHSbib0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"]
    ];
});
_c5 = SurveyReport;
function ScenarioDetail({ initial }) {
    _s6();
    const { data, open, close } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const scenario = data.scenarios.find((s)=>s.id === initial.id) || initial;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const current = scenario.entries.reduce((n, e)=>n + e.current, 0);
    const proposed = scenario.entries.reduce((n, e)=>n + e.proposed, 0);
    const rows = scenario.entries.filter((e)=>`${e.name} ${e.code} ${e.department}`.includes(query));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-body tl-detail",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                        title: scenario.title,
                        subtitle: `محاسبه توسط ${scenario.createdBy} در ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(scenario.createdAt)}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                            status: scenario.status
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 59,
                            columnNumber: 166
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 50
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-report-kpis salary",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "بودجه مبنا"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 59,
                                        columnNumber: 261
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Math.round(current / 1000000)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "میلیون تومان"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 59,
                                                columnNumber: 327
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 59,
                                        columnNumber: 284
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 59,
                                columnNumber: 256
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "بودجه پیشنهادی"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 59,
                                        columnNumber: 374
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Math.round(proposed / 1000000)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "میلیون تومان"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 59,
                                                columnNumber: 445
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 59,
                                        columnNumber: 401
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 59,
                                columnNumber: 369
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "اثر بر بودجه ماهانه"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 59,
                                        columnNumber: 492
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: [
                                            "+",
                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Math.round((proposed - current) / Math.max(1, current) * 100)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                children: "درصد"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 59,
                                                columnNumber: 600
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 59,
                                        columnNumber: 524
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 59,
                                columnNumber: 487
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 217
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                        label: "جستجوی همکار در سناریو",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: query,
                            onChange: (e)=>{
                                setQuery(e.target.value);
                                setPage(1);
                            },
                            placeholder: "نام، کد پرسنلی یا واحد..."
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 59,
                            columnNumber: 678
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 640
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll tl-compare-table",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "data-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "همکار"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 59,
                                                columnNumber: 895
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "حقوق مبنا"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 59,
                                                columnNumber: 909
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "پیشنهاد"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 59,
                                                columnNumber: 927
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "افزایش"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/details.tsx",
                                                lineNumber: 59,
                                                columnNumber: 943
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/details.tsx",
                                        lineNumber: 59,
                                        columnNumber: 891
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 59,
                                    columnNumber: 884
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: rows.slice((page - 1) * 10, page * 10).map((e)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: e.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/details.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 1054
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "tl-cell-sub",
                                                            children: e.department
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/details.tsx",
                                                            lineNumber: 59,
                                                            columnNumber: 1079
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 1050
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(e.current)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 1137
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "net-pay",
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(e.proposed)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 1161
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        "+",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(e.proposed - e.current)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/details.tsx",
                                                    lineNumber: 59,
                                                    columnNumber: 1206
                                                }, this)
                                            ]
                                        }, e.employeeId, true, {
                                            fileName: "[project]/src/components/talent/details.tsx",
                                            lineNumber: 59,
                                            columnNumber: 1027
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/details.tsx",
                                    lineNumber: 59,
                                    columnNumber: 971
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/details.tsx",
                            lineNumber: 59,
                            columnNumber: 854
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 807
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                        page: page,
                        count: rows.length,
                        onChange: setPage
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 1273
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "inline-info",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                size: 17
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 59,
                                columnNumber: 1367
                            }, this),
                            "مبالغ تومان است. تأیید نهایی فقط توسط مدیر سیستم انجام می‌شود. تغییر حقوق یا وضعیت کارمند پس از محاسبه، از اعمال سناریوی قدیمی جلوگیری می‌کند."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 1338
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 59,
                columnNumber: 12
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modal-footer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "btn secondary",
                        href: `/api/talent/export?type=compensation&id=${scenario.id}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 59,
                                columnNumber: 1669
                            }, this),
                            "دریافت اکسل"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 1576
                    }, this),
                    scenario.status === "draft" && workspace.user.role === "admin" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("confirm", {
                                action: "salary.apply",
                                id: scenario.id,
                                title: "اعمال سناریوی حقوق پایه",
                                description: `حقوق پایه ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(scenario.entries.length)} همکار با بودجه ماهانه ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(proposed)} به‌روزرسانی می‌شود. فیش‌های حقوقی قبلی تغییر نمی‌کنند. این تصمیم مدیریتی تأیید می‌شود؟`
                            }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/details.tsx",
                                lineNumber: 59,
                                columnNumber: 2100
                            }, this),
                            "تأیید و اعمال حقوق پایه"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 1772
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: close,
                        children: "بستن"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/details.tsx",
                        lineNumber: 59,
                        columnNumber: 2154
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/details.tsx",
                lineNumber: 59,
                columnNumber: 1546
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/details.tsx",
        lineNumber: 59,
        columnNumber: 10
    }, this);
}
_s6(ScenarioDetail, "ZChS8CCNP5mS36kg7bf8eJPEgNw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c6 = ScenarioDetail;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "TalentDetails");
__turbopack_context__.k.register(_c1, "ApplicantDetail");
__turbopack_context__.k.register(_c2, "PlanDetail");
__turbopack_context__.k.register(_c3, "CoursePlayer");
__turbopack_context__.k.register(_c4, "SurveyResponse");
__turbopack_context__.k.register(_c5, "SurveyReport");
__turbopack_context__.k.register(_c6, "ScenarioDetail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/development.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LearningPage",
    ()=>LearningPage,
    "OnboardingPage",
    ()=>OnboardingPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.mjs [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.mjs [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/talent-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function OnboardingPage() {
    _s();
    const { data, open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("plans");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const admin = workspace.user.role === "admin", manage = admin || workspace.user.role === "manager";
    const complete = data.plans.filter((p)=>data.tasks.filter((t)=>t.planId === p.id).length && data.tasks.filter((t)=>t.planId === p.id).every((t)=>t.done));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-page page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeading"], {
                eyebrow: "یک شروع خوب، یک همراهی ماندگار",
                title: manage ? "آنبوردینگ و مسیر ورود" : "به خانواده آبان خوش آمدید",
                subtitle: "هیچ قدمی فراموش نمی‌شود؛ برنامه روزهای اول همکاری، روشن و قابل پیگیری.",
                children: [
                    admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: ()=>open("template"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 13,
                                columnNumber: 330
                            }, this),
                            "الگوی جدید"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 13,
                        columnNumber: 263
                    }, this),
                    manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("plan"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 13,
                                columnNumber: 442
                            }, this),
                            "آغاز برنامه ورود"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 13,
                        columnNumber: 381
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 13,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-onboarding-banner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: "همراه همکاران جدید، از اولین روز"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 14,
                                columnNumber: 48
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "شروع‌های کوچک، تجربه‌های بزرگ."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 14,
                                columnNumber: 113
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "تیم منابع انسانی، مدیر واحد و همکار تازه‌وارد؛ هر کس سهم خودش را می‌داند."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 14,
                                columnNumber: 152
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 14,
                        columnNumber: 43
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-orbit-illustration",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    size: 40,
                                    strokeWidth: 1.2
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/development.tsx",
                                    lineNumber: 14,
                                    columnNumber: 283
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 14,
                                columnNumber: 277
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                    size: 19
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/development.tsx",
                                    lineNumber: 14,
                                    columnNumber: 331
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 14,
                                columnNumber: 328
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    size: 21
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/development.tsx",
                                    lineNumber: 14,
                                    columnNumber: 364
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 14,
                                columnNumber: 361
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 14,
                        columnNumber: 238
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 14,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentStats"], {
                items: [
                    {
                        title: "مسیرهای ورود",
                        value: data.plans.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
                    },
                    {
                        title: "وظایف تکمیل‌شده",
                        value: data.tasks.filter((t)=>t.done).length,
                        detail: `از ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(data.tasks.length)} وظیفه تعریف‌شده`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                        color: "blue"
                    },
                    {
                        title: "در انتظار پیگیری",
                        value: data.tasks.filter((t)=>!t.done && t.dueDate < (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])()).length,
                        detail: "مهلت انجام گذشته است",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"],
                        color: "orange"
                    },
                    {
                        title: "شروع‌های موفق",
                        value: complete.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        color: "purple"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card tl-workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentTabs"], {
                        active: tab,
                        onChange: setTab,
                        tabs: [
                            {
                                id: "plans",
                                label: manage ? "برنامه همکاران" : "برنامه‌های من"
                            },
                            ...manage ? [
                                {
                                    id: "templates",
                                    label: "کتابخانه الگوها"
                                }
                            ] : []
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 16,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentSearch"], {
                        value: query,
                        onChange: setQuery,
                        placeholder: "جستجو در مسیرهای ورود..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 16,
                        columnNumber: 234
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: [
                            tab === "plans" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-plan-grid",
                                children: data.plans.filter((p)=>`${p.title} ${workspace.employees.find((e)=>e.id === p.employeeId)?.name}`.includes(query)).map((p)=>{
                                    const e = workspace.employees.find((e)=>e.id === p.employeeId);
                                    const tasks = data.tasks.filter((t)=>t.planId === p.id);
                                    const done = tasks.filter((t)=>t.done).length;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "tl-plan-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-plan-top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                        employee: e
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 459
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                children: e?.name || "همکار آبان"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 17,
                                                                columnNumber: 487
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: e?.position
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 17,
                                                                columnNumber: 521
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 482
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `badge ${done === tasks.length ? "green" : "blue"}`,
                                                        children: done === tasks.length ? "تکمیل شده" : "در مسیر همراهی"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 547
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 430
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                children: p.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 686
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-plan-summary",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(done),
                                                            " از ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(tasks.length),
                                                            " قدم برداشته شده"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 737
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(p.startDate)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 798
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 704
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(done, tasks.length)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 838
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-owner-chips",
                                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskRoleLabels"]).map(([role, label])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 17,
                                                                columnNumber: 998
                                                            }, this),
                                                            label
                                                        ]
                                                    }, role, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 981
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 894
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-job-bottom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-button",
                                                        onClick: ()=>open("plan-detail", p),
                                                        children: [
                                                            "ادامه مسیر ورود",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 17,
                                                                columnNumber: 1142
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 1056
                                                    }, this),
                                                    manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                        kind: "plan-edit",
                                                        item: p,
                                                        deleteAction: "plan.delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 1185
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 1025
                                            }, this)
                                        ]
                                    }, p.id, true, {
                                        fileName: "[project]/src/components/talent/development.tsx",
                                        lineNumber: 17,
                                        columnNumber: 385
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 17,
                                columnNumber: 53
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-template-grid",
                                children: data.templates.filter((t)=>t.title.includes(query)).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "tl-template-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tl-module-icon teal",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                    size: 24
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                    lineNumber: 17,
                                                    columnNumber: 1469
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 1431
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: t.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 1496
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: t.department === "all" ? "قابل استفاده برای تمام واحدها" : t.department
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 1514
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-template-tasks",
                                                children: [
                                                    t.tasks.slice(0, 3).map((task, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                    size: 13
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                                    lineNumber: 17,
                                                                    columnNumber: 1681
                                                                }, this),
                                                                task.title
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/src/components/talent/development.tsx",
                                                            lineNumber: 17,
                                                            columnNumber: 1667
                                                        }, this)),
                                                    t.tasks.length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            "و ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(t.tasks.length - 3),
                                                            " قدم دیگر..."
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 1751
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 1594
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-job-bottom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-button",
                                                        onClick: ()=>open("plan", undefined, {
                                                                templateId: t.id
                                                            }),
                                                        children: [
                                                            "استفاده از الگو",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 17,
                                                                columnNumber: 1951
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 1842
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                        kind: "template",
                                                        item: t,
                                                        deleteAction: "template.delete",
                                                        canEdit: admin
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 17,
                                                        columnNumber: 1983
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 17,
                                                columnNumber: 1811
                                            }, this)
                                        ]
                                    }, t.id, true, {
                                        fileName: "[project]/src/components/talent/development.tsx",
                                        lineNumber: 17,
                                        columnNumber: 1382
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 17,
                                columnNumber: 1286
                            }, this),
                            tab === "plans" && !data.plans.some((p)=>`${p.title} ${workspace.employees.find((e)=>e.id === p.employeeId)?.name}`.includes(query)) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: query ? "برنامه‌ای با این مشخصات پیدا نشد" : "برای یک شروع خوب آماده‌ایم",
                                description: manage ? "با انتخاب همکار و الگو، برنامه اختصاصی ورود بسازید." : "برنامه ورود شما پس از تخصیص منابع انسانی اینجا نمایش داده می‌شود.",
                                action: manage ? "آغاز برنامه ورود" : undefined,
                                onAction: ()=>open("plan")
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 18,
                                columnNumber: 144
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 17,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 16,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/development.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(OnboardingPage, "6Jwn0zZTjSKumACEAXi45yEUCSg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = OnboardingPage;
function LearningPage() {
    _s1();
    const { data, open, mutate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("library");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const admin = workspace.user.role === "admin", manage = admin || workspace.user.role === "manager";
    const completed = data.enrollments.filter((e)=>e.status === "completed");
    const enrolledCourseIds = new Set(data.enrollments.filter((e)=>e.employeeId === workspace.user.employeeId).map((e)=>e.courseId));
    const courses = data.courses.filter((c)=>c.title.includes(query) && (tab !== "mine" || enrolledCourseIds.has(c.id)));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-page page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeading"], {
                eyebrow: "هر روز، یک قدم رو به جلو",
                title: "آکادمی آبان",
                subtitle: "یادگیری در جریان کار؛ دوره‌های داخلی، مسیر رشد و کارنامه هر همکار.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "btn secondary",
                        href: "/api/talent/export?type=learning",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 23,
                                columnNumber: 261
                            }, this),
                            "گزارش آموزش"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 23,
                        columnNumber: 192
                    }, this),
                    admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("course"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 23,
                                columnNumber: 371
                            }, this),
                            "دوره آموزشی جدید"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 23,
                        columnNumber: 308
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 23,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentStats"], {
                items: [
                    {
                        title: "دوره‌های در دسترس",
                        value: data.courses.filter((c)=>c.status === "published").length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
                    },
                    {
                        title: "مسیرهای تخصیص‌یافته",
                        value: data.enrollments.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        color: "blue"
                    },
                    {
                        title: "دوره‌های تکمیل‌شده",
                        value: completed.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                        color: "purple"
                    },
                    {
                        title: "نرخ تکمیل آموزش",
                        value: `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(completed.length, data.enrollments.length))}٪`,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                        color: "orange"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card tl-workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentTabs"], {
                        active: tab,
                        onChange: setTab,
                        tabs: [
                            {
                                id: "library",
                                label: "کتابخانه یادگیری"
                            },
                            ...workspace.user.employeeId ? [
                                {
                                    id: "mine",
                                    label: "مسیرهای من"
                                }
                            ] : [],
                            ...manage ? [
                                {
                                    id: "progress",
                                    label: "پیشرفت همکاران"
                                }
                            ] : []
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 25,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentSearch"], {
                        value: query,
                        onChange: setQuery,
                        placeholder: "جستجوی دوره آموزشی...",
                        children: manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn small soft tl-toolbar-end",
                            onClick: ()=>open("assign"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/development.tsx",
                                    lineNumber: 25,
                                    columnNumber: 462
                                }, this),
                                "تخصیص آموزش"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/development.tsx",
                            lineNumber: 25,
                            columnNumber: 381
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 25,
                        columnNumber: 286
                    }, this),
                    tab !== "progress" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-course-grid",
                                children: courses.map((c, index)=>{
                                    const enrollment = data.enrollments.find((e)=>e.courseId === c.id && e.employeeId === workspace.user.employeeId);
                                    const colors = [
                                        "teal",
                                        "blue",
                                        "purple",
                                        "orange"
                                    ];
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "tl-course-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `tl-course-art ${colors[index % 4]}`,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tl-course-category",
                                                        children: c.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 390
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-course-lines",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 479
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 484
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 489
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 446
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                        size: 54,
                                                        strokeWidth: 1.05
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 500
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: c.level
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 541
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 336
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-course-content",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-course-meta",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 644
                                                                    }, this),
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(c.lessons.reduce((s, l)=>s + l.minutes, 0)),
                                                                    " دقیقه"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 638
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(c.lessons.length),
                                                                    " درس"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 727
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                                                status: c.status
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 766
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 606
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: c.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 802
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: c.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 820
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tl-course-instructor",
                                                        children: c.instructor
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 842
                                                    }, this),
                                                    enrollment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(enrollment.completedLessons.length, c.lessons.length)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 917
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-job-bottom",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-button",
                                                                onClick: ()=>open("course-player", c),
                                                                children: [
                                                                    enrollment?.status === "completed" ? "مشاهده کارنامه" : enrollment ? "ادامه یادگیری" : "مشاهده دوره",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 1214
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 1039
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "row-actions",
                                                                children: [
                                                                    manage && c.status === "published" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "icon-button",
                                                                        title: "تخصیص دوره",
                                                                        "aria-label": `تخصیص ${c.title}`,
                                                                        onClick: ()=>open("assign", undefined, {
                                                                                courseId: c.id
                                                                            }),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                            size: 17
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/talent/development.tsx",
                                                                            lineNumber: 26,
                                                                            columnNumber: 1459
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 1314
                                                                    }, this),
                                                                    admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "icon-button",
                                                                        title: "ساخت نسخه تازه",
                                                                        "aria-label": `ساخت نسخه تازه از ${c.title}`,
                                                                        onClick: ()=>open("course", {
                                                                                ...c,
                                                                                id: undefined,
                                                                                title: `${c.title} (نسخه جدید)`,
                                                                                status: "draft"
                                                                            }),
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                                                                            size: 16
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/talent/development.tsx",
                                                                            lineNumber: 26,
                                                                            columnNumber: 1703
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 1498
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                                        kind: "course",
                                                                        item: c,
                                                                        deleteAction: "course.delete",
                                                                        canEdit: admin
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 1733
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 1246
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 1008
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 571
                                            }, this)
                                        ]
                                    }, c.id, true, {
                                        fileName: "[project]/src/components/talent/development.tsx",
                                        lineNumber: 26,
                                        columnNumber: 289
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 26,
                                columnNumber: 54
                            }, this),
                            !courses.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: "مسیر یادگیری تازه‌ای انتخاب کنید",
                                description: "دوره‌های تخصیص‌یافته یا متناسب با جستجوی شما اینجا نمایش داده می‌شوند."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/development.tsx",
                                lineNumber: 26,
                                columnNumber: 1877
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 26,
                        columnNumber: 27
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "data-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "همکار"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2098
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "دوره"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2112
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "پیشرفت"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2125
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "مهلت"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2140
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "کارنامه"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2153
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                fileName: "[project]/src/components/talent/development.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2169
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/development.tsx",
                                        lineNumber: 26,
                                        columnNumber: 2094
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/development.tsx",
                                    lineNumber: 26,
                                    columnNumber: 2087
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: data.enrollments.filter((e)=>data.courses.find((c)=>c.id === e.courseId)?.title.includes(query)).map((e)=>{
                                        const employee = workspace.employees.find((x)=>x.id === e.employeeId);
                                        const course = data.courses.find((c)=>c.id === e.courseId);
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "person-cell",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                employee: employee
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 2490
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: employee?.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 2526
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                        children: employee?.department
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 2559
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/development.tsx",
                                                                lineNumber: 26,
                                                                columnNumber: 2520
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 2461
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 2457
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: course?.title || "دوره بایگانی‌شده"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 2614
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(e.completedLessons.length, course?.lessons.length || 0)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 2664
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 2660
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(e.dueDate)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 2761
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: e.score === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                                        status: e.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 2813
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `badge ${e.status === "completed" ? "green" : "amber"}`,
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(e.score),
                                                            " از ۱۰۰"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 2846
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 2789
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: e.status !== "completed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-button",
                                                        onClick: ()=>open("confirm", {
                                                                action: "enrollment.delete",
                                                                id: e.id,
                                                                title: "لغو تخصیص آموزش",
                                                                description: "این تخصیص و پیشرفت غیرنهایی آن حذف شود؟"
                                                            }),
                                                        children: "لغو تخصیص"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/development.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 2986
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/development.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 2953
                                                }, this)
                                            ]
                                        }, e.id, true, {
                                            fileName: "[project]/src/components/talent/development.tsx",
                                            lineNumber: 26,
                                            columnNumber: 2442
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/development.tsx",
                                    lineNumber: 26,
                                    columnNumber: 2188
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/development.tsx",
                            lineNumber: 26,
                            columnNumber: 2057
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/development.tsx",
                        lineNumber: 26,
                        columnNumber: 2027
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "tl-page-note",
                children: "محتوای این کتابخانه داخلی و نمونه است؛ اشتراک مکتب‌خونه یا محتوای آموزشی دارای مجوز به آن متصل نیست."
            }, void 0, false, {
                fileName: "[project]/src/components/talent/development.tsx",
                lineNumber: 26,
                columnNumber: 3242
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/development.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_s1(LearningPage, "Y6o83Kt9NLuhdVMBNR4qrioGRyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c1 = LearningPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "OnboardingPage");
__turbopack_context__.k.register(_c1, "LearningPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/forms.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentForms",
    ()=>TalentForms
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/calendar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/talent-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const options = (values)=>Array.isArray(values) ? values.map((v)=>({
            value: v,
            label: v
        })) : Object.entries(values).map(([value, label])=>({
            value,
            label
        }));
const inDays = (n)=>new Date(Date.now() + n * 86400000).toISOString().slice(0, 10);
const supported = [
    "job",
    "applicant",
    "note",
    "interview",
    "hire",
    "template",
    "plan",
    "plan-edit",
    "task",
    "course",
    "assign",
    "survey",
    "improvement",
    "policy",
    "simulate",
    "rename",
    "confirm"
];
function TalentForms() {
    _s();
    const { dialog } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    if (!dialog || !supported.includes(dialog.kind)) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TalentForm, {}, `${dialog.kind}-${dialog.item?.id || "new"}`, false, {
        fileName: "[project]/src/components/talent/forms.tsx",
        lineNumber: 16,
        columnNumber: 134
    }, this);
}
_s(TalentForms, "/wCq5uOpojHPTN4Cqy6vKF9k01Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"]
    ];
});
_c = TalentForms;
function TalentForm() {
    _s1();
    const { dialog, close, mutate, busy, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const kind = dialog.kind, item = dialog.item || {}, extra = dialog.extra || {};
    const admin = workspace.user.role === "admin";
    const me = workspace.employees.find((e)=>e.id === workspace.user.employeeId);
    const staff = workspace.employees.filter((e)=>[
            "active",
            "on_leave"
        ].includes(e.status));
    const staffOptions = staff.map((e)=>({
            value: e.id,
            label: `${e.name} · ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(e.code)}`
        }));
    const departmentOptions = options(admin || workspace.user.role === "finance" ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departments"] : [
        me?.department || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departments"][0]
    ]);
    const defaults = {
        job: {
            department: me?.department || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departments"][0],
            title: "",
            location: "تهران · پارک آبی آبان",
            contract: "تمام‌وقت",
            description: "",
            requirements: "",
            status: "draft",
            openings: 1,
            salaryMin: 18000000,
            salaryMax: 30000000,
            hiringCost: 0,
            deadline: inDays(30)
        },
        applicant: {
            jobId: extra.jobId || data.jobs[0]?.id || "",
            name: "",
            email: "",
            phone: "",
            source: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sourceLabels"][0],
            tags: "",
            skills: "",
            experience: 0,
            expectedSalary: 0,
            summary: ""
        },
        note: {
            kind: "note",
            score: 4,
            body: ""
        },
        interview: {
            applicantId: extra.applicantId || data.applicants[0]?.id || "",
            interviewerId: me?.id || staff[0]?.id || "",
            startsAt: `${inDays(1)}T10:00`,
            duration: 45,
            mode: "حضوری",
            location: "اتاق جلسات منابع انسانی",
            status: "scheduled",
            feedback: "",
            score: 0
        },
        hire: {
            code: String(Math.max(1000, ...workspace.employees.map((e)=>Number(e.code) || 0)) + 1),
            baseSalary: Number(item.expectedSalary) || 20000000,
            hireDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])(),
            password: "",
            templateId: ""
        },
        template: {
            title: "",
            department: "all",
            welcome: "به تیم آبان خوش آمدید. مسیر روزهای اول همکاری شما در این برنامه مشخص شده است.",
            tasks: [
                {
                    title: "آشنایی با تیم و همیار",
                    ownerRole: "manager",
                    offsetDays: 0
                },
                {
                    title: "مطالعه راهنمای همکاری",
                    ownerRole: "employee",
                    offsetDays: 1
                }
            ]
        },
        plan: {
            employeeId: staff[0]?.id || "",
            templateId: data.templates[0]?.id || "",
            startDate: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])()
        },
        task: {
            planId: extra.planId || "",
            title: "",
            ownerRole: "employee",
            dueDate: inDays(3)
        },
        course: {
            title: "",
            category: "مهارت‌های عمومی",
            instructor: "تیم آموزش آبان",
            description: "",
            level: "مقدماتی",
            status: "draft",
            passScore: 70,
            lessons: [
                {
                    id: crypto.randomUUID(),
                    title: "",
                    content: "",
                    minutes: 15,
                    url: ""
                }
            ],
            quiz: [
                {
                    id: crypto.randomUUID(),
                    text: "",
                    options: [
                        "",
                        "",
                        ""
                    ],
                    correct: 0
                }
            ]
        },
        assign: {
            courseId: extra.courseId || data.courses.find((c)=>c.status === "published")?.id || "",
            employeeId: staff[0]?.id || "",
            target: "single",
            department: "all",
            dueDate: inDays(14)
        },
        survey: {
            title: "",
            description: "پاسخ‌های شما فقط به‌صورت تجمیعی و بدون نام گزارش می‌شود.",
            department: "all",
            deadline: inDays(14),
            questions: [
                {
                    id: crypto.randomUUID(),
                    text: "از تجربه همکاری در آبان رضایت دارم.",
                    type: "scale",
                    dimension: "رضایت کلی"
                },
                {
                    id: crypto.randomUUID(),
                    text: "چقدر آبان را به عنوان محل کار توصیه می‌کنید؟",
                    type: "enps",
                    dimension: "توصیه همکاری"
                }
            ]
        },
        improvement: {
            surveyId: extra.surveyId || data.surveys[0]?.id || "",
            title: "",
            employeeId: me?.id || staff[0]?.id || "",
            dueDate: inDays(14),
            status: "open",
            notes: ""
        },
        policy: {
            department: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["departments"][0],
            minimum: 18000000,
            midpoint: 26000000,
            maximum: 36000000,
            increasePercent: 20,
            complexityPercent: 100,
            strategy: "market",
            source: "مصوبه و بازه داخلی مجموعه"
        },
        simulate: {
            title: `پیشنهاد بازنگری حقوق ${new Intl.DateTimeFormat("fa-IR", {
                year: "numeric"
            }).format(new Date())}`,
            department: "all"
        }
    };
    const [values, setValues] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "TalentForm.useState": ()=>({
                ...defaults[kind],
                ...item,
                ...extra,
                ...kind === "applicant" && Array.isArray(item.tags) ? {
                    tags: item.tags.join("، ")
                } : {},
                ...kind === "interview" && item.startsAt ? {
                    startsAt: new Date(Date.parse(String(item.startsAt)) - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16)
                } : {}
            })
    }["TalentForm.useState"]);
    const set = (key, value)=>setValues((old)=>({
                ...old,
                [key]: value
            }));
    const get = (key)=>String(values[key] ?? "");
    const configs = {
        job: {
            title: item.id ? "ویرایش فرصت شغلی" : "یک فرصت تازه برای همکاری",
            action: "job.save",
            fields: [
                {
                    key: "title",
                    label: "عنوان شغلی"
                },
                {
                    key: "department",
                    label: "واحد سازمانی",
                    options: departmentOptions
                },
                {
                    key: "location",
                    label: "محل کار"
                },
                {
                    key: "contract",
                    label: "نوع همکاری",
                    options: options([
                        "تمام‌وقت",
                        "پاره‌وقت",
                        "شیفتی",
                        "قراردادی"
                    ])
                },
                {
                    key: "openings",
                    label: "ظرفیت استخدام",
                    type: "number",
                    min: 1,
                    max: 1000
                },
                {
                    key: "deadline",
                    label: "آخرین مهلت دریافت درخواست",
                    type: "date"
                },
                {
                    key: "salaryMin",
                    label: "حداقل حقوق (تومان)",
                    type: "number",
                    min: 0
                },
                {
                    key: "salaryMax",
                    label: "حداکثر حقوق (تومان)",
                    type: "number",
                    min: 0
                },
                {
                    key: "hiringCost",
                    label: "هزینه جذب ثبت‌شده (تومان)",
                    type: "number",
                    min: 0,
                    hint: "برای گزارش هزینه به ازای استخدام"
                },
                {
                    key: "status",
                    label: "وضعیت انتشار",
                    options: options({
                        draft: "پیش‌نویس",
                        open: "انتشار در صفحه همکاری",
                        closed: "بسته"
                    })
                },
                {
                    key: "description",
                    label: "شرح شغل و مسئولیت‌ها",
                    type: "textarea",
                    wide: true
                },
                {
                    key: "requirements",
                    label: "شرایط احراز و مهارت‌ها",
                    type: "textarea",
                    wide: true,
                    required: false
                }
            ]
        },
        applicant: {
            title: item.id ? "ویرایش پرونده متقاضی" : "افزودن به بانک رزومه",
            action: "applicant.save",
            fields: [
                {
                    key: "name",
                    label: "نام و نام خانوادگی"
                },
                {
                    key: "jobId",
                    label: "فرصت شغلی",
                    options: data.jobs.map((j)=>({
                            value: j.id,
                            label: j.title
                        }))
                },
                {
                    key: "email",
                    label: "ایمیل",
                    type: "email"
                },
                {
                    key: "phone",
                    label: "شماره تماس",
                    type: "tel",
                    required: false
                },
                {
                    key: "source",
                    label: "منبع دریافت رزومه",
                    options: options(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sourceLabels"])
                },
                {
                    key: "experience",
                    label: "سابقه مرتبط (سال)",
                    type: "number",
                    min: 0,
                    max: 50
                },
                {
                    key: "expectedSalary",
                    label: "حقوق درخواستی (تومان)",
                    type: "number",
                    min: 0
                },
                {
                    key: "tags",
                    label: "برچسب‌ها",
                    hint: "با ویرگول جدا کنید؛ حداکثر ۸ برچسب",
                    required: false
                },
                {
                    key: "skills",
                    label: "مهارت‌ها",
                    required: false,
                    wide: true
                },
                {
                    key: "summary",
                    label: "خلاصه سوابق",
                    type: "textarea",
                    required: false,
                    wide: true
                }
            ]
        },
        note: {
            title: "یادداشت و ارزیابی تیم جذب",
            action: "applicant.note",
            fields: [
                {
                    key: "kind",
                    label: "نوع ثبت",
                    options: options({
                        note: "یادداشت داخلی",
                        evaluation: "ارزیابی امتیازی"
                    })
                },
                {
                    key: "score",
                    label: "امتیاز از ۵",
                    type: "number",
                    min: 1,
                    max: 5
                },
                {
                    key: "body",
                    label: "بازخورد و توضیح ارزیابی",
                    type: "textarea",
                    wide: true
                }
            ]
        },
        interview: {
            title: item.id ? "ویرایش جلسه مصاحبه" : "برنامه‌ریزی مصاحبه",
            action: "interview.save",
            fields: [
                {
                    key: "applicantId",
                    label: "متقاضی",
                    options: data.applicants.map((c)=>({
                            value: c.id,
                            label: c.name
                        }))
                },
                {
                    key: "interviewerId",
                    label: "مصاحبه‌کننده",
                    options: staffOptions
                },
                {
                    key: "startsAt",
                    label: "تاریخ و ساعت جلسه",
                    type: "datetime-local",
                    hint: "ساعت محلی مرورگر؛ ذخیره با منطقه زمانی"
                },
                {
                    key: "duration",
                    label: "مدت جلسه (دقیقه)",
                    type: "number",
                    min: 15,
                    max: 240
                },
                {
                    key: "mode",
                    label: "نوع جلسه",
                    options: options([
                        "حضوری",
                        "آنلاین",
                        "تلفنی",
                        "آزمون عملی"
                    ])
                },
                {
                    key: "status",
                    label: "وضعیت جلسه",
                    options: options({
                        scheduled: "برنامه‌ریزی‌شده",
                        completed: "برگزار شده",
                        cancelled: "لغو شده"
                    })
                },
                {
                    key: "location",
                    label: "محل یا لینک جلسه",
                    required: false,
                    wide: true
                },
                {
                    key: "score",
                    label: "امتیاز جلسه (۰ تا ۵)",
                    type: "number",
                    min: 0,
                    max: 5
                },
                {
                    key: "feedback",
                    label: "بازخورد مصاحبه",
                    type: "textarea",
                    required: false,
                    wide: true
                }
            ]
        },
        hire: {
            title: `شروع همکاری ${item.name || "متقاضی"}`,
            action: "applicant.hire",
            fields: [
                {
                    key: "code",
                    label: "کد پرسنلی جدید"
                },
                {
                    key: "baseSalary",
                    label: "حقوق پایه توافق‌شده (تومان)",
                    type: "number",
                    min: 1
                },
                {
                    key: "hireDate",
                    label: "تاریخ شروع همکاری",
                    type: "date"
                },
                {
                    key: "password",
                    label: "رمز اولیه حساب کارمندی",
                    type: "password",
                    hint: "حداقل ۸ نویسه؛ به همکار تحویل داده شود"
                },
                {
                    key: "templateId",
                    label: "ایجاد خودکار برنامه آنبوردینگ",
                    options: [
                        {
                            value: "",
                            label: "بدون برنامه ورود"
                        },
                        ...data.templates.map((t)=>({
                                value: t.id,
                                label: t.title
                            }))
                    ],
                    required: false,
                    wide: true
                }
            ]
        },
        template: {
            title: item.id ? "ویرایش الگوی آنبوردینگ" : "طراحی یک مسیر خوش‌آمدگویی",
            action: "template.save",
            fields: [
                {
                    key: "title",
                    label: "نام الگو"
                },
                {
                    key: "department",
                    label: "واحد هدف",
                    options: [
                        {
                            value: "all",
                            label: "همه واحدها"
                        },
                        ...departmentOptions
                    ]
                },
                {
                    key: "welcome",
                    label: "متن خوش‌آمدگویی و راهنمای روزهای اول",
                    type: "textarea",
                    wide: true
                }
            ]
        },
        plan: {
            title: "آغاز برنامه ورود همکار",
            action: "plan.create",
            fields: [
                {
                    key: "employeeId",
                    label: "همکار جدید",
                    options: staffOptions
                },
                {
                    key: "templateId",
                    label: "الگوی مسیر ورود",
                    options: data.templates.map((t)=>({
                            value: t.id,
                            label: t.title
                        }))
                },
                {
                    key: "startDate",
                    label: "تاریخ شروع برنامه",
                    type: "date"
                }
            ]
        },
        "plan-edit": {
            title: "شخصی‌سازی برنامه ورود",
            action: "plan.save",
            fields: [
                {
                    key: "title",
                    label: "عنوان برنامه",
                    wide: true
                },
                {
                    key: "welcome",
                    label: "متن راهنما و خوش‌آمدگویی",
                    type: "textarea",
                    wide: true
                }
            ]
        },
        task: {
            title: item.id ? "ویرایش وظیفه" : "وظیفه جدید در مسیر ورود",
            action: "task.save",
            fields: [
                {
                    key: "title",
                    label: "عنوان وظیفه",
                    wide: true
                },
                {
                    key: "ownerRole",
                    label: "مسئول انجام",
                    options: options(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskRoleLabels"])
                },
                {
                    key: "dueDate",
                    label: "مهلت انجام",
                    type: "date"
                }
            ]
        },
        course: {
            title: item.id ? "ویرایش دوره آموزشی" : "ساخت دوره آموزشی داخلی",
            action: "course.save",
            fields: [
                {
                    key: "title",
                    label: "عنوان دوره"
                },
                {
                    key: "category",
                    label: "حوزه آموزشی"
                },
                {
                    key: "instructor",
                    label: "مدرس / تولیدکننده محتوا"
                },
                {
                    key: "level",
                    label: "سطح",
                    options: options([
                        "مقدماتی",
                        "متوسط",
                        "پیشرفته"
                    ])
                },
                {
                    key: "status",
                    label: "وضعیت",
                    options: options({
                        draft: "پیش‌نویس",
                        published: "انتشار",
                        archived: "بایگانی"
                    })
                },
                {
                    key: "passScore",
                    label: "حدنصاب قبولی از ۱۰۰",
                    type: "number",
                    min: 1,
                    max: 100
                },
                {
                    key: "description",
                    label: "معرفی و هدف یادگیری",
                    type: "textarea",
                    wide: true
                }
            ]
        },
        assign: {
            title: "تخصیص مسیر یادگیری",
            action: "enrollment.assign",
            fields: [
                {
                    key: "courseId",
                    label: "دوره",
                    options: data.courses.filter((c)=>c.status === "published").map((c)=>({
                            value: c.id,
                            label: c.title
                        }))
                },
                {
                    key: "target",
                    label: "شیوه تخصیص",
                    options: options({
                        single: "یک همکار",
                        department: "کارکنان واحد"
                    })
                },
                ...get("target") === "single" ? [
                    {
                        key: "employeeId",
                        label: "همکار",
                        options: staffOptions
                    }
                ] : [
                    {
                        key: "department",
                        label: "واحد هدف",
                        options: [
                            {
                                value: "all",
                                label: "تمام کارکنان در دسترس"
                            },
                            ...departmentOptions
                        ]
                    }
                ],
                {
                    key: "dueDate",
                    label: "مهلت تکمیل",
                    type: "date"
                }
            ]
        },
        survey: {
            title: item.id ? "ویرایش پیش‌نویس نظرسنجی" : "صدای تیم را بشنویم",
            action: "survey.save",
            fields: [
                {
                    key: "title",
                    label: "عنوان نظرسنجی"
                },
                {
                    key: "department",
                    label: "جامعه مخاطب",
                    options: [
                        {
                            value: "all",
                            label: "تمام کارکنان فعال"
                        },
                        ...departmentOptions
                    ]
                },
                {
                    key: "deadline",
                    label: "پایان مهلت پاسخ",
                    type: "date"
                },
                {
                    key: "description",
                    label: "توضیح برای کارکنان",
                    type: "textarea",
                    wide: true
                }
            ]
        },
        improvement: {
            title: item.id ? "ویرایش اقدام اصلاحی" : "یک قدم برای تجربه بهتر",
            action: "improvement.save",
            fields: [
                {
                    key: "title",
                    label: "عنوان اقدام",
                    wide: true
                },
                {
                    key: "surveyId",
                    label: "نظرسنجی مرتبط",
                    options: data.surveys.map((s)=>({
                            value: s.id,
                            label: s.title
                        }))
                },
                {
                    key: "employeeId",
                    label: "مسئول پیگیری",
                    options: staffOptions
                },
                {
                    key: "dueDate",
                    label: "مهلت انجام",
                    type: "date"
                },
                {
                    key: "status",
                    label: "وضعیت",
                    options: options({
                        open: "برنامه‌ریزی‌شده",
                        in_progress: "در حال انجام",
                        done: "انجام شده"
                    })
                },
                {
                    key: "notes",
                    label: "شرح اقدام و نتیجه",
                    type: "textarea",
                    required: false,
                    wide: true
                }
            ]
        },
        policy: {
            title: "سیاست پرداخت واحد سازمانی",
            action: "salary.policy",
            fields: [
                {
                    key: "department",
                    label: "واحد سازمانی",
                    options: departmentOptions
                },
                {
                    key: "strategy",
                    label: "استراتژی پرداخت",
                    options: options(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strategyLabels"])
                },
                {
                    key: "minimum",
                    label: "کف بازه داخلی (تومان)",
                    type: "number",
                    min: 1
                },
                {
                    key: "midpoint",
                    label: "میانه بازه داخلی (تومان)",
                    type: "number",
                    min: 1
                },
                {
                    key: "maximum",
                    label: "سقف بازه داخلی (تومان)",
                    type: "number",
                    min: 1
                },
                {
                    key: "increasePercent",
                    label: "افزایش هدف (درصد)",
                    type: "number",
                    min: 0,
                    max: 100
                },
                {
                    key: "complexityPercent",
                    label: "ضریب پیچیدگی (درصد)",
                    type: "number",
                    min: 50,
                    max: 200
                },
                {
                    key: "source",
                    label: "منبع و مبنای بازه",
                    wide: true,
                    hint: "این بازه داخلی است؛ اتصال به داده بازار وجود ندارد."
                }
            ]
        },
        simulate: {
            title: "محاسبه سناریوی جدید حقوق",
            action: "salary.simulate",
            fields: [
                {
                    key: "title",
                    label: "نام سناریو",
                    wide: true
                },
                {
                    key: "department",
                    label: "محدوده محاسبه",
                    options: [
                        {
                            value: "all",
                            label: "تمام واحدها"
                        },
                        ...departmentOptions
                    ]
                },
                {
                    key: "employeeId",
                    label: "همکار مشخص (اختیاری)",
                    required: false,
                    options: [
                        {
                            value: "",
                            label: "تمام همکاران در محدوده انتخابی"
                        },
                        ...staffOptions
                    ]
                }
            ]
        },
        rename: {
            title: "ویرایش عنوان سناریو",
            action: "salary.rename",
            fields: [
                {
                    key: "title",
                    label: "نام سناریو",
                    wide: true
                }
            ]
        },
        confirm: {
            title: String(item.title || "تأیید عملیات"),
            action: String(item.action),
            fields: []
        }
    };
    const config = configs[kind];
    async function submit(e) {
        e.preventDefault();
        let payload = {
            ...values
        };
        if (kind === "interview") payload.startsAt = new Date(get("startsAt")).toISOString();
        if (kind === "assign") payload.employeeIds = get("target") === "single" ? [
            get("employeeId")
        ] : staff.filter((e)=>get("department") === "all" || e.department === get("department")).map((e)=>e.id);
        const result = await mutate(config.action, payload);
        if (result) close();
    }
    function patchList(key, index, change) {
        const list = values[key];
        set(key, list.map((row, i)=>i === index ? {
                ...row,
                ...change
            } : row));
    }
    function remove(key, index) {
        set(key, values[key].filter((_, i)=>i !== index));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Modal"], {
        title: config.title,
        subtitle: kind === "confirm" ? undefined : "اطلاعات در پایگاه داده ذخیره می‌شود و سطح دسترسی کنترل خواهد شد.",
        onClose: close,
        wide: kind !== "confirm" && kind !== "note" && kind !== "simulate",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: submit,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-body tl-form-body",
                    children: [
                        kind === "confirm" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "confirmation-body",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "confirmation-icon",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                        size: 27
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 64,
                                        columnNumber: 99
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 64,
                                    columnNumber: 63
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: String(item.description || "آیا از انجام این عملیات مطمئن هستید؟")
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 64,
                                    columnNumber: 131
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 64,
                            columnNumber: 28
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-grid",
                            children: config.fields.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                    label: f.label,
                                    hint: f.hint,
                                    className: f.wide ? "tl-wide" : "",
                                    children: f.options ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        required: f.required !== false,
                                        value: get(f.key),
                                        onChange: (e)=>set(f.key, e.target.value),
                                        children: f.options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: o.value,
                                                children: o.label
                                            }, o.value, false, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 65,
                                                columnNumber: 276
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 65,
                                        columnNumber: 154
                                    }, this) : f.type === "textarea" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                        required: f.required !== false,
                                        rows: 4,
                                        value: get(f.key),
                                        onChange: (e)=>set(f.key, e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 65,
                                        columnNumber: 370
                                    }, this) : f.type === "date" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JalaliDatePicker"], {
                                        value: get(f.key),
                                        onChange: (v)=>set(f.key, v),
                                        ariaLabel: f.label,
                                        required: f.required !== false
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 65,
                                        columnNumber: 508
                                    }, this) : f.type === "datetime-local" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$calendar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["JalaliDateTimePicker"], {
                                        value: get(f.key),
                                        onChange: (v)=>set(f.key, v),
                                        ariaLabel: f.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 65,
                                        columnNumber: 662
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: f.type || "text",
                                        required: f.required !== false,
                                        value: get(f.key),
                                        min: f.min,
                                        max: f.max || (f.type === "number" ? 1000000000 : undefined),
                                        minLength: f.type === "password" ? 8 : undefined,
                                        autoComplete: f.type === "password" ? "new-password" : "off",
                                        onChange: (e)=>set(f.key, e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 65,
                                        columnNumber: 758
                                    }, this)
                                }, f.key, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 65,
                                    columnNumber: 56
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 65,
                            columnNumber: 5
                        }, this),
                        kind === "template" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "tl-builder",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: [
                                        "چک‌لیست وظایف الگو ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "روز صفر = تاریخ شروع برنامه"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 66,
                                            columnNumber: 84
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 66,
                                    columnNumber: 61
                                }, this),
                                values.tasks.map((task, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-builder-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "tl-number",
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 66,
                                                columnNumber: 218
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "aria-label": `عنوان وظیفه ${i + 1}`,
                                                placeholder: "عنوان وظیفه",
                                                required: true,
                                                value: task.title,
                                                onChange: (e)=>patchList("tasks", i, {
                                                        title: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 66,
                                                columnNumber: 264
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                "aria-label": "مسئول وظیفه",
                                                value: task.ownerRole,
                                                onChange: (e)=>patchList("tasks", i, {
                                                        ownerRole: e.target.value
                                                    }),
                                                children: Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["taskRoleLabels"]).map(([k, value])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: k,
                                                        children: value
                                                    }, k, false, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 605
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 66,
                                                columnNumber: 428
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "aria-label": "روز نسبت به شروع",
                                                type: "number",
                                                min: -30,
                                                max: 180,
                                                required: true,
                                                value: task.offsetDays,
                                                onChange: (e)=>patchList("tasks", i, {
                                                        offsetDays: Number(e.target.value)
                                                    }),
                                                className: "tl-number-input"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 66,
                                                columnNumber: 658
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                "aria-label": "حذف وظیفه الگو",
                                                className: "icon-button danger-hover",
                                                disabled: values.tasks.length <= 1,
                                                onClick: ()=>remove("tasks", i),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                    lineNumber: 66,
                                                    columnNumber: 1044
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 66,
                                                columnNumber: 870
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 66,
                                        columnNumber: 178
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "text-button",
                                    onClick: ()=>set("tasks", [
                                            ...values.tasks,
                                            {
                                                title: "",
                                                ownerRole: "employee",
                                                offsetDays: 1
                                            }
                                        ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 66,
                                            columnNumber: 1242
                                        }, this),
                                        "افزودن وظیفه"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 66,
                                    columnNumber: 1081
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "field-note",
                                    children: "ویرایش الگو، برنامه‌های قبلاً ایجادشده را تغییر نمی‌دهد."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 66,
                                    columnNumber: 1281
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 66,
                            columnNumber: 29
                        }, this),
                        kind === "course" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "tl-builder",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "فصل‌های مسیر یادگیری"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 67,
                                            columnNumber: 61
                                        }, this),
                                        values.lessons.map((lesson, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-builder-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-builder-title",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    "درس ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 222
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                className: "icon-button danger-hover",
                                                                "aria-label": "حذف درس",
                                                                disabled: values.lessons.length <= 1,
                                                                onClick: ()=>remove("lessons", i),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 423
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 254
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 188
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "form-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                                label: "عنوان درس",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    required: true,
                                                                    value: lesson.title,
                                                                    onChange: (e)=>patchList("lessons", i, {
                                                                            title: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 510
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 485
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                                label: "زمان مطالعه (دقیقه)",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "number",
                                                                    min: 1,
                                                                    max: 1000,
                                                                    required: true,
                                                                    value: lesson.minutes,
                                                                    onChange: (e)=>patchList("lessons", i, {
                                                                            minutes: Number(e.target.value)
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 659
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 624
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                                label: "محتوای آموزشی",
                                                                className: "tl-wide",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                                    required: true,
                                                                    rows: 4,
                                                                    value: lesson.content,
                                                                    onChange: (e)=>patchList("lessons", i, {
                                                                            content: e.target.value
                                                                        })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 867
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 818
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                                label: "پیوند تکمیلی ویدیو یا فایل (اختیاری)",
                                                                className: "tl-wide",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "url",
                                                                    value: lesson.url,
                                                                    onChange: (e)=>patchList("lessons", i, {
                                                                            url: e.target.value
                                                                        }),
                                                                    placeholder: "https://...",
                                                                    dir: "ltr"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 1069
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 997
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 458
                                                    }, this)
                                                ]
                                            }, lesson.id, true, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 67,
                                                columnNumber: 139
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "text-button",
                                            onClick: ()=>set("lessons", [
                                                    ...values.lessons,
                                                    {
                                                        id: crypto.randomUUID(),
                                                        title: "",
                                                        content: "",
                                                        minutes: 15,
                                                        url: ""
                                                    }
                                                ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 1416
                                                }, this),
                                                "افزودن درس"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 67,
                                            columnNumber: 1231
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 67,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    className: "tl-builder",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: "آزمون پایان دوره"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 67,
                                            columnNumber: 1495
                                        }, this),
                                        values.quiz.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-builder-card",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-builder-title",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: [
                                                                    "سؤال ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 1645
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                type: "button",
                                                                "aria-label": "حذف سؤال آزمون",
                                                                className: "icon-button danger-hover",
                                                                disabled: values.quiz.length <= 1,
                                                                onClick: ()=>remove("quiz", i),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 67,
                                                                    columnNumber: 1854
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 1678
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 1611
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        label: "صورت سؤال",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            value: q.text,
                                                            onChange: (e)=>patchList("quiz", i, {
                                                                    text: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/forms.tsx",
                                                            lineNumber: 67,
                                                            columnNumber: 1914
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 1889
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-quiz-options",
                                                        children: q.options.map((option, n)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        type: "radio",
                                                                        name: `correct-${q.id}`,
                                                                        checked: q.correct === n,
                                                                        onChange: ()=>patchList("quiz", i, {
                                                                                correct: n
                                                                            }),
                                                                        "aria-label": `گزینه صحیح ${n + 1}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                                        lineNumber: 67,
                                                                        columnNumber: 2096
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        required: true,
                                                                        placeholder: `گزینه ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(n + 1)}`,
                                                                        "aria-label": `متن گزینه ${n + 1}`,
                                                                        value: option,
                                                                        onChange: (e)=>patchList("quiz", i, {
                                                                                options: q.options.map((o, x)=>n === x ? e.target.value : o)
                                                                            })
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                                        lineNumber: 67,
                                                                        columnNumber: 2258
                                                                    }, this)
                                                                ]
                                                            }, n, true, {
                                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                                lineNumber: 67,
                                                                columnNumber: 2081
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 2018
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        className: "field-note",
                                                        children: "دایره کنار پاسخ صحیح را انتخاب کنید."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 67,
                                                        columnNumber: 2481
                                                    }, this)
                                                ]
                                            }, q.id, true, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 67,
                                                columnNumber: 1567
                                            }, this)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "text-button",
                                            onClick: ()=>set("quiz", [
                                                    ...values.quiz,
                                                    {
                                                        id: crypto.randomUUID(),
                                                        text: "",
                                                        options: [
                                                            "",
                                                            "",
                                                            ""
                                                        ],
                                                        correct: 0
                                                    }
                                                ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 2747
                                                }, this),
                                                "افزودن سؤال"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 67,
                                            columnNumber: 2563
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 67,
                                    columnNumber: 1463
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 67,
                                            columnNumber: 2824
                                        }, this),
                                        "پس از تخصیص، درس‌ها و آزمون برای حفظ اعتبار کارنامه قفل می‌شوند؛ عنوان و وضعیت همچنان قابل تغییر است."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 67,
                                    columnNumber: 2795
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 67,
                            columnNumber: 27
                        }, this),
                        kind === "survey" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                            className: "tl-builder",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: "طراحی پرسش‌نامه"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 68,
                                    columnNumber: 59
                                }, this),
                                values.questions.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-builder-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-builder-title",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: [
                                                            "پرسش ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 215
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        "aria-label": "حذف پرسش",
                                                        className: "icon-button danger-hover",
                                                        disabled: values.questions.length <= 1,
                                                        onClick: ()=>remove("questions", i),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            size: 15
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/forms.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 430
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 248
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 68,
                                                columnNumber: 181
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                label: "متن پرسش",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    required: true,
                                                    value: q.text,
                                                    onChange: (e)=>patchList("questions", i, {
                                                            text: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 489
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 68,
                                                columnNumber: 465
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "form-grid spaced-field",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        label: "نوع پاسخ",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            value: q.type,
                                                            onChange: (e)=>patchList("questions", i, {
                                                                    type: e.target.value
                                                                }),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "scale",
                                                                    children: "مقیاس رضایت ۱ تا ۵"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 68,
                                                                    columnNumber: 753
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "enps",
                                                                    children: "توصیه همکاری eNPS از ۰ تا ۱۰"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/forms.tsx",
                                                                    lineNumber: 68,
                                                                    columnNumber: 802
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/forms.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 662
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 638
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Field"], {
                                                        label: "شاخص مورد سنجش",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            required: true,
                                                            value: q.dimension,
                                                            onChange: (e)=>patchList("questions", i, {
                                                                    dimension: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/forms.tsx",
                                                            lineNumber: 68,
                                                            columnNumber: 907
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/forms.tsx",
                                                        lineNumber: 68,
                                                        columnNumber: 877
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/forms.tsx",
                                                lineNumber: 68,
                                                columnNumber: 598
                                            }, this)
                                        ]
                                    }, q.id, true, {
                                        fileName: "[project]/src/components/talent/forms.tsx",
                                        lineNumber: 68,
                                        columnNumber: 137
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "text-button",
                                    onClick: ()=>set("questions", [
                                            ...values.questions,
                                            {
                                                id: crypto.randomUUID(),
                                                text: "",
                                                type: "scale",
                                                dimension: ""
                                            }
                                        ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 68,
                                            columnNumber: 1231
                                        }, this),
                                        "افزودن پرسش"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 68,
                                    columnNumber: 1040
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-info",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/forms.tsx",
                                            lineNumber: 68,
                                            columnNumber: 1298
                                        }, this),
                                        "گزارش فقط پس از بستن نظرسنجی و با حداقل ۵ پاسخ در هر گروه منتشر می‌شود؛ نام پاسخ‌دهندگان در نتایج نمایش داده نمی‌شود."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 68,
                                    columnNumber: 1269
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 68,
                            columnNumber: 27
                        }, this),
                        kind === "simulate" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 69,
                                    columnNumber: 58
                                }, this),
                                "محاسبه بر اساس بازه‌ها و سیاست‌های داخلی است، نه هوش مصنوعی یا داده زنده بازار. تا تأیید مدیر، حقوق پایه هیچ فردی تغییر نمی‌کند."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 69,
                            columnNumber: 29
                        }, this),
                        kind === "hire" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "inline-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                    size: 17
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 70,
                                    columnNumber: 54
                                }, this),
                                "پرونده پرسنلی، حساب کارمندی و برنامه ورود انتخاب‌شده در یک تراکنش ایجاد می‌شوند."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 70,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/talent/forms.tsx",
                    lineNumber: 63,
                    columnNumber: 257
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "modal-footer",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            className: "btn secondary",
                            onClick: close,
                            disabled: busy,
                            children: "انصراف"
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 71,
                            columnNumber: 39
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SubmitButton"], {
                            busy: busy,
                            children: [
                                kind === "hire" ? "تأیید استخدام و ایجاد حساب" : kind === "simulate" ? "محاسبه و ذخیره سناریو" : kind === "confirm" ? "تأیید و ادامه" : "ذخیره تغییرات",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/forms.tsx",
                                    lineNumber: 71,
                                    columnNumber: 313
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/forms.tsx",
                            lineNumber: 71,
                            columnNumber: 134
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/talent/forms.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/talent/forms.tsx",
            lineNumber: 63,
            columnNumber: 233
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/talent/forms.tsx",
        lineNumber: 63,
        columnNumber: 10
    }, this);
}
_s1(TalentForm, "a2Q/XnNm3yAcTlFfyvSUtjKGrzU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c1 = TalentForm;
var _c, _c1;
__turbopack_context__.k.register(_c, "TalentForms");
__turbopack_context__.k.register(_c1, "TalentForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/hub.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GrowthRibbon",
    ()=>GrowthRibbon,
    "ResearchPage",
    ()=>ResearchPage,
    "TalentHub",
    ()=>TalentHub
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-left.mjs [app-client] (ecmascript) <export default as ArrowUpLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase-business.mjs [app-client] (ecmascript) <export default as BriefcaseBusiness>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.mjs [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.mjs [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-search.mjs [app-client] (ecmascript) <export default as FileSearch>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.mjs [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.mjs [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.mjs [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cando$2d$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/cando-review.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const modules = [
    {
        page: "recruitment",
        title: "استعدادهای تازه، تیمی قوی‌تر",
        label: "جذب و استخدام",
        english: "APPLICANT TRACKING",
        description: "از بانک رزومه و مصاحبه تا پیشنهاد همکاری؛ همه مراحل جذب را یکجا پیش ببرید.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"],
        color: "teal",
        roles: [
            "admin",
            "manager"
        ]
    },
    {
        page: "onboarding",
        title: "یک شروع خوب، یک همراهی ماندگار",
        label: "آنبوردینگ",
        english: "A BETTER FIRST DAY",
        description: "مسیر ورود شخصی‌سازی‌شده، وظایف روشن و یک خوش‌آمدگویی گرم برای هر همکار.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"],
        color: "blue",
        roles: [
            "admin",
            "manager",
            "finance",
            "employee"
        ]
    },
    {
        page: "learning",
        title: "یادگیری، در جریان هر روز",
        label: "آکادمی آبان",
        english: "LEARNING & GROWTH",
        description: "دوره‌های اختصاصی بسازید، مسیر یادگیری تعریف کنید و رشد مهارت‌ها را ببینید.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
        color: "purple",
        roles: [
            "admin",
            "manager",
            "finance",
            "employee"
        ]
    },
    {
        page: "pulse",
        title: "صدای تیم را بهتر بشنوید",
        label: "نبض سازمان",
        english: "LISTEN. LEARN. IMPROVE.",
        description: "بازخوردهای بی‌نام را به شناخت بهتر و اقدام‌های کوچک اما مؤثر تبدیل کنید.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"],
        color: "rose",
        roles: [
            "admin",
            "manager",
            "finance",
            "employee"
        ]
    },
    {
        page: "compensation",
        title: "تصمیم روشن برای پرداخت منصفانه",
        label: "دستیار تعیین حقوق",
        english: "TRANSPARENT COMPENSATION",
        description: "سیاست پرداخت تیم‌ها را تعریف و اثر سناریوهای حقوق را پیش از تأیید بررسی کنید.",
        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
        color: "orange",
        roles: [
            "admin",
            "finance"
        ]
    }
];
function GrowthRibbon() {
    _s();
    const { navigate, data } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-growth-ribbon",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tl-ribbon-icon",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    size: 20
                }, void 0, false, {
                    fileName: "[project]/src/components/talent/hub.tsx",
                    lineNumber: 17,
                    columnNumber: 151
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 17,
                columnNumber: 118
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "فصل تازه‌ای از همراهی در آبان"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 17,
                        columnNumber: 185
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "جذب، ورود، یادگیری و شنیدن صدای تیم؛ حالا در یک مسیر."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 17,
                        columnNumber: 231
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 17,
                columnNumber: 180
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "tl-new-pill",
                children: "جدید"
            }, void 0, false, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 17,
                columnNumber: 303
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>navigate("talent"),
                children: [
                    "کشف امکانات رشد تیم",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                        size: 15
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 17,
                        columnNumber: 406
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 17,
                columnNumber: 344
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/hub.tsx",
        lineNumber: 17,
        columnNumber: 84
    }, this);
}
_s(GrowthRibbon, "nMqrxtmSOvSVc60TReZRXQ69wto=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = GrowthRibbon;
function TalentHub() {
    _s1();
    const { data, open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace, navigate } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const mine = workspace.user.role === "employee";
    const visible = modules.filter((m)=>m.roles.includes(workspace.user.role));
    const pendingTasks = data.tasks.filter((t)=>!t.done).length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-page page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeading"], {
                eyebrow: "نسخه تازه آبان",
                title: "رشد و تجربه کارکنان",
                subtitle: "همراه تمام لحظه‌های همکاری؛ از اولین آشنایی تا رشد و ماندگاری.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: ()=>navigate("research"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 20,
                                columnNumber: 257
                            }, this),
                            "گزارش بررسی و قابلیت‌ها"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 20,
                        columnNumber: 186
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>navigate(mine ? "learning" : "onboarding"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlusIcon, {}, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 20,
                                columnNumber: 404
                            }, this),
                            mine ? "مسیر یادگیری من" : "شروع یک همراهی تازه"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 20,
                        columnNumber: 313
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 20,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "tl-hub-hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-hub-hero-copy",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 78
                                    }, this),
                                    "جریان رشد، در کنار هم"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 72
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: [
                                    "برای هر مرحله از مسیر،",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 137
                                    }, this),
                                    "یک تجربه بهتر بسازید."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 111
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    "ابزارهای تازه آبان، کارهای پراکنده منابع انسانی را",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 222
                                    }, this),
                                    "به یک مسیر پیوسته و انسانی تبدیل می‌کنند."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 169
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-hero-checks",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/hub.tsx",
                                                lineNumber: 21,
                                                columnNumber: 311
                                            }, this),
                                            "یکپارچه با پرونده پرسنلی"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 305
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                size: 13
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/hub.tsx",
                                                lineNumber: 21,
                                                columnNumber: 374
                                            }, this),
                                            "دسترسی متناسب با نقش"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 368
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 273
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 21,
                        columnNumber: 38
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-lifecycle-art",
                        "aria-hidden": "true",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-cycle-ring"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 491
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-cycle-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                        size: 37,
                                        strokeWidth: 1.4
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 557
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "همراهِ تیم"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 594
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "ABAN PEOPLE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 621
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 524
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tl-cycle-node node-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"], {
                                    size: 23
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 21,
                                    columnNumber: 690
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 651
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tl-cycle-node node-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"], {
                                    size: 24
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 21,
                                    columnNumber: 767
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 728
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tl-cycle-node node-3",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    size: 25
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 21,
                                    columnNumber: 833
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 794
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tl-cycle-node node-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                    size: 23
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 21,
                                    columnNumber: 906
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 867
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tl-cycle-node node-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"], {
                                    size: 23
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 21,
                                    columnNumber: 976
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 937
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-cycle-label",
                                children: [
                                    "همه‌چیز از آدم‌ها شروع می‌شود ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        size: 13
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 21,
                                        columnNumber: 1065
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 21,
                                columnNumber: 1003
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 21,
                        columnNumber: 438
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 21,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentStats"], {
                items: [
                    {
                        title: "فرصت‌های تازه",
                        value: data.jobs.filter((j)=>j.status === "open").length,
                        detail: "جذب همکاران آینده",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"]
                    },
                    {
                        title: "قدم‌های پیش روی تیم",
                        value: pendingTasks,
                        detail: "وظایف باز آنبوردینگ",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"],
                        color: "blue"
                    },
                    {
                        title: "مسیرهای یادگیری",
                        value: data.courses.filter((c)=>c.status === "published").length,
                        detail: "محتوای اختصاصی مجموعه",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"],
                        color: "purple"
                    },
                    {
                        title: "فرصت شنیده‌شدن",
                        value: data.surveys.filter((s)=>s.status === "active").length,
                        detail: "نظرسنجی فعال",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"],
                        color: "orange"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 22,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                title: "یک چرخه کامل، یک فضای یکپارچه",
                subtitle: "ابزار مناسب برای هر لحظه از تجربه کارکنان"
            }, void 0, false, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 23,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-modules-grid",
                children: [
                    visible.map((m)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: `card tl-module-card module-${m.color}`,
                            onClick: ()=>navigate(m.page),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tl-module-card-top",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: `tl-module-icon ${m.color}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(m.Icon, {
                                                size: 25,
                                                strokeWidth: 1.55
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/hub.tsx",
                                                lineNumber: 23,
                                                columnNumber: 350
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 23,
                                            columnNumber: 304
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "tl-module-english",
                                            children: m.english
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 23,
                                            columnNumber: 396
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpLeft$3e$__["ArrowUpLeft"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 23,
                                            columnNumber: 450
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 23,
                                    columnNumber: 268
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "tl-module-name",
                                    children: m.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 23,
                                    columnNumber: 481
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: m.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 23,
                                    columnNumber: 530
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: m.description
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 23,
                                    columnNumber: 548
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "ورود به ",
                                                m.label
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 23,
                                            columnNumber: 575
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 23,
                                            columnNumber: 605
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 23,
                                    columnNumber: 570
                                }, this)
                            ]
                        }, m.page, true, {
                            fileName: "[project]/src/components/talent/hub.tsx",
                            lineNumber: 23,
                            columnNumber: 162
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "card tl-module-card tl-research-card",
                        onClick: ()=>navigate("research"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-module-card-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tl-module-icon neutral",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                                            size: 25
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 23,
                                            columnNumber: 816
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 23,
                                        columnNumber: 775
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tl-module-english",
                                        children: "BUILT WITH CLARITY"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 23,
                                        columnNumber: 847
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpLeft$3e$__["ArrowUpLeft"], {
                                        size: 17
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 23,
                                        columnNumber: 908
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 23,
                                columnNumber: 739
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tl-module-name",
                                children: "شفافیت در توسعه"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 23,
                                columnNumber: 939
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "چه چیزی بررسی و اضافه شده؟"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 23,
                                columnNumber: 994
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "جزئیات تطبیق با صفحات عمومی کندو، امکانات پیاده‌شده و مرز اتصال‌های بیرونی."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 23,
                                columnNumber: 1029
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "مشاهده گزارش بررسی"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 23,
                                        columnNumber: 1116
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 23,
                                        columnNumber: 1147
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 23,
                                columnNumber: 1111
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 23,
                        columnNumber: 645
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 23,
                columnNumber: 111
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card tl-hub-activity",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                        title: "جریان تازه فعالیت‌ها",
                        subtitle: "رویدادهای مربوط به فضای کاری شما"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 24,
                        columnNumber: 47
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            data.activity.slice(0, 4).map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "tl-hub-event",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                size: 17
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/hub.tsx",
                                                lineNumber: 24,
                                                columnNumber: 223
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 24,
                                            columnNumber: 217
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: a.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/hub.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 261
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: a.actorName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/hub.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 277
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 24,
                                            columnNumber: 256
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RelativeTime"], {
                                                date: a.createdAt
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/hub.tsx",
                                                lineNumber: 24,
                                                columnNumber: 317
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 24,
                                            columnNumber: 311
                                        }, this)
                                    ]
                                }, a.id, true, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 24,
                                    columnNumber: 176
                                }, this)),
                            !data.activity.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "tl-page-note",
                                children: "فعالیت‌های جدید اینجا ثبت خواهند شد."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 24,
                                columnNumber: 393
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 24,
                        columnNumber: 135
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "tl-page-note",
                children: "امکانات مرخصی، امکانات رفاهی، مساعده و حقوق و دستمزد قبلی همچنان در منوی اصلی در دسترس هستند."
            }, void 0, false, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 24,
                columnNumber: 478
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/hub.tsx",
        lineNumber: 20,
        columnNumber: 10
    }, this);
}
_s1(TalentHub, "noardatflt3n6DjSNZRFVBlnCfY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c1 = TalentHub;
function PlusIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
        size: 16
    }, void 0, false, {
        fileName: "[project]/src/components/talent/hub.tsx",
        lineNumber: 26,
        columnNumber: 30
    }, this);
}
_c2 = PlusIcon;
function ResearchPage() {
    _s2();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const all = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cando$2d$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureGroups"].flatMap((g)=>g.features);
    const done = all.filter((f)=>f.status === "done").length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-page page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeading"], {
                eyebrow: "گزارش بررسی منابع عمومی",
                title: "از بررسی کندو تا توسعه آبان",
                subtitle: "تطبیق شفاف قابلیت‌ها؛ پیاده‌سازی مستقل با حفظ هویت و اطلاعات آبان.",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    className: "btn secondary",
                    href: "https://hrcando.ir/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: [
                        "وب‌سایت مبنا",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                            size: 15
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/hub.tsx",
                            lineNumber: 29,
                            columnNumber: 317
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/talent/hub.tsx",
                    lineNumber: 29,
                    columnNumber: 207
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 29,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-research-intro card",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "tl-module-icon teal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"], {
                            size: 29
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/hub.tsx",
                            lineNumber: 29,
                            columnNumber: 439
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 29,
                        columnNumber: 401
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "چه چیزی را بررسی کردیم؟"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 29,
                                columnNumber: 475
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "صفحه اصلی، پنج صفحه محصول، راهنمای فایل کارجو، گزارش استخدام داده‌محور و سیاست محرمانگی بررسی شده‌اند. این بررسی به محتوای عمومی محدود است؛ به پنل تجاری، کد خصوصی، داده مشتریان و مدل‌های اختصاصی کندو دسترسی نداشته‌ایم."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 29,
                                columnNumber: 507
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 29,
                        columnNumber: 470
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 29,
                columnNumber: 361
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentStats"], {
                items: [
                    {
                        title: "صفحه عمومی بررسی‌شده",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cando$2d$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewSources"].length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileSearch$3e$__["FileSearch"]
                    },
                    {
                        title: "محور محصول",
                        value: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cando$2d$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureGroups"].length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"],
                        color: "blue"
                    },
                    {
                        title: "قابلیت پیاده‌سازی‌شده",
                        value: done,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"],
                        color: "purple"
                    },
                    {
                        title: "موارد نیازمند اتصال بیرونی",
                        value: all.filter((f)=>f.status === "external").length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"],
                        color: "orange"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 29,
                columnNumber: 744
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card tl-workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-toolbar",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "input-search",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 98
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        "aria-label": "جستجوی قابلیت",
                                        placeholder: "جستجوی قابلیت یا جزئیات پیاده‌سازی...",
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 118
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 30,
                                columnNumber: 68
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                "aria-label": "وضعیت قابلیت",
                                value: status,
                                onChange: (e)=>setStatus(e.target.value),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "all",
                                        children: "تمام وضعیت‌ها"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 358
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "done",
                                        children: "پیاده‌سازی‌شده"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 400
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "adapted",
                                        children: "نسخه متناسب با آبان"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 444
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "external",
                                        children: "نیازمند سرویس یا مجوز"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 496
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 30,
                                columnNumber: 267
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 30,
                        columnNumber: 40
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-feature-groups",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cando$2d$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["featureGroups"].map((g)=>{
                            const features = g.features.filter((f)=>(status === "all" || f.status === status) && `${f.title} ${f.implementation}`.includes(query));
                            if (!features.length) return null;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                        title: g.title,
                                        subtitle: g.description,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "text-button",
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cando$2d$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewSources"][g.source].url,
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: [
                                                "منبع عمومی",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/hub.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 993
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 30,
                                            columnNumber: 879
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/hub.tsx",
                                        lineNumber: 30,
                                        columnNumber: 825
                                    }, this),
                                    features.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("details", {
                                            className: "tl-feature-row",
                                            open: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("summary", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `tl-feature-dot ${f.status}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/hub.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 1120
                                                        }, this),
                                                        f.title,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `badge ${f.status === "done" ? "green" : f.status === "adapted" ? "blue" : "amber"}`,
                                                            children: f.status === "done" ? "پیاده‌سازی‌شده" : f.status === "adapted" ? "متناسب با آبان" : "نیازمند اتصال / مجوز"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/hub.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 1178
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/hub.tsx",
                                                            lineNumber: 30,
                                                            columnNumber: 1397
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/hub.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 1111
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: f.implementation
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/hub.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 1432
                                                }, this)
                                            ]
                                        }, f.title, true, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 30,
                                            columnNumber: 1056
                                        }, this))
                                ]
                            }, g.id, true, {
                                fileName: "[project]/src/components/talent/hub.tsx",
                                lineNumber: 30,
                                columnNumber: 805
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 30,
                        columnNumber: 566
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 30,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card tl-research-sources",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                        title: "منابع بررسی",
                        subtitle: "پیوند مستقیم صفحات عمومی مبنا"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 30,
                        columnNumber: 1542
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$cando$2d$review$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reviewSources"].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: s.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i + 1)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 30,
                                    columnNumber: 1717
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: s.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 30,
                                            columnNumber: 1746
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: s.scope
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/hub.tsx",
                                            lineNumber: 30,
                                            columnNumber: 1772
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 30,
                                    columnNumber: 1741
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/hub.tsx",
                                    lineNumber: 30,
                                    columnNumber: 1794
                                }, this)
                            ]
                        }, s.url, true, {
                            fileName: "[project]/src/components/talent/hub.tsx",
                            lineNumber: 30,
                            columnNumber: 1647
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 30,
                columnNumber: 1496
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calculation-note",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 30,
                        columnNumber: 1870
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "هیچ داده کارمند یا متقاضی به کندو، جاب‌ویژن یا مکتب‌خونه ارسال نمی‌شود. نشان تجاری، تصاویر محصول و محتوای خصوصی آن‌ها کپی نشده‌اند. قابلیت‌های پیاده‌نشده به‌عنوان فعال نمایش داده نمی‌شوند."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/hub.tsx",
                        lineNumber: 30,
                        columnNumber: 1895
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/hub.tsx",
                lineNumber: 30,
                columnNumber: 1836
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/hub.tsx",
        lineNumber: 29,
        columnNumber: 10
    }, this);
}
_s2(ResearchPage, "67e1lrdxPxJoD1D7jtjuPbICglo=");
_c3 = ResearchPage;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "GrowthRibbon");
__turbopack_context__.k.register(_c1, "TalentHub");
__turbopack_context__.k.register(_c2, "PlusIcon");
__turbopack_context__.k.register(_c3, "ResearchPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TalentArea",
    ()=>TalentArea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$forms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/forms.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/details.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$hub$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/hub.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$recruitment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/recruitment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$development$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/development.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$insights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/insights.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function TalentArea({ page }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentProvider"], {
        children: [
            page === "recruitment" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$recruitment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RecruitmentPage"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 105
            }, this) : page === "onboarding" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$development$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OnboardingPage"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 151
            }, this) : page === "learning" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$development$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LearningPage"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 194
            }, this) : page === "pulse" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$insights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PulsePage"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 232
            }, this) : page === "compensation" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$insights$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CompensationPage"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 274
            }, this) : page === "research" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$hub$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResearchPage"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 319
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$hub$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentHub"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 338
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$forms$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentForms"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 352
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$details$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentDetails"], {}, void 0, false, {
                fileName: "[project]/src/components/talent/index.tsx",
                lineNumber: 10,
                columnNumber: 367
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/index.tsx",
        lineNumber: 10,
        columnNumber: 63
    }, this);
}
_c = TalentArea;
var _c;
__turbopack_context__.k.register(_c, "TalentArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/insights.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompensationPage",
    ()=>CompensationPage,
    "PulsePage",
    ()=>PulsePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.mjs [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.mjs [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clipboard-check.mjs [app-client] (ecmascript) <export default as ClipboardCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart-pulse.mjs [app-client] (ecmascript) <export default as HeartPulse>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.mjs [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.mjs [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-check.mjs [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.mjs [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.mjs [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.mjs [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/talent-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function PulsePage() {
    _s();
    const { data, open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const admin = workspace.user.role === "admin", manage = admin || workspace.user.role === "manager";
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("surveys");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const latest = data.metrics.find((m)=>m.reportReady);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-page page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeading"], {
                eyebrow: "صدای همکاران، مسیر بهتر شدن",
                title: "نبض سازمان",
                subtitle: "گوش می‌دهیم، یاد می‌گیریم و با هم تجربه همکاری را بهتر می‌کنیم.",
                children: [
                    manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "btn secondary",
                        href: "/api/talent/export?type=pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 13,
                                columnNumber: 268
                            }, this),
                            "گزارش تجمیعی"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 13,
                        columnNumber: 202
                    }, this),
                    admin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("survey"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 13,
                                columnNumber: 380
                            }, this),
                            "نظرسنجی جدید"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 13,
                        columnNumber: 317
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 13,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-pulse-banner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-pulse-visual",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                size: 35,
                                strokeWidth: 1.5
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 13,
                                columnNumber: 500
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 230 45",
                                "aria-hidden": "true",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0 25H50L60 14L74 35L90 3L110 43L124 19L135 25H230"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/insights.tsx",
                                    lineNumber: 13,
                                    columnNumber: 587
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 13,
                                columnNumber: 542
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 13,
                        columnNumber: 467
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "حالِ خوب تیم، از شنیده‌شدن شروع می‌شود."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 13,
                                columnNumber: 667
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "پاسخ‌ها بدون نام گزارش می‌شوند. هر بازخورد، فرصتی برای یک تغییر واقعی است."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 13,
                                columnNumber: 715
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 13,
                        columnNumber: 662
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        size: 26
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 13,
                        columnNumber: 802
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 13,
                columnNumber: 434
            }, this),
            manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentStats"], {
                items: [
                    {
                        title: "نظرسنجی‌های فعال",
                        value: data.surveys.filter((s)=>s.status === "active").length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"]
                    },
                    {
                        title: "پاسخ‌های دریافت‌شده",
                        value: data.metrics.reduce((n, m)=>n + m.responses, 0),
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
                        color: "blue"
                    },
                    {
                        title: "امتیاز آخرین دوره",
                        value: latest?.score !== null && latest?.score !== undefined ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(latest.score)} / ۱۰۰` : "—",
                        detail: "گزارش بسته‌شده و قابل انتشار",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                        color: "purple"
                    },
                    {
                        title: "اقدام‌های در جریان",
                        value: data.improvements.filter((i)=>i.status !== "done").length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"],
                        color: "orange"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 14,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card tl-workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentTabs"], {
                        active: tab,
                        onChange: setTab,
                        tabs: [
                            {
                                id: "surveys",
                                label: "نظرسنجی‌ها"
                            },
                            {
                                id: "actions",
                                label: "اقدام‌های بهبود",
                                count: data.improvements.length
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 15,
                        columnNumber: 44
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentSearch"], {
                        value: query,
                        onChange: setQuery,
                        placeholder: "جستجو در نبض سازمان...",
                        children: tab === "actions" && manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btn small primary tl-toolbar-end",
                            onClick: ()=>open("improvement"),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    size: 14
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/insights.tsx",
                                    lineNumber: 15,
                                    columnNumber: 421
                                }, this),
                                "اقدام تازه"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/insights.tsx",
                            lineNumber: 15,
                            columnNumber: 332
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 15,
                        columnNumber: 215
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: [
                            tab === "surveys" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-survey-grid",
                                children: data.surveys.filter((s)=>s.title.includes(query)).map((s)=>{
                                    const m = data.metrics.find((m)=>m.surveyId === s.id);
                                    const expired = s.deadline < (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["todayISO"])();
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "tl-survey-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-survey-top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `tl-module-icon ${s.status === "closed" ? "purple" : "teal"}`,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2d$pulse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__HeartPulse$3e$__["HeartPulse"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 16,
                                                            columnNumber: 382
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 302
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                                        status: s.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 413
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 271
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: s.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 449
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: s.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 467
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-survey-meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 527
                                                            }, this),
                                                            s.department === "all" ? "همه همکاران" : s.department
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 521
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 614
                                                            }, this),
                                                            "تا ",
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(s.deadline)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 608
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 489
                                            }, this),
                                            manage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-plan-summary",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "میزان مشارکت"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 722
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(m.responses),
                                                                    " از ",
                                                                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(m.audience),
                                                                    " نفر"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 747
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 689
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                                        value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["percentComplete"])(m.responses, m.audience)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 807
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 687
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-survey-bottom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            m.eligible && s.status === "active" && !expired && !m.participated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "btn small primary",
                                                                onClick: ()=>open("survey-response", s),
                                                                children: [
                                                                    "صدای من",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                                        lineNumber: 16,
                                                                        columnNumber: 1070
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 982
                                                            }, this),
                                                            m.participated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "badge green",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                        size: 13
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                                        lineNumber: 16,
                                                                        columnNumber: 1152
                                                                    }, this),
                                                                    "پاسخ شما ثبت شده"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 1122
                                                            }, this),
                                                            manage && s.status === "closed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-button",
                                                                onClick: ()=>open("survey-report", s),
                                                                children: [
                                                                    "مشاهده گزارش",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                        size: 14
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                                        lineNumber: 16,
                                                                        columnNumber: 1323
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 1238
                                                            }, this),
                                                            !manage && s.status === "closed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "muted",
                                                                children: "این دوره پایان یافته است"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 1393
                                                            }, this),
                                                            expired && s.status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "badge gray",
                                                                children: "مهلت پاسخ پایان یافته"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 1486
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 906
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "row-actions",
                                                        children: [
                                                            admin && s.status === "draft" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "btn small soft",
                                                                        onClick: ()=>open("confirm", {
                                                                                action: "survey.publish",
                                                                                id: s.id,
                                                                                title: "انتشار نظرسنجی",
                                                                                description: "فهرست کارکنان فعال در لحظه انتشار ثبت می‌شود و پرسش‌ها دیگر قابل تغییر نیستند. منتشر شود؟"
                                                                            }),
                                                                        children: "انتشار"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                                        lineNumber: 16,
                                                                        columnNumber: 1615
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                                        kind: "survey",
                                                                        item: s,
                                                                        deleteAction: "survey.delete"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                                        lineNumber: 16,
                                                                        columnNumber: 1868
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 1613
                                                            }, this),
                                                            admin && s.status === "closed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-button",
                                                                onClick: ()=>open("survey", {
                                                                        ...s,
                                                                        id: undefined,
                                                                        title: `${s.title} — دوره جدید`,
                                                                        deadline: new Date(Date.now() + 14 * 86400000).toISOString().slice(0, 10)
                                                                    }),
                                                                children: "تکرار نظرسنجی"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 1976
                                                            }, this),
                                                            admin && s.status === "active" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-button",
                                                                onClick: ()=>open("confirm", {
                                                                        action: "survey.close",
                                                                        id: s.id,
                                                                        title: "پایان نظرسنجی",
                                                                        description: "پاسخ‌گویی بسته می‌شود و گزارش گروه‌های دارای حداقل ۵ پاسخ قابل مشاهده خواهد شد. ادامه می‌دهید؟"
                                                                    }),
                                                                children: "پایان دوره"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 2230
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 1550
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 872
                                            }, this)
                                        ]
                                    }, s.id, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 16,
                                        columnNumber: 224
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 16,
                                columnNumber: 26
                            }, this) : data.improvements.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-action-list",
                                children: data.improvements.filter((i)=>i.title.includes(query)).map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-action-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `tl-action-check ${i.status === "done" ? "done" : ""}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                    size: 20
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 16,
                                                    columnNumber: 2762
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 2689
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        children: i.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 2800
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        children: i.notes
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 2818
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: data.surveys.find((s)=>s.id === i.surveyId)?.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 2834
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 2795
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-action-owner",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                        employee: workspace.employees.find((e)=>e.id === i.employeeId),
                                                        size: "small"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 2940
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            workspace.employees.find((e)=>e.id === i.employeeId)?.name,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(i.dueDate)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                                lineNumber: 16,
                                                                columnNumber: 3093
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 16,
                                                        columnNumber: 3027
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 2907
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                                status: i.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 3140
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                kind: "improvement",
                                                item: i,
                                                deleteAction: "improvement.delete",
                                                canEdit: manage
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 16,
                                                columnNumber: 3170
                                            }, this)
                                        ]
                                    }, i.id, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 16,
                                        columnNumber: 2647
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 16,
                                columnNumber: 2550
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: "هر بازخورد می‌تواند شروع یک تغییر باشد",
                                description: "از نتایج نظرسنجی، یک اقدام مشخص با مسئول و مهلت بسازید.",
                                action: manage ? "تعریف اقدام بهبود" : undefined,
                                onAction: ()=>open("improvement")
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 16,
                                columnNumber: 3283
                            }, this),
                            !data.surveys.some((s)=>s.title.includes(query)) && tab === "surveys" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: query ? "نظرسنجی‌ای با این عنوان پیدا نشد" : "هنوز نظرسنجی‌ای منتشر نشده",
                                description: "نظرسنجی‌های متناسب با واحد شما اینجا نمایش داده می‌شوند."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 17,
                                columnNumber: 79
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 15,
                        columnNumber: 474
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 15,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "calculation-note",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                        size: 18
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 17,
                        columnNumber: 297
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "گزارش بی‌نام: نتایج فردی و نام پاسخ‌دهندگان در پنل نمایش داده نمی‌شود. گزارش‌ها تنها پس از پایان دوره و با حداقل ۵ پاسخ در هر گروه قابل مشاهده‌اند. این پرسش‌نامه‌های داخلی، ابزار تشخیص پزشکی یا آزمون روان‌شناختی استاندارد نیستند."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 17,
                        columnNumber: 322
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 17,
                columnNumber: 263
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/insights.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this);
}
_s(PulsePage, "liZB5IH3wfBM+blXIIqjbCyFW4o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = PulsePage;
function CompensationPage() {
    _s1();
    const { data, open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("policies");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const staff = workspace.employees.filter((e)=>[
            "active",
            "on_leave"
        ].includes(e.status));
    const budget = staff.reduce((n, e)=>n + e.baseSalary, 0);
    const recent = data.scenarios[0];
    const proposed = recent?.entries.reduce((n, e)=>n + e.proposed, 0) || 0;
    const million = (n)=>`${new Intl.NumberFormat("fa-IR", {
            maximumFractionDigits: 1
        }).format(n / 1000000)} میلیون`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-page page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeading"], {
                eyebrow: "تصمیم شفاف، پرداخت منصفانه‌تر",
                title: "دستیار تعیین حقوق",
                subtitle: "بازه‌های داخلی را تعریف کنید، اثر تصمیم‌ها را ببینید و آگاهانه تأیید کنید.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn secondary",
                        onClick: ()=>open("policy"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 23,
                                columnNumber: 276
                            }, this),
                            "سیاست پرداخت"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 23,
                        columnNumber: 211
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("simulate"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 23,
                                columnNumber: 393
                            }, this),
                            "محاسبه سناریو"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 23,
                        columnNumber: 328
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 23,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-salary-notice",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            size: 21
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/insights.tsx",
                            lineNumber: 23,
                            columnNumber: 491
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 23,
                        columnNumber: 485
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "یک دستیار شفاف، نه یک جعبه سیاه"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 23,
                                columnNumber: 521
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "پیشنهادها بر اساس حقوق فعلی و بازه‌های داخلیِ واردشده توسط شما محاسبه می‌شوند. اتصال به داده بازار جاب‌ویژن یا مدل هوش مصنوعی فعال نیست."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 23,
                                columnNumber: 569
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 23,
                        columnNumber: 516
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "badge blue",
                        children: "محاسبات قاعده‌محور"
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 23,
                        columnNumber: 718
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 23,
                columnNumber: 451
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentStats"], {
                items: [
                    {
                        title: "بودجه پایه ماهانه فعلی",
                        value: million(budget),
                        detail: "تومان · بدون مزایا و کسورات",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"]
                    },
                    {
                        title: "همکاران فعال در محاسبه",
                        value: staff.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        color: "blue"
                    },
                    {
                        title: "سیاست‌های واحدها",
                        value: data.policies.length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"],
                        color: "purple"
                    },
                    {
                        title: "سناریوهای در انتظار تأیید",
                        value: data.scenarios.filter((s)=>s.status === "draft").length,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clipboard$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ClipboardCheck$3e$__["ClipboardCheck"],
                        color: "orange"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 24,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "card tl-workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentTabs"], {
                        active: tab,
                        onChange: setTab,
                        tabs: [
                            {
                                id: "policies",
                                label: "سیاست تیم‌های سازمان"
                            },
                            {
                                id: "scenarios",
                                label: "سناریوها و مقایسه",
                                count: data.scenarios.length
                            },
                            {
                                id: "method",
                                label: "روش محاسبه"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 25,
                        columnNumber: 44
                    }, this),
                    tab !== "method" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentSearch"], {
                        value: query,
                        onChange: setQuery,
                        placeholder: "جستجوی واحد یا سناریو..."
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 25,
                        columnNumber: 287
                    }, this),
                    tab === "policies" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "table-scroll",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "data-table tl-policy-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "واحد سازمانی"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 114
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: [
                                                    "بازه داخلی ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: "(میلیون تومان)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 150
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 135
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "استراتژی"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 184
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "افزایش هدف"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 201
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                children: "پیچیدگی"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 220
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 236
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 26,
                                        columnNumber: 110
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/insights.tsx",
                                    lineNumber: 26,
                                    columnNumber: 103
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: data.policies.filter((p)=>p.department.includes(query)).map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: p.department
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 347
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "tl-cell-sub",
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(staff.filter((e)=>e.department === p.department).length),
                                                                " همکار"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 378
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 343
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "tl-salary-range",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(p.minimum / 1000000)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                                    lineNumber: 26,
                                                                    columnNumber: 526
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        style: {
                                                                            right: `${(p.midpoint - p.minimum) / Math.max(1, p.maximum - p.minimum) * 100}%`
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                                        lineNumber: 26,
                                                                        columnNumber: 567
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                                    lineNumber: 26,
                                                                    columnNumber: 564
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(p.maximum / 1000000)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                                    lineNumber: 26,
                                                                    columnNumber: 669
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 493
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            className: "tl-cell-sub",
                                                            children: [
                                                                "میانه: ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(p.midpoint / 1000000)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 713
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 489
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "badge blue",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["strategyLabels"][p.strategy]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 794
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 790
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(p.increasePercent),
                                                        "٪"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 863
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: [
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(p.complexityPercent),
                                                        "٪"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 896
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                        kind: "policy",
                                                        item: p
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/insights.tsx",
                                                        lineNumber: 26,
                                                        columnNumber: 935
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 931
                                                }, this)
                                            ]
                                        }, p.id, true, {
                                            fileName: "[project]/src/components/talent/insights.tsx",
                                            lineNumber: 26,
                                            columnNumber: 328
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/talent/insights.tsx",
                                    lineNumber: 26,
                                    columnNumber: 255
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/talent/insights.tsx",
                            lineNumber: 26,
                            columnNumber: 57
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 26,
                        columnNumber: 27
                    }, this) : tab === "scenarios" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: data.scenarios.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "tl-scenario-list",
                            children: data.scenarios.filter((s)=>s.title.includes(query)).map((s)=>{
                                const current = s.entries.reduce((n, e)=>n + e.current, 0);
                                const next = s.entries.reduce((n, e)=>n + e.proposed, 0);
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                    className: "tl-scenario-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tl-section-head",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            children: s.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 1400
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: [
                                                                s.createdBy,
                                                                " · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(s.createdAt),
                                                                " · ",
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(s.entries.length),
                                                                " همکار"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 1418
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 1395
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                                    status: s.status
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 1499
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/insights.tsx",
                                            lineNumber: 26,
                                            columnNumber: 1362
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tl-scenario-numbers",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "بودجه مبنا",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                million(current),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: "تومان"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                                    lineNumber: 26,
                                                                    columnNumber: 1615
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 1588
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 1572
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 19
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 1651
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "بودجه پیشنهادی",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                million(next),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: "تومان"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                                    lineNumber: 26,
                                                                    columnNumber: 1718
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 1694
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 1674
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "tl-change",
                                                    children: [
                                                        "+",
                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Math.round((next - current) / Math.max(1, current) * 100)),
                                                        "٪",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: "تغییر بودجه"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 1847
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 1754
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/insights.tsx",
                                            lineNumber: 26,
                                            columnNumber: 1535
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "tl-job-bottom",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "text-button",
                                                    onClick: ()=>open("scenario-detail", s),
                                                    children: [
                                                        "بررسی و مقایسه همکاران",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                            size: 14
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/insights.tsx",
                                                            lineNumber: 26,
                                                            columnNumber: 2014
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 1917
                                                }, this),
                                                s.status === "draft" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                    kind: "rename",
                                                    item: s,
                                                    deleteAction: "salary.delete"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/insights.tsx",
                                                    lineNumber: 26,
                                                    columnNumber: 2071
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/insights.tsx",
                                            lineNumber: 26,
                                            columnNumber: 1886
                                        }, this)
                                    ]
                                }, s.id, true, {
                                    fileName: "[project]/src/components/talent/insights.tsx",
                                    lineNumber: 26,
                                    columnNumber: 1313
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/insights.tsx",
                            lineNumber: 26,
                            columnNumber: 1086
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                            title: "قبل از تصمیم، اثر آن را ببینید",
                            description: "اولین سناریو را بر اساس سیاست تیم‌ها محاسبه کنید. هیچ تغییری بدون تأیید مدیر اعمال نمی‌شود.",
                            action: "محاسبه سناریو",
                            onAction: ()=>open("simulate"),
                            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"]
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/insights.tsx",
                            lineNumber: 26,
                            columnNumber: 2171
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 26,
                        columnNumber: 1034
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-method",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                children: "چطور به عدد پیشنهادی می‌رسیم؟"
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 26,
                                columnNumber: 2440
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "انتخاب نقطه مبنا:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2486
                                            }, this),
                                            " کف، میانه، میانگین میانه و سقف، یا سقف بازه داخلی بر اساس استراتژی واحد."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 26,
                                        columnNumber: 2482
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "اعمال پیچیدگی:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2602
                                            }, this),
                                            " ضرب نقطه مبنا در ضریب پیچیدگی واحد."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 26,
                                        columnNumber: 2598
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "مقایسه با افزایش هدف:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2678
                                            }, this),
                                            " بیشینه عدد مبنا و حقوق فعلی پس از افزایش هدف انتخاب می‌شود."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 26,
                                        columnNumber: 2674
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "کنترل سقف و عدم کاهش:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2785
                                            }, this),
                                            " نتیجه در سقف تعدیل‌شده محدود می‌شود؛ حقوق فعلی کاهش نمی‌یابد و عدد به نزدیک‌ترین هزار تومان گرد می‌شود."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 26,
                                        columnNumber: 2781
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "بازبینی انسانی:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/insights.tsx",
                                                lineNumber: 26,
                                                columnNumber: 2936
                                            }, this),
                                            " تأیید مدیر سیستم، حقوق پایه را تغییر می‌دهد؛ فیش‌های قبلی دست‌نخورده می‌مانند."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 26,
                                        columnNumber: 2932
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 26,
                                columnNumber: 2478
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-info",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/insights.tsx",
                                        lineNumber: 26,
                                        columnNumber: 3086
                                    }, this),
                                    "افزایش هدف تضمین‌شده نیست و ممکن است به سقف بازه محدود شود. ارقام باید پیش از اعمال با مقررات جاری و توافق‌های قراردادی تطبیق داده شوند."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/insights.tsx",
                                lineNumber: 26,
                                columnNumber: 3057
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/insights.tsx",
                        lineNumber: 26,
                        columnNumber: 2413
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/insights.tsx",
                lineNumber: 25,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/insights.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
_s1(CompensationPage, "++bhFq4iYPh2iikhIA+j15oa38c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c1 = CompensationPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "PulsePage");
__turbopack_context__.k.register(_c1, "CompensationPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/recruitment.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RecruitmentPage",
    ()=>RecruitmentPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.mjs [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-up-left.mjs [app-client] (ecmascript) <export default as ArrowUpLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase-business.mjs [app-client] (ecmascript) <export default as BriefcaseBusiness>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.mjs [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock-3.mjs [app-client] (ecmascript) <export default as Clock3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.mjs [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.mjs [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.mjs [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.mjs [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.mjs [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.mjs [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRoundCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-round-check.mjs [app-client] (ecmascript) <export default as UserRoundCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/workspace-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$resource$2d$pages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/resource-pages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/talent-types.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/shared.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function RecruitmentPage() {
    _s();
    const { data, open, mutate, busy } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    const { data: workspace } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"])();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("board");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [jobId, setJobId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [source, setSource] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [drag, setDrag] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const applicants = data.applicants.filter((c)=>(jobId === "all" || c.jobId === jobId) && (source === "all" || c.source === source) && `${c.name} ${c.email} ${c.skills} ${c.tags.join(" ")}`.toLowerCase().includes(query.toLowerCase()));
    const hires = data.applicants.filter((c)=>c.stage === "hired");
    const upcoming = data.interviews.filter((i)=>i.status === "scheduled" && Date.parse(i.startsAt) >= Date.now());
    const reviewCandidate = (id)=>{
        const c = data.applicants.find((c)=>c.id === id);
        if (c) open("applicant-detail", c);
    };
    async function move(id, stage) {
        const c = data.applicants.find((c)=>c.id === id);
        if (!c || c.stage === stage) return;
        if (stage === "hired") {
            if (workspace.user.role === "admin") open("hire", c);
            return;
        }
        await mutate("applicant.move", {
            id,
            stage,
            fromStage: c.stage
        }, "مرحله متقاضی به‌روزرسانی شد.");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-page page-enter",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PageHeading"], {
                eyebrow: "جذب استعدادهای تازه",
                title: "جذب و استخدام",
                subtitle: "از اولین رزومه تا اولین روز همکاری؛ یک مسیر روشن برای تیم جذب.",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        className: "btn secondary",
                        href: "/careers",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                size: 15
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 17,
                                columnNumber: 272
                            }, this),
                            "صفحه فرصت‌های همکاری"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 17,
                        columnNumber: 185
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn primary",
                        onClick: ()=>open("job"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                size: 16
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 17,
                                columnNumber: 382
                            }, this),
                            "فرصت شغلی جدید"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 17,
                        columnNumber: 322
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/recruitment.tsx",
                lineNumber: 17,
                columnNumber: 46
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentStats"], {
                items: [
                    {
                        title: "فرصت‌های شغلی فعال",
                        value: data.jobs.filter((j)=>j.status === "open").length,
                        detail: "در انتظار همکاران آینده",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"]
                    },
                    {
                        title: "رزومه‌های دریافت‌شده",
                        value: data.applicants.length,
                        detail: "در بانک استعدادهای آبان",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                        color: "blue"
                    },
                    {
                        title: "مصاحبه‌های پیش رو",
                        value: upcoming.length,
                        detail: "هماهنگی برای شناخت بیشتر",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"],
                        color: "purple"
                    },
                    {
                        title: "همکاری‌های آغازشده",
                        value: hires.length,
                        detail: "متصل به پرونده پرسنلی",
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$round$2d$check$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserRoundCheck$3e$__["UserRoundCheck"],
                        color: "orange"
                    }
                ]
            }, void 0, false, {
                fileName: "[project]/src/components/talent/recruitment.tsx",
                lineNumber: 18,
                columnNumber: 5
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card tl-workspace",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentTabs"], {
                        active: tab,
                        onChange: (v)=>{
                            setTab(v);
                            setQuery("");
                            setPage(1);
                        },
                        tabs: [
                            {
                                id: "board",
                                label: "برد استخدام"
                            },
                            {
                                id: "candidates",
                                label: "بانک رزومه",
                                count: data.applicants.length
                            },
                            {
                                id: "jobs",
                                label: "فرصت‌های شغلی"
                            },
                            {
                                id: "interviews",
                                label: "مصاحبه‌ها"
                            },
                            {
                                id: "analytics",
                                label: "گزارش جذب"
                            },
                            {
                                id: "legacy",
                                label: "پرونده‌های قبلی"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 19,
                        columnNumber: 40
                    }, this),
                    [
                        "board",
                        "candidates"
                    ].includes(tab) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TalentSearch"], {
                                value: query,
                                onChange: (v)=>{
                                    setQuery(v);
                                    setPage(1);
                                },
                                placeholder: "جستجوی نام، مهارت یا برچسب...",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        "aria-label": "فیلتر فرصت شغلی",
                                        value: jobId,
                                        onChange: (e)=>{
                                            setJobId(e.target.value);
                                            setPage(1);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "همه فرصت‌ها"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 20,
                                                columnNumber: 275
                                            }, this),
                                            data.jobs.map((j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: j.id,
                                                    children: j.title
                                                }, j.id, false, {
                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 335
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 20,
                                        columnNumber: 166
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        "aria-label": "منبع جذب",
                                        value: source,
                                        onChange: (e)=>{
                                            setSource(e.target.value);
                                            setPage(1);
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "all",
                                                children: "همه منابع"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 20,
                                                columnNumber: 500
                                            }, this),
                                            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sourceLabels"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    children: s
                                                }, s, false, {
                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                    lineNumber: 20,
                                                    columnNumber: 561
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 20,
                                        columnNumber: 396
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btn small primary tl-toolbar-end",
                                        onClick: ()=>open("applicant", undefined, jobId === "all" ? undefined : {
                                                jobId
                                            }),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                size: 14
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 20,
                                                columnNumber: 739
                                            }, this),
                                            "افزودن متقاضی"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 20,
                                        columnNumber: 600
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "icon-button",
                                        href: "/api/talent/export?type=recruitment",
                                        title: "خروجی اکسل",
                                        "aria-label": "خروجی بانک رزومه",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                            lineNumber: 20,
                                            columnNumber: 898
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 20,
                                        columnNumber: 779
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 20,
                                columnNumber: 49
                            }, this),
                            tab === "board" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-board",
                                        "aria-label": "برد مراحل استخدام",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].map((stage)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                                className: `tl-column ${drag === stage.id ? "drag-over" : ""}`,
                                                onDragOver: (e)=>{
                                                    e.preventDefault();
                                                    if (!busy) setDrag(stage.id);
                                                },
                                                onDragLeave: ()=>setDrag(""),
                                                onDrop: (e)=>{
                                                    e.preventDefault();
                                                    setDrag("");
                                                    if (!busy) void move(e.dataTransfer.getData("text/plain"), stage.id);
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-column-head",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        style: {
                                                                            background: stage.color
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                        lineNumber: 21,
                                                                        columnNumber: 455
                                                                    }, this),
                                                                    stage.label,
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(applicants.filter((c)=>c.stage === stage.id).length)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                        lineNumber: 21,
                                                                        columnNumber: 509
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 449
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                "aria-label": `افزودن متقاضی ${stage.label}`,
                                                                onClick: ()=>open("applicant", undefined, jobId !== "all" ? {
                                                                        jobId
                                                                    } : {}),
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                                    size: 15
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 711
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 580
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 21,
                                                        columnNumber: 417
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "tl-column-cards",
                                                        children: [
                                                            applicants.filter((c)=>c.stage === stage.id).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "tl-candidate-card",
                                                                    draggable: c.stage !== "hired" && !busy,
                                                                    onDragStart: (e)=>e.dataTransfer.setData("text/plain", c.id),
                                                                    onClick: ()=>reviewCandidate(c.id),
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "tl-candidate-top",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                                    name: c.name
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1056
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                            children: c.name
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                            lineNumber: 21,
                                                                                            columnNumber: 1086
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                            children: data.jobs.find((j)=>j.id === c.jobId)?.title
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                            lineNumber: 21,
                                                                                            columnNumber: 1111
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1080
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpLeft$3e$__["ArrowUpLeft"], {
                                                                                    size: 14
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1179
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                            lineNumber: 21,
                                                                            columnNumber: 1022
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "tl-candidate-tags",
                                                                            children: c.tags.slice(0, 2).map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: t
                                                                                }, t, false, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1274
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                            lineNumber: 21,
                                                                            columnNumber: 1210
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "tl-candidate-meta",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"], {
                                                                                            size: 12
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                            lineNumber: 21,
                                                                                            columnNumber: 1347
                                                                                        }, this),
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(c.experience),
                                                                                        " سال تجربه"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1341
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                                            size: 12,
                                                                                            fill: c.rating ? "#dfba6c" : "none"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                            lineNumber: 21,
                                                                                            columnNumber: 1419
                                                                                        }, this),
                                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(c.rating),
                                                                                        " / ۵"
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1413
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                            lineNumber: 21,
                                                                            columnNumber: 1306
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "tl-candidate-footer",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: c.source.replace(" (ثبت دستی)", "")
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1542
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dateFa"])(c.createdAt)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                    lineNumber: 21,
                                                                                    columnNumber: 1592
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                            lineNumber: 21,
                                                                            columnNumber: 1505
                                                                        }, this)
                                                                    ]
                                                                }, c.id, true, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 832
                                                                }, this)),
                                                            !applicants.some((c)=>c.stage === stage.id) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "tl-column-empty",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                        size: 24
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                        lineNumber: 21,
                                                                        columnNumber: 1724
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        children: "هنوز متقاضی‌ای در این مرحله نیست"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                        lineNumber: 21,
                                                                        columnNumber: 1743
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 1691
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 21,
                                                        columnNumber: 744
                                                    }, this)
                                                ]
                                            }, stage.id, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 21,
                                                columnNumber: 104
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 21,
                                        columnNumber: 26
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "tl-board-hint",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InfoIcon, {}, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 21,
                                                columnNumber: 1848
                                            }, this),
                                            "کارت‌ها را جابه‌جا کنید یا از جزئیات متقاضی مرحله را تغییر دهید. استخدام نهایی نیازمند ایجاد حساب کارمندی است."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 21,
                                        columnNumber: 1819
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 21,
                                columnNumber: 24
                            }, this) : applicants.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "table-scroll",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "data-table",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "متقاضی"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 2073
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "فرصت شغلی"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 2088
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "منبع"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 2106
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "مرحله"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 2119
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                children: "امتیاز"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 2133
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {}, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 21,
                                                                columnNumber: 2148
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 21,
                                                        columnNumber: 2069
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 2062
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    children: applicants.slice((page - 1) * 10, page * 10).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "person-cell person-button",
                                                                        onClick: ()=>reviewCandidate(c.id),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Avatar"], {
                                                                                name: c.name
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                lineNumber: 21,
                                                                                columnNumber: 2332
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                                        children: c.name
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                        lineNumber: 21,
                                                                                        columnNumber: 2362
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                                        children: c.email
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                        lineNumber: 21,
                                                                                        columnNumber: 2387
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                lineNumber: 21,
                                                                                columnNumber: 2356
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                        lineNumber: 21,
                                                                        columnNumber: 2248
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 2244
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: data.jobs.find((j)=>j.id === c.jobId)?.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 2432
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: c.source
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 2487
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "badge blue",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].find((s)=>s.id === c.stage)?.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                        lineNumber: 21,
                                                                        columnNumber: 2510
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 2506
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                            size: 12
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                            lineNumber: 21,
                                                                            columnNumber: 2598
                                                                        }, this),
                                                                        " ",
                                                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(c.rating)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 2594
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "btn small secondary",
                                                                        onClick: ()=>reviewCandidate(c.id),
                                                                        children: [
                                                                            "بررسی",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                                size: 13
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                                lineNumber: 21,
                                                                                columnNumber: 2723
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                        lineNumber: 21,
                                                                        columnNumber: 2640
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 21,
                                                                    columnNumber: 2636
                                                                }, this)
                                                            ]
                                                        }, c.id, true, {
                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                            lineNumber: 21,
                                                            columnNumber: 2229
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                    lineNumber: 21,
                                                    columnNumber: 2167
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                            lineNumber: 21,
                                            columnNumber: 2032
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 21,
                                        columnNumber: 2002
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pagination"], {
                                        page: page,
                                        count: applicants.length,
                                        onChange: setPage
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 21,
                                        columnNumber: 2789
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 21,
                                columnNumber: 2000
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: "رزومه‌ای با این مشخصات پیدا نشد",
                                description: "فیلترها را تغییر دهید یا یک متقاضی جدید ثبت کنید."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 21,
                                columnNumber: 2866
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 20,
                        columnNumber: 47
                    }, this),
                    tab === "jobs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "فرصت‌های همکاری",
                                subtitle: "آگهی‌های باز به‌صورت خودکار در صفحه عمومی مجموعه دیده می‌شوند."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 22,
                                columnNumber: 51
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-job-grid",
                                children: data.jobs.map((j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                                        className: "tl-job-card",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-job-card-top",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "tl-module-icon teal",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2d$business$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BriefcaseBusiness$3e$__["BriefcaseBusiness"], {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                            lineNumber: 22,
                                                            columnNumber: 328
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 290
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                                        status: j.status
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 366
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 22,
                                                columnNumber: 257
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: j.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 22,
                                                columnNumber: 402
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: j.department
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 22,
                                                columnNumber: 420
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-job-meta",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 22,
                                                                columnNumber: 476
                                                            }, this),
                                                            j.location
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 470
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2d$3$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock3$3e$__["Clock3"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 22,
                                                                columnNumber: 521
                                                            }, this),
                                                            j.contract
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 515
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 22,
                                                columnNumber: 441
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-job-count",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                                size: 15
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 22,
                                                                columnNumber: 602
                                                            }, this),
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(data.applicants.filter((c)=>c.jobId === j.id).length),
                                                            " متقاضی"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 596
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(j.openings),
                                                            " ظرفیت"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 693
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 22,
                                                columnNumber: 566
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-job-bottom",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "text-button",
                                                        onClick: ()=>{
                                                            setJobId(j.id);
                                                            setTab("board");
                                                        },
                                                        children: [
                                                            "مشاهده مسیر جذب",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 22,
                                                                columnNumber: 865
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 765
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                        kind: "job",
                                                        item: j,
                                                        deleteAction: "job.delete"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 22,
                                                        columnNumber: 897
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 22,
                                                columnNumber: 734
                                            }, this)
                                        ]
                                    }, j.id, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 22,
                                        columnNumber: 213
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 22,
                                columnNumber: 164
                            }, this),
                            !data.jobs.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                action: "فرصت شغلی جدید",
                                onAction: ()=>open("job")
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 22,
                                columnNumber: 1006
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 22,
                        columnNumber: 24
                    }, this),
                    tab === "interviews" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "قرارهای آشنایی",
                                subtitle: "تداخل زمانی مصاحبه‌کننده در سرور کنترل می‌شود.",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn small primary",
                                    onClick: ()=>open("interview"),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                            lineNumber: 23,
                                            columnNumber: 223
                                        }, this),
                                        "برنامه‌ریزی مصاحبه"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                    lineNumber: 23,
                                    columnNumber: 151
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 23,
                                columnNumber: 57
                            }, this),
                            data.interviews.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-interview-list",
                                children: data.interviews.map((i)=>{
                                    const c = data.applicants.find((c)=>c.id === i.applicantId);
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tl-interview-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-calendar-tile",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: new Intl.DateTimeFormat("fa-IR", {
                                                            day: "numeric"
                                                        }).format(new Date(i.startsAt))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 518
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: new Intl.DateTimeFormat("fa-IR", {
                                                            month: "short"
                                                        }).format(new Date(i.startsAt))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 618
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 23,
                                                columnNumber: 484
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-interview-description",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>reviewCandidate(i.applicantId),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: c?.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 23,
                                                                columnNumber: 817
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$up$2d$left$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowUpLeft$3e$__["ArrowUpLeft"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 23,
                                                                columnNumber: 843
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 762
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            data.jobs.find((j)=>j.id === c?.jobId)?.title,
                                                            " · ",
                                                            workspace.employees.find((e)=>e.id === i.interviewerId)?.name
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 877
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 23,
                                                columnNumber: 720
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-interview-time",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: new Intl.DateTimeFormat("fa-IR", {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        }).format(new Date(i.startsAt))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 1046
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                        children: [
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(i.duration),
                                                            " دقیقه · ",
                                                            i.mode
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 23,
                                                        columnNumber: 1166
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 23,
                                                columnNumber: 1011
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StateTag"], {
                                                status: i.status
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 23,
                                                columnNumber: 1220
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                className: "icon-button",
                                                href: `/api/talent/export?type=calendar&id=${i.id}`,
                                                "aria-label": "افزودن به تقویم",
                                                title: "دریافت فایل تقویم",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                    lineNumber: 23,
                                                    columnNumber: 1385
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 23,
                                                columnNumber: 1250
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EntityActions"], {
                                                kind: "interview",
                                                item: i,
                                                deleteAction: "interview.delete"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 23,
                                                columnNumber: 1415
                                            }, this)
                                        ]
                                    }, i.id, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 23,
                                        columnNumber: 439
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 23,
                                columnNumber: 308
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyState"], {
                                title: "قرار آشنایی بعدی را برنامه‌ریزی کنید",
                                action: "ثبت مصاحبه",
                                onAction: ()=>open("interview")
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 23,
                                columnNumber: 1510
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 23,
                        columnNumber: 30
                    }, this),
                    tab === "analytics" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$shared$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SectionHead"], {
                                title: "از داده به تصمیم بهتر",
                                subtitle: "تمام شاخص‌ها از پرونده‌های همین مجموعه محاسبه می‌شوند؛ مقایسه بازار نیست."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 24,
                                columnNumber: 56
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-analytics-grid",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "قیف وضعیت فعلی جذب"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 24,
                                                columnNumber: 230
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "tl-funnel",
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$talent$2d$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stages"].map((s)=>{
                                                    const count = data.applicants.filter((c)=>c.stage === s.id).length;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: s.label
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 24,
                                                                columnNumber: 394
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    style: {
                                                                        width: `${Math.max(3, count / Math.max(1, data.applicants.length) * 100)}%`,
                                                                        background: s.color
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 24,
                                                                    columnNumber: 421
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 24,
                                                                columnNumber: 416
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(count)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                lineNumber: 24,
                                                                columnNumber: 541
                                                            }, this)
                                                        ]
                                                    }, s.id, true, {
                                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                                        lineNumber: 24,
                                                        columnNumber: 378
                                                    }, this);
                                                })
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 24,
                                                columnNumber: 257
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 24,
                                        columnNumber: 221
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: "منابع جذب استعداد"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 24,
                                                columnNumber: 595
                                            }, this),
                                            [
                                                ...new Set(data.applicants.map((c)=>c.source))
                                            ].map((source)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "tl-source-row",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: source
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                            lineNumber: 24,
                                                            columnNumber: 729
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: [
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(data.applicants.filter((c)=>c.source === source).length),
                                                                " ",
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: "رزومه"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                                    lineNumber: 24,
                                                                    columnNumber: 820
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/talent/recruitment.tsx",
                                                            lineNumber: 24,
                                                            columnNumber: 750
                                                        }, this)
                                                    ]
                                                }, source, true, {
                                                    fileName: "[project]/src/components/talent/recruitment.tsx",
                                                    lineNumber: 24,
                                                    columnNumber: 685
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 24,
                                        columnNumber: 586
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 24,
                                columnNumber: 186
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tl-insight-strip",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "میانگین زمان جذب ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: hires.length ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(Math.round(hires.reduce((n, c)=>n + (Date.parse(c.updatedAt) - Date.parse(c.createdAt)) / 86400000, 0) / hires.length))} روز` : "پس از اولین استخدام"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 24,
                                                columnNumber: 930
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 24,
                                        columnNumber: 907
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "هزینه ثبت‌شده به ازای استخدام ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: hires.length ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["money"])(Math.round(data.jobs.reduce((n, j)=>n + j.hiringCost, 0) / hires.length)) : "پس از اولین استخدام"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 24,
                                                columnNumber: 1164
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 24,
                                        columnNumber: 1128
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        className: "btn secondary",
                                        href: "/api/talent/export?type=recruitment",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                                lineNumber: 24,
                                                columnNumber: 1382
                                            }, this),
                                            "گزارش اکسل جذب"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/talent/recruitment.tsx",
                                        lineNumber: 24,
                                        columnNumber: 1310
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 24,
                                columnNumber: 873
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 24,
                        columnNumber: 29
                    }, this),
                    tab === "legacy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tl-padded",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "inline-info",
                                children: "پرونده‌های متقاضیان نسخه قبلی بدون تغییر حفظ شده‌اند. مسیرهای جدید در بانک رزومه مدیریت می‌شوند."
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 25,
                                columnNumber: 53
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$resource$2d$pages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmployeesPage"], {
                                recruitment: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/recruitment.tsx",
                                lineNumber: 25,
                                columnNumber: 180
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/recruitment.tsx",
                        lineNumber: 25,
                        columnNumber: 26
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/recruitment.tsx",
                lineNumber: 19,
                columnNumber: 5
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/recruitment.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
_s(RecruitmentPage, "D3rhSjNEZ5/SNBKRZc/cJDuK2YA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$workspace$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWorkspace"]
    ];
});
_c = RecruitmentPage;
function InfoIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
        size: 14
    }, void 0, false, {
        fileName: "[project]/src/components/talent/recruitment.tsx",
        lineNumber: 28,
        columnNumber: 30
    }, this);
}
_c1 = InfoIcon;
var _c, _c1;
__turbopack_context__.k.register(_c, "RecruitmentPage");
__turbopack_context__.k.register(_c1, "InfoIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/talent/shared.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EntityActions",
    ()=>EntityActions,
    "Progress",
    ()=>Progress,
    "SectionHead",
    ()=>SectionHead,
    "StateTag",
    ()=>StateTag,
    "TalentSearch",
    ()=>TalentSearch,
    "TalentStats",
    ()=>TalentStats,
    "TalentTabs",
    ()=>TalentTabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.mjs [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.mjs [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/talent/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/types.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function TalentStats({ items }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-stats",
        children: items.map(({ title, value, detail, icon: Icon, color = "teal" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card tl-stat",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `tl-stat-icon ${color}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            size: 21,
                            strokeWidth: 1.6
                        }, void 0, false, {
                            fileName: "[project]/src/components/talent/shared.tsx",
                            lineNumber: 6,
                            columnNumber: 335
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/shared.tsx",
                        lineNumber: 6,
                        columnNumber: 293
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/shared.tsx",
                                lineNumber: 6,
                                columnNumber: 383
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: typeof value === "number" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(value) : value
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/shared.tsx",
                                lineNumber: 6,
                                columnNumber: 403
                            }, this),
                            detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                children: detail
                            }, void 0, false, {
                                fileName: "[project]/src/components/talent/shared.tsx",
                                lineNumber: 6,
                                columnNumber: 478
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/talent/shared.tsx",
                        lineNumber: 6,
                        columnNumber: 378
                    }, this)
                ]
            }, title, true, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 6,
                columnNumber: 251
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/talent/shared.tsx",
        lineNumber: 6,
        columnNumber: 156
    }, this);
}
_c = TalentStats;
function Progress({ value, label = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-progress-wrap",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tl-progress",
                role: "progressbar",
                "aria-valuenow": value,
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    style: {
                        width: `${Math.min(100, Math.max(0, value))}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/src/components/talent/shared.tsx",
                    lineNumber: 7,
                    columnNumber: 238
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 7,
                columnNumber: 130
            }, this),
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(value),
                    "٪"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 7,
                columnNumber: 318
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/shared.tsx",
        lineNumber: 7,
        columnNumber: 96
    }, this);
}
_c1 = Progress;
function TalentTabs({ tabs, active, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-tabs",
        role: "tablist",
        children: tabs.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                role: "tab",
                "aria-selected": active === t.id,
                className: active === t.id ? "active" : "",
                onClick: ()=>onChange(t.id),
                children: [
                    t.label,
                    t.count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$types$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fa"])(t.count)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/shared.tsx",
                        lineNumber: 8,
                        columnNumber: 399
                    }, this)
                ]
            }, t.id, true, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 8,
                columnNumber: 227
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/talent/shared.tsx",
        lineNumber: 8,
        columnNumber: 172
    }, this);
}
_c2 = TalentTabs;
function TalentSearch({ value, onChange, placeholder = "جستجو...", children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-toolbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "input-search",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                        size: 16
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/shared.tsx",
                        lineNumber: 9,
                        columnNumber: 252
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "aria-label": placeholder,
                        placeholder: placeholder,
                        value: value,
                        onChange: (e)=>onChange(e.target.value)
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/shared.tsx",
                        lineNumber: 9,
                        columnNumber: 272
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 9,
                columnNumber: 222
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/shared.tsx",
        lineNumber: 9,
        columnNumber: 194
    }, this);
}
_c3 = TalentSearch;
function EntityActions({ kind, item, deleteAction, canEdit = true }) {
    _s();
    const { open } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"])();
    if (!canEdit) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "row-actions",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "icon-button",
                "aria-label": `ویرایش ${item.title || "مورد"}`,
                onClick: ()=>open(kind, item),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/components/talent/shared.tsx",
                    lineNumber: 10,
                    columnNumber: 381
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 10,
                columnNumber: 270
            }, this),
            deleteAction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "icon-button danger-hover",
                "aria-label": `حذف ${item.title || "مورد"}`,
                onClick: ()=>open("confirm", {
                        action: deleteAction,
                        id: item.id,
                        title: "حذف مورد انتخاب‌شده",
                        description: "این عملیات قابل بازگشت نیست. موارد دارای سوابق نهایی‌شده حذف نخواهند شد."
                    }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                    size: 15
                }, void 0, false, {
                    fileName: "[project]/src/components/talent/shared.tsx",
                    lineNumber: 10,
                    columnNumber: 705
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 10,
                columnNumber: 427
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/shared.tsx",
        lineNumber: 10,
        columnNumber: 241
    }, this);
}
_s(EntityActions, "ajPVbDYxPHOzQ2FQsbE2KiaX4+A=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$talent$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTalent"]
    ];
});
_c4 = EntityActions;
function StateTag({ status }) {
    const labels = {
        draft: "پیش‌نویس",
        open: "فعال",
        active: "در حال اجرا",
        closed: "پایان‌یافته",
        published: "منتشرشده",
        archived: "بایگانی",
        scheduled: "برنامه‌ریزی‌شده",
        completed: "تکمیل‌شده",
        cancelled: "لغو شده",
        assigned: "شروع نشده",
        in_progress: "در حال انجام",
        done: "انجام شده",
        applied: "اعمال‌شده"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: `badge ${[
            "open",
            "published",
            "completed",
            "applied",
            "done"
        ].includes(status) ? "green" : [
            "active",
            "in_progress",
            "scheduled"
        ].includes(status) ? "blue" : "gray"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 11,
                columnNumber: 588
            }, this),
            labels[status] || status
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/shared.tsx",
        lineNumber: 11,
        columnNumber: 402
    }, this);
}
_c5 = StateTag;
function SectionHead({ title, subtitle, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "tl-section-head",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/shared.tsx",
                        lineNumber: 12,
                        columnNumber: 167
                    }, this),
                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/src/components/talent/shared.tsx",
                        lineNumber: 12,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/talent/shared.tsx",
                lineNumber: 12,
                columnNumber: 162
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/talent/shared.tsx",
        lineNumber: 12,
        columnNumber: 129
    }, this);
}
_c6 = SectionHead;
var _c, _c1, _c2, _c3, _c4, _c5, _c6;
__turbopack_context__.k.register(_c, "TalentStats");
__turbopack_context__.k.register(_c1, "Progress");
__turbopack_context__.k.register(_c2, "TalentTabs");
__turbopack_context__.k.register(_c3, "TalentSearch");
__turbopack_context__.k.register(_c4, "EntityActions");
__turbopack_context__.k.register(_c5, "StateTag");
__turbopack_context__.k.register(_c6, "SectionHead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_talent_0yp501f._.js.map