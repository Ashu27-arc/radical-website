module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/app/providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$api$2f$api$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/api/api.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$api$2f$api$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PrimeReactProvider"], {
        value: {
            ripple: true,
            inputStyle: 'outlined'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/app/providers.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/nav/MainMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/skeleton/skeleton.esm.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function MainMenu({ mainMenuData }) {
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        }, 500);
        return ()=>clearTimeout(timer);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:flex-row flex-col flex gap-4 py-3",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 27,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 28,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 30,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 31,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 32,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 33,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Skeleton"], {
                    width: "97px",
                    height: "1rem"
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MainMenu.tsx",
                    lineNumber: 34,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/nav/MainMenu.tsx",
            lineNumber: 26,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex gap-4 firstLVLmnu",
                children: mainMenuData.map((level1, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "relative group",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: level1.url || '#',
                                className: "flex items-center gap-2 px-2 py-2 text-white",
                                children: [
                                    level1.label,
                                    level1.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "pi pi-angle-down text-xs"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/nav/MainMenu.tsx",
                                        lineNumber: 48,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/nav/MainMenu.tsx",
                                lineNumber: 42,
                                columnNumber: 29
                            }, this),
                            level1.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "secondLVLmnu absolute left-0 top-full hidden min-w-[220px] bg-white shadow-lg group-hover:block",
                                children: level1.items.map((level2, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "group/item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: level2.url || '#',
                                                className: "flex items-center justify-between px-4 py-3 text-sm",
                                                children: [
                                                    level2.label,
                                                    level2.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "pi pi-angle-right text-xs"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/nav/MainMenu.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/nav/MainMenu.tsx",
                                                lineNumber: 57,
                                                columnNumber: 37
                                            }, this),
                                            level2.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "thirdLVLmnu absolute left-full top-0 hidden min-w-[220px] bg-[#DFF1FF] shadow-lg group-hover/item:block",
                                                children: level2.items.map((level3, k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            href: level3.url || '#',
                                                            className: "block px-4 py-3 text-sm",
                                                            children: level3.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/nav/MainMenu.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 45
                                                        }, this)
                                                    }, k, false, {
                                                        fileName: "[project]/src/components/nav/MainMenu.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 41
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/nav/MainMenu.tsx",
                                                lineNumber: 69,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, j, true, {
                                        fileName: "[project]/src/components/nav/MainMenu.tsx",
                                        lineNumber: 56,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MainMenu.tsx",
                                lineNumber: 54,
                                columnNumber: 29
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/src/components/nav/MainMenu.tsx",
                        lineNumber: 41,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/nav/MainMenu.tsx",
                lineNumber: 38,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/nav/MainMenu.tsx",
            lineNumber: 37,
            columnNumber: 17
        }, this)
    }, void 0, false);
}
}),
"[project]/src/data/mainMenuData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mainMenuData",
    ()=>mainMenuData
]);
const mainMenuData = [
    {
        label: 'Services',
        //url: '/services/',
        items: [
            {
                label: 'NEET UG India Admissions',
                url: '/neet-ug-india-admission/'
            },
            {
                label: 'MBBS Abroad Admissions',
                url: '/study-abroad/'
            },
            {
                label: 'NEET PG India Admissions',
                url: '/neet-pg-india-admission/'
            }
        ]
    },
    {
        label: 'Study India',
        url: '/study-india/',
        items: [
            {
                label: 'Deemed Universities',
                url: '/mbbs-deemed-colleges-in-india/',
                items: [
                    {
                        label: 'Santosh Medical College, Ghaziabad, Uttar Pradesh',
                        url: '/santosh-medical-college-smc-ghaziabad-2025-26/'
                    },
                    {
                        label: 'Hamdard Institute of Medical Sciences and Research, New Delhi, Delhi',
                        url: '/hamdard-institute-of-medical-sciences-2025-26/'
                    },
                    {
                        label: 'Maharishi Markandeshwar Institute Of Medical Sciences & Research, Mullana, Ambala, Haryana',
                        url: '/maharishi-markandeshwar-institute-of-medica/'
                    },
                    {
                        label: 'Amrita School of Medicine, Faridabad, Uttar Pradesh',
                        url: '/amrita-school-of-medicine-faridabad-asm/'
                    },
                    {
                        label: 'Graphic Era Institute of Medical Science, Dehradun, Uttarakhand',
                        url: '/graphic-era-institute-of-medical-science-2025/'
                    },
                    {
                        label: 'B.L.D.E University, Bijapur, Karnataka',
                        url: '/b-l-d-e-university-bijapur-karnataka-2025-26/'
                    },
                    {
                        label: 'Jagadguru Gangadhar Mahaswamigalu Moorusavirmath Medical College, Hubballi, Karnataka',
                        url: '/jagadguru-gangadhar-medical-college-2025-26/'
                    },
                    {
                        label: 'Jawaharlal Nehru Medical College, Belagavi, Karnataka',
                        url: '/jawaharlal-nehru-medical-college-2025-26/'
                    },
                    {
                        label: 'JSS Medical College, Mysore, Karnataka',
                        url: '/jss-medical-college-mysore-karnataka-2025-26/'
                    },
                    {
                        label: 'K S Hegde Medical Academy, Mangalore, Karnataka',
                        url: '/k-s-hegde-medical-academy-mangalore-2025-26/'
                    },
                    {
                        label: 'Kasturba Medical College, Manipal, Karnataka',
                        url: '/kasturba-medical-college-manipal-2025-26/'
                    },
                    {
                        label: 'Kasturba Medical College, Mangalore, Karnataka',
                        url: '/kasturba-medical-college-kmc-mangalore-2025-26/'
                    },
                    {
                        label: 'Rajarajeswari Medical College & Hospital, Bangalore, Karnataka',
                        url: '/rajarajeswari-medical-college-hospital/'
                    },
                    {
                        label: 'Sri Devaraj URS Medical College, Kolar, Karnataka',
                        url: '/sri-devaraj-urs-medical-college-kolar/'
                    },
                    {
                        label: 'Sri Siddhartha Institute of Medical Sciences, T Begur, Karnataka',
                        url: '/sri-siddhartha-institute-of-medical-sciencest/'
                    },
                    {
                        label: 'Sri Siddhartha Medical College, Tumkur, Karnataka',
                        url: '/sri-siddhartha-medical-college-tumkur-2025-26/'
                    },
                    {
                        label: 'Yenepoya Medical College, Mangalore, Karnataka',
                        url: '/yenepoya-medical-college-mangalore-2025-26/'
                    },
                    {
                        label: 'Bharati Vidyapeeth Deemed University Medical College & Hospital, Sangli, Maharashtra',
                        url: '/bharati-vidyapeeth-deemed-university-medical/'
                    },
                    {
                        label: 'Bharati Vidyapeeth University Medical College, Pune, Maharashtra',
                        url: '/bharati-vidyapeeth-university-mediclal-college/'
                    },
                    {
                        label: 'Datta Meghe Medical College, Hingna, Nagpur',
                        url: '/datta-meghe-medical-college-nagpur-2025-26/'
                    },
                    {
                        label: 'Dr. D Y Patil Medical College, Kolhapur, Maharashtra',
                        url: '/dr-d-y-patil-medical-college-kolhapur/'
                    },
                    {
                        label: 'JLN Medical College, Wardha, Maharashtra',
                        url: '/jawaharlal-nehru-medical-college-sawangi-2025/'
                    },
                    {
                        label: 'Krishna Institute of Medical Sciences, Karad, Maharashtra',
                        url: '/krishna-institute-of-med-science-karad-2025-26/'
                    },
                    {
                        label: 'Mahatma Gandhi Mission Medical College, Kamothe, Navi Mumbai',
                        url: '/mahatma-gandhi-mission-medical-college-kamothe/'
                    },
                    {
                        label: 'Mahatma Gandhi Mission Medical College, Nerul, Navi Mumbai',
                        url: '/mahatma-gandhi-mission-medical-college/'
                    },
                    {
                        label: 'Mahatma Gandhi Missions Medical College, Vashi, Navi Mumbai',
                        url: '/mgm-navi-mumbai/'
                    },
                    {
                        label: 'Mahatma Gandhi Missions Medical College, Aurangabad, Maharashtra',
                        url: '/mahatma-gandhi-medical-college-aurangabad/'
                    },
                    {
                        label: 'Padmashree Dr. D.Y. Patil Medical College, Navi Mumbai',
                        url: '/padmashree-dr-d-y-patil-medical-college-2025/'
                    },
                    {
                        label: 'Padmashri Dr. D Y Patil Medical College, Pune, Maharashtra',
                        url: '/padmashri-d-y-patil-medical-college-hospital/'
                    },
                    {
                        label: 'Rural Medical College, Loni, Maharashtra',
                        url: '/rural-medical-college-loni-maharashtra-2025/'
                    },
                    {
                        label: 'Symbiosis Medical College for Women, Pune, Maharashtra',
                        url: '/symbiosis-medical-college-for-women-pune/'
                    },
                    {
                        label: 'SBKS Medical Institute & Research Centre, Vadodara, Gujarat',
                        url: '/sbks-medical-instt-research-centre-vadodra/'
                    },
                    {
                        label: 'GITAM Institute of Medical Sciences, Visakhapatnam, Andhra Pradesh',
                        url: '/gitam-institute-of-medical-sciences-research/'
                    },
                    {
                        label: 'Amrita School of Medicine, Kochi, Kerala',
                        url: '/amrita-school-of-medicine-asm-elamkara-2025/'
                    },
                    {
                        label: 'Malla Reddy Institute of Medical Sciences, Hyderabad, Telangana',
                        url: '/malla-reddy-institution-of-medical-science/'
                    },
                    {
                        label: 'Malla Reddy Medical College for Women, Hyderabad, Telangana',
                        url: '/malla-reddy-medical-college-women-hyderabad/'
                    },
                    {
                        label: 'Institute of Medical Sciences & SUM Hospital, Bhubaneswar, Odisha',
                        url: '/institute-of-medical-sciences-and-sum-hospital/'
                    },
                    {
                        label: 'Kalinga Institute of Medical Sciences, Bhubaneswar, Odisha',
                        url: '/kalinga-institute-of-medical-sciences-kims/'
                    },
                    {
                        label: 'ACS Medical College and Hospital, Chennai',
                        url: '/acs-medical-college-and-hospital-chennai/'
                    },
                    {
                        label: 'Bhaarat Medical College & Hospital, Chennai',
                        url: '/bhaarat-medical-college-hospital-bmc-2025/'
                    },
                    {
                        label: 'Chettinad Hospital & Research Institute, Kanchipuram',
                        url: '/chettinad-hospital-research-institute-2025-26/'
                    },
                    {
                        label: 'J R Medical College and Hospital, Chennai',
                        url: '/jr-medical-college-and-hospita-chennai-2025-26/'
                    },
                    {
                        label: 'Meenakshi Medical College, Enathur, Tamil Nadu',
                        url: '/meenakshi-medical-college-research-institute/'
                    },
                    {
                        label: 'Saveetha Medical College and Hospital, Kanchipuram',
                        url: '/saveetha-medical-college-and-hospital-smch/'
                    },
                    {
                        label: 'Shri Sathya Sai Medical College, Kanchipuram',
                        url: '/shri-sathya-sai-medical-college/'
                    },
                    {
                        label: 'Sree Balaji Medical College, Chennai',
                        url: '/sree-balaji-medical-college-chennai-2025-26/'
                    },
                    {
                        label: 'Sri Lalithambigai Medical College, Chennai',
                        url: '/sri-lalithambigai-medical-college-hospital/'
                    },
                    {
                        label: 'Sri Ramachandra Medical College, Chennai',
                        url: '/sri-ramachandra-medical-college-chennai/'
                    },
                    {
                        label: 'SRM Medical College, Kanchipuram',
                        url: '/srm-medical-college-hospitaland-research-2025/'
                    },
                    {
                        label: 'VELS Medical College & Hospital, Chennai',
                        url: '/vels-medical-college-hospital-chennai/'
                    },
                    {
                        label: 'Vinayaka Missions Medical College, Salem',
                        url: '/vinayaka-missions-kirupananda-variyar-medical/'
                    },
                    {
                        label: 'Manipal Tata Medical College, Jamshedpur',
                        url: '/manipal-tata-medical-college-baridih-2025/'
                    },
                    {
                        label: 'Aarupadai Veedu Medical College, Puducherry',
                        url: '/aarupadai-veedu-medical-college-hospital-2025/'
                    },
                    {
                        label: 'Mahatma Gandhi Medical College, Puducherry',
                        url: '/mahatma-gandhi-medical-college-reseach/'
                    },
                    {
                        label: 'Sree Lakshmi Narayana Institute of Medical Sciences, Puducherry',
                        url: '/sree-lakshmi-narayana-medical-institute/'
                    },
                    {
                        label: 'Vinayaka Missions Medical College, Karaikal',
                        url: '/vinayaka-missions-medical-college-karaikal/'
                    }
                ]
            },
            {
                label: 'MBBS – 2025',
                url: '/mbbs-in-india/',
                items: [
                    {
                        label: 'Andhra Pradesh',
                        url: '/mbbs-in-andhra-pradesh/'
                    },
                    {
                        label: 'Arunachal Pradesh',
                        url: '/mbbs-in-arunachal-pradesh/'
                    },
                    {
                        label: 'Assam',
                        url: '/mbbs-in-assam-2025/'
                    },
                    {
                        label: 'Bihar',
                        url: '/mbbs-in-bihar-2025/'
                    },
                    {
                        label: 'Chhattisgarh',
                        url: '/mbbs-in-chhattisgarh-2025/'
                    },
                    {
                        label: 'Delhi',
                        url: '/mbbs-in-delhi-2025/'
                    },
                    {
                        label: 'Goa',
                        url: '/mbbs-in-goa/'
                    },
                    {
                        label: 'Gujarat',
                        url: '/mbbs-colleges-in-gujarat/'
                    },
                    {
                        label: 'Haryana',
                        url: '/mbbs-in-haryana-2025/'
                    },
                    {
                        label: 'Himachal Pradesh',
                        url: '/mbbs-in-himachal-pradesh-2025/'
                    },
                    {
                        label: 'Jharkhand',
                        url: '/mbbs-in-jharkhand/'
                    },
                    {
                        label: 'Karnataka',
                        url: '/mbbs-in-karnataka/'
                    },
                    {
                        label: 'Kerala',
                        url: '/mbbs-in-kerala/'
                    },
                    {
                        label: 'Madhya Pradesh',
                        url: '/mbbs-in-madhya-pradesh/'
                    },
                    {
                        label: 'Maharashtra',
                        url: '/mbbs-in-maharashtra-2025/'
                    },
                    {
                        label: 'Manipur',
                        url: '/mbbs-in-manipur/'
                    },
                    {
                        label: 'Meghalaya',
                        url: '/mbbs-in-meghalaya/'
                    },
                    {
                        label: 'Mizoram',
                        url: '/mbbs-in-mizoram-2025/'
                    },
                    {
                        label: 'Nagaland',
                        url: '/mbbs-in-nagaland/'
                    },
                    {
                        label: 'Odisha',
                        url: '/mbbs-in-odisha-2025/'
                    },
                    {
                        label: 'Punjab',
                        url: '/mbbs-in-punjab/'
                    },
                    {
                        label: 'Rajasthan',
                        url: '/mbbs-in-rajasthan/'
                    },
                    {
                        label: 'Sikkim',
                        url: '/mbbs-colleges-in-sikkim-2025/'
                    },
                    {
                        label: 'Tamil Nadu',
                        url: '/mbbs-admission-in-tamil-nadu/'
                    },
                    {
                        label: 'Telangana',
                        url: '/mbbs-in-telangana-2025/'
                    },
                    {
                        label: 'Tripura',
                        url: '/mbbs-in-tripura-2025/'
                    },
                    {
                        label: 'Uttarakhand',
                        url: '/mbbs-in-uttarakhand/'
                    },
                    {
                        label: 'Uttar Pradesh',
                        url: '/mbbs-in-uttar-pradesh-2025/'
                    },
                    {
                        label: 'West Bengal',
                        url: '/mbbs-in-west-bengal/'
                    }
                ]
            },
            {
                label: 'BDS – 2025',
                url: '/bds-in-india/',
                items: [
                    {
                        label: 'Andhra Pradesh',
                        url: '/bds-in-andhra-pradesh/'
                    },
                    {
                        label: 'Arunachal Pradesh',
                        url: '/dental-colleges-in-arunachal-pradesh-2025/'
                    },
                    {
                        label: 'Assam',
                        url: '/bds-in-assam-2025/'
                    },
                    {
                        label: 'Bihar',
                        url: '/bds-in-bihar/'
                    },
                    {
                        label: 'Chhattisgarh',
                        url: '/bds-in-chhattisgarh-2025/'
                    },
                    {
                        label: 'Delhi',
                        url: '/bds-in-delhi-2025-best-colleges-admission/'
                    },
                    {
                        label: 'Goa',
                        url: '/dental-colleges-in-goa-2025/'
                    },
                    {
                        label: 'Gujarat',
                        url: '/bds-in-gujarat-2025/'
                    },
                    {
                        label: 'Haryana',
                        url: '/bds-in-haryana-2025/'
                    },
                    {
                        label: 'Himachal Pradesh',
                        url: '/bds-in-himachal-pradesh/'
                    },
                    {
                        label: 'Jharkhand',
                        url: '/bds-in-jharkhand-2025/'
                    },
                    {
                        label: 'Karnataka',
                        url: '/bds-admission-in-karnataka-2025/'
                    },
                    {
                        label: 'Kerala',
                        url: '/bds-in-kerala/'
                    },
                    {
                        label: 'Madhya Pradesh',
                        url: '/bds-in-madhya-pradesh-2025/'
                    },
                    {
                        label: 'Maharashtra',
                        url: '/bds-in-maharashtra-2025/'
                    },
                    {
                        label: 'Manipur',
                        url: '/dental-colleges-in-manipur-2025/'
                    },
                    {
                        label: 'Meghalaya',
                        url: '/dental-colleges-in-meghalaya-2025/'
                    },
                    {
                        label: 'Mizoram',
                        url: '/dental-colleges-in-mizoram-2025/'
                    },
                    {
                        label: 'Nagaland',
                        url: '/dental-colleges-in-nagaland-2025/'
                    },
                    {
                        label: 'Odisha',
                        url: '/bds-in-orissa-2025/'
                    },
                    {
                        label: 'Punjab',
                        url: '/bds-in-punjab/'
                    },
                    {
                        label: 'Rajasthan',
                        url: '/bds-in-rajasthan/'
                    },
                    {
                        label: 'Sikkim',
                        url: '/dental-colleges-in-sikkim-2025/'
                    },
                    {
                        label: 'Tamil Nadu',
                        url: '/bds-in-tamil-nadu-2025/'
                    },
                    {
                        label: 'Telangana',
                        url: '/bds-in-telangana/'
                    },
                    {
                        label: 'Tripura',
                        url: '/dental-colleges-in-tripura-2025/'
                    },
                    {
                        label: 'Uttarakhand',
                        url: '/bds-in-uttarakhand/'
                    },
                    {
                        label: 'Uttar Pradesh',
                        url: '/bds-in-uttar-pradesh/'
                    },
                    {
                        label: 'West Bengal',
                        url: '/dental-colleges-in-west-bengal/'
                    }
                ]
            },
            {
                label: 'Ayush – 2025',
                url: '/ayush-counselling-2025/'
            },
            {
                label: 'Webinar NEET-UG 2025',
                url: '/neet-webinar/'
            },
            {
                label: 'NEET Counselling Authorities',
                url: '/counselling-authority/'
            }
        ]
    },
    {
        label: 'Study Abroad',
        url: '/mbbs-abroad-admission/',
        items: [
            // NEPAL
            {
                label: 'Nepal',
                url: '/mbbs-in-nepal/',
                items: [
                    {
                        label: 'Birat Medical College, Biratnagar',
                        url: '/birat-medical-college-bmc-nepal-2025-26/'
                    },
                    {
                        label: 'College of Medical Sciences (CMC), Bharatpur',
                        url: '/college-of-medical-sciences-cmc-nepal/'
                    },
                    {
                        label: 'Devdaha Medical College, Butwal',
                        url: '/devdaha-medical-college-dmc-nepal/'
                    },
                    {
                        label: 'Kathmandu Medical College, Kathmandu',
                        url: '/kathmandu-medical-college-kmc-nepal/'
                    },
                    {
                        label: 'Kathmandu University School of Medical Sciences, Dhulikhel',
                        url: '/kathmandu-university-school-of-medical/'
                    },
                    {
                        label: 'Lumbini Medical College, Palpa',
                        url: '/lumbini-medical-college-nepal/'
                    },
                    {
                        label: 'Manipal College of Medical Sciences, Pokhara',
                        url: '/manipal-college-of-medical-science-nepal/'
                    },
                    {
                        label: 'Nepalgunj Medical College, Nepalgunj',
                        url: '/nepalgunj-medical-college-nepal-2025-26-update/'
                    },
                    {
                        label: 'Nepal Medical College, Jorpati',
                        url: '/nepal-medical-college-nmc-nepal-2025-26-update/'
                    },
                    {
                        label: 'Nobel Medical College, Biratnagar',
                        url: '/nobel-medical-college-nepal/'
                    },
                    {
                        label: 'Universal College of Medical Sciences, Bhairahawa',
                        url: '/universal-college-of-medical-sciences-ucms/'
                    },
                    {
                        label: 'Chitwan Medical College, Bharatpur',
                        url: '/chitwan-medical-college-cmc-nepal-2025-2026/'
                    },
                    {
                        label: 'Gandaki Medical College, Pokhara',
                        url: '/gandaki-medical-college-teaching-hospital-gmc/'
                    },
                    {
                        label: 'Janaki Medical College, Janakpur',
                        url: '/janaki-medical-college-and-teaching-hospital/'
                    },
                    {
                        label: 'B & C Medical College, Jhapa',
                        url: '/bc-medical-college-teaching-hospital/'
                    },
                    {
                        label: 'Karnali Academy of Health Science, Jumla',
                        url: '/karnali-academy-of-health-science-nepal/'
                    },
                    {
                        label: 'KIST Medical College, Lalitpur',
                        url: '/kist-medical-college-nepal/'
                    },
                    {
                        label: 'National Medical College, Birgunj',
                        url: '/national-medical-college-private-limited-nepal/'
                    },
                    {
                        label: 'Nepalese Army Institute of Health Science, Kathmandu',
                        url: '/nepalese-army-institute-of-health-science/'
                    },
                    {
                        label: 'Patan Academy of Health Sciences, Lalitpur',
                        url: '/patan-academy-of-health-sciences-nepal/'
                    },
                    {
                        label: 'Pokhara Academy of Health Sciences, Pokhara',
                        url: '/pokhara-academy-of-health-sciences-nepal/'
                    }
                ]
            },
            // RUSSIA
            {
                label: 'Russia',
                url: '/mbbs-in-russia/',
                items: [
                    {
                        label: 'Altai State Medical University, Barnaul',
                        url: '/altai-state-medical-university-russia/'
                    },
                    {
                        label: 'Bashkir State Medical University, Ufa',
                        url: '/bashkir-state-medical-university-russia/'
                    },
                    {
                        label: 'Chuvash State Medical University, Chuvash',
                        url: '/chuvash-state-medical-university-russia/'
                    },
                    {
                        label: 'Kazan Federal University, Kazan City',
                        url: '/study-abroad/kazan-federal-university-russia/'
                    },
                    {
                        label: 'First Moscow State Medical University, Moscow',
                        url: '/first-moscow-state-medical-university/'
                    },
                    {
                        label: 'Immanuel Kant Baltic Federal University, Kaliningrad',
                        url: '/study-abroad/immanuel-kant-baltic-federal-university/'
                    },
                    {
                        label: 'Kabardino Balkarian State University, Nalchik',
                        url: '/kabardino-balkarian-state-university-russia/'
                    },
                    {
                        label: 'Far Eastern Federal University, Vladivostok',
                        url: '/study-abroad/far-eastern-federal-university-russia/'
                    },
                    {
                        label: 'Kazan State Medical University, Kazan City',
                        url: '/study-mbbs-at-kazan-state-medical-university/'
                    },
                    {
                        label: 'Northern State Medical University, Arkhangelsk',
                        url: '/study-abroad/northern-state-medical-university/'
                    },
                    {
                        label: 'Krasnoyarsk State Medical University, Krasnoyarsk',
                        url: '/study-abroad/krasnoyarsk-state-medical-university/'
                    },
                    {
                        label: 'Kursk State Medical University, Kursk Oblast',
                        url: '/kursk-state-medical-university/'
                    },
                    {
                        label: 'Kemerovo State Medical University, Kemerovo',
                        url: '/study-abroad/kemerovo-state-medical-university/'
                    },
                    {
                        label: 'Omsk State Medical University, Omsk',
                        url: '/study-abroad/omsk-state-medical-university-russia/'
                    },
                    {
                        label: 'Orel State Medical University, Oryol',
                        url: '/study-abroad/orel-state-medical-university/'
                    },
                    {
                        label: 'Ural State Medical University, Yekaterinburg',
                        url: '/study-abroad/ural-state-medical-university-russia/'
                    },
                    {
                        label: 'Kirov State Medical University, Kirov',
                        url: '/kirov-state-medical-university/'
                    },
                    {
                        label: 'Orenburg State Medical University, Orenburg',
                        url: '/orenburg-state-medical-university-russia/'
                    },
                    {
                        label: 'Privolzhsky Research Medical University, Nizhny Novgorod',
                        url: '/privoizhky-research-medical-university/'
                    },
                    {
                        label: 'Samara State Medical University, Samara',
                        url: '/samara-state-medical-university-russia/'
                    },
                    {
                        label: 'South Ural State Medical University, Chelyabinsk',
                        url: '/south-ural-state-medical-university/'
                    },
                    {
                        label: 'Synergy University, Moscow',
                        url: '/synergy-university/'
                    },
                    {
                        label: 'Tver State Medical University, Tver',
                        url: '/tver-state-medical-unviersity/'
                    },
                    {
                        label: 'Ulyanovsk State Medical University, Ulyanovsk',
                        url: '/ulyanovsk-state-medical-university-usmu/'
                    },
                    {
                        label: 'Volgograd State Medical University, Volgograd',
                        url: '/volgograd-state-medical-university-russia/'
                    },
                    {
                        label: 'Yaroslavl State Medical University, Yaroslavl',
                        url: '/yarosalvi-state-medical-unviersity-russia/'
                    },
                    {
                        label: 'Tambov State Medical University, Tambov',
                        url: '/tambov-state-medical-university-russia/'
                    },
                    {
                        label: 'Northwestern State Medical University, St Petersburg',
                        url: '/north-western-state-medical-university-russia/'
                    },
                    {
                        label: 'Chita State Medical University, Chita',
                        url: '/chita-state-medical-university-russia/'
                    },
                    {
                        label: 'Amur State Medical University, Amur Oblast',
                        url: '/amur-state-medical-university-admission-2025/'
                    },
                    {
                        label: 'Astrakhan State Medical University, Astrakhan',
                        url: '/astrakhan-state-medical-university-russia/'
                    },
                    {
                        label: 'Mephi Obninsk, Obninsk',
                        url: '/mephi-obninsk-russia-admission-2025/'
                    },
                    {
                        label: 'Crimean Federal University, Simferopol',
                        url: '/crimean-federal-university-simferopol-russia/'
                    },
                    {
                        label: 'Saint Petersburg State University of Veterinary Medicine',
                        url: '/saint-petersburg-state-university/'
                    },
                    {
                        label: 'Vyatka State Medical University, Kirov',
                        url: '/vyatka-state-medical-university-russia/'
                    },
                    {
                        label: 'Kuban State Medical University, Krasnodar',
                        url: '/kuban-state-medical-university-russia/'
                    }
                ]
            },
            // GEORGIA
            {
                label: 'Georgia',
                url: '/mbbs-in-georgia/',
                items: [
                    {
                        label: 'Batumi Shota Rustaveli State University, Batumi',
                        url: '/batumi-shota-rustaveli-state-university/'
                    },
                    {
                        label: 'Caucasus International University, Tbilisi',
                        url: '/caucasus-international-university/'
                    },
                    {
                        label: 'European University, Tbilisi',
                        url: '/east-european-university-georgia-2/'
                    },
                    {
                        label: 'SEU Georgian National University, Tbilisi',
                        url: '/georgian-national-university-seu/'
                    },
                    {
                        label: 'Grigol Robakidze University, Tbilisi',
                        url: '/grigol-robakidze-university/'
                    },
                    {
                        label: 'Tbilisi Medical Academy, Tbilisi',
                        url: '/tbilisi-medical-academy/'
                    },
                    {
                        label: 'Tbilisi State Medical University, Tbilisi',
                        url: '/tbilisi-state-medical-university-georgia/'
                    },
                    {
                        label: 'University of Georgia, Tbilisi',
                        url: '/georgia-national-university-georgia/'
                    },
                    {
                        label: 'BAU International University, Batumi',
                        url: '/bau-internationa-university/'
                    }
                ]
            },
            // SINGAPORE
            {
                label: 'Singapore',
                url: '/mbbs-in-singapore/',
                items: [
                    {
                        label: 'Lee Kong Chian University, Singapore',
                        url: '/lee-kong-chian-university/'
                    },
                    {
                        label: 'National University of Singapore',
                        url: '/national-university-of-singapore/'
                    },
                    {
                        label: 'Yong Loo Lin School of Medicine, Singapore',
                        url: '/yong-loo-lin-school-of-medicine/'
                    }
                ]
            },
            // BANGLADESH
            {
                label: 'Bangladesh',
                url: '/mbbs-in-bangladesh/',
                items: [
                    {
                        label: 'Popular Medical College, Dhaka',
                        url: '/popular-medical-collegebangladesh/'
                    },
                    {
                        label: 'Dhaka National Medical College, Dhaka',
                        url: '/dhaka-national-medical-college/'
                    },
                    {
                        label: 'Tairunnessa Memorial Medical College, Gazipur',
                        url: '/tairnunnessa-memorial-medical-collegebangladesh/'
                    },
                    {
                        label: 'Holy Family Red Crescent Medical College, Dhaka',
                        url: '/holy-family-red-crescent-medical-collegebangladesh/'
                    },
                    {
                        label: 'Eastern Medical College, Comilla',
                        url: '/bangladesh-university-of-professional-studies/'
                    },
                    {
                        label: 'Monowara Sikdar Medical College, Shariatpur',
                        url: '/monowara-sikdar-medical-college-shariatpur-2025-2026-fees-structure-cutoff-admission-process/'
                    },
                    {
                        label: 'Medical College for Women, Dhaka',
                        url: '/medical-college-for-women-dhaka-2025-2026/'
                    },
                    {
                        label: 'East West Medical College, Dhaka',
                        url: '/east-west-medical-college-dhaka-2025-2026/'
                    },
                    {
                        label: 'International Medical College, Tongi',
                        url: '/international-medical-college-tongi/'
                    },
                    {
                        label: 'Dr. Sirajul Islam Medical College, Dhaka',
                        url: '/dr-sirajul-islam-medical-college/'
                    },
                    {
                        label: 'Anwer Khan Modern Medical College, Dhaka',
                        url: '/anwer-khan-modern-medical-college-dhaka-2025/'
                    },
                    {
                        label: 'US–Bangla Medical College, Tarabo',
                        url: '/us-bangla-medical-college-tarabo-2025/'
                    },
                    {
                        label: 'Delta Medical College, Dhaka',
                        url: '/delta-medical-college-dhaka/'
                    }
                ]
            },
            // UZBEKISTAN
            {
                label: 'Uzbekistan',
                url: '/mbbs-in-uzbekistan/',
                items: [
                    {
                        label: 'Bukhara State Medical College, Bukhara',
                        url: '/bukhara-state-medical-college/'
                    },
                    {
                        label: 'Samarkand State Medical College, Samarkand',
                        url: '/samarkand-state-medical-college/'
                    },
                    {
                        label: 'Tashkent Pediatric Medical Institute, Tashkent',
                        url: '/tashkent-pediatric-medical-institute-uzbekistan/'
                    },
                    {
                        label: 'Monno Medical College, Gilondo',
                        url: '/monno-medical-college-gilondo-2025-2026/'
                    }
                ]
            },
            // KAZAKHSTAN
            {
                label: 'Kazakhstan',
                items: [
                    {
                        label: 'Al-Farabi Kazakh National Medical University',
                        url: '/al-farabi-kazakh-national-medical-university/'
                    },
                    {
                        label: 'Asfendiyarov Kazakh National Medical University',
                        url: '/asfendiyarov-kazakh-national-medical-university/'
                    },
                    {
                        label: 'Astana Medical University',
                        url: '/astana-medical-university-kazakhstan/'
                    },
                    {
                        label: 'South Kazakhstan Medical Academy',
                        url: '/south-kazakhstan-medical-academy-kazakhstan/'
                    },
                    {
                        label: 'West Kazakhstan Medical Academy',
                        url: '/west-kazakhstan-medical-academy/'
                    },
                    {
                        label: 'International Medical School Almaty',
                        url: '/international-medical-school-almaty-kazakhstan/'
                    }
                ]
            },
            // KYRGYZSTAN
            {
                label: 'Kyrgyzstan',
                url: '/complete-guide-to-study-mbbs-in-kyrgyzstan-2025-26/',
                items: [
                    {
                        label: 'Medical Faculty & Asian Medical Institute, Kant',
                        url: '/medical-faculty-and-asian-medical-institute-kyrgyzstan/'
                    },
                    {
                        label: 'Osh International Medical University, Osh',
                        url: '/osh-international-medical-university-kyrgyzstan/'
                    },
                    {
                        label: 'Kyrgyz State Medical Academy, Bishkek',
                        url: '/kyrgyz-state-medical-academy-kyrgyzstan/'
                    },
                    {
                        label: 'Jalal-Abad State University, Jalal-Abad',
                        url: '/jalal-abad-state-university-kyrgyzstan/'
                    }
                ]
            }
        ]
    },
    // {
    //   label: 'MBA/PGDM',
    //   items: [
    //     { label: 'Associated Colleges' },
    //     { label: 'Top MBA Colleges' },
    //     { label: 'Top PGDM Colleges' },
    //     { label: 'MBA-PGDM 2025 News' },
    //   ],
    // },
    {
        label: 'Blogs',
        url: '/blogs/'
    },
    {
        label: 'Gallery',
        url: '/gallery/'
    },
    {
        label: 'Reviews',
        url: '/reviews/'
    },
    {
        label: 'Our team',
        url: '/our-team/'
    }
];
}),
"[project]/src/components/nav/MobileMenu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$sidebar$2f$sidebar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/sidebar/sidebar.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/image/image.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mainMenuData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function MobileMenu({ visible, setVisible }) {
    /* ================= MENU STATE ================= */ const [menuStack, setMenuStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainMenuData"]
    ]);
    const [titleStack, setTitleStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        'Menu'
    ]);
    const [servicesDropdownOpen, setServicesDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [studyIndiaDropdownOpen, setStudyIndiaDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const openSubMenu = (item)=>{
        if (item.label === 'Services') {
            // Toggle services dropdown instead of navigating to submenu
            setServicesDropdownOpen(!servicesDropdownOpen);
            return;
        }
        if (item.label === 'Study India') {
            // Toggle study india dropdown instead of navigating to submenu
            setStudyIndiaDropdownOpen(!studyIndiaDropdownOpen);
            return;
        }
        // Close dropdowns when opening other submenus
        setServicesDropdownOpen(false);
        setStudyIndiaDropdownOpen(false);
        if (item.items) {
            setMenuStack((prev)=>[
                    ...prev,
                    item.items
                ]);
            setTitleStack((prev)=>[
                    ...prev,
                    item.label
                ]);
        }
    };
    const goBack = ()=>{
        setMenuStack((prev)=>prev.slice(0, -1));
        setTitleStack((prev)=>prev.slice(0, -1));
        setServicesDropdownOpen(false); // Close services dropdown when going back
        setStudyIndiaDropdownOpen(false); // Close study india dropdown when going back
    };
    /* ================= HEADER ================= */ const headerTemplate = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between bg-[#f1f1f1] w-full py-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "text-xl font-bold text-blue-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                        src: "/logo.webp",
                        alt: "Logo",
                        width: "100"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                    lineNumber: 60,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btnico",
                    onClick: ()=>{
                        setVisible(false);
                        setServicesDropdownOpen(false); // Reset dropdown state when closing
                        setStudyIndiaDropdownOpen(false); // Reset study india dropdown state when closing
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "pi pi-times text-xl text-black"
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                    lineNumber: 63,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/nav/MobileMenu.tsx",
            lineNumber: 59,
            columnNumber: 9
        }, this);
    const handleSidebarHide = ()=>{
        setVisible(false);
        setServicesDropdownOpen(false); // Reset dropdown state when hiding
        setStudyIndiaDropdownOpen(false); // Reset study india dropdown state when hiding
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$sidebar$2f$sidebar$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
            visible: visible,
            onHide: handleSidebarHide,
            position: "left",
            className: "w-[280px] mobile-sidebar",
            header: headerTemplate,
            showCloseIcon: false,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 overflow-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mobile-menu-wrapper",
                                style: {
                                    transform: `translateX(-${(menuStack.length - 1) * 100}%)`
                                },
                                children: menuStack.map((menuLevel, levelIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mobile-menu-level",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3 px-4 py-3 bg-[#005A8B]",
                                                children: [
                                                    levelIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: goBack,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: "pi pi-arrow-left text-lg text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                            lineNumber: 110,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold text-white",
                                                        children: titleStack[levelIndex]
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 45
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                lineNumber: 107,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "divide-y divide-[#eee]",
                                                children: menuLevel.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200",
                                                                onClick: ()=>item.items ? openSubMenu(item) : null,
                                                                children: [
                                                                    item.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: item.url,
                                                                        onClick: ()=>{
                                                                            setVisible(false);
                                                                            setServicesDropdownOpen(false);
                                                                            setStudyIndiaDropdownOpen(false);
                                                                        },
                                                                        className: "flex-1 text-[14px] hover:text-blue-600 active:text-blue-700 transition-colors duration-200",
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                        lineNumber: 127,
                                                                        columnNumber: 61
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "flex-1 text-[14px]",
                                                                        children: item.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                        lineNumber: 139,
                                                                        columnNumber: 61
                                                                    }, this),
                                                                    item.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                        className: `pi transition-all duration-200 hover:scale-110 hover:text-[#005A8B] ${item.label === 'Services' && servicesDropdownOpen ? 'pi-chevron-up' : item.label === 'Services' ? 'pi-chevron-down' : item.label === 'Study India' && studyIndiaDropdownOpen ? 'pi-chevron-up' : item.label === 'Study India' ? 'pi-chevron-down' : 'pi-angle-right'}`
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 61
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                lineNumber: 122,
                                                                columnNumber: 53
                                                            }, this),
                                                            item.label === 'Services' && item.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `overflow-hidden transition-all duration-300 ease-in-out ${servicesDropdownOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 border-t border-gray-200",
                                                                    children: item.items.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "border-b border-gray-100 last:border-b-0",
                                                                            children: subItem.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: subItem.url,
                                                                                onClick: ()=>{
                                                                                    setVisible(false);
                                                                                    setServicesDropdownOpen(false);
                                                                                    setStudyIndiaDropdownOpen(false);
                                                                                },
                                                                                className: "block px-6 py-3 text-[13px] text-gray-700 hover:text-[#005A8B] hover:bg-white active:bg-gray-100 transition-all duration-200",
                                                                                children: subItem.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 170,
                                                                                columnNumber: 77
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white active:bg-gray-100 transition-colors duration-200",
                                                                                onClick: ()=>subItem.items ? openSubMenu(subItem) : null,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex-1 text-[13px] text-gray-700",
                                                                                        children: subItem.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                        lineNumber: 186,
                                                                                        columnNumber: 81
                                                                                    }, this),
                                                                                    subItem.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "pi pi-angle-right text-xs text-gray-500 transition-all duration-200 hover:scale-110 hover:text-[#005A8B]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                        lineNumber: 190,
                                                                                        columnNumber: 85
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 182,
                                                                                columnNumber: 77
                                                                            }, this)
                                                                        }, subIndex, false, {
                                                                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                            lineNumber: 168,
                                                                            columnNumber: 69
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                    lineNumber: 166,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                lineNumber: 161,
                                                                columnNumber: 57
                                                            }, this),
                                                            item.label === 'Study India' && item.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `overflow-hidden transition-all duration-300 ease-in-out ${studyIndiaDropdownOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 border-t border-gray-200",
                                                                    children: item.items.map((subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "border-b border-gray-100 last:border-b-0",
                                                                            children: subItem.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                href: subItem.url,
                                                                                onClick: ()=>{
                                                                                    setVisible(false);
                                                                                    setStudyIndiaDropdownOpen(false);
                                                                                    setServicesDropdownOpen(false);
                                                                                },
                                                                                className: "block px-6 py-3 text-[13px] text-gray-700 hover:text-[#005A8B] hover:bg-white active:bg-gray-100 transition-all duration-200",
                                                                                children: subItem.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 211,
                                                                                columnNumber: 77
                                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white active:bg-gray-100 transition-colors duration-200",
                                                                                onClick: ()=>subItem.items ? openSubMenu(subItem) : null,
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: "flex-1 text-[13px] text-gray-700",
                                                                                        children: subItem.label
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                        lineNumber: 227,
                                                                                        columnNumber: 81
                                                                                    }, this),
                                                                                    subItem.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                        className: "pi pi-angle-right text-xs text-gray-500 transition-all duration-200 hover:scale-110 hover:text-[#005A8B]"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                        lineNumber: 231,
                                                                                        columnNumber: 85
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 223,
                                                                                columnNumber: 77
                                                                            }, this)
                                                                        }, subIndex, false, {
                                                                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                            lineNumber: 209,
                                                                            columnNumber: 69
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                    lineNumber: 207,
                                                                    columnNumber: 61
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                                lineNumber: 202,
                                                                columnNumber: 57
                                                            }, this)
                                                        ]
                                                    }, index, true, {
                                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 49
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                                lineNumber: 119,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, levelIndex, true, {
                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 105,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/nav/MobileMenu.tsx",
                            lineNumber: 97,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 bg-[#f1f1f1] flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "small",
                                icon: "pi pi-youtube",
                                label: "YOUTUBE",
                                className: "text-white! bg-[#CB1E17]! border-[#CB1E17]!",
                                rounded: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 251,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "pl-4 h-[43px] pr-12 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "NEET UPDATE"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 260,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/mic.webp",
                                        width: "40",
                                        height: "50",
                                        alt: "",
                                        className: "absolute right-[-5px] top-[2px] animate-bounce"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 261,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                                lineNumber: 259,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/nav/MobileMenu.tsx",
                        lineNumber: 250,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/nav/MobileMenu.tsx",
                lineNumber: 89,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/nav/MobileMenu.tsx",
            lineNumber: 81,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
}),
"[project]/src/components/header/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/image/image.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MainMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/nav/MainMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/nav/MobileMenu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/mainMenuData.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function Header() {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white px-3 text-center py-3 lg:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2 justify-center text-xs",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-[#121212]",
                            href: "mailto:info@radicaleducation.in",
                            children: "info@radicaleducation.in"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        "|",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-[#121212]",
                            href: "tel:+91 9797972465",
                            children: "97 97 97 24 65"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        "|",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/neet-college-predictor",
                            className: "text-[#121212] relative",
                            children: [
                                "NEET COLLEGE PREDICTOR",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-[-5px] top-[-5px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex size-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 24,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 25,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 21,
                            columnNumber: 11
                        }, this),
                        "|",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "text-[#121212]",
                            href: "/neet-ug",
                            children: "NEET UG"
                        }, void 0, false, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this),
                        "|",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/neet-webinar",
                            className: "text-[#121212] relative",
                            children: [
                                "NEET WEBINAR",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-[-5px] top-[-5px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex size-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 33,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-4 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://twitter.com/Radical_Edu_",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/twitter.svg",
                                        width: "16",
                                        height: "16",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://www.facebook.com/profile.php?id=61556350017734",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/facebook.svg",
                                        width: "18",
                                        height: "18",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://www.instagram.com/radicaleducationofficial/",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/instagram.svg",
                                        width: "16",
                                        height: "16",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/linkedin.svg",
                                        width: "16",
                                        height: "16",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 49,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/whatsapp.svg",
                                        width: "20",
                                        height: "20",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://t.me/radicaleducation",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/teligram.svg",
                                        width: "18",
                                        height: "18",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 55,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://www.youtube.com/@radicaleducationofficial",
                                    target: "_blank",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                        src: "/images/youtube.svg",
                                        width: "20",
                                        height: "20",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/header/Header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/header/Header.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full sticky top-0 left-0 z-[100]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hdrTop bg-white py-3 lg:bg-[#ffffff] w-full  top-0 left-0 z-[100]",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container px-3 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/",
                                            className: "headerLogo",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                src: "/logo.webp",
                                                alt: "Logo",
                                                width: "145"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 68,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/Header.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden lg:flex items-center gap-3 text-[14px] text-[#121212] topInfo",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-[#121212]",
                                                    href: "mailto:info@radicaleducation.in",
                                                    children: "info@radicaleducation.in"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this),
                                                "|",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-[#121212]",
                                                    href: "tel:+91 9797972465",
                                                    children: "97 97 97 24 65"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 17
                                                }, this),
                                                "|",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/neet-college-predictor",
                                                    className: "text-[#121212] relative",
                                                    children: [
                                                        "NEET COLLEGE PREDICTOR",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-[-5px] top-[-5px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative flex size-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                        lineNumber: 76,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                        lineNumber: 77,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/header/Header.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 17
                                                }, this),
                                                "|",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    className: "text-[#121212]",
                                                    href: "/neet-ug",
                                                    children: "NEET UG"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 17
                                                }, this),
                                                "|",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/neet-webinar",
                                                    className: "text-[#121212] relative",
                                                    children: [
                                                        "NEET WEBINAR",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute right-[-5px] top-[-5px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "relative flex size-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                        lineNumber: 85,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                                        lineNumber: 86,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/header/Header.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/header/Header.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 82,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/header/Header.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 66,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center lg:gap-6 gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "hidden lg:flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://twitter.com/Radical_Edu_",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/twitter.svg",
                                                        width: "16",
                                                        height: "16",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://www.facebook.com/profile.php?id=61556350017734",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/facebook.svg",
                                                        width: "18",
                                                        height: "18",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://www.instagram.com/radicaleducationofficial/",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/instagram.svg",
                                                        width: "16",
                                                        height: "16",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/linkedin.svg",
                                                        width: "16",
                                                        height: "16",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/whatsapp.svg",
                                                        width: "20",
                                                        height: "20",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://t.me/radicaleducation",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/teligram.svg",
                                                        width: "18",
                                                        height: "18",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "https://www.youtube.com/@radicaleducationofficial",
                                                    target: "_blank",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/youtube.svg",
                                                        width: "20",
                                                        height: "20",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/header/Header.tsx",
                                            lineNumber: 93,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "small",
                                                className: "text-white! bg-[#CB1E17]! border-[#CB1E17]! p-0! h-10 w-10 flex justify-center items-center",
                                                rounded: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-youtube text-xl!"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 118,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 117,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/Header.tsx",
                                            lineNumber: 116,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/neet-update",
                                                className: "text-xs py-3 pl-4 pr-10 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]! inline-block",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-nowrap",
                                                        children: "NEET UPDATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/mic.webp",
                                                        width: "40",
                                                        height: "50",
                                                        alt: "",
                                                        className: "absolute right-[-8px] top-0 animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 122,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/Header.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "lg:hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "btnico cursor-pointer relative",
                                                onClick: ()=>setVisible(true),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-bars text-2xl! text-black"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/header/Header.tsx",
                                                    lineNumber: 128,
                                                    columnNumber: 101
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/header/Header.tsx",
                                            lineNumber: 127,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 92,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/Header.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "hdrBtm hidden lg:block bg-[rgba(0,0,0,0.3)] backdrop-blur-[10px] absolute w-full left-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container px-3 py-2 flex items-center justify-between relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "deskMnu",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MainMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        mainMenuData: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mainMenuData"]
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 135,
                                        columnNumber: 38
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 135,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-5 items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                size: "small",
                                                icon: "pi pi-youtube",
                                                label: "YOUTUBE",
                                                className: "text-white! bg-[#CB1E17]! border-[#CB1E17]!",
                                                rounded: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 138,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/neet-update",
                                                className: "text-sm py-2 pl-4 pr-10 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]! flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-center",
                                                        children: "NEET UPDATE"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                        src: "/images/mic.webp",
                                                        width: "50",
                                                        height: "60",
                                                        alt: "",
                                                        className: "absolute right-[-15px] -top-1.5 animate-bounce"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/header/Header.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/header/Header.tsx",
                                                lineNumber: 139,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/header/Header.tsx",
                                        lineNumber: 137,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/header/Header.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/header/Header.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/header/Header.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/header/Header.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$nav$2f$MobileMenu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                visible: visible,
                setVisible: setVisible
            }, void 0, false, {
                fileName: "[project]/src/components/header/Header.tsx",
                lineNumber: 148,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/src/data/footerMenus.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "importantLinks",
    ()=>importantLinks,
    "mbbsAbroad",
    ()=>mbbsAbroad,
    "mbbsIndia",
    ()=>mbbsIndia,
    "quickLinks",
    ()=>quickLinks
]);
const importantLinks = [
    {
        label: 'NEET College Predictor',
        icon: 'pi pi-angle-right',
        url: '/neet-college-predictor'
    },
    {
        label: 'OPEN/CLOSE State Details 2025',
        icon: 'pi pi-angle-right',
        url: '/open-close-state-2025'
    },
    {
        label: 'Registration & Security Charges For NEET UG',
        icon: 'pi pi-angle-right',
        url: '/neet-registration-fee'
    },
    {
        label: 'State Wise PG Reservation After UG',
        icon: 'pi pi-angle-right',
        url: '/pg-reservation'
    },
    {
        label: 'NEET UG BOND 2025',
        icon: 'pi pi-angle-right',
        url: '/neet-ug-bond-2025'
    },
    {
        label: 'List Your Institute With Us',
        icon: 'pi pi-angle-right',
        url: '/list-your-institute'
    }
];
const quickLinks = [
    {
        label: 'About Us',
        icon: 'pi pi-angle-right',
        url: '/about-us'
    },
    {
        label: 'Blogs',
        icon: 'pi pi-angle-right',
        url: '/blogs'
    },
    {
        label: 'Career',
        icon: 'pi pi-angle-right',
        url: '/careers'
    },
    {
        label: 'Privacy Policy',
        icon: 'pi pi-angle-right',
        url: '/privacy-policy'
    },
    {
        label: 'Refund Policy',
        icon: 'pi pi-angle-right',
        url: '/refund-policy'
    },
    {
        label: 'Terms & Condition',
        icon: 'pi pi-angle-right',
        url: '/terms-condition'
    },
    {
        label: 'Contact Us',
        icon: 'pi pi-angle-right',
        url: '/contact-us'
    }
];
const mbbsIndia = [
    {
        label: 'MBBS In Andhra Pradesh',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Arunachal Pradesh',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Assam',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Bihar',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Chhattisgarh',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Goa',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Gujarat',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Haryana',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Himachal Pradesh',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Jammu And Kashmir',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Jharkhand',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Karnataka',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Kerala',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Madhya Pradesh',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Maharashtra',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Manipur',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Meghalaya',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Mizoram',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Nagaland',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Odisha',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Punjab',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Rajasthan',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Sikkim',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Tamil Nadu',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Telangana',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Tripura',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Uttar Pradesh',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In Uttarakhand',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    },
    {
        label: 'MBBS In West Bengal',
        icon: 'pi pi-angle-right',
        url: '/blogs/'
    }
];
const mbbsAbroad = [
    {
        label: 'MBBS In Russia',
        icon: 'pi pi-angle-right',
        url: '/mbbs-abroad-admission/russia'
    },
    {
        label: 'MBBS In Kazakhstan',
        icon: 'pi pi-angle-right',
        url: '/mbbs-abroad-admission/kazakhstan'
    },
    {
        label: 'MBBS In Nepal',
        icon: 'pi pi-angle-right',
        url: '/mbbs-abroad-admission/nepal'
    },
    {
        label: 'MBBS In Singapore',
        icon: 'pi pi-angle-right',
        url: '/mbbs-abroad-admission/singapore'
    },
    {
        label: 'MBBS In Georgia',
        icon: 'pi pi-angle-right',
        url: '/mbbs-abroad-admission/georgia'
    },
    {
        label: 'MBBS In Uzbekistan',
        icon: 'pi pi-angle-right',
        url: '/mbbs-abroad-admission/uzbekistan'
    },
    {
        label: 'MBBS In Bangladesh',
        icon: 'pi pi-angle-right',
        url: '/mbbs-abroad-admission/bangladesh'
    }
];
}),
"[project]/src/components/footer/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footerMenus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/footerMenus.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/image/image.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function Footer() {
    const [showAll, setShowAll] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleItems = showAll ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footerMenus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mbbsIndia"] : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footerMenus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mbbsIndia"].slice(0, 14);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-16 bg-[#DFF1FF]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container lg:px-3 pl-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-[#4A4A4A]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/",
                                        className: "",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                            src: "/logo.webp",
                                            alt: "Logo",
                                            width: "180"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm my-6 pb-6 border-b border-[#0B2E3C]",
                                        children: "Invite your friends and unlock exclusive benefits—earn more with every successful referral. Invite your friends and unlock exclusive benefits—earn more with every successful referral."
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 24,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                    src: "/images/iso.webp",
                                                    alt: "ISO",
                                                    width: "60",
                                                    height: "60"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-[#0B2E3C] leading-3",
                                                children: [
                                                    "Radical Education",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 84
                                                    }, this),
                                                    "is an ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-semibold",
                                                        children: "ISO 9001:2015"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 96
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 31,
                                                        columnNumber: 156
                                                    }, this),
                                                    "certified company"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 31,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 text-[#005A8B]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                target: "_blank",
                                                href: "https://twitter.com/Radical_Edu_",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-twitter"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 34,
                                                    columnNumber: 79
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 34,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                target: "_blank",
                                                href: "https://www.facebook.com/profile.php?id=61556350017734",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-facebook"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 35,
                                                    columnNumber: 101
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                target: "_blank",
                                                href: "https://www.instagram.com/radicaleducationofficial/",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-instagram"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 98
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 36,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                target: "_blank",
                                                href: "https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-linkedin"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 37,
                                                    columnNumber: 131
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 37,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                target: "_blank",
                                                href: "https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-whatsapp"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 38,
                                                    columnNumber: 100
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 38,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                target: "_blank",
                                                href: "https://t.me/radicaleducation",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-telegram"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 39,
                                                    columnNumber: 76
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 39,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                target: "_blank",
                                                href: "https://www.youtube.com/@radicaleducationofficial",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-youtube"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 40,
                                                    columnNumber: 96
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 40,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-black mb-3",
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 mb-6",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footerMenus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["importantLinks"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.url || '#',
                                                    className: "flex items-center gap-1 text-sm transition text-nowrap",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: item.icon || 'pi pi-angle-right'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                                            lineNumber: 53,
                                                            columnNumber: 23
                                                        }, this),
                                                        item.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 46,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-black mb-3",
                                        children: "Contact Us"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "pi pi-phone"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 62,
                                                        columnNumber: 19
                                                    }, this),
                                                    "97 97 97 24 65"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "pi pi-envelope"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 66,
                                                        columnNumber: 19
                                                    }, this),
                                                    "info@radicaleducation.in"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 65,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: "pi pi-map-marker mt-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: [
                                                            "C-56/30, 3rd Floor, Sector-62",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                                lineNumber: 72,
                                                                columnNumber: 50
                                                            }, this),
                                                            "Noida, Uttar Pradesh"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 69,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 60,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 44,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:pl-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-black mb-3",
                                        children: "Quick Links"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 80,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 mb-6",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footerMenus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["quickLinks"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.url || '#',
                                                    className: "flex items-center gap-1 text-sm transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: item.icon || 'pi pi-angle-right'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                                            lineNumber: 88,
                                                            columnNumber: 23
                                                        }, this),
                                                        item.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-black mb-3",
                                        children: "MBBS Abroad"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 94,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footerMenus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mbbsAbroad"].map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.url || '#',
                                                    className: "flex items-center gap-1 text-sm transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: item.icon || 'pi pi-angle-right'
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                                            lineNumber: 102,
                                                            columnNumber: 23
                                                        }, this),
                                                        item.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 98,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 97,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:pl-20",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-semibold text-black mb-3",
                                        children: "MBBS India"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: visibleItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: item.url || "#",
                                                    className: "flex items-center gap-1 text-sm transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: item.icon || "pi pi-angle-right"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                                            lineNumber: 119,
                                                            columnNumber: 23
                                                        }, this),
                                                        item.label
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 21
                                                }, this)
                                            }, index, false, {
                                                fileName: "[project]/src/components/footer/Footer.tsx",
                                                lineNumber: 114,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, this),
                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$footerMenus$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mbbsIndia"].length > 15 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowAll(!showAll),
                                            className: "mt-3 flex items-center gap-2 text-sm font-medium text-black cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: showAll ? "View Less" : "View More"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: `pi text-sm! ${showAll ? "pi-arrow-up-right" : "pi-arrow-down-right"}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/footer/Footer.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/footer/Footer.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/footer/Footer.tsx",
                                        lineNumber: 127,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/footer/Footer.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/footer/Footer.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/footer/Footer.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/footer/Footer.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-white text-center py-6 text-sm bg-[#005A8B]",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Radical Education | BINARAMA. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/footer/Footer.tsx",
                lineNumber: 147,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/footer/Footer.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/components/ScrollEffectProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollEffectProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
function ScrollEffectProvider() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isMounted) return;
        const animationElements = document.querySelectorAll('.imageeffect .wp-block-image, .fadeLeft, .fadeUp, .fadeRight, .fadePopup, .customEffect');
        const check_if_in_view = ()=>{
            const windowHeight = window.innerHeight;
            const windowTop = window.scrollY;
            const windowBottom = windowTop + windowHeight;
            animationElements.forEach((el)=>{
                const element = el;
                const elementTop = element.getBoundingClientRect().top + window.scrollY;
                const elementBottom = elementTop + element.offsetHeight;
                if (elementBottom >= windowTop && elementTop <= windowBottom) {
                    element.classList.add('in-view');
                } else {
                    element.classList.remove('in-view');
                }
            });
        };
        const timeoutId = setTimeout(()=>{
            check_if_in_view();
            window.addEventListener('scroll', check_if_in_view);
            window.addEventListener('resize', check_if_in_view);
        }, 100);
        return ()=>{
            clearTimeout(timeoutId);
            window.removeEventListener('scroll', check_if_in_view);
            window.removeEventListener('resize', check_if_in_view);
        };
    }, [
        pathname,
        isMounted
    ]);
    return null;
}
}),
"[project]/src/components/ClientWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function ClientWrapper({ children }) {
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMounted(true);
    }, []);
    if (!isMounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
}),
"[project]/src/components/EnquireButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnquireButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/dialog/dialog.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/button/button.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/toast/toast.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/inputtext/inputtext.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dropdown$2f$dropdown$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/dropdown/dropdown.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/primereact/image/image.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
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
const sliderData = [
    {
        id: 1,
        title: 'Himalaya Medical College and Hospital',
        date: 'December 19, 2025',
        image: '/images/college-1.webp',
        link: '/college/himalaya-medical'
    },
    {
        id: 2,
        title: 'Radical Institute of Medical Sciences',
        date: 'January 10, 2026',
        image: '/images/college-1.webp',
        link: '/college/radical-medical'
    }
];
const cardsData = [
    {
        id: 1,
        title: 'College Health Report',
        image: '/images/health-report.webp'
    },
    {
        id: 2,
        title: 'Documentation Reinforcement',
        image: '/images/documentation.webp'
    },
    {
        id: 3,
        title: 'Cut-off Anatomy',
        image: '/images/cutoff.webp'
    },
    {
        id: 4,
        title: 'Admission and Counselling Strategy',
        image: '/images/counselling.webp'
    },
    {
        id: 5,
        title: 'Cyclic Alerts',
        image: '/images/alerts.webp'
    },
    {
        id: 6,
        title: 'Dedicated Counsellor',
        image: '/images/counsellor.webp'
    }
];
function EnquireButton() {
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        mobile: '',
        course: ''
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
    const showError = (msg)=>{
        toast.current?.show({
            severity: 'error',
            summary: 'Validation Error',
            detail: msg,
            life: 3000
        });
    };
    const handleSubmit = ()=>{
        if (!form.name.trim()) return showError('Name is required');
        if (!form.email.trim()) return showError('Email is required');
        if (!form.mobile.trim()) return showError('Mobile number is required');
        if (!/^\d{10}$/.test(form.mobile)) {
            return showError('Mobile number must be exactly 10 digits');
        }
        if (!form.course) {
            return showError('Please select a course');
        }
        toast.current?.show({
            severity: 'success',
            summary: 'Enquiry Submitted',
            detail: 'We will contact you shortly',
            life: 3000
        });
        setForm({
            name: '',
            email: '',
            mobile: '',
            course: ''
        });
        setVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                ref: toast
            }, void 0, false, {
                fileName: "[project]/src/components/EnquireButton.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setVisible(true),
                className: "   fixed right-[-70px] top-1/2 z-50   bg-[#CB1E17] text-white tracking-widest   px-6 py-3 rounded-t-2xl shadow-xl   hover:bg-red-600 transition   flex items-center gap-2 text-xs cursor-pointer   ",
                style: {
                    transform: 'translateY(-50%) rotate(-90deg)',
                    transformOrigin: 'center'
                },
                children: [
                    "ENQUIRE NOW",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "pi pi-envelope text-xs!"
                    }, void 0, false, {
                        fileName: "[project]/src/components/EnquireButton.tsx",
                        lineNumber: 151,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/EnquireButton.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
                header: false,
                visible: visible,
                onHide: ()=>setVisible(false),
                modal: true,
                className: "w-[95vw] max-w-[900px] noDialogHeader DialogBodyNoPadding transparentDialog rounded-lg",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid lg:grid-cols-2 grid-cols-1 rounded-lg overflow-hidden relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setVisible(false),
                            className: "btnico absolute right-[10px] top-[10px] cursor-pointer",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "pi pi-times-circle text-xl!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/EnquireButton.tsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/EnquireButton.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:px-6 px-4 lg:py-8 md:py-6 py-4 bg-[#e7fffc]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl font-bold text-black mb-1",
                                                children: [
                                                    "Request a ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[#00CFB2]",
                                                        children: "Callback"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 29
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-black",
                                                children: "Stay Ahead for NEET 2025! Get Expert Guidance & Latest Update."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 168,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-inputgroup",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-inputgroup-addon bg-white!",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-user"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 179,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-float-label",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputText"], {
                                                        id: "name",
                                                        value: form.name,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                name: e.target.value
                                                            }),
                                                        className: "w-full border-l-0! pl-0!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "name",
                                                        className: "text-sm",
                                                        children: "Full Name*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 182,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-inputgroup",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-inputgroup-addon bg-white!",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-envelope"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 199,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-float-label",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputText"], {
                                                        id: "email",
                                                        value: form.email,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                email: e.target.value
                                                            }),
                                                        className: "w-full border-l-0! pl-0!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "email",
                                                        className: "text-sm",
                                                        children: "Email Address*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 202,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 198,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-inputgroup",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-inputgroup-addon bg-white!",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 219,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-float-label",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["InputText"], {
                                                        id: "mobile",
                                                        value: form.mobile,
                                                        keyfilter: "int",
                                                        maxLength: 10,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                mobile: e.target.value.replace(/\D/g, '')
                                                            }),
                                                        className: "w-full border-l-0!",
                                                        style: {
                                                            paddingLeft: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 223,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "mobile",
                                                        className: "text-sm",
                                                        children: "Mobile Number*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 222,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 218,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-inputgroup",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-inputgroup-addon bg-white!",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-book"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 245,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-float-label w-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$dropdown$2f$dropdown$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dropdown"], {
                                                        id: "course",
                                                        value: form.course,
                                                        options: courseOptions,
                                                        onChange: (e)=>setForm({
                                                                ...form,
                                                                course: e.value
                                                            }),
                                                        className: "w-full border-l-0!"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "course",
                                                        className: "text-sm",
                                                        children: "Select Course*"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 244,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            label: "SUBMIT",
                                            icon: "pi pi-arrow-right",
                                            iconPos: "right",
                                            className: "w-full bg-gradient-to-l! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                                            onClick: handleSubmit
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 263,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-2 gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "tel:+919797972465",
                                                    className: "rounded-lg flex items-center gap-2 p-2 w-full bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-9 w-9 flex items-center justify-center rounded-full border-2 border-[#fff]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "pi pi-phone text-white text-[14px]!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 277,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                                lineNumber: 276,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                            lineNumber: 275,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold text-sm",
                                                                    children: "+919797972465"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 281,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-black text-[10px] text-nowrap",
                                                                    children: "Call for a Consultation!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 282,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 273,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "#",
                                                    className: "rounded-lg flex items-center gap-2 px-2 py-1 w-full bg-gradient-to-l! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "h-9 w-9 flex items-center justify-center rounded-full border-2 border-[#fff]",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                    className: "pi pi-whatsapp text-white text-[18px]!"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 290,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                                lineNumber: 289,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                            lineNumber: 288,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-white font-bold text-xs",
                                                                    children: "NEET 2026 LATEST UPDATES"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 294,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-black text-[8px] text-nowrap",
                                                                    children: "Join Our WhatsApp Channel Now"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 295,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EnquireButton.tsx",
                                lineNumber: 167,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/EnquireButton.tsx",
                            lineNumber: 166,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:px-6 px-4 lg:py-8 md:py-6 py-4 bg-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                                            modules: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                                            ],
                                            navigation: true,
                                            autoplay: {
                                                delay: 3000,
                                                disableOnInteraction: false
                                            },
                                            loop: true,
                                            className: "px-2! flotingFormSlider",
                                            children: sliderData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        className: "",
                                                        href: item.link,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-4 cursor-pointer",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-20 h-14 relative shrink-0 flex items-center",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                                        src: item.image,
                                                                        alt: item.title,
                                                                        className: "object-cover rounded-md"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                                        lineNumber: 318,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 317,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                            className: "font-semibold text-gray-800 mb-1 text-sm md:text-base line-clamp-1",
                                                                            children: item.title
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                                            lineNumber: 326,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-gray-500",
                                                                            children: item.date
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                                            lineNumber: 329,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                                    lineNumber: 325,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                            lineNumber: 316,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 315,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item.id, false, {
                                                    fileName: "[project]/src/components/EnquireButton.tsx",
                                                    lineNumber: 314,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                            lineNumber: 306,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-medium text-gray-900",
                                        children: [
                                            "How Radical Education Supports ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                                className: "hidden sm:block"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 339,
                                                columnNumber: 48
                                            }, this),
                                            "You in Securing Admissions"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 338,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                                        children: cardsData.map((card)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border border-[#00CFB2] rounded-xl px-2 py-3 space-y-2 text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-[56px] relative inline-flex items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Image"], {
                                                            src: card.image,
                                                            alt: card.title,
                                                            className: "object-contain"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/EnquireButton.tsx",
                                                            lineNumber: 351,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-800 text-sm",
                                                        children: card.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                                        lineNumber: 358,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, card.id, true, {
                                                fileName: "[project]/src/components/EnquireButton.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/EnquireButton.tsx",
                                        lineNumber: 344,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/EnquireButton.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/EnquireButton.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/EnquireButton.tsx",
                    lineNumber: 162,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/EnquireButton.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e33b23ea._.js.map