(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ContactPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ContactPage() {
    _s();
    const [dubaiTime, setDubaiTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [canadaTime, setCanadaTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showPopup, setShowPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactPage.useEffect": ()=>{
            const updateTime = {
                "ContactPage.useEffect.updateTime": ()=>{
                    const dubai = new Date().toLocaleTimeString('en-US', {
                        timeZone: 'Asia/Dubai',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true
                    });
                    const canada = new Date().toLocaleTimeString('en-US', {
                        timeZone: 'America/Vancouver',
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true
                    });
                    setDubaiTime(dubai);
                    setCanadaTime(canada);
                }
            }["ContactPage.useEffect.updateTime"];
            updateTime();
            const interval = setInterval(updateTime, 1000);
            return ({
                "ContactPage.useEffect": ()=>clearInterval(interval)
            })["ContactPage.useEffect"];
        }
    }["ContactPage.useEffect"], []);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setShowPopup(true);
        setTimeout(()=>setShowPopup(false), 3000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            showPopup && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 flex items-center justify-center z-50 bg-black/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-[#0B0C10] border border-[#1E2130] p-8 max-w-md mx-4 rounded-lg shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "font-manrope text-xl font-bold text-[#F3F4F6] mb-4",
                            children: "Message Sent!"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-inter text-sm text-[#9CA3AF] mb-6",
                            children: "Thank you for your inquiry. We'll be in touch with you shortly to discuss your strategy session."
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setShowPopup(false),
                            className: "w-full px-6 py-3 bg-[#F3F4F6] text-[#050507] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300",
                            children: "Close"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                    lineNumber: 47,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-br from-electric-cyan/20 via-transparent to-electric-cyan/10"
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric-cyan/20  blur-3xl pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 max-w-4xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                                initial: {
                                    opacity: 0,
                                    y: 30
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8
                                },
                                className: "font-clash text-5xl md:text-7xl lg:text-8xl text-pure-white mb-8 font-semibold uppercase",
                                children: "BEGIN YOUR STRATEGY SESSION."
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.8,
                                    delay: 0.2
                                },
                                className: "font-inter text-3xl text-pure-white max-w-3xl mx-auto leading-relaxed font-bold",
                                children: "Accepting new partners for Q1 strategy sessions"
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "relative py-48 px-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: -30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-clash text-3xl md:text-4xl text-ghost-white mb-8 tracking-[-0.04em] font-semibold",
                                        children: "Schedule Your Strategy Session"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-inter text-lg text-slate-grey leading-relaxed mb-8",
                                        children: "Book a 30-minute discovery call with our senior architects. We'll analyze your current workflows and identify high-impact automation opportunities."
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                        lineNumber: 97,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                            className: "space-y-6",
                                            onSubmit: handleSubmit,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3",
                                                            children: "Name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 104,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors",
                                                            placeholder: "Your name"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 107,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3",
                                                            children: "Company"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 114,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "text",
                                                            className: "w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors",
                                                            placeholder: "Your company"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 117,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3",
                                                            children: "Current Software Stack"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 3,
                                                            className: "w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors resize-none",
                                                            placeholder: "e.g., Salesforce, HubSpot, Zapier, Asana..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                    lineNumber: 123,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3",
                                                            children: "Budget Range"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                            className: "w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "",
                                                                    children: "Select budget range"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                    lineNumber: 138,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "1k-5k",
                                                                    children: "$1,000 – $5,000 USD"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                    lineNumber: 139,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "5k-10k",
                                                                    children: "$5,000 – $10,000 USD"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                    lineNumber: 140,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: "10k-50k",
                                                                    children: "$10,000 – $50,000 USD (Max)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                    lineNumber: 141,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "block font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold mb-3",
                                                            children: "Scale Objectives"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                            rows: 3,
                                                            className: "w-full px-4 py-3 bg-deep-slate/50 border border-white/[0.05]  text-ghost-white font-inter text-sm focus:outline-none focus:border-electric-cyan transition-colors resize-none",
                                                            placeholder: "Describe your automation goals and desired outcomes..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "submit",
                                                    className: "w-full py-4 bg-electric-cyan hover:bg-electric-cyan/90 text-obsidian font-semibold border-2 border-electric-cyan transition-colors font-inter text-center tracking-[0.4em] uppercase text-xs font-bold",
                                                    children: "Send Message"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                    lineNumber: 154,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                            lineNumber: 102,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                lineNumber: 89,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    x: 30
                                },
                                whileInView: {
                                    opacity: 1,
                                    x: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    delay: 0.2
                                },
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-clash text-3xl md:text-4xl text-ghost-white mb-8 tracking-[-0.04em] font-semibold",
                                        children: "Our Offices"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                        lineNumber: 171,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-64 h-64 bg-electric-cyan/10  blur-3xl pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                lineNumber: 176,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-6 h-6 text-electric-cyan-bright"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-clash text-2xl text-ghost-white tracking-[-0.04em] font-semibold",
                                                                children: "Dubai Head Office"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-inter text-slate-grey mb-4",
                                                        children: "Business Bay, Dubai, UAE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-electric-cyan font-inter text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 189,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono",
                                                                children: dubaiTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 190,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-grey/60",
                                                                children: "GST"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 191,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                        lineNumber: 175,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8 relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute top-0 right-0 w-64 h-64 bg-deep-indigo/10  blur-3xl pointer-events-none"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                lineNumber: 197,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative z-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                                className: "w-6 h-6 text-electric-cyan-bright"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "font-clash text-2xl text-ghost-white tracking-[-0.04em] font-semibold",
                                                                children: "Canadian Operations"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                        lineNumber: 200,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-inter text-slate-grey mb-4",
                                                        children: "Vancouver, British Columbia, Canada"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                        lineNumber: 206,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 text-electric-cyan font-inter text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-mono",
                                                                children: canadaTime
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-slate-grey/60",
                                                                children: "PST"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                                lineNumber: 212,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/[0.01] backdrop-blur-2xl border border-white/[0.05]  p-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-clash text-xl text-ghost-white mb-4 tracking-[-0.04em] font-semibold",
                                                children: "Direct Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                lineNumber: 218,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "space-y-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:contact@lexaura.ca",
                                                    className: "block font-inter text-slate-grey hover:text-electric-cyan transition-colors",
                                                    children: "contact@lexaura.ca"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                                lineNumber: 221,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                        lineNumber: 217,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                                lineNumber: 164,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                        lineNumber: 88,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/app/contact/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(ContactPage, "xpv8zmOBcp9LBwRNvhAYQ3KdnTg=");
_c = ContactPage;
var _c;
__turbopack_context__.k.register(_c, "ContactPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=5c98b_Final%20Lexaura%20Website_lexaura-luxury_app_contact_page_tsx_6dec42e5._.js.map