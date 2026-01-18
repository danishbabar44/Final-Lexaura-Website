module.exports = [
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/hooks/useScrollReveal.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScrollReveal",
    ()=>useScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
function useScrollReveal(options = {}) {
    const { threshold = 0.1, rootMargin = '0px', delay = 0 } = options;
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const element = ref.current;
        if (!element) return;
        // Set initial state
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.4s ease-out ${delay}ms, transform 0.4s ease-out ${delay}ms`;
        const observer = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
                observer.unobserve(element);
            }
        }, {
            threshold,
            rootMargin
        });
        observer.observe(element);
        return ()=>{
            observer.unobserve(element);
        };
    }, [
        threshold,
        rootMargin,
        delay
    ]);
    return ref;
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/hooks/useScrollReveal.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Hero() {
    const heroSectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.1,
        delay: 0
    });
    const subheadRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.1,
        delay: 200
    });
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.1,
        delay: 300
    });
    const trustRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$src$2f$hooks$2f$useScrollReveal$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useScrollReveal"])({
        threshold: 0.1,
        delay: 400
    });
    const heroLines = [
        'YOUR BUSINESS',
        'SCALED',
        'WITHOUT',
        'MORE',
        'HEADCOUNT'
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: heroSectionRef,
        className: "pt-[70px] min-h-screen bg-[#020410] border-b border-[#6366f1] relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#6366f1]/5 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/4 right-1/4 w-96 h-96 bg-[#6366f1]/10 blur-3xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#6366f1]/5 blur-2xl pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-10 pt-12 pb-16 md:pt-16 md:pb-20 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                                    initial: {
                                        opacity: 0,
                                        y: 30
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.3
                                    },
                                    className: "font-clash text-4xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.06em] uppercase text-[#FFFFFF] leading-tight text-center",
                                    children: "YOUR BUSINESS SCALED WITHOUT MORE HEADCOUNT"
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                                ref: subheadRef,
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
                                    delay: 0.8
                                },
                                className: "font-inter text-xl md:text-2xl lg:text-3xl text-[#E2E8F0] max-w-4xl mx-auto leading-relaxed mb-12",
                                children: "Transform your business with intelligent automation solutions that scale exponentially while maintaining operational excellence"
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                ref: ctaRef,
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
                                    delay: 1
                                },
                                className: "flex flex-col sm:flex-row gap-4 justify-center mb-16",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/contact",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-8 py-4 bg-[#6366f1] hover:bg-[#5558E3] text-[#FFFFFF] font-inter text-center tracking-[0.4em] uppercase text-xs font-bold transition-all duration-300 shadow-lg shadow-[#6366f1]/25 hover:shadow-xl hover:shadow-[#6366f1]/35",
                                            children: "Start Transformation"
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                            lineNumber: 62,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/services",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-8 py-4 bg-transparent border-2 border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-[#FFFFFF] font-inter text-center tracking-[0.4em] uppercase text-xs font-bold transition-all duration-300",
                                            children: "View Solutions"
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: trustRef,
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
                            delay: 1.2
                        },
                        className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300",
                                        children: "10x"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 83,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]",
                                        children: "Potential"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300",
                                        children: "99.9%"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]",
                                        children: "Uptime"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300",
                                        children: "24/7"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]",
                                        children: "Support"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-clash text-3xl md:text-4xl font-black text-[#FFFFFF] mb-2 group-hover:text-[#6366f1] transition-colors duration-300",
                                        children: "10x"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-inter text-sm text-[#9CA3AF] uppercase tracking-[0.2em]",
                                        children: "ROI"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                                lineNumber: 94,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Hero.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroCases
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-ssr] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const heroCases = [
    {
        category: 'AI Receptionists',
        title: 'Voice AI for Medical Practice',
        metrics: '85% reduction in missed appointments',
        timeframe: '2024'
    },
    {
        category: 'Real Estate',
        title: 'WhatsApp Lead Automation',
        metrics: '300% increase in lead response rate',
        timeframe: '2024'
    },
    {
        category: 'E-Commerce',
        title: 'Multi-Platform Content Distribution',
        metrics: '90% faster content deployment',
        timeframe: '2024'
    }
];
function HeroCases() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const nextSlide = ()=>{
        setCurrentIndex((prev)=>(prev + 1) % heroCases.length);
    };
    const prevSlide = ()=>{
        setCurrentIndex((prev)=>(prev - 1 + heroCases.length) % heroCases.length);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: prevSlide,
                        className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-10 h-10 flex items-center justify-center border border-[#1E2130] hover:border-[#F3F4F6] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            className: "w-5 h-5 text-[#F3F4F6]"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: nextSlide,
                        className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-10 h-10 flex items-center justify-center border border-[#1E2130] hover:border-[#F3F4F6] transition-colors",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            className: "w-5 h-5 text-[#F3F4F6]"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-px bg-[#1E2130]",
                        children: heroCases.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 24
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                viewport: {
                                    once: true
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: index * 0.1
                                },
                                className: "bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300 cursor-pointer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-4",
                                        children: item.category
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-manrope text-sm text-[#9CA3AF] mb-6",
                                        children: item.timeframe
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-manrope text-xl font-bold text-[#F3F4F6] mb-4 leading-tight",
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-manrope text-sm text-[#9CA3AF]",
                                        children: item.metrics
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                                        lineNumber: 77,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, index, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                                lineNumber: 60,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-2 mt-8",
                        children: heroCases.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setCurrentIndex(index),
                                className: `w-2 h-2 rounded-full transition-colors ${index === currentIndex ? 'bg-[#F3F4F6]' : 'bg-[#1E2130]/50'}`
                            }, index, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                                lineNumber: 87,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                        lineNumber: 85,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
                lineNumber: 42,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/HeroCases.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Mission
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
function Mission() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#020410] border-b border-[#6366f1]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0,
                    y: 24
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: true
                },
                transition: {
                    duration: 0.4
                },
                className: "max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0] mb-6",
                        children: "OUR MISSION"
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-inter text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-8",
                        children: "We believe in empowerment, not replacement. Our mission is to build AI infrastructure that augments human capabilities, enabling businesses to scale operations without scaling headcount."
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-inter text-lg md:text-xl text-[#FFFFFF] leading-relaxed mb-12",
                        children: "We don't sell AI wrappers. We sell Growth, Speed, and Infrastructure. Every system we build is owned entirely by you—no vendor lock-in, complete code ownership."
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-[#0A0A0B] border border-[#6366f1] flex items-center justify-center flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 text-[#FFFFFF]",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M13 10V3L4 14h7v7l9-11h-7z"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 33,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-manrope text-xl font-bold text-[#FFFFFF] mb-2",
                                                children: "High-Velocity Deployment"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-sm text-[#E2E8F0]",
                                                children: "90% faster than traditional development cycles"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-[#0A0A0B] border border-[#6366f1] flex items-center justify-center flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 text-[#FFFFFF]",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 49,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                            lineNumber: 48,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                        lineNumber: 47,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-manrope text-xl font-bold text-[#FFFFFF] mb-2",
                                                children: "Full Ownership"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 53,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-sm text-[#E2E8F0]",
                                                children: "Complete code ownership with zero vendor lock-in"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 56,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-[#0A0A0B] border border-[#6366f1] flex items-center justify-center flex-shrink-0",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-6 h-6 text-[#FFFFFF]",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 65,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                            lineNumber: 64,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-manrope text-xl font-bold text-[#FFFFFF] mb-2",
                                                children: "24/7 Autonomy"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-sm text-[#E2E8F0]",
                                                children: "Infinite scale with zero human latency"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                                lineNumber: 72,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
                lineNumber: 9,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Mission.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const services = [
    {
        kicker: '01',
        title: 'AI Chatbots',
        description: 'Infinite concurrent conversations with 24/7 availability and 90% cost reduction.'
    },
    {
        kicker: '02',
        title: 'AI Receptionists',
        description: 'Zero-latency booking that eliminates busy signals and on-hold frustration.'
    },
    {
        kicker: '03',
        title: 'Workflow Automation',
        description: '100% logical follow-through with perfect accuracy on complex multi-app sequences.'
    },
    {
        kicker: '04',
        title: 'Custom CRMs',
        description: 'Real-time bi-directional integrity ensuring sales and fulfillment never out of sync.'
    },
    {
        kicker: '05',
        title: 'Lead Gen Agents',
        description: '60-second lead response that validates data and starts conversations instantly.'
    },
    {
        kicker: '06',
        title: 'High Performance Web Development',
        description: 'Lightning-fast, scalable web applications built for optimal user experience and conversion.'
    }
];
function Services() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#020410] border-b border-[#6366f1]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0] mb-12",
                    children: "SOLUTIONS"
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#6366f1]",
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.1
                            },
                            className: "bg-[#0A0A0B] p-8 hover:bg-[#1a1a2e] transition-colors duration-300 group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0] mb-4",
                                    children: service.kicker
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-manrope text-xl font-bold text-[#FFFFFF] mb-4 leading-tight",
                                    children: service.title
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-inter text-sm text-[#E2E8F0] leading-relaxed mb-6",
                                    children: service.description
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/services",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#FFFFFF] hover:text-[#E2E8F0] transition-colors duration-300",
                                        children: "See If You're Ready"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                            lineNumber: 57,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Services.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessShort
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const processSteps = [
    {
        week: 'WEEK 1',
        title: 'Strategy',
        description: 'Mapping operational bottlenecks and defining KPIs'
    },
    {
        week: 'WEEK 2',
        title: 'Architecture',
        description: 'Designing bespoke automation logic and data flows'
    },
    {
        week: 'WEEK 3',
        title: 'Integration',
        description: 'Connecting APIs and deploying automation systems'
    },
    {
        week: 'WEEK 4',
        title: 'Optimization',
        description: 'Continuous algorithmic improvement and iteration'
    }
];
function ProcessShort() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.4
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-8",
                                children: "THE WAY WE WORK"
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: processSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0,
                                            y: 24
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: index * 0.1
                                        },
                                        className: "flex gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-shrink-0 w-16",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]",
                                                    children: step.week
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                lineNumber: 54,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-manrope text-xl font-bold text-[#F3F4F6] mb-2",
                                                        children: step.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-inter text-sm text-[#9CA3AF]",
                                                        children: step.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                        lineNumber: 46,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.4,
                            delay: 0.2
                        },
                        className: "flex flex-col justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[#0B0C10] border border-[#1E2130] p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-manrope text-2xl font-bold text-[#F3F4F6] mb-6",
                                    children: "Ready to discuss your project?"
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-2",
                                                    children: "Industry"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    className: "w-full px-4 py-3 bg-[#050507] border border-[#1E2130] font-inter text-sm text-[#F3F4F6] focus:outline-none focus:border-[#9CA3AF] transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select your industry"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 91,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "restaurants",
                                                            children: "Restaurants"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 92,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "medical",
                                                            children: "Dental/Medical"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 93,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "realestate",
                                                            children: "Real Estate"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 94,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "law",
                                                            children: "Law Firms"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 95,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "ecommerce",
                                                            children: "E-Commerce"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "field",
                                                            children: "Field Services"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 97,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "saas",
                                                            children: "SaaS Startups"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 98,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "retail",
                                                            children: "Retail Chains"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 99,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "marketing",
                                                            children: "Marketing Agencies"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 100,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "finance",
                                                            children: "Finance Firms"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                            lineNumber: 101,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                            lineNumber: 86,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-2",
                                                    children: "Email"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    placeholder: "your@email.com",
                                                    className: "w-full px-4 py-3 bg-[#050507] border border-[#1E2130] font-inter text-sm text-[#F3F4F6] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#9CA3AF] transition-colors"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                            lineNumber: 105,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            className: "w-full px-6 py-4 bg-[#F3F4F6] text-[#050507] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300",
                                            children: "Send Message"
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                            lineNumber: 116,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
            lineNumber: 31,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessShort.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProcessDetailed
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/layers.js [app-ssr] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/chart-no-axes-column-increasing.js [app-ssr] (ecmascript) <export default as BarChart>");
'use client';
;
;
;
;
const processSteps = [
    {
        number: '01',
        title: 'STRATEGY',
        bullets: [
            'Comprehensive operational audit',
            'Bottleneck identification',
            'KPI definition and measurement'
        ],
        description: 'We begin with a deep dive into your current operations, identifying inefficiencies and opportunities for automation. We define clear KPIs and success metrics to ensure measurable outcomes.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"]
    },
    {
        number: '02',
        title: 'ARCHITECTURE',
        bullets: [
            'System design and data mapping',
            'Tool selection and integration planning',
            'Workflow optimization'
        ],
        description: 'Our architects design bespoke automation systems tailored to your specific needs. We map data flows, select optimal tools, and create detailed technical specifications.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"]
    },
    {
        number: '03',
        title: 'INTEGRATION',
        bullets: [
            'API development and configuration',
            'Automation deployment',
            'Testing and quality assurance'
        ],
        description: 'We build and deploy your AI infrastructure, integrating seamlessly with your existing tech stack. Rigorous testing ensures reliability and performance.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
    },
    {
        number: '04',
        title: 'OPTIMIZATION',
        bullets: [
            'Performance monitoring',
            'Continuous improvement',
            'Feedback loops and iteration'
        ],
        description: 'Post-deployment, we continuously monitor and optimize your systems. We implement feedback loops and iterate based on real-world performance data.',
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$no$2d$axes$2d$column$2d$increasing$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart$3e$__["BarChart"]
    }
];
function ProcessDetailed() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold",
                            children: "TECHNOLOGY"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                            lineNumber: 60,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.1
                            },
                            className: "font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold",
                            children: "OUR APPROACH"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4,
                        delay: 0.2
                    },
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-clash text-4xl md:text-5xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold",
                            children: "Four Steps to Intelligent Operations"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-inter text-xl text-slate-grey max-w-3xl mx-auto leading-relaxed",
                            children: "Our proven methodology transforms your business through systematic automation and continuous optimization"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6366f1] to-transparent hidden lg:block"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0",
                            children: processSteps.map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 24
                                    },
                                    whileInView: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    viewport: {
                                        once: true
                                    },
                                    transition: {
                                        duration: 0.4,
                                        delay: index * 0.1
                                    },
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-center mb-8",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-16 h-16 bg-[#0B0C10] border-2 border-[#6366f1] flex items-center justify-center group-hover:bg-[#6366f1] transition-all duration-300",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(step.icon, {
                                                            className: "w-6 h-6 text-[#6366f1] group-hover:text-[#050507] transition-colors duration-300"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                            lineNumber: 115,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                        lineNumber: 114,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute -bottom-2 left-1/2 -translate-x-1/2 font-inter text-xs text-slate-grey tracking-[0.4em] uppercase font-bold",
                                                        children: step.number
                                                    }, void 0, false, {
                                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                        lineNumber: 117,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                lineNumber: 113,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                            lineNumber: 112,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-[#0B0C10] border border-[#1E2130] p-8 hover:border-[#6366f1] transition-all duration-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-clash text-2xl text-ghost-white mb-6 tracking-[-0.04em] font-semibold",
                                                    children: step.title
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                    lineNumber: 126,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-3 mb-6",
                                                    children: step.bullets.map((bullet, bulletIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "font-inter text-sm text-slate-grey flex items-start gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                                    className: "w-4 h-4 text-[#6366f1] flex-shrink-0 mt-0.5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 25
                                                                }, this),
                                                                bullet
                                                            ]
                                                        }, bulletIndex, true, {
                                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "font-inter text-sm text-slate-grey leading-relaxed mb-6",
                                                    children: step.description
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, this),
                                        index < processSteps.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden lg:block absolute top-24 -right-4 z-10",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                                className: "w-6 h-6 text-[#6366f1]"
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                                lineNumber: 152,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                                    lineNumber: 103,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4,
                        delay: 0.6
                    },
                    className: "text-center mt-16",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/contact",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "px-8 py-4 bg-electric-cyan hover:bg-electric-cyan/90 text-obsidian font-semibold transition-colors font-inter text-center tracking-[0.4em] uppercase text-xs font-bold",
                            children: "Book Strategy Session"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
                    lineNumber: 161,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/ProcessDetailed.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Integrations
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const channels = [
    {
        name: 'CRM',
        tools: [
            'Salesforce',
            'HubSpot',
            'Apollo',
            'Pipedrive'
        ]
    },
    {
        name: 'Finance',
        tools: [
            'Stripe',
            'QuickBooks',
            'NetSuite',
            'Xero'
        ]
    },
    {
        name: 'Communication',
        tools: [
            'WhatsApp',
            'Slack',
            'Twilio',
            'Intercom'
        ]
    },
    {
        name: 'E-Com',
        tools: [
            'Shopify',
            'WooCommerce',
            'ServiceTitan',
            'Jobber'
        ]
    },
    {
        name: 'Ops',
        tools: [
            'Asana',
            'Monday.com',
            'Jira',
            'ClickUp'
        ]
    },
    {
        name: 'Management',
        tools: [
            'Trello',
            'Notion',
            'Basecamp',
            'Airtable'
        ]
    }
];
function Integrations() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]",
                            children: "INTEGRATIONS"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.1
                            },
                            className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]",
                            children: "CHANNELS"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].p, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4,
                        delay: 0.2
                    },
                    className: "font-inter text-lg md:text-xl text-[#F3F4F6] leading-relaxed mb-12 max-w-4xl",
                    children: "Creating a multichannel interaction with customers across your entire tech ecosystem. We integrate directly with your existing tools to create a seamless operational engine."
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2130]",
                    children: channels.map((channel, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.1
                            },
                            className: "bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#666666] mb-4",
                                    children: channel.name
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: channel.tools.map((tool, toolIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "px-3 py-1 bg-[#050507] border border-[#1E2130] font-inter text-xs text-[#F3F4F6]",
                                            children: tool
                                        }, toolIndex, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                                            lineNumber: 67,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                                    lineNumber: 65,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Integrations.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Numbers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const numbers = [
    {
        value: '90%',
        label: 'Faster Deployment'
    },
    {
        value: '100%',
        label: 'Code Ownership'
    },
    {
        value: '24/7',
        label: 'Autonomy'
    },
    {
        value: '0%',
        label: 'Vendor Lock-In'
    }
];
function Numbers() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-12",
                    children: "NUMBERS"
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1E2130] mb-16",
                    children: numbers.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.1
                            },
                            className: "bg-[#0B0C10] p-8 text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-4xl md:text-5xl font-bold text-[#F3F4F6] mb-2",
                                    children: item.value
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                                    lineNumber: 50,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                                    lineNumber: 53,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                            lineNumber: 42,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4,
                        delay: 0.4
                    },
                    className: "max-w-4xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-6",
                            children: "RESULT"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-inter text-lg md:text-xl text-[#F3F4F6] leading-relaxed mb-8",
                            children: "Our clients achieve operational autonomy within weeks, not months. By architecting bespoke AI systems that integrate seamlessly with existing infrastructure, we eliminate bottlenecks, reduce costs by up to 60%, and enable infinite scale without scaling headcount."
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Numbers.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Industries
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const industries = [
    {
        name: 'Restaurants',
        description: 'AI Voice Receptionists for 24/7 orders & reservations'
    },
    {
        name: 'Dental/Medical',
        description: 'Automated booking with HIPAA-compliant systems'
    },
    {
        name: 'Real Estate',
        description: 'WhatsApp lead capture & CRM mapping'
    },
    {
        name: 'Law Firms',
        description: 'Automated client intake & document generation'
    },
    {
        name: 'E-Commerce',
        description: 'Content distribution for 10+ platforms'
    },
    {
        name: 'Field Services',
        description: 'Voice AI dispatching for technicians'
    },
    {
        name: 'SaaS Startups',
        description: '0-day onboarding & automated enrichment'
    },
    {
        name: 'Retail Chains',
        description: 'Unified dashboards for 50+ locations'
    },
    {
        name: 'Marketing Agencies',
        description: 'Workflow automation from payment to delivery'
    },
    {
        name: 'Finance Firms',
        description: 'Reconciliation engines for 100% tax accuracy'
    },
    {
        name: 'Your Industry',
        description: 'Don\'t fit into a box? Neither do we. Whether you are a solo founder or a Fortune 500, we architect custom AI solutions for your specific bottlenecks.'
    }
];
function Industries() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#020410] border-b border-[#6366f1]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0]",
                            children: "INDUSTRIES"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.1
                            },
                            className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#E2E8F0]",
                            children: "WE SPECIALIZE"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#6366f1]",
                    children: industries.map((industry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.05
                            },
                            className: "bg-[#0A0A0B] p-8 hover:bg-[#1a1a2e] transition-colors duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-manrope text-xl font-bold text-[#FFFFFF] mb-3",
                                    children: industry.name
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
                                    lineNumber: 89,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-inter text-sm text-[#E2E8F0] leading-relaxed",
                                    children: industry.description
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
                                    lineNumber: 92,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
                            lineNumber: 81,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Industries.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Principles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
const principles = [
    {
        number: '01',
        title: 'Empowerment',
        description: 'We build systems that augment human capabilities, not replace them. Every solution is designed to empower your team.'
    },
    {
        number: '02',
        title: 'Ownership',
        description: 'You own every line of code we write. No vendor lock-in, complete transparency, full control over your infrastructure.'
    },
    {
        number: '03',
        title: 'Speed',
        description: '90% faster deployment through AI-accelerated development. What takes months takes weeks.'
    },
    {
        number: '04',
        title: 'Care',
        description: 'We care about your success as much as you do. Long-term partnerships, not transactional projects.'
    },
    {
        number: '05',
        title: 'Practice',
        description: 'We practice what we preach. Our own operations run on the same systems we build for you.'
    },
    {
        number: '06',
        title: 'Justice',
        description: 'Fair pricing, transparent processes, honest communication. No hidden fees, no surprises.'
    }
];
function Principles() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]",
                            children: "PRINCIPLES"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.1
                            },
                            className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF]",
                            children: "OUR CULTURE"
                        }, void 0, false, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2130]",
                    children: principles.map((principle, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.05
                            },
                            className: "bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#666666] mb-4",
                                    children: principle.number
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                                    lineNumber: 76,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-manrope text-2xl font-bold text-[#F3F4F6] mb-4",
                                    children: principle.title
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-inter text-sm text-[#9CA3AF] leading-relaxed",
                                    children: principle.description
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                                    lineNumber: 86,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                            lineNumber: 67,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/Principles.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SpecialOffer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function SpecialOffer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-12",
                    children: "SPECIAL OFFER"
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1E2130]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.1
                            },
                            className: "bg-[#0B0C10] p-8 hover:bg-[#0F1015] transition-colors duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-4",
                                    children: "Architecture Audit"
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-3xl md:text-4xl font-bold text-[#F3F4F6] mb-6",
                                    children: "$250"
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 41,
                                                    columnNumber: 17
                                                }, this),
                                                "Complete operational audit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 40,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 45,
                                                    columnNumber: 17
                                                }, this),
                                                "Bottleneck identification"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 17
                                                }, this),
                                                "Automation roadmap"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 48,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F3F4F6] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 17
                                                }, this),
                                                "ROI projection"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full px-6 py-4 border border-[#1E2130] text-[#F3F4F6] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#F3F4F6] hover:text-[#050507] transition-colors duration-300",
                                        children: "Book Architecture Audit"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: 0.2
                            },
                            className: "bg-[#0B0C10] text-[#F3F4F6] p-8 hover:bg-[#0F1015] transition-colors duration-300",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-4",
                                    children: "Strategy Session"
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-manrope text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-6",
                                    children: "FREE"
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-3 mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 17
                                                }, this),
                                                "60-minute strategy call"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 87,
                                                    columnNumber: 17
                                                }, this),
                                                "Custom automation blueprint"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 86,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this),
                                                "Implementation timeline"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "font-inter text-sm text-[#9CA3AF] flex items-start gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex-shrink-0 w-1.5 h-1.5 bg-[#F5F5F5] rounded-full mt-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 17
                                                }, this),
                                                "No obligation"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                            lineNumber: 94,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "w-full px-6 py-4 bg-[#F3F4F6] text-[#050507] font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300",
                                        children: "Book Strategy Session"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/SpecialOffer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FAQ
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
'use client';
;
;
;
;
const faqs = [
    {
        question: 'How long does implementation take?',
        answer: 'Most implementations are completed within 4-6 weeks. Our AI-accelerated development process allows us to deploy enterprise-grade infrastructure 90% faster than traditional development cycles.'
    },
    {
        question: 'What is the pricing structure?',
        answer: 'We offer flexible pricing based on project scope and complexity. We provide transparent quotes with no hidden fees. Contact us for a custom quote tailored to your specific needs.'
    },
    {
        question: 'Which tools do you integrate with?',
        answer: 'We integrate with 44+ platforms including Salesforce, HubSpot, Stripe, Shopify, WhatsApp, Slack, Twilio, and many more. If your software has an API, we can orchestrate it.'
    },
    {
        question: 'Is my data secure?',
        answer: 'Absolutely. We follow industry best practices for data security and compliance. All integrations are built with security-first architecture, and we never share your data with third parties.'
    },
    {
        question: 'Do I own the code?',
        answer: 'Yes, you own every line of code we write. There is no vendor lock-in. You have complete control over your infrastructure and can modify or extend it as needed.'
    },
    {
        question: 'What kind of support do you provide?',
        answer: 'We provide comprehensive support including initial training, documentation, and ongoing maintenance packages. We also offer optimization services to continuously improve your systems.'
    }
];
function FAQ() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleFAQ = (index)=>{
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 24
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true
                    },
                    transition: {
                        duration: 0.4
                    },
                    className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-12",
                    children: "FAQ"
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-px bg-[#1E2130]",
                    children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 24
                            },
                            whileInView: {
                                opacity: 1,
                                y: 0
                            },
                            viewport: {
                                once: true
                            },
                            transition: {
                                duration: 0.4,
                                delay: index * 0.05
                            },
                            className: "bg-[#0B0C10]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>toggleFAQ(index),
                                    className: "w-full px-8 py-6 flex items-center justify-between text-left hover:bg-[#0F1015] transition-colors duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-manrope text-lg font-bold text-[#F3F4F6]",
                                            children: faq.question
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this),
                                        openIndex === index ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                            className: "w-5 h-5 text-[#F3F4F6]"
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                            lineNumber: 74,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                            className: "w-5 h-5 text-[#F3F4F6]"
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                            lineNumber: 76,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                    lineNumber: 66,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: openIndex === index && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        animate: {
                                            height: 'auto',
                                            opacity: 1
                                        },
                                        exit: {
                                            height: 0,
                                            opacity: 0
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        className: "overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-8 pb-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-inter text-base text-[#9CA3AF] leading-relaxed",
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                                lineNumber: 90,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                            lineNumber: 89,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                        lineNumber: 82,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FAQ.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}),
"[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FinalCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function FinalCTA() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-[#050507] border-b border-[#1E2130]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-px bg-[#1E2130]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.4
                        },
                        className: "bg-[#0B0C10] p-8 lg:col-span-2 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-8",
                                children: "LET'S DISCUSS YOUR PROJECT"
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "w-full px-12 py-8 bg-[#F3F4F6] text-[#050507] font-manrope text-2xl md:text-3xl font-extrabold tracking-[-0.04em] uppercase hover:bg-[#E5E7EB] transition-colors duration-300",
                                    children: "LET'S / DISCUSS"
                                }, void 0, false, {
                                    fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                    lineNumber: 24,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                        lineNumber: 12,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 24
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.4,
                            delay: 0.1
                        },
                        className: "bg-[#0B0C10] p-8 flex flex-col justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-manrope text-[11px] font-semibold tracking-[0.3em] uppercase text-[#9CA3AF] mb-6",
                                children: "CONTACT"
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:contact@lexaura.ca",
                                className: "font-manrope text-xl md:text-2xl font-bold text-[#F3F4F6] hover:text-[#9CA3AF] transition-colors duration-300 mb-8",
                                children: "contact@lexaura.ca"
                            }, void 0, false, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-manrope text-sm text-[#9CA3AF]",
                                        children: "Vancouver, Canada"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Library$2f$Mobile__Documents$2f$com$7e$apple$7e$CloudDocs$2f$lexaura$2d$clean$2f$Final__Lexaura__Website$2f$lexaura$2d$luxury$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-manrope text-sm text-[#9CA3AF]",
                                        children: "Dubai, UAE"
                                    }, void 0, false, {
                                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                        lineNumber: 53,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
                lineNumber: 10,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
            lineNumber: 9,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Library/Mobile Documents/com~apple~CloudDocs/lexaura-clean/Final Lexaura Website/lexaura-luxury/src/components/sections/FinalCTA.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=48481_lexaura-clean_Final%20Lexaura%20Website_lexaura-luxury_src_cc48fed6._.js.map