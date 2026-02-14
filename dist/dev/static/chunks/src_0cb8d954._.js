(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/FloatingWhatsApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FloatingWhatsApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/image/image.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const WHATSAPP_ITEMS = [
    {
        id: 1,
        title: 'Join NEET 2025 Updates Channel',
        icon: '/images/wp-ico1.svg',
        experts: [
            {
                name: 'Amit Sharma',
                experience: '5+ Years',
                phone: '919111111111'
            },
            {
                name: 'Neha Verma',
                experience: '6+ Years',
                phone: '919111111112'
            },
            {
                name: 'Rohit Gupta',
                experience: '4+ Years',
                phone: '919111111113'
            }
        ]
    },
    {
        id: 2,
        title: 'NEET UG Counselling',
        icon: '/images/wp-ico3.svg',
        experts: [
            {
                name: 'Dr. Kunal Jain',
                experience: '8+ Years',
                phone: '919222222221'
            },
            {
                name: 'Pooja Singh',
                experience: '7+ Years',
                phone: '919222222222'
            },
            {
                name: 'Aakash Mehta',
                experience: '5+ Years',
                phone: '919222222223'
            }
        ]
    },
    {
        id: 3,
        title: 'NEET PG Counselling',
        icon: '/images/wp-ico3.svg',
        experts: [
            {
                name: 'Dr. Rakesh Kumar',
                experience: '10+ Years',
                phone: '919333333331'
            },
            {
                name: 'Simran Kaur',
                experience: '6+ Years',
                phone: '919333333332'
            },
            {
                name: 'Nitin Joshi',
                experience: '5+ Years',
                phone: '919333333333'
            }
        ]
    },
    {
        id: 4,
        title: 'Study Abroad Counselling',
        icon: '/images/wp-ico4.svg',
        experts: [
            {
                name: 'Rahul Malhotra',
                experience: '9+ Years',
                phone: '919444444441'
            },
            {
                name: 'Anjali Arora',
                experience: '7+ Years',
                phone: '919444444442'
            },
            {
                name: 'Suresh Patel',
                experience: '6+ Years',
                phone: '919444444443'
            }
        ]
    },
    {
        id: 5,
        title: 'Support (24/7)',
        icon: '/images/wp-ico5.svg',
        experts: [
            {
                name: 'Support Team 1',
                experience: '24/7 Available',
                phone: '919555555551'
            },
            {
                name: 'Support Team 2',
                experience: '24/7 Available',
                phone: '919555555552'
            },
            {
                name: 'Support Team 3',
                experience: '24/7 Available',
                phone: '919555555553'
            }
        ]
    }
];
function FloatingWhatsApp() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(17);
    if ($[0] !== "7966493a8436a4927874f4efb0b3fdb460b1125e1a0d92e2371e62c4c74b858a") {
        for(let $i = 0; $i < 17; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7966493a8436a4927874f4efb0b3fdb460b1125e1a0d92e2371e62c4c74b858a";
    }
    const [view, setView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("none");
    const [selectedItem, setSelectedItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] !== view) {
        t0 = ({
            "FloatingWhatsApp[useEffect()]": ()=>{
                if (view !== "none") {
                    requestAnimationFrame({
                        "FloatingWhatsApp[useEffect() > requestAnimationFrame()]": ()=>{
                            setIsVisible(true);
                        }
                    }["FloatingWhatsApp[useEffect() > requestAnimationFrame()]"]);
                }
            }
        })["FloatingWhatsApp[useEffect()]"];
        t1 = [
            view
        ];
        $[1] = view;
        $[2] = t0;
        $[3] = t1;
    } else {
        t0 = $[2];
        t1 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "FloatingWhatsApp[startTransition]": (target)=>{
                setIsVisible(false);
                setTimeout({
                    "FloatingWhatsApp[startTransition > setTimeout()]": ()=>{
                        setView(target);
                    }
                }["FloatingWhatsApp[startTransition > setTimeout()]"], 200);
            }
        })["FloatingWhatsApp[startTransition]"];
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const startTransition = t2;
    const animationClass = isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4";
    const openWhatsApp = _FloatingWhatsAppOpenWhatsApp;
    let t3;
    if ($[5] !== view) {
        t3 = ({
            "FloatingWhatsApp[<button>.onClick]": ()=>view === "menu" || view === "detail" ? startTransition("none") : startTransition("menu")
        })["FloatingWhatsApp[<button>.onClick]"];
        $[5] = view;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
            className: "pi pi-whatsapp text-white text-4xl!"
        }, void 0, false, {
            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
            lineNumber: 161,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] !== t3) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t3,
            className: "cursor-pointer fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center shadow-lg hover:scale-105 transition",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
            lineNumber: 168,
            columnNumber: 10
        }, this);
        $[8] = t3;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== animationClass || $[11] !== selectedItem || $[12] !== view) {
        t6 = view !== "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `
            fixed bottom-8 z-[102] left-20 z-40 flex items-end
            transform transition-all duration-300 ease-out
            ${animationClass}
          `,
            children: [
                view === "menu" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px_10px_10px_0] shadow-xl overflow-hidden bg-white w-[260px] md:w-[300px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-[linear-gradient(90deg,rgba(0,117,148,1)_0%,rgba(99,205,180,1)_100%)] text-white p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold md:text-base text-xs",
                                    children: "Welcome To RADICAL EDUCATION"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                    lineNumber: 180,
                                    columnNumber: 241
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "md:text-sm text-xs",
                                    children: "Chat Support"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                    lineNumber: 180,
                                    columnNumber: 325
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                            lineNumber: 180,
                            columnNumber: 136
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 space-y-2",
                            children: WHATSAPP_ITEMS.map({
                                "FloatingWhatsApp[WHATSAPP_ITEMS.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: {
                                            "FloatingWhatsApp[WHATSAPP_ITEMS.map() > <div>.onClick]": ()=>{
                                                setSelectedItem(item);
                                                startTransition("detail");
                                            }
                                        }["FloatingWhatsApp[WHATSAPP_ITEMS.map() > <div>.onClick]"],
                                        className: "flex gap-2 items-center justify-between p-2 rounded-lg cursor-pointer hover:bg-green-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: item.icon,
                                                        alt: "",
                                                        width: "18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 215
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "md:text-sm text-xs text-[#005A8B] font-medium",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 258
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                lineNumber: 186,
                                                columnNumber: 174
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 16 16",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M0.997298 7.8388C0.997675 7.96803 1.04937 8.09182 1.14102 8.18293C1.23266 8.27404 1.35675 8.32501 1.48597 8.32463L12.9783 8.29108L9.92048 11.3658C9.82926 11.4576 9.77822 11.5818 9.7786 11.7112C9.77898 11.8406 9.83074 11.9645 9.9225 12.0558C10.0143 12.147 10.1385 12.198 10.2679 12.1977C10.3973 12.1973 10.5212 12.1455 10.6124 12.0538L14.4991 8.14436C14.5443 8.09897 14.5802 8.04509 14.6046 7.98582C14.629 7.92656 14.6414 7.86306 14.6412 7.79897C14.641 7.73488 14.6282 7.67145 14.6035 7.61233C14.5787 7.5532 14.5426 7.49954 14.4971 7.45441L10.5877 3.56778C10.5422 3.52261 10.4883 3.48683 10.4291 3.46248C10.3698 3.43814 10.3063 3.4257 10.2423 3.42589C10.1129 3.42627 9.98895 3.47803 9.89772 3.56979C9.8065 3.66155 9.75546 3.78579 9.75584 3.91518C9.75621 4.04457 9.80798 4.16851 9.89974 4.25974L12.9755 7.31658L1.48313 7.35013C1.3539 7.35051 1.23011 7.4022 1.139 7.49385C1.04789 7.58549 0.99692 7.70958 0.997298 7.8388Z",
                                                    fill: "#005A8B"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                    lineNumber: 186,
                                                    columnNumber: 442
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                lineNumber: 186,
                                                columnNumber: 347
                                            }, this)
                                        ]
                                    }, item.id, true, {
                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                        lineNumber: 181,
                                        columnNumber: 63
                                    }, this)
                            }["FloatingWhatsApp[WHATSAPP_ITEMS.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                            lineNumber: 180,
                            columnNumber: 381
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                    lineNumber: 180,
                    columnNumber: 34
                }, this),
                view === "detail" && selectedItem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-[10px_10px_10px_0] shadow-xl overflow-hidden bg-white w-[280px] md:w-[300px]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-teal-600 to-green-500 text-white p-4 flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "btnico",
                                        onClick: {
                                            "FloatingWhatsApp[<button>.onClick]": ()=>startTransition("menu")
                                        }["FloatingWhatsApp[<button>.onClick]"],
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "pi pi-arrow-left text-lg! text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                            lineNumber: 189,
                                            columnNumber: 54
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                        lineNumber: 187,
                                        columnNumber: 314
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                    lineNumber: 187,
                                    columnNumber: 309
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold md:text-base text-xs",
                                            children: "Welcome To RADICAL EDUCATION"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                            lineNumber: 189,
                                            columnNumber: 128
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "md:text-sm text-xs",
                                            children: "Chat Support"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                            lineNumber: 189,
                                            columnNumber: 212
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                    lineNumber: 189,
                                    columnNumber: 123
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                            lineNumber: 187,
                            columnNumber: 209
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-[#0B2E3C] font-semibold mb-4 text-xs",
                                    children: selectedItem.title
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                    lineNumber: 189,
                                    columnNumber: 295
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: selectedItem.experts.map({
                                        "FloatingWhatsApp[selectedItem.experts.map()]": (expert, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between cursor-pointer",
                                                onClick: {
                                                    "FloatingWhatsApp[selectedItem.experts.map() > <div>.onClick]": ()=>openWhatsApp(expert.phone)
                                                }["FloatingWhatsApp[selectedItem.experts.map() > <div>.onClick]"],
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    width: "32",
                                                                    height: "28",
                                                                    viewBox: "0 0 36 32",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M33.7778 16.3911C33.7778 6.63111 26.2044 0 17.7778 0C9.44 0 1.77778 6.48889 1.77778 16.4978C0.711111 17.1022 0 18.24 0 19.5556V23.1111C0 25.0667 1.6 26.6667 3.55556 26.6667H5.33333V15.8222C5.33333 8.94222 10.8978 3.37778 17.7778 3.37778C24.6578 3.37778 30.2222 8.94222 30.2222 15.8222V28.4444H16V32H30.2222C32.1778 32 33.7778 30.4 33.7778 28.4444V26.2756C34.8267 25.7244 35.5556 24.64 35.5556 23.36V19.2711C35.5556 18.0267 34.8267 16.9422 33.7778 16.3911Z",
                                                                            fill: "#1491FF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 223
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M12.4418 19.5556C13.4237 19.5556 14.2196 18.7596 14.2196 17.7778C14.2196 16.7959 13.4237 16 12.4418 16C11.46 16 10.6641 16.7959 10.6641 17.7778C10.6641 18.7596 11.46 19.5556 12.4418 19.5556Z",
                                                                            fill: "#1491FF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 706
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M23.1137 19.5556C24.0956 19.5556 24.8915 18.7596 24.8915 17.7778C24.8915 16.7959 24.0956 16 23.1137 16C22.1319 16 21.3359 16.7959 21.3359 17.7778C21.3359 18.7596 22.1319 19.5556 23.1137 19.5556Z",
                                                                            fill: "#1491FF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 924
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M28.4487 14.2782C28.0248 11.7788 26.7303 9.5101 24.7944 7.8735C22.8585 6.23691 20.406 5.33802 17.871 5.33594C12.4843 5.33594 6.68873 9.79816 7.15095 16.8026C9.34363 15.9062 11.2802 14.4808 12.7878 12.6536C14.2955 10.8265 15.3272 8.65449 15.791 6.33149C18.1198 11.007 22.9021 14.2248 28.4487 14.2782Z",
                                                                            fill: "#1491FF"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                            lineNumber: 192,
                                                                            columnNumber: 1146
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                    lineNumber: 192,
                                                                    columnNumber: 128
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 123
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "font-semibold md:text-sm text-xs text-[#0B2E3C]",
                                                                        children: expert.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 1490
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-gray-500",
                                                                        children: [
                                                                            "Experience: ",
                                                                            expert.experience
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                        lineNumber: 192,
                                                                        columnNumber: 1570
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                                lineNumber: 192,
                                                                columnNumber: 1485
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 82
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "pi pi-whatsapp text-2xl! text-[#2CBF0F]"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                        lineNumber: 192,
                                                        columnNumber: 1654
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                                lineNumber: 190,
                                                columnNumber: 80
                                            }, this)
                                    }["FloatingWhatsApp[selectedItem.experts.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                                    lineNumber: 189,
                                    columnNumber: 380
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                            lineNumber: 189,
                            columnNumber: 274
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/FloatingWhatsApp.tsx",
                    lineNumber: 187,
                    columnNumber: 107
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/FloatingWhatsApp.tsx",
            lineNumber: 176,
            columnNumber: 29
        }, this);
        $[10] = animationClass;
        $[11] = selectedItem;
        $[12] = view;
        $[13] = t6;
    } else {
        t6 = $[13];
    }
    let t7;
    if ($[14] !== t5 || $[15] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t5,
                t6
            ]
        }, void 0, true);
        $[14] = t5;
        $[15] = t6;
        $[16] = t7;
    } else {
        t7 = $[16];
    }
    return t7;
}
_s(FloatingWhatsApp, "0Dp1mXoYs5X55yxZ2gOVw4RPCVI=");
_c = FloatingWhatsApp;
function _FloatingWhatsAppOpenWhatsApp(phone) {
    window.open(`https://wa.me/${phone}`, "_blank");
}
var _c;
__turbopack_context__.k.register(_c, "FloatingWhatsApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/NewsMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>NewsMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const newsData = [
    {
        title: 'MCC Notice: NRI Category Conversion for NEET PG Counselling 2025 (Round 2)',
        date: '01/12/2025',
        url: 'https://radicaleducation.in/nri-category-conversion-for-neet-pg-counselling/'
    },
    {
        title: 'Uttarakhand NEET PG revised schedule released',
        date: '18/11/2025',
        url: 'https://radicaleducation.in/uttarakhand-neet-pg-revised-schedule/'
    },
    {
        title: 'NMC Announces Updated MBBS Seat Matrix for 2025–26',
        date: '30/10/2025',
        url: 'https://radicaleducation.in/nmc-announces-updated-mbbs-seat-matrix-for-2025-26/'
    },
    {
        title: 'Uttarakhand AYUSH Round 1 Allotment List 2025 Released',
        date: '01/10/2025',
        url: 'https://radicaleducation.in/uttarakhand-ayush-round-1-allotment-list/'
    },
    {
        title: 'Uttar Pradesh MBBS/BDS Round 3 Counselling 2025',
        date: '30/09/2025',
        url: 'https://radicaleducation.in/uttar-pradesh-mbbs-bds-round-3-counselling/'
    }
];
function NewsMarquee() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "2e2dd594691939588d3564943fddc3a0d41364d96729b56a85be6bd01287e8ee") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2e2dd594691939588d3564943fddc3a0d41364d96729b56a85be6bd01287e8ee";
    }
    const marqueeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "NewsMarquee[useEffect()]": ()=>{
                const el = marqueeRef.current;
                if (!el) {
                    return;
                }
                let animationId;
                let scrollSpeed = 0.6;
                const animate = {
                    "NewsMarquee[useEffect() > animate]": ()=>{
                        el.scrollLeft = el.scrollLeft + scrollSpeed;
                        if (el.scrollLeft >= el.scrollWidth / 2) {
                            el.scrollLeft = 0;
                        }
                        animationId = requestAnimationFrame(animate);
                    }
                }["NewsMarquee[useEffect() > animate]"];
                animationId = requestAnimationFrame(animate);
                el.addEventListener("mouseenter", {
                    "NewsMarquee[useEffect() > el.addEventListener()]": ()=>scrollSpeed = 0
                }["NewsMarquee[useEffect() > el.addEventListener()]"]);
                el.addEventListener("mouseleave", {
                    "NewsMarquee[useEffect() > el.addEventListener()]": ()=>scrollSpeed = 0.6
                }["NewsMarquee[useEffect() > el.addEventListener()]"]);
                return ()=>cancelAnimationFrame(animationId);
            }
        })["NewsMarquee[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: marqueeRef,
            className: "flex-1 overflow-hidden whitespace-nowrap",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-8 w-max",
                children: [
                    ...newsData,
                    ...newsData
                ].map(_NewsMarqueeAnonymous)
            }, void 0, false, {
                fileName: "[project]/src/components/NewsMarquee.tsx",
                lineNumber: 82,
                columnNumber: 85
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/NewsMarquee.tsx",
            lineNumber: 82,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "md:text-sm text-xs",
            children: "View More"
        }, void 0, false, {
            fileName: "[project]/src/components/NewsMarquee.tsx",
            lineNumber: 89,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#053B59] text-white flex items-center md:gap-4 gap-3 md:pr-4 pr-3 py-6 overflow-hidden",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://radicaleducation.in/counselling-updates/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        size: "small",
                        className: "bg-[#005A8B]! border-[#005A8B]! py-1.5! md:py-2.5! md:pr-3! pr-1.5! pl-2! md:pl-3! gap-2",
                        rounded: true,
                        children: [
                            t3,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 31 31",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M17.2441 10.8496C17.3278 10.8493 17.4111 10.8659 17.4883 10.8975H17.4893C17.5664 10.9292 17.6368 10.976 17.6963 11.0352L21.6055 14.9219L21.6855 15.0186C21.7088 15.0531 21.728 15.0902 21.7441 15.1289C21.7766 15.2063 21.7937 15.2894 21.7939 15.373C21.7942 15.4568 21.778 15.5399 21.7461 15.6172C21.7143 15.6945 21.6674 15.7649 21.6084 15.8242L17.7217 19.7334C17.6026 19.8532 17.4405 19.9212 17.2715 19.9219C17.1023 19.9224 16.9392 19.8556 16.8193 19.7363C16.6995 19.6172 16.6314 19.4552 16.6309 19.2861C16.6303 19.117 16.6971 18.954 16.8164 18.834L19.6191 16.0166L8.48926 16.0488C8.32037 16.0492 8.15798 15.9825 8.03809 15.8633C7.91829 15.7441 7.85011 15.5822 7.84961 15.4131C7.84918 15.2442 7.91603 15.0817 8.03516 14.9619C8.15428 14.8421 8.31637 14.7748 8.48535 14.7744L19.6143 14.7412L16.7969 11.9404C16.677 11.8212 16.609 11.6592 16.6084 11.4902C16.6079 11.321 16.6748 11.158 16.7939 11.0381C16.9131 10.9183 17.0751 10.8502 17.2441 10.8496Z",
                                            fill: "white",
                                            stroke: "white",
                                            strokeWidth: "0.3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsMarquee.tsx",
                                            lineNumber: 96,
                                            columnNumber: 423
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M15.5 1C23.5081 1 30 7.49187 30 15.5C30 23.5081 23.5081 30 15.5 30C7.49187 30 1 23.5081 1 15.5C1 7.49187 7.49187 1 15.5 1Z",
                                            stroke: "white",
                                            strokeWidth: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/NewsMarquee.tsx",
                                            lineNumber: 96,
                                            columnNumber: 1424
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/NewsMarquee.tsx",
                                    lineNumber: 96,
                                    columnNumber: 328
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/NewsMarquee.tsx",
                                lineNumber: 96,
                                columnNumber: 325
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/NewsMarquee.tsx",
                        lineNumber: 96,
                        columnNumber: 184
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/NewsMarquee.tsx",
                    lineNumber: 96,
                    columnNumber: 122
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/NewsMarquee.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_s(NewsMarquee, "wvDJETwgPK/gPYskZVzt2YL5O38=");
_c = NewsMarquee;
function _NewsMarqueeAnonymous(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: item.url,
        target: "_blank",
        className: "min-w-[320px] rounded-lg transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 text-sm mb-1 text-[#829dac]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "pi pi-calendar text-xs text-[#829dac]!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsMarquee.tsx",
                        lineNumber: 104,
                        columnNumber: 177
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                        children: item.date
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsMarquee.tsx",
                        lineNumber: 104,
                        columnNumber: 233
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewsMarquee.tsx",
                lineNumber: 104,
                columnNumber: 108
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "font-medium leading-snug flex items-center gap-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-2 w-2 rounded-full bg-[#FF7A00]"
                        }, void 0, false, {
                            fileName: "[project]/src/components/NewsMarquee.tsx",
                            lineNumber: 104,
                            columnNumber: 344
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsMarquee.tsx",
                        lineNumber: 104,
                        columnNumber: 339
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: item.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/NewsMarquee.tsx",
                        lineNumber: 104,
                        columnNumber: 403
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/NewsMarquee.tsx",
                lineNumber: 104,
                columnNumber: 265
            }, this)
        ]
    }, index, true, {
        fileName: "[project]/src/components/NewsMarquee.tsx",
        lineNumber: 104,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "NewsMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/StatsCounter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsCounter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function StatsCounter() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "24fc93046a693548399eb271d7eb82d175326d4e8b0174487c497c976f1fa968") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "24fc93046a693548399eb271d7eb82d175326d4e8b0174487c497c976f1fa968";
    }
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [start, setStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            {
                value: 15783,
                suffix: "+",
                label: "STUDENTS COUNSELLED"
            },
            {
                value: 75,
                suffix: "+",
                label: "EXPERT COUNSELORS"
            },
            {
                value: 250,
                suffix: "+",
                label: "COLLEGES / UNIVERSITIES\nASSOCIATION"
            },
            {
                value: 100,
                suffix: "%",
                label: "SUCCESS RATE"
            }
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const stats = t0;
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = stats.map(_StatsCounterStatsMap);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [counts, setCounts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "StatsCounter[useEffect()]": ()=>{
                const observer = new IntersectionObserver((t4)=>{
                    const [entry] = t4;
                    if (entry.isIntersecting) {
                        setStart(true);
                        observer.disconnect();
                    }
                }, {
                    threshold: 0.3
                });
                if (ref.current) {
                    observer.observe(ref.current);
                }
                return ()=>observer.disconnect();
            }
        })["StatsCounter[useEffect()]"];
        t3 = [];
        $[3] = t2;
        $[4] = t3;
    } else {
        t2 = $[3];
        t3 = $[4];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[5] !== start) {
        t4 = ({
            "StatsCounter[useEffect()]": ()=>{
                if (!start) {
                    return;
                }
                const timers = stats.map({
                    "StatsCounter[useEffect() > stats.map()]": (stat, i)=>{
                        let current = 0;
                        const increment = stat.value / 93.75;
                        return setInterval({
                            "StatsCounter[useEffect() > stats.map() > setInterval()]": ()=>{
                                current = current + increment;
                                current;
                                setCounts({
                                    "StatsCounter[useEffect() > stats.map() > setInterval() > setCounts()]": (prev)=>{
                                        const updated = [
                                            ...prev
                                        ];
                                        updated[i] = current >= stat.value ? stat.value : Math.floor(current);
                                        return updated;
                                    }
                                }["StatsCounter[useEffect() > stats.map() > setInterval() > setCounts()]"]);
                                if (current >= stat.value) {
                                    clearInterval(timers[i]);
                                }
                            }
                        }["StatsCounter[useEffect() > stats.map() > setInterval()]"], 16);
                    }
                }["StatsCounter[useEffect() > stats.map()]"]);
                return ()=>timers.forEach(clearInterval);
            }
        })["StatsCounter[useEffect()]"];
        t5 = [
            start
        ];
        $[5] = start;
        $[6] = t4;
        $[7] = t5;
    } else {
        t4 = $[6];
        t5 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[8] !== counts) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "w-full md:bg-[#DFF1FF] rounded-xl md:px-6 md:py-8 relative z-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 md:gap-0 gap-3",
                children: stats.map({
                    "StatsCounter[stats.map()]": (item, i_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative text-center py-4 fadeUp md:bg-transparent bg-[#DFF1FF] rounded-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-3xl md:text-4xl font-bold text-[#005A8B]",
                                    children: [
                                        counts[i_0].toLocaleString(),
                                        item.suffix
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/home/StatsCounter.tsx",
                                    lineNumber: 120,
                                    columnNumber: 157
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs md:text-sm font-medium text-[#005A8B] whitespace-pre-line uppercase",
                                    children: item.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/StatsCounter.tsx",
                                    lineNumber: 120,
                                    columnNumber: 269
                                }, this),
                                i_0 !== stats.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-[2px] bg-[#00CFB2]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/home/StatsCounter.tsx",
                                    lineNumber: 120,
                                    columnNumber: 414
                                }, this)
                            ]
                        }, i_0, true, {
                            fileName: "[project]/src/components/home/StatsCounter.tsx",
                            lineNumber: 120,
                            columnNumber: 55
                        }, this)
                }["StatsCounter[stats.map()]"])
            }, void 0, false, {
                fileName: "[project]/src/components/home/StatsCounter.tsx",
                lineNumber: 119,
                columnNumber: 100
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/StatsCounter.tsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[8] = counts;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    return t6;
}
_s(StatsCounter, "rWsFrczOiKEhSBM4NAURtNp3tVA=");
_c = StatsCounter;
function _StatsCounterStatsMap() {
    return 0;
}
var _c;
__turbopack_context__.k.register(_c, "StatsCounter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/ServicesDropdown.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//\radical\src\components\home\ServicesDropdown.tsx
__turbopack_context__.s([
    "default",
    ()=>ServicesDropdown
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/image/image.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function ServicesDropdown(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(25);
    if ($[0] !== "717b0d59cff4953e4a5c9f833ba7373dd396206228065918948785c4bb9d883d") {
        for(let $i = 0; $i < 25; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "717b0d59cff4953e4a5c9f833ba7373dd396206228065918948785c4bb9d883d";
    }
    const { services } = t0;
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(4);
    let t1;
    if ($[1] !== isOpen || $[2] !== services.length) {
        t1 = ({
            "ServicesDropdown[toggleDropdown]": ()=>{
                setIsOpen(!isOpen);
                if (!isOpen) {
                    setVisibleCount(services.length);
                } else {
                    setVisibleCount(4);
                }
            }
        })["ServicesDropdown[toggleDropdown]"];
        $[1] = isOpen;
        $[2] = services.length;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    const toggleDropdown = t1;
    let t2;
    if ($[4] !== isOpen || $[5] !== services || $[6] !== visibleCount) {
        let t3;
        if ($[8] !== isOpen) {
            t3 = ({
                "ServicesDropdown[(anonymous)()]": (service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `transform transition-all duration-300 ${index >= 4 && isOpen ? "opacity-100 translate-y-0" : index >= 4 ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/services/${service.slug}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `relative rounded-2xl md:p-8 py-8 px-2 md:h-[200px] h-[130px] cursor-pointer 
                ${service.color} shadow-lg hover:shadow-xl transition-all duration-300 
                md:hover:transform-none hover:scale-105 active:scale-95`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-15 left-1/2 -translate-x-1/2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:w-30 md:h-30 w-26 h-26 bg-white rotate-45 rounded-xl shadow-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `-rotate-45 text-2xl ${service.text}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                                    src: service.icon,
                                                    alt: service.title,
                                                    width: "60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 307
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                                                lineNumber: 60,
                                                columnNumber: 251
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                                            lineNumber: 60,
                                            columnNumber: 135
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                                        lineNumber: 60,
                                        columnNumber: 75
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "md:mt-16 mt-10 text-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: `font-semibold md:text-lg text-sm lg:px-8 ${service.text}`,
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                                            lineNumber: 60,
                                            columnNumber: 429
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                                        lineNumber: 60,
                                        columnNumber: 385
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                                lineNumber: 58,
                                columnNumber: 306
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                            lineNumber: 58,
                            columnNumber: 265
                        }, this)
                    }, service.slug, false, {
                        fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                        lineNumber: 58,
                        columnNumber: 64
                    }, this)
            })["ServicesDropdown[(anonymous)()]"];
            $[8] = isOpen;
            $[9] = t3;
        } else {
            t3 = $[9];
        }
        t2 = services.slice(0, visibleCount).map(t3);
        $[4] = isOpen;
        $[5] = services;
        $[6] = visibleCount;
        $[7] = t2;
    } else {
        t2 = $[7];
    }
    let t3;
    if ($[10] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-26 md:gap-x-10 gap-x-5 transition-all duration-500 ease-in-out",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
            lineNumber: 77,
            columnNumber: 10
        }, this);
        $[10] = t2;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    let t4;
    if ($[12] !== services || $[13] !== visibleCount) {
        t4 = services.slice(0, visibleCount).map(_ServicesDropdownAnonymous);
        $[12] = services;
        $[13] = visibleCount;
        $[14] = t4;
    } else {
        t4 = $[14];
    }
    let t5;
    if ($[15] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:hidden bg-white rounded-2xl shadow-lg overflow-hidden",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[15] = t4;
        $[16] = t5;
    } else {
        t5 = $[16];
    }
    let t6;
    if ($[17] !== isOpen || $[18] !== services.length || $[19] !== toggleDropdown) {
        t6 = services.length > 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center mt-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                onClick: toggleDropdown,
                className: "bg-[#005A8B]! border-[#005A8B]! py-2.5! px-6! gap-2 transition-all duration-300 hover:bg-[#004A7B]!",
                rounded: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: isOpen ? "Show Less" : "Show More"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                        lineNumber: 102,
                        columnNumber: 227
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: `pi ${isOpen ? "pi-chevron-up" : "pi-chevron-down"} transition-transform duration-300`
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                        lineNumber: 102,
                        columnNumber: 276
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                lineNumber: 102,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
            lineNumber: 102,
            columnNumber: 33
        }, this);
        $[17] = isOpen;
        $[18] = services.length;
        $[19] = toggleDropdown;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    let t7;
    if ($[21] !== t3 || $[22] !== t5 || $[23] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fadeUp",
            children: [
                t3,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[21] = t3;
        $[22] = t5;
        $[23] = t6;
        $[24] = t7;
    } else {
        t7 = $[24];
    }
    return t7;
}
_s(ServicesDropdown, "BL6WD9+6fckkF+zhguyTOVVek30=");
_c = ServicesDropdown;
function _ServicesDropdownAnonymous(service_0, index_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/services/${service_0.slug}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `flex items-center justify-between p-4 border-b border-gray-100 last:border-b-0 transition-all duration-200 active:bg-gray-50 ${index_0 === 0 ? "bg-[#005A8B] text-white" : "bg-white text-gray-800 hover:bg-gray-50"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `font-medium text-base ${index_0 === 0 ? "text-white" : "text-gray-800"}`,
                    children: service_0.title
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                    lineNumber: 123,
                    columnNumber: 307
                }, this),
                index_0 === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 rounded-full border-2 border-white flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "pi pi-arrow-right text-white text-sm"
                    }, void 0, false, {
                        fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                        lineNumber: 123,
                        columnNumber: 534
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/home/ServicesDropdown.tsx",
                    lineNumber: 123,
                    columnNumber: 441
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/ServicesDropdown.tsx",
            lineNumber: 123,
            columnNumber: 74
        }, this)
    }, service_0.slug, false, {
        fileName: "[project]/src/components/home/ServicesDropdown.tsx",
        lineNumber: 123,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "ServicesDropdown");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/services.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//\radical\src\data\services.ts
__turbopack_context__.s([
    "services",
    ()=>services
]);
const services = [
    {
        title: "Data Driven NEET Counselling",
        slug: "data-driven-neet-counselling",
        color: "bg-orange-100",
        text: "text-orange-500",
        icon: "/images/srvIco1.webp",
        description: "Advanced analytics-based counselling using real NEET data to ensure best outcomes."
    },
    {
        title: "Admission Counselling",
        slug: "admission-counselling",
        color: "bg-pink-100",
        text: "text-pink-500",
        icon: "/images/srvIco2.webp",
        description: "Personalized admission counselling to guide students through every step."
    },
    {
        title: "Expert Guidance",
        slug: "expert-guidance",
        color: "bg-blue-100",
        text: "text-blue-500",
        icon: "/images/srcIco3.webp",
        description: "Guidance from industry experts with years of experience."
    },
    {
        title: "Documentation Assistance",
        slug: "documentation-assistance",
        color: "bg-green-100",
        text: "text-green-500",
        icon: "/images/srvIco4.webp",
        description: "Complete documentation support for admissions and visas."
    },
    {
        title: "Career Counselling",
        slug: "career-counselling",
        color: "bg-purple-100",
        text: "text-purple-500",
        icon: "/images/srvIco5.webp",
        description: "Helping students choose the right career path."
    },
    {
        title: "Universities",
        slug: "universities",
        color: "bg-red-100",
        text: "text-red-500",
        icon: "/images/srvIco6.webp",
        description: "Explore top universities across India and abroad."
    },
    {
        title: "Notifications",
        slug: "notifications",
        color: "bg-teal-100",
        text: "text-teal-500",
        icon: "/images/srvIco7.webp",
        description: "Stay updated with important alerts and deadlines."
    },
    {
        title: "Study Abroad",
        slug: "study-abroad",
        color: "bg-indigo-100",
        text: "text-indigo-500",
        icon: "/images/srvIco8.webp",
        description: "End-to-end support for studying abroad."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/home/CourseCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CourseCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
//\src\components\home\CourseCard.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
;
;
function CourseCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "4ca9700e1413c33e76f2cbf971e3b6568aec0494bbcfeb33098ebccdd3303fc9") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4ca9700e1413c33e76f2cbf971e3b6568aec0494bbcfeb33098ebccdd3303fc9";
    }
    const { course } = t0;
    const t1 = `/courses/${course.slug}`;
    let t2;
    if ($[1] !== course.image || $[2] !== course.title) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            src: course.image,
            alt: course.title,
            width: 348,
            height: 394,
            className: "w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-300"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CourseCard.tsx",
            lineNumber: 24,
            columnNumber: 10
        }, this);
        $[1] = course.image;
        $[2] = course.title;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== course.title) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-xl font-semibold mb-2",
            children: course.title
        }, void 0, false, {
            fileName: "[project]/src/components/home/CourseCard.tsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = course.title;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== course.shortDesc) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm opacity-90 leading-relaxed",
            children: course.shortDesc
        }, void 0, false, {
            fileName: "[project]/src/components/home/CourseCard.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, this);
        $[6] = course.shortDesc;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "inline-flex items-center mt-3 text-sm font-medium",
            children: "Read More →"
        }, void 0, false, {
            fileName: "[project]/src/components/home/CourseCard.tsx",
            lineNumber: 49,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== t3 || $[10] !== t4) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute rounded-lg bottom-4 left-4 right-4 p-5 text-white bg-black/50 backdrop-blur-[10px]",
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/CourseCard.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] !== t2 || $[13] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative group rounded-xl overflow-hidden shadow-lg cursor-pointer",
            children: [
                t2,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/home/CourseCard.tsx",
            lineNumber: 65,
            columnNumber: 10
        }, this);
        $[12] = t2;
        $[13] = t6;
        $[14] = t7;
    } else {
        t7 = $[14];
    }
    let t8;
    if ($[15] !== t1 || $[16] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: t1,
            children: t7
        }, void 0, false, {
            fileName: "[project]/src/components/home/CourseCard.tsx",
            lineNumber: 74,
            columnNumber: 10
        }, this);
        $[15] = t1;
        $[16] = t7;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    return t8;
}
_c = CourseCard;
var _c;
__turbopack_context__.k.register(_c, "CourseCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/courses.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

//\src\data\courses.ts
__turbopack_context__.s([
    "courses",
    ()=>courses
]);
const courses = [
    {
        slug: 'mbbs',
        title: 'MBBS',
        shortDesc: 'Among the most trusted and affordable pathways for aspiring doctors.',
        fullDesc: 'MBBS is a globally recognized medical degree offering strong theoretical foundations, clinical exposure, and excellent career opportunities in healthcare sectors worldwide.',
        image: '/images/courseCard1.webp'
    },
    {
        slug: 'bds',
        title: 'BDS',
        shortDesc: 'A respected and financially comfortable pathway for dental professionals.',
        fullDesc: 'BDS focuses on dental sciences, clinical dentistry, and patient care with global exposure and promising career growth.',
        image: '/images/courseCard2.webp'
    },
    {
        slug: 'ayush',
        title: 'AYUSH',
        shortDesc: 'A holistic and respected path for students interested in traditional medicine.',
        fullDesc: 'AYUSH covers Ayurveda, Yoga, Unani, Siddha, and Homeopathy with strong foundations in alternative healthcare systems.',
        image: '/images/courseCard3.webp'
    },
    {
        slug: 'md-ms-dnb',
        title: 'MD / MS / DNB',
        shortDesc: 'A highly rewarding postgraduate option for advanced clinical training.',
        fullDesc: 'MD/MS/DNB programs provide specialization, advanced clinical exposure, and high professional recognition.',
        image: '/images/courseCard4.webp'
    },
    {
        slug: 'mbbs-abroad',
        title: 'MBBS Abroad',
        shortDesc: 'Globally recognized medical education with modern technology.',
        fullDesc: 'MBBS Abroad offers affordable tuition, international exposure, and high-quality medical training.',
        image: '/images/courseCard5.webp'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/GoogleReviews.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/skeleton/skeleton.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ---------------- DEMO DATA ---------------- */ const DEMO_DATA = {
    name: "Radical Education | RDLEDU Pvt Ltd",
    rating: 4.9,
    user_ratings_total: 69,
    reviews: [
        {
            author_name: "Farzan Danish",
            profile_photo_url: "https://i.pravatar.cc/150?img=3",
            rating: 5,
            text: "Krystal Covington is a business growth strategist with 15 years of experience in marketing and public relations.",
            time: 1712121600
        },
        {
            author_name: "Aman Sharma",
            profile_photo_url: "https://i.pravatar.cc/150?img=5",
            rating: 5,
            text: "Excellent guidance and transparent counselling process. Highly recommended for MBBS abroad.",
            time: 1712035200
        },
        {
            author_name: "Neha Verma",
            profile_photo_url: "https://i.pravatar.cc/150?img=8",
            rating: 4,
            text: "Professional team with great support throughout the admission process.",
            time: 1711948800
        }
    ]
};
function GoogleReviews() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "dd0be02fe8da48e3db4a839d97ec97ec92fea98c5c994625f0c3e2f20c4129a8") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "dd0be02fe8da48e3db4a839d97ec97ec92fea98c5c994625f0c3e2f20c4129a8";
    }
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "GoogleReviews[useEffect()]": ()=>{
                const timer = setTimeout({
                    "GoogleReviews[useEffect() > setTimeout()]": ()=>{
                        setData(DEMO_DATA);
                        setLoading(false);
                    }
                }["GoogleReviews[useEffect() > setTimeout()]"], 2000);
                return ()=>clearTimeout(timer);
            }
        })["GoogleReviews[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== data || $[4] !== loading) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        height: "1.8rem",
                        width: "90%"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GoogleReviews.tsx",
                        lineNumber: 68,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        height: "1rem",
                        width: "70%",
                        className: "mt-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GoogleReviews.tsx",
                        lineNumber: 68,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        height: "2.5rem",
                        width: "150px",
                        className: "mt-5 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GoogleReviews.tsx",
                        lineNumber: 68,
                        columnNumber: 123
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[60px] w-[65px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/favicon.webp",
                                        width: 60,
                                        height: 65,
                                        className: "w-full h-full",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GoogleReviews.tsx",
                                        lineNumber: 68,
                                        columnNumber: 284
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/GoogleReviews.tsx",
                                    lineNumber: 68,
                                    columnNumber: 249
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 68,
                                columnNumber: 244
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold text-[#005A8B] m-0",
                                children: data?.name
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 68,
                                columnNumber: 388
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GoogleReviews.tsx",
                        lineNumber: 68,
                        columnNumber: 203
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 mt-2 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-orange-400",
                                children: "\u2605\u2605\u2605\u2605\u2605".slice(0, Math.round(data.rating))
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 68,
                                columnNumber: 520
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-gray-600",
                                children: [
                                    data?.user_ratings_total,
                                    " Google Reviews"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 68,
                                columnNumber: 627
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/GoogleReviews.tsx",
                        lineNumber: 68,
                        columnNumber: 469
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        rounded: true,
                        size: "small",
                        className: "bg-[#005A8B]! border-[#005A8B]!",
                        children: "Write a Review"
                    }, void 0, false, {
                        fileName: "[project]/src/components/GoogleReviews.tsx",
                        lineNumber: 68,
                        columnNumber: 721
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/src/components/GoogleReviews.tsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[3] = data;
        $[4] = loading;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    let t3;
    if ($[6] !== data?.reviews || $[7] !== loading) {
        t3 = (loading ? Array(3).fill(null) : data?.reviews)?.map({
            "GoogleReviews[(anonymous)()]": (review, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border rounded-xl p-5 shadow-sm bg-white",
                    children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                        shape: "circle",
                                        size: "40px"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GoogleReviews.tsx",
                                        lineNumber: 78,
                                        columnNumber: 179
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                width: "70%",
                                                height: "0.9rem"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                                lineNumber: 78,
                                                columnNumber: 242
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                                width: "40%",
                                                height: "0.7rem",
                                                className: "mt-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                                lineNumber: 78,
                                                columnNumber: 282
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GoogleReviews.tsx",
                                        lineNumber: 78,
                                        columnNumber: 218
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 78,
                                columnNumber: 133
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                width: "60%",
                                height: "0.8rem",
                                className: "mb-2"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 78,
                                columnNumber: 351
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                                height: "3rem"
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 78,
                                columnNumber: 408
                            }, this)
                        ]
                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: review.profile_photo_url,
                                        alt: review.author_name,
                                        width: 40,
                                        height: 40,
                                        className: "rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/GoogleReviews.tsx",
                                        lineNumber: 78,
                                        columnNumber: 488
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-medium",
                                                children: review.author_name
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                                lineNumber: 78,
                                                columnNumber: 606
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-500",
                                                children: new Date(review.time * 1000).toLocaleDateString()
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                                lineNumber: 78,
                                                columnNumber: 665
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/GoogleReviews.tsx",
                                        lineNumber: 78,
                                        columnNumber: 601
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 78,
                                columnNumber: 442
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-orange-400 mb-2",
                                children: "\u2605\u2605\u2605\u2605\u2605".slice(0, review.rating)
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 78,
                                columnNumber: 769
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 line-clamp-4",
                                children: review.text
                            }, void 0, false, {
                                fileName: "[project]/src/components/GoogleReviews.tsx",
                                lineNumber: 78,
                                columnNumber: 871
                            }, this)
                        ]
                    }, void 0, true)
                }, i, false, {
                    fileName: "[project]/src/components/GoogleReviews.tsx",
                    lineNumber: 78,
                    columnNumber: 54
                }, this)
        }["GoogleReviews[(anonymous)()]"]);
        $[6] = data?.reviews;
        $[7] = loading;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    let t4;
    if ($[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/GoogleReviews.tsx",
            lineNumber: 88,
            columnNumber: 10
        }, this);
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t2 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-4 gap-8",
            children: [
                t2,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/GoogleReviews.tsx",
            lineNumber: 96,
            columnNumber: 10
        }, this);
        $[11] = t2;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
}
_s(GoogleReviews, "EqmXxTNe6/Onm1/o8y2B4tS3LuE=");
_c = GoogleReviews;
var _c;
__turbopack_context__.k.register(_c, "GoogleReviews");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/TestimonialSlider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TestimonialSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
'use client';
;
;
;
;
;
;
const testimonials = [
    {
        name: "Mishthi Tiwari",
        subtitle: "BAMS - Quadra Institute Of Ayurveda, Roorkee",
        content: "Radical Education’s counseling was amazing! They gave me the right study tips, helped with time management, and kept me motivated. I’m now in my dream medical college!",
        image: "/images/testi1.webp"
    },
    {
        name: "Astha Bhatnagar",
        subtitle: "BAMS - DY Patil, Navi Mumbai",
        content: "Radical Education Review is the best educational guide. With their expert advice, I secured admission to a medical college. Highly recommend them for MBBS admission and MCC counselling.",
        image: "/images/testi2.webp"
    },
    {
        name: "Aishwarya Singh",
        subtitle: "BAMS - Uttaranchal Ayurvedic College, Uttarakhand",
        content: "Team Radical Education provided unmatched clarity at every step. With their best counselors, I successfully got admission to a BAMS college in Uttarakhand.",
        image: "/images/testi3.webp"
    },
    {
        name: "Harsh Kumar",
        subtitle: "BAMS - Satya Ayurvedic Medical College, Haryana",
        content: "They helped me through every step of my NEET counseling and admission process. Clear guidance and professional support helped me save my year.",
        image: "/images/testi4.webp"
    },
    {
        name: "Praveen",
        subtitle: "BAMS - Kaya Ayurvedic College, Nainital",
        content: "The team handled registration, choice filling, and documentation during counseling. Their support helped me secure admission and save my academic year.",
        image: "/images/testi5.webp"
    },
    {
        name: "Zoha Azeem",
        subtitle: "BAMS - JSPS Govt Homoeopathic Medical College, Hyderabad",
        content: "Raj Kishore sir helped me at every step of the counseling procedure. He cleared all my doubts and ensured my admission was secured successfully.",
        image: "/images/testi6.webp"
    },
    {
        name: "Prerna",
        subtitle: "BDS - SGT Dental College, Gurugram",
        content: "Radical Education’s expert counselors helped me explore my career options and choose the right path. Their advice made a huge impact.",
        image: "/images/testi7.webp"
    },
    {
        name: "Sheetal Kumari",
        subtitle: "BHMS - NSS Homoeopathic Medical College, Kerala",
        content: "Radical Education provided me with the right resources and motivation. Because of them, I got into my preferred medical college.",
        image: "/images/testi8.webp"
    },
    {
        name: "Anshul",
        subtitle: "MBBS - Rama Medical College, Hapur",
        content: "With Amar sir and his team’s support, I successfully secured an MBBS seat. I highly recommend NEET students connect with Radical Education.",
        image: "/images/testi9.webp"
    },
    {
        name: "Dhruvika Aggarwal",
        subtitle: "MBBS - Rama Medical College, Hapur",
        content: "Their detailed counseling on career options, study strategies, and mental well-being made all the difference during NEET preparation.",
        image: "/images/testi10.webp"
    },
    {
        name: "Abhay Raj Singh",
        subtitle: "MBBS - Integral Medical College, Lucknow",
        content: "Thanks to Radical Education’s guidance, I successfully got admission to a medical college. Highly trusted and effective counseling team.",
        image: "/images/testi11.webp"
    },
    {
        name: "Ansh Sharma",
        subtitle: "MBBS - Venkateshwara Medical College, Amroha",
        content: "Radical Education Review guided me through the complex admission process. Their team is highly professional and reliable.",
        image: "/images/testi12.webp"
    },
    {
        name: "Ronit Roy",
        subtitle: "MBBS - Rama Medical College, Hapur",
        content: "Radical Education’s expert mentorship guided me every step of the way. I’m proud to be a medical student today.",
        image: "/images/testi13.webp"
    },
    {
        name: "Shreya Parmar",
        subtitle: "MBBS - JNU Institute of Medical Sciences, Jaipur",
        content: "Alok sir and the team handled all my admission procedures and queries. Their support helped me secure admission despite low marks.",
        image: "/images/testi14.webp"
    },
    {
        name: "Om Chaturvedi",
        subtitle: "MBBS - Sudha Medical College, Kota",
        content: "This was my first NEET attempt and I had no idea about counseling. Amar sir and Shivanshu sir supported me throughout the process.",
        image: "/images/testi15.webp"
    },
    {
        name: "Arjun Kaushal",
        subtitle: "MBBS - Raja Rajeswari Medical College",
        content: "Alok sir guided me through counseling, documentation, and reporting. His support was extremely helpful for me and my parents.",
        image: "/images/testi16.webp"
    },
    {
        name: "Vipin Kumar",
        subtitle: "MBBS - Pacific Medical College, Udaipur",
        content: "Radical Education’s counseling helped me turn my passion into a career. Their professional advice gave me clarity and confidence.",
        image: "/images/testi17.webp"
    },
    {
        name: "Mishty Gautam",
        subtitle: "MBBS - Pacific Medical College, Udaipur",
        content: "Radical Education’s counselors offered insightful advice that helped me choose the right career path in medicine.",
        image: "/images/testi18.webp"
    },
    {
        name: "Annie Attri",
        subtitle: "MBBS - Pacific Medical College, Udaipur",
        content: "Alok sir guided us with all possible options as per my NEET score. Their team handled everything from registration to reporting.",
        image: "/images/testi19.webp"
    },
    {
        name: "Tushar Arora",
        subtitle: "MBBS - Pacific Medical College, Udaipur",
        content: "Radical Education’s counselors provided the best advice and motivation. Their support helped me secure my place in medical college.",
        image: "/images/testi20.webp"
    }
];
function TestimonialSlider() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "32d91f65c06b1ff7aced888c19d76a246669dd02b34d6e96b88c95ebd31f0f8f") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "32d91f65c06b1ff7aced888c19d76a246669dd02b34d6e96b88c95ebd31f0f8f";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
        ];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            delay: 4000,
            disableOnInteraction: false
        };
        t2 = {
            nextEl: ".testimonial-next",
            prevEl: ".testimonial-prev"
        };
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = testimonials.map(_TestimonialSliderTestimonialsMap);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                modules: t0,
                slidesPerView: 1,
                loop: true,
                autoplay: t1,
                navigation: t2,
                className: "relative",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 right-0 flex gap-3 md:mt-10 z-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cursor-pointer testimonial-prev w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition",
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestimonialSlider.tsx",
                                lineNumber: 150,
                                columnNumber: 209
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "cursor-pointer testimonial-next w-10 h-10 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition",
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/src/components/TestimonialSlider.tsx",
                                lineNumber: 150,
                                columnNumber: 393
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/TestimonialSlider.tsx",
                        lineNumber: 150,
                        columnNumber: 142
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/TestimonialSlider.tsx",
                lineNumber: 150,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/TestimonialSlider.tsx",
            lineNumber: 150,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    return t4;
}
_c = TestimonialSlider;
function _TestimonialSliderTestimonialsMap(item, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg leading-relaxed italic mb-6 md:min-h-auto min-h-[185px]",
                    children: [
                        "“",
                        item.content,
                        "”"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestimonialSlider.tsx",
                    lineNumber: 158,
                    columnNumber: 40
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-1 h-12 bg-emerald-400"
                        }, void 0, false, {
                            fileName: "[project]/src/components/TestimonialSlider.tsx",
                            lineNumber: 158,
                            columnNumber: 180
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-semibold",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialSlider.tsx",
                                    lineNumber: 158,
                                    columnNumber: 229
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-300 md:min-h-auto min-h-[40px]",
                                    children: item.subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/components/TestimonialSlider.tsx",
                                    lineNumber: 158,
                                    columnNumber: 273
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/TestimonialSlider.tsx",
                            lineNumber: 158,
                            columnNumber: 224
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/TestimonialSlider.tsx",
                    lineNumber: 158,
                    columnNumber: 139
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex mt-6",
                    children: [
                        1,
                        2,
                        3
                    ].map({
                        "TestimonialSlider[testimonials.map() > (anonymous)()]": (_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: item.image,
                                alt: item.name,
                                className: "w-10 h-10 rounded-full border-2 border-black -ml-3 first:ml-0 object-cover"
                            }, i, false, {
                                fileName: "[project]/src/components/TestimonialSlider.tsx",
                                lineNumber: 159,
                                columnNumber: 78
                            }, this)
                    }["TestimonialSlider[testimonials.map() > (anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/src/components/TestimonialSlider.tsx",
                    lineNumber: 158,
                    columnNumber: 368
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/TestimonialSlider.tsx",
            lineNumber: 158,
            columnNumber: 35
        }, this)
    }, index, false, {
        fileName: "[project]/src/components/TestimonialSlider.tsx",
        lineNumber: 158,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TestimonialSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/CounselorForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CounselorForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/toast/toast.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/inputtext/inputtext.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dropdown$2f$dropdown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/dropdown/dropdown.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function CounselorForm() {
    _s();
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        mobile: '',
        course: '',
        state: ''
    });
    const courseOptions = [
        {
            label: 'MBBS INDIA',
            value: 'MBBS INDIA'
        },
        {
            label: 'MBBS ABROAD',
            value: 'MBBS ABROAD'
        },
        {
            label: 'BDS INDIA',
            value: 'BDS INDIA'
        },
        {
            label: 'AYUSH INDIA',
            value: 'AYUSH INDIA'
        },
        {
            label: 'MD/MS/DNB',
            value: 'MD/MS/DNB'
        },
        {
            label: 'MBA',
            value: 'MBA'
        },
        {
            label: 'PGDM',
            value: 'PGDM'
        },
        {
            label: 'B.TECH',
            value: 'B.TECH'
        },
        {
            label: 'M.TECH',
            value: 'M.TECH'
        },
        {
            label: 'OTHERS',
            value: 'OTHERS'
        }
    ];
    const stateOptions = [
        {
            label: 'Andhra Pradesh',
            value: 'Andhra Pradesh'
        },
        {
            label: 'Arunachal Pradesh',
            value: 'Arunachal Pradesh'
        },
        {
            label: 'Assam',
            value: 'Assam'
        },
        {
            label: 'Bihar',
            value: 'Bihar'
        },
        {
            label: 'Chhattisgarh',
            value: 'Chhattisgarh'
        },
        {
            label: 'Goa',
            value: 'Goa'
        },
        {
            label: 'Gujarat',
            value: 'Gujarat'
        },
        {
            label: 'Haryana',
            value: 'Haryana'
        },
        {
            label: 'Himachal Pradesh',
            value: 'Himachal Pradesh'
        },
        {
            label: 'Jharkhand',
            value: 'Jharkhand'
        },
        {
            label: 'Karnataka',
            value: 'Karnataka'
        },
        {
            label: 'Kerala',
            value: 'Kerala'
        },
        {
            label: 'Madhya Pradesh',
            value: 'Madhya Pradesh'
        },
        {
            label: 'Maharashtra',
            value: 'Maharashtra'
        },
        {
            label: 'Manipur',
            value: 'Manipur'
        },
        {
            label: 'Meghalaya',
            value: 'Meghalaya'
        },
        {
            label: 'Mizoram',
            value: 'Mizoram'
        },
        {
            label: 'Nagaland',
            value: 'Nagaland'
        },
        {
            label: 'Odisha',
            value: 'Odisha'
        },
        {
            label: 'Punjab',
            value: 'Punjab'
        },
        {
            label: 'Rajasthan',
            value: 'Rajasthan'
        },
        {
            label: 'Sikkim',
            value: 'Sikkim'
        },
        {
            label: 'Tamil Nadu',
            value: 'Tamil Nadu'
        },
        {
            label: 'Telangana',
            value: 'Telangana'
        },
        {
            label: 'Tripura',
            value: 'Tripura'
        },
        {
            label: 'Uttar Pradesh',
            value: 'Uttar Pradesh'
        },
        {
            label: 'Uttarakhand',
            value: 'Uttarakhand'
        },
        {
            label: 'West Bengal',
            value: 'West Bengal'
        },
        {
            label: 'Andaman and Nicobar Islands',
            value: 'Andaman and Nicobar Islands'
        },
        {
            label: 'Chandigarh',
            value: 'Chandigarh'
        },
        {
            label: 'Dadra and Nagar Haveli and Daman and Diu',
            value: 'Dadra and Nagar Haveli and Daman and Diu'
        },
        {
            label: 'Delhi',
            value: 'Delhi'
        },
        {
            label: 'Jammu and Kashmir',
            value: 'Jammu and Kashmir'
        },
        {
            label: 'Ladakh',
            value: 'Ladakh'
        },
        {
            label: 'Lakshadweep',
            value: 'Lakshadweep'
        },
        {
            label: 'Puducherry',
            value: 'Puducherry'
        }
    ];
    const showError = (msg)=>{
        toast.current?.show({
            severity: 'error',
            summary: 'Validation Error',
            detail: msg,
            life: 3000
        });
    };
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async ()=>{
        if (!form.name.trim()) return showError('Name is required');
        if (!form.email.trim()) return showError('Email is required');
        if (!form.mobile.trim()) return showError('Mobile number is required');
        if (!/^\d{10}$/.test(form.mobile)) {
            return showError('Mobile number must be exactly 10 digits');
        }
        if (!form.course) {
            return showError('Please select a course');
        }
        if (!form.state) {
            return showError('Please select a state');
        }
        setLoading(true);
        try {
            const response = await fetch('/api/counselor-enquiry', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(form)
            });
            const result = await response.json();
            if (result.success) {
                toast.current?.show({
                    severity: 'success',
                    summary: 'Enquiry Submitted',
                    detail: result.message || 'We will contact you shortly',
                    life: 3000
                });
                setForm({
                    name: '',
                    email: '',
                    mobile: '',
                    course: '',
                    state: ''
                });
                setVisible(false);
            } else {
                showError(result.message || 'Failed to submit enquiry');
            }
        } catch (error) {
            showError('Network error. Please try again later.');
            console.error('Submission error:', error);
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
                ref: toast
            }, void 0, false, {
                fileName: "[project]/src/components/CounselorForm.tsx",
                lineNumber: 216,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-3 sm:space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-inputgroup flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-inputgroup-addon bg-white! border-r-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "pi pi-user"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CounselorForm.tsx",
                                    lineNumber: 221,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 220,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-float-label flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                        id: "name",
                                        value: form.name,
                                        onChange: (e)=>setForm({
                                                ...form,
                                                name: e.target.value
                                            }),
                                        className: "w-full border-l-0! pl-0!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 224,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "name",
                                        className: "text-sm",
                                        children: "Full Name*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 228,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 223,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CounselorForm.tsx",
                        lineNumber: 219,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-inputgroup flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-inputgroup-addon bg-white! border-r-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "pi pi-envelope"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CounselorForm.tsx",
                                    lineNumber: 237,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 236,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-float-label flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                        id: "email",
                                        value: form.email,
                                        onChange: (e_0)=>setForm({
                                                ...form,
                                                email: e_0.target.value
                                            }),
                                        className: "w-full border-l-0! pl-0!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 240,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "email",
                                        className: "text-sm",
                                        children: "Email Address*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 244,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 239,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CounselorForm.tsx",
                        lineNumber: 235,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-inputgroup flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-inputgroup-addon bg-white! border-r-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "pi pi-phone"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CounselorForm.tsx",
                                    lineNumber: 253,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 252,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-float-label flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
                                        id: "mobile",
                                        value: form.mobile,
                                        keyfilter: "int",
                                        maxLength: 10,
                                        onChange: (e_1)=>setForm({
                                                ...form,
                                                mobile: e_1.target.value.replace(/\D/g, '')
                                            }),
                                        className: "w-full border-l-0!",
                                        style: {
                                            paddingLeft: 0
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 256,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "mobile",
                                        className: "text-sm",
                                        children: "Mobile Number*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 262,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 255,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CounselorForm.tsx",
                        lineNumber: 251,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-inputgroup flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-inputgroup-addon bg-white! border-r-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "pi pi-book"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CounselorForm.tsx",
                                    lineNumber: 271,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 270,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-float-label w-full flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dropdown$2f$dropdown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                                        id: "course",
                                        value: form.course,
                                        options: courseOptions,
                                        onChange: (e_2)=>setForm({
                                                ...form,
                                                course: e_2.value
                                            }),
                                        className: "w-full border-l-0!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 274,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "course",
                                        className: "text-sm",
                                        children: "Select Course*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 278,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 273,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CounselorForm.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-inputgroup flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-inputgroup-addon bg-white! border-r-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "pi pi-map"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/CounselorForm.tsx",
                                    lineNumber: 287,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "p-float-label w-full flex-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dropdown$2f$dropdown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
                                        id: "state",
                                        value: form.state,
                                        options: stateOptions,
                                        onChange: (e_3)=>setForm({
                                                ...form,
                                                state: e_3.value
                                            }),
                                        className: "w-full border-l-0!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 290,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        htmlFor: "state",
                                        className: "text-sm",
                                        children: "Select State*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/CounselorForm.tsx",
                                        lineNumber: 294,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 289,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CounselorForm.tsx",
                        lineNumber: 285,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                id: "consent",
                                className: "mt-1"
                            }, void 0, false, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 300,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "consent",
                                className: "text-sm text-white",
                                children: "I consent to receiving Calls, WhatsApp, Email and Google RCS from Edwise to assist with this enquiry."
                            }, void 0, false, {
                                fileName: "[project]/src/components/CounselorForm.tsx",
                                lineNumber: 301,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/CounselorForm.tsx",
                        lineNumber: 299,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            label: "SUBMIT",
                            icon: "pi pi-arrow-right",
                            iconPos: "right",
                            className: "w-full bg-gradient-to-l! from-[#0077BF]! to-[#00CFB2]! border-0!",
                            onClick: handleSubmit,
                            loading: loading
                        }, void 0, false, {
                            fileName: "[project]/src/components/CounselorForm.tsx",
                            lineNumber: 308,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/CounselorForm.tsx",
                        lineNumber: 307,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/CounselorForm.tsx",
                lineNumber: 217,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(CounselorForm, "MiGllA9VrXyluP4qxeqPnzPVjxs=");
_c = CounselorForm;
var _c;
__turbopack_context__.k.register(_c, "CounselorForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Earth3D.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Earth3D
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function Earth3D() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "ac10d02a57a8021ece33b4023190647c5890ceee354c5a7bbf0ec6fac6c04203") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ac10d02a57a8021ece33b4023190647c5890ceee354c5a7bbf0ec6fac6c04203";
    }
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const initializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "Earth3D[useEffect()]": ()=>{
                if (!containerRef.current || initializedRef.current) {
                    return;
                }
                initializedRef.current = true;
                const container = containerRef.current;
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](45, 1, 0.1, 1000);
                camera.position.z = 3;
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    antialias: true,
                    alpha: true
                });
                container.appendChild(renderer.domElement);
                const resizeRenderer = function resizeRenderer() {
                    const width = container.clientWidth;
                    const height = container.clientHeight;
                    camera.aspect = width / height;
                    camera.updateProjectionMatrix();
                    renderer.setSize(width, height);
                };
                resizeRenderer();
                scene.add(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AmbientLight"](16777215, 1));
                const light = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DirectionalLight"](16777215, 0.8);
                light.position.set(5, 3, 5);
                scene.add(light);
                const earthTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]().load("/images/worldMap.webp");
                const earth = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](1, 64, 64), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshPhongMaterial"]({
                    map: earthTexture
                }));
                scene.add(earth);
                const latLon = function latLon(lat, lon, t2) {
                    const radius = t2 === undefined ? 1 : t2;
                    const phi = (90 - lat) * Math.PI / 180;
                    const theta = (lon + 180) * Math.PI / 180;
                    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](-(radius * Math.sin(phi) * Math.cos(theta)), radius * Math.cos(phi), radius * Math.sin(phi) * Math.sin(theta));
                };
                const iconTexture = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]().load("/images/mapIcon.svg");
                const createPin = function createPin(position) {
                    const group = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"]();
                    const head = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SphereGeometry"](0.035, 16, 16), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: 16726843
                    }));
                    const stem = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CylinderGeometry"](0.01, 0.01, 0.08, 8), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MeshBasicMaterial"]({
                        color: 16726843
                    }));
                    stem.position.y = -0.06;
                    const iconMaterial = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                        map: iconTexture,
                        transparent: true
                    });
                    const icon = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](iconMaterial);
                    icon.scale.set(0.1, 0.1, 1);
                    icon.position.y = 0.1;
                    group.add(head);
                    group.add(stem);
                    group.add(icon);
                    group.position.copy(position.clone().normalize().multiplyScalar(1.02));
                    group.lookAt(position.clone().multiplyScalar(2));
                    return group;
                };
                const countries = [
                    {
                        name: "Russia",
                        lat: 61,
                        lon: 105,
                        colleges: 120,
                        flag: "/images/ru.webp"
                    },
                    {
                        name: "Georgia",
                        lat: 42,
                        lon: 43,
                        colleges: 18,
                        flag: "/images/ge.webp"
                    },
                    {
                        name: "Uzbekistan",
                        lat: 41,
                        lon: 64,
                        colleges: 35,
                        flag: "/images/uz.webp"
                    },
                    {
                        name: "Singapore",
                        lat: 1.3,
                        lon: 103.8,
                        colleges: 22,
                        flag: "/images/sg.webp"
                    }
                ];
                const labels = [];
                countries.forEach({
                    "Earth3D[useEffect() > countries.forEach()]": (c)=>{
                        const pos = latLon(c.lat, c.lon);
                        const pin = createPin(pos);
                        earth.add(pin);
                        const label = document.createElement("div");
                        label.className = "label";
                        label.innerHTML = `
        <div class="country">
          <div><img src="${c.flag}" /></div>
          <div>
            <div class="cName">${c.name}</div>
            <div class="college">Colleges: ${c.colleges}</div>
          </div>
        </div>
      `;
                        container.appendChild(label);
                        labels.push({
                            label,
                            pin
                        });
                    }
                }["Earth3D[useEffect() > countries.forEach()]"]);
                earth.rotation.y = -105 * Math.PI / 180;
                let isDragging = false;
                let lastX = 0;
                let rotationVelocity = 0;
                const startDrag = function startDrag(x) {
                    isDragging = true;
                    lastX = x;
                };
                const drag = function drag(x_0) {
                    if (!isDragging) {
                        return;
                    }
                    const delta = x_0 - lastX;
                    rotationVelocity = delta * 0.005;
                    earth.rotation.y = earth.rotation.y + rotationVelocity;
                    lastX = x_0;
                };
                const endDrag = function endDrag() {
                    isDragging = false;
                };
                const dom = renderer.domElement;
                dom.addEventListener("mousedown", {
                    "Earth3D[useEffect() > dom.addEventListener()]": (e)=>startDrag(e.clientX)
                }["Earth3D[useEffect() > dom.addEventListener()]"]);
                dom.addEventListener("mousemove", {
                    "Earth3D[useEffect() > dom.addEventListener()]": (e_0)=>drag(e_0.clientX)
                }["Earth3D[useEffect() > dom.addEventListener()]"]);
                dom.addEventListener("mouseup", endDrag);
                dom.addEventListener("mouseleave", endDrag);
                dom.addEventListener("touchstart", {
                    "Earth3D[useEffect() > dom.addEventListener()]": (e_1)=>startDrag(e_1.touches[0].clientX)
                }["Earth3D[useEffect() > dom.addEventListener()]"]);
                dom.addEventListener("touchmove", {
                    "Earth3D[useEffect() > dom.addEventListener()]": (e_2)=>drag(e_2.touches[0].clientX)
                }["Earth3D[useEffect() > dom.addEventListener()]"]);
                dom.addEventListener("touchend", endDrag);
                dom.style.cursor = "grab";
                dom.addEventListener("mousedown", {
                    "Earth3D[useEffect() > dom.addEventListener()]": ()=>dom.style.cursor = "grabbing"
                }["Earth3D[useEffect() > dom.addEventListener()]"]);
                dom.addEventListener("mouseup", {
                    "Earth3D[useEffect() > dom.addEventListener()]": ()=>dom.style.cursor = "grab"
                }["Earth3D[useEffect() > dom.addEventListener()]"]);
                dom.addEventListener("mouseleave", {
                    "Earth3D[useEffect() > dom.addEventListener()]": ()=>dom.style.cursor = "grab"
                }["Earth3D[useEffect() > dom.addEventListener()]"]);
                function animate() {
                    requestAnimationFrame(animate);
                    if (!isDragging) {
                        earth.rotation.y = earth.rotation.y + 0.002;
                        rotationVelocity = rotationVelocity * 0.95;
                        rotationVelocity;
                        earth.rotation.y = earth.rotation.y + rotationVelocity;
                    }
                    labels.forEach({
                        "Earth3D[useEffect() > animate > labels.forEach()]": (l)=>{
                            const worldPos = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
                            l.pin.getWorldPosition(worldPos);
                            const cameraDir = camera.position.clone().normalize();
                            const markerDir = worldPos.clone().normalize();
                            const visible = markerDir.dot(cameraDir) > 0;
                            if (visible) {
                                const screenPos = worldPos.project(camera);
                                l.label.style.display = "block";
                                l.label.style.left = (screenPos.x * 0.5 + 0.5) * container.clientWidth + "px";
                                l.label.style.top = (-screenPos.y * 0.5 + 0.5) * container.clientHeight + "px";
                            } else {
                                l.label.style.display = "none";
                            }
                        }
                    }["Earth3D[useEffect() > animate > labels.forEach()]"]);
                    renderer.render(scene, camera);
                }
                animate();
                window.addEventListener("resize", resizeRenderer);
                return ()=>{
                    window.removeEventListener("resize", resizeRenderer);
                    labels.forEach(_Earth3DUseEffectAnonymousLabelsForEach);
                    renderer.dispose();
                    dom.remove();
                    initializedRef.current = false;
                };
            }
        })["Earth3D[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: containerRef,
            className: "glob3d h-[50vh]! md:h-[100vh]!",
            style: {
                width: "100%",
                position: "relative"
            }
        }, void 0, false, {
            fileName: "[project]/src/components/Earth3D.tsx",
            lineNumber: 224,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(Earth3D, "7J4Eh3J0M3z8VJxvmcXz5yL2zsQ=");
_c = Earth3D;
function _Earth3DUseEffectAnonymousLabelsForEach(l_0) {
    return l_0.label.remove();
}
var _c;
__turbopack_context__.k.register(_c, "Earth3D");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$autocomplete$2f$autocomplete$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/autocomplete/autocomplete.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingWhatsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FloatingWhatsApp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/NewsMarquee.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$StatsCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/StatsCounter.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServicesDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/ServicesDropdown.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/services.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/home/CourseCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/courses.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/GoogleReviews.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/TestimonialSlider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CounselorForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CounselorForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Earth3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Earth3D.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Home() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "fdb6cda8de9d1ff25ca6a3a8efab7a1384a679e9d7f39771d38c542403f557d0") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fdb6cda8de9d1ff25ca6a3a8efab7a1384a679e9d7f39771d38c542403f557d0";
    }
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "Home[search]": (event)=>{
                setItems([
                    ...Array(10).keys()
                ].map({
                    "Home[search > (anonymous)()]": (item)=>event.query + "-" + item
                }["Home[search > (anonymous)()]"]));
            }
        })["Home[search]"];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const search = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            {
                id: 1,
                title: "Successful Admission",
                youtubeId: "dQw4w9WgXcQ"
            },
            {
                id: 2,
                title: "Ishika's Govt. MBBS Seat Journey",
                youtubeId: "9bZkp7q19f0"
            },
            {
                id: 3,
                title: "Successful Admission",
                youtubeId: "3JZ_D3ELwOQ"
            }
        ];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const videos = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-[rgba(0,0,0,0.3)] -z-[1]"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            className: "w-full absolute inset-0 -z-[2] h-full object-cover object-center",
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            suppressHydrationWarning: true,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                    src: "/videos/9659303-hd_1280_720_50fps.mp4",
                    type: "video/mp4"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 80,
                    columnNumber: 186
                }, this),
                "Your browser does not support the video tag."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 80,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-white font-bold text-4xl md:text-[50px] leading-10 md:leading-15 md:mb-5 mb-3 fadeUp",
            children: [
                "Secure Your Medical Seat With ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                    className: "hidden lg:block"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 87,
                    columnNumber: 146
                }, this),
                "Expert Assistance"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 87,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-lg lg:px-16 px-3 md:mb-8 mb-6 fadeUp",
            children: [
                "Get complete guidance, accurate information, and counseling ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                    className: "hidden lg:block"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 94,
                    columnNumber: 129
                }, this),
                "suited to you and your dreams."
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "p-inputgroup-addon pr-0! border-r-0! bg-white! shadow-none! border-[#fff]!",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "pi pi-search"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 101,
                columnNumber: 103
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 101,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "Home[<AutoComplete>.onChange]": (e)=>setValue(e.value)
        })["Home[<AutoComplete>.onChange]"];
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] !== items || $[11] !== value) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$autocomplete$2f$autocomplete$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AutoComplete"], {
            placeholder: "Search your college",
            className: "pl-0! border-l-0! shadow-none! border-[#fff]!",
            value: value,
            suggestions: items,
            completeMethod: search,
            onChange: t8
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 117,
            columnNumber: 10
        }, this);
        $[10] = items;
        $[11] = value;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            label: "Search",
            className: "bannersrchBtn bg-[#005A8B]! border-[#005A8B]! shadow-none!"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    let t11;
    if ($[14] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pt-[80] md:pt-[150px] pb-20 md:pb-30 relative z-2 overflow-hidden",
            children: [
                t3,
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container px-3 md:px-4 lg:px-40 text-center text-white",
                    children: [
                        t5,
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-inputgroup bannersrch mx-auto lg:max-w-[580px] fadeUp",
                            children: [
                                t7,
                                t9,
                                t10
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 133,
                            columnNumber: 186
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 133,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 133,
            columnNumber: 11
        }, this);
        $[14] = t9;
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FloatingWhatsApp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$NewsMarquee$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 143,
            columnNumber: 11
        }, this);
        $[16] = t12;
        $[17] = t13;
    } else {
        t12 = $[16];
        t13 = $[17];
    }
    let t14;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[#0B2E3C] uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6",
            children: "ABOUT US"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-black text-4xl md:text-5xl font-bold mb-4 lg:mb-6",
            children: [
                "About ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-[#287FC4]",
                    children: "Radical"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 159,
                    columnNumber: 88
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 159,
            columnNumber: 11
        }, this);
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[#4A4A4A] mb-4 lg:mb-6 leading-7 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute left-[-20px] top-0 bottom-0 w-[2px] bg-[#00CFB2]"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 166,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: "Presenting you a platform that presents different Institutions that offer varied courses for the students. Whether you want to pursue your education in India or abroad, Radical Education.."
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 166,
                    columnNumber: 153
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 166,
            columnNumber: 11
        }, this);
        $[20] = t16;
    } else {
        t16 = $[20];
    }
    let t17;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Read more"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[21] = t17;
    } else {
        t17 = $[21];
    }
    let t18;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-13/20 w-full fadeLeft text-center md:text-left",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:pr-60 md:pr-10 lg:pl-6 pl-3 relative z-2",
                children: [
                    t14,
                    t15,
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/about-us",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            className: "bg-[#005A8B]! border-[#005A8B]! py-2.5! pr-3! gap-2",
                            rounded: true,
                            children: [
                                t17,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "26",
                                        height: "26",
                                        viewBox: "0 0 31 31",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M17.2441 10.8496C17.3278 10.8493 17.4111 10.8659 17.4883 10.8975H17.4893C17.5664 10.9292 17.6368 10.976 17.6963 11.0352L21.6055 14.9219L21.6855 15.0186C21.7088 15.0531 21.728 15.0902 21.7441 15.1289C21.7766 15.2063 21.7937 15.2894 21.7939 15.373C21.7942 15.4568 21.778 15.5399 21.7461 15.6172C21.7143 15.6945 21.6674 15.7649 21.6084 15.8242L17.7217 19.7334C17.6026 19.8532 17.4405 19.9212 17.2715 19.9219C17.1023 19.9224 16.9392 19.8556 16.8193 19.7363C16.6995 19.6172 16.6314 19.4552 16.6309 19.2861C16.6303 19.117 16.6971 18.954 16.8164 18.834L19.6191 16.0166L8.48926 16.0488C8.32037 16.0492 8.15798 15.9825 8.03809 15.8633C7.91829 15.7441 7.85011 15.5822 7.84961 15.4131C7.84918 15.2442 7.91603 15.0817 8.03516 14.9619C8.15428 14.8421 8.31637 14.7748 8.48535 14.7744L19.6143 14.7412L16.7969 11.9404C16.677 11.8212 16.609 11.6592 16.6084 11.4902C16.6079 11.321 16.6748 11.158 16.7939 11.0381C16.9131 10.9183 17.0751 10.8502 17.2441 10.8496Z",
                                                fill: "white",
                                                stroke: "white",
                                                strokeWidth: "0.3"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 369
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M15.5 1C23.5081 1 30 7.49187 30 15.5C30 23.5081 23.5081 30 15.5 30C7.49187 30 1 23.5081 1 15.5C1 7.49187 7.49187 1 15.5 1Z",
                                                stroke: "white",
                                                strokeWidth: "2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 180,
                                                columnNumber: 1370
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 274
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 180,
                                    columnNumber: 271
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 180,
                            columnNumber: 179
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 180,
                        columnNumber: 156
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "move-x text-nowrap text-[#00CFB212] text-[180px] md:text-[200px] lg:text-[230px] font-bold absolute left-[1px] top-[55%] left-[-20px] -z-1",
                        children: "Radical"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 180,
                        columnNumber: 1562
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 180,
                columnNumber: 80
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[22] = t18;
    } else {
        t18 = $[22];
    }
    let t19;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col md:flex-row gap-8",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:w-7/20 w-full fadePopup px-10 md:px-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/about-redical.webp",
                        width: 516,
                        height: 540,
                        alt: "",
                        className: "w-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 187,
                        columnNumber: 123
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 187,
                    columnNumber: 65
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 187,
            columnNumber: 11
        }, this);
        $[23] = t19;
    } else {
        t19 = $[23];
    }
    let t20;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-20",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$StatsCounter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 194,
                columnNumber: 34
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 194,
            columnNumber: 11
        }, this);
        $[24] = t20;
    } else {
        t20 = $[24];
    }
    let t21;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-[#0B2E3C] uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6",
            children: "OUR SERVICES"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 201,
            columnNumber: 11
        }, this);
        $[25] = t21;
    } else {
        t21 = $[25];
    }
    let t22;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:w-13/20 w-full lg:pr-40 fadeLeft text-center md:text-left",
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-black text-4xl md:text-5xl font-bold",
                    children: [
                        "From ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#287FC4]",
                            children: "Rank to Admission,"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 208,
                            columnNumber: 157
                        }, this),
                        " We Handle It All"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 208,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 208,
            columnNumber: 11
        }, this);
        $[26] = t22;
    } else {
        t22 = $[26];
    }
    let t23;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-[#F4F7F8] overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-3 md:px-4",
                children: [
                    t19,
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col md:flex-row gap-6 lg:gap-30 md:items-center mb-30",
                        children: [
                            t22,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-7/20 w-full fadeRight px-1 md:px-0 text-center md:text-left",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "With trusted experts and real-time updates, we help you navigate NEET counselling easily"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 215,
                                    columnNumber: 285
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 215,
                                columnNumber: 203
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 215,
                        columnNumber: 117
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$ServicesDropdown$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        services: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$services$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["services"]
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 215,
                        columnNumber: 396
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 215,
                columnNumber: 67
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 215,
            columnNumber: 11
        }, this);
        $[27] = t23;
    } else {
        t23 = $[27];
    }
    let t24;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            backgroundImage: "url('/images/courseBg.webp')"
        };
        $[28] = t24;
    } else {
        t24 = $[28];
    }
    let t25;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6",
            children: "OUR COURSES"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[29] = t25;
    } else {
        t25 = $[29];
    }
    let t26;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 fadeUp md:w-5/10 w-full mx-auto text-center",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-white md:text-5xl text-4xl font-bold",
                    children: [
                        "Your One Place For ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#00CFB2]",
                            children: "All Medical Courses"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 238,
                            columnNumber: 160
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 238,
                    columnNumber: 83
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[30] = t26;
    } else {
        t26 = $[30];
    }
    let t27;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-cover bg-center bg-no-repeat bg-[#005A8B] overflow-hidden",
            style: t24,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-3 md:px-4",
                children: [
                    t26,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 fadeUp",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$courses$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["courses"].map(_HomeCoursesMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 245,
                        columnNumber: 156
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 245,
                columnNumber: 111
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, this);
        $[31] = t27;
    } else {
        t27 = $[31];
    }
    let t28;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-black uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6",
            children: "Countries We Offer "
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, this);
        $[32] = t28;
    } else {
        t28 = $[32];
    }
    let t29;
    if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container px-3 md:px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fadeUp text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:w-5/10 w-full mx-auto",
                    children: [
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-black md:text-5xl text-4xl font-bold",
                            children: [
                                "Discover Where Your ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-[#287FC4]",
                                    children: "Medical Future"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 259,
                                    columnNumber: 212
                                }, this),
                                " Begins"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 259,
                            columnNumber: 134
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 259,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 259,
                columnNumber: 51
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[33] = t29;
    } else {
        t29 = $[33];
    }
    let t30;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pt-16 bg-white",
            children: [
                t29,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-hidden",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Earth3D$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 266,
                        columnNumber: 85
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 266,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, this);
        $[34] = t30;
    } else {
        t30 = $[34];
    }
    let t31;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = {
            backgroundImage: "url('/images/whyCus.webp')"
        };
        $[35] = t31;
    } else {
        t31 = $[35];
    }
    let t32;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-white uppercase text-sm font-semibold tracking-widest mb-4 lg:mb-6",
            children: "Why Choose Us?"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 282,
            columnNumber: 11
        }, this);
        $[36] = t32;
    } else {
        t32 = $[36];
    }
    let t33;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fadeLeft lg:pr-10 text-center md:text-left",
            children: [
                t32,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-white md:text-5xl text-4xl font-bold",
                    children: [
                        "Secure. ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#00CFB2]",
                            children: "Support. Success"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 289,
                            columnNumber: 142
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 289,
                    columnNumber: 76
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 289,
            columnNumber: 11
        }, this);
        $[37] = t33;
    } else {
        t33 = $[37];
    }
    let t34;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "md:-mt-70 -mt-45 md:py-30 py-10 bg-cover bg-center bg-no-repeat bg-[#005A8B] overflow-hidden relative z-2 whyChoUs",
            style: t31,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-3 md:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 md:gap-6 gap-2 items-center",
                    children: [
                        t33,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fadeRight text-center md:text-left",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white text-lg lg:pl-10 md:border-l-5 md:border-[#00CFB2] md:py-6",
                                children: "Our commitment to providing students with extensive support and requisite resources is the driving force here at Radical Education. Rooted in creativity and quality, we offer a clear, reliable path to achieving goals."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 296,
                                columnNumber: 333
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 296,
                            columnNumber: 281
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 296,
                    columnNumber: 199
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 296,
                columnNumber: 159
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 296,
            columnNumber: 11
        }, this);
        $[38] = t34;
    } else {
        t34 = $[38];
    }
    let t35;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 fadeUp text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-black text-4xl font-bold mb-4",
                    children: [
                        "OUR ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#287FC4]",
                            children: "SUCESSFUL STORIES"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 303,
                            columnNumber: 108
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 303,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "uppercase text-[#00CFB240] leading-12 text-[42px] md:text-5xl lg:text-7xl font-black",
                    children: "HEAR FORM OUR STUDENT"
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 303,
                    columnNumber: 170
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[39] = t35;
    } else {
        t35 = $[39];
    }
    let t36;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "py-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-3 md:px-4",
                children: [
                    t35,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-6 md:grid-cols-3 grid-cols-1",
                        children: videos.map(_HomeVideosMap)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 310,
                        columnNumber: 92
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 310,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 310,
            columnNumber: 11
        }, this);
        $[40] = t36;
    } else {
        t36 = $[40];
    }
    let t37;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pb-16 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-3 md:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$GoogleReviews$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 317,
                    columnNumber: 87
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 317,
                columnNumber: 47
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 317,
            columnNumber: 11
        }, this);
        $[41] = t37;
    } else {
        t37 = $[41];
    }
    let t38;
    let t39;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            backgroundImage: "url('/images/testimonialsBg.webp')"
        };
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 bg-black/70 -z-1 rounded-lg"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 328,
            columnNumber: 11
        }, this);
        $[42] = t38;
        $[43] = t39;
    } else {
        t38 = $[42];
        t39 = $[43];
    }
    let t40;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "uppercase text-sm tracking-widest text-gray-300 mb-4",
            children: "Testimonial"
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 337,
            columnNumber: 11
        }, this);
        $[44] = t40;
    } else {
        t40 = $[44];
    }
    let t41;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-3 md:px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-2 w-full rounded-lg bg-cover bg-left md:bg-center py-10 px-4 md:px-10 md:py-20 bg-black",
                    style: t38,
                    children: [
                        t39,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        t40,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl font-bold leading-tight",
                                            children: [
                                                "Feedback ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 344,
                                                    columnNumber: 362
                                                }, this),
                                                " From Students"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 344,
                                            columnNumber: 304
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 294
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$TestimonialSlider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 344,
                                    columnNumber: 393
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 344,
                            columnNumber: 214
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 344,
                    columnNumber: 81
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 344,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 344,
            columnNumber: 11
        }, this);
        $[45] = t41;
    } else {
        t41 = $[45];
    }
    let t42;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-10 fadeUp text-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-black text-4xl font-bold",
                children: [
                    "Connect with ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-[#287FC4] md:inline-flex block",
                        children: "Our Counselor"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 351,
                        columnNumber: 112
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 351,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 351,
            columnNumber: 11
        }, this);
        $[46] = t42;
    } else {
        t42 = $[46];
    }
    let t43;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:rounded-xl overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/counselorImg.webp",
                alt: "",
                height: 435,
                width: 1239,
                className: "w-full h-[435px] object-cover object-center"
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 358,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 358,
            columnNumber: 11
        }, this);
        $[47] = t43;
    } else {
        t43 = $[47];
    }
    let t44;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "pt-16 md:pb-60 pb-50 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container md:px-4",
                children: [
                    t42,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            t43,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute left-0 top-[80px] md:top-[105px] w-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6 md:p-10 rounded-xl bg-[#005A8B] mx-auto lg:w-4/10 md:w-5/10 w-[90%] fadePopup",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CounselorForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 365,
                                        columnNumber: 298
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 365,
                                    columnNumber: 199
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 365,
                                columnNumber: 133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 365,
                        columnNumber: 102
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 365,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[48] = t44;
    } else {
        t44 = $[48];
    }
    let t45;
    if ($[49] !== t11) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t11,
                t12,
                t13,
                t23,
                t27,
                t30,
                t34,
                t36,
                t37,
                t41,
                t44
            ]
        }, void 0, true);
        $[49] = t11;
        $[50] = t45;
    } else {
        t45 = $[50];
    }
    return t45;
}
_s(Home, "N07wjqr/0py0BJcOBg9VwyvQ3kE=");
_c = Home;
function _HomeVideosMap(video) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fadeUp relative min-w-[340px] h-[240px] rounded-xl overflow-hidden shadow-lg",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
            className: "absolute inset-0 w-full h-[240px]",
            src: `https://www.youtube.com/embed/${video.youtubeId}`,
            title: video.title,
            frameBorder: "0",
            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
            allowFullScreen: true
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 381,
            columnNumber: 119
        }, this)
    }, video.id, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 381,
        columnNumber: 10
    }, this);
}
function _HomeCoursesMap(course) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$home$2f$CourseCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        course: course
    }, course.slug, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 384,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0cb8d954._.js.map