(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/crm/radical/src/app/providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$api$2f$api$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/api/api.esm.js [app-client] (ecmascript)");
'use client';
;
;
;
function Providers(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "b9f13118f837ef062ae91bf45d8655ffa6b2d6e6228d68c183d9a5235b5ae843") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b9f13118f837ef062ae91bf45d8655ffa6b2d6e6228d68c183d9a5235b5ae843";
    }
    const { children } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            ripple: true,
            inputStyle: "outlined"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== children) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$api$2f$api$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PrimeReactProvider"], {
            value: t1,
            children: children
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/app/providers.tsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = children;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/components/nav/MainMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/skeleton/skeleton.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function MainMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "8b89b8d07acddf06ef299bdd2b2f15112efb01d5d4eec0ddacf4586b0a6df01c") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8b89b8d07acddf06ef299bdd2b2f15112efb01d5d4eec0ddacf4586b0a6df01c";
    }
    const { mainMenuData } = t0;
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "MainMenu[useEffect()]": ()=>{
                const timer = setTimeout({
                    "MainMenu[useEffect() > setTimeout()]": ()=>{
                        setLoading(false);
                    }
                }["MainMenu[useEffect() > setTimeout()]"], 500);
                return ()=>clearTimeout(timer);
            }
        })["MainMenu[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] !== loading || $[4] !== mainMenuData) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:flex-row flex-col flex gap-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 77
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 116
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 155
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 194
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 233
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 272
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 311
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$skeleton$2f$skeleton$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Skeleton"], {
                        width: "97px",
                        height: "1rem"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 46,
                        columnNumber: 350
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                lineNumber: 46,
                columnNumber: 23
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex gap-4 firstLVLmnu",
                    children: mainMenuData.map(_MainMenuMainMenuDataMap)
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                    lineNumber: 46,
                    columnNumber: 403
                }, this)
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                lineNumber: 46,
                columnNumber: 398
            }, this)
        }, void 0, false);
        $[3] = loading;
        $[4] = mainMenuData;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_s(MainMenu, "J7PPXooW06IQ11rfabbvgk72KFw=");
_c = MainMenu;
function _MainMenuMainMenuDataMap(level1, i) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "relative group",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: level1.url || "#",
                className: "flex items-center gap-2 px-2 py-2 text-white",
                children: [
                    level1.label,
                    level1.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "pi pi-angle-down text-xs"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 56,
                        columnNumber: 180
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                lineNumber: 56,
                columnNumber: 49
            }, this),
            level1.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "secondLVLmnu absolute left-0 top-full hidden min-w-[220px] bg-white shadow-lg group-hover:block",
                children: level1.items.map(_MainMenuMainMenuDataMapLevel1ItemsMap)
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                lineNumber: 56,
                columnNumber: 259
            }, this)
        ]
    }, i, true, {
        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
        lineNumber: 56,
        columnNumber: 10
    }, this);
}
function _MainMenuMainMenuDataMapLevel1ItemsMap(level2, j) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "group/item",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: level2.url || "#",
                className: "flex items-center justify-between px-4 py-3 text-sm",
                children: [
                    level2.label,
                    level2.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "pi pi-angle-right text-xs"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                        lineNumber: 59,
                        columnNumber: 183
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                lineNumber: 59,
                columnNumber: 45
            }, this),
            level2.items?.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "thirdLVLmnu absolute left-full top-0 hidden min-w-[220px] bg-[#DFF1FF] shadow-lg group-hover/item:block",
                children: level2.items.map(_MainMenuMainMenuDataMapLevel1ItemsMapLevel2ItemsMap)
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
                lineNumber: 59,
                columnNumber: 263
            }, this)
        ]
    }, j, true, {
        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
        lineNumber: 59,
        columnNumber: 10
    }, this);
}
function _MainMenuMainMenuDataMapLevel1ItemsMapLevel2ItemsMap(level3, k) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: level3.url || "#",
            className: "block px-4 py-3 text-sm",
            children: level3.label
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
            lineNumber: 62,
            columnNumber: 22
        }, this)
    }, k, false, {
        fileName: "[project]/crm/radical/src/components/nav/MainMenu.tsx",
        lineNumber: 62,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "MainMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/data/mainMenuData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/components/nav/MobileMenu.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MobileMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$sidebar$2f$sidebar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/sidebar/sidebar.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/image/image.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/data/mainMenuData.ts [app-client] (ecmascript)");
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
function MobileMenu(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(38);
    if ($[0] !== "7156c64356efc7e0a056d32bf6b4e85430905588c232dc72d886f0ca6ca1a493") {
        for(let $i = 0; $i < 38; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7156c64356efc7e0a056d32bf6b4e85430905588c232dc72d886f0ca6ca1a493";
    }
    const { visible, setVisible } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainMenuData"]
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [menuStack, setMenuStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = [
            "Menu"
        ];
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [titleStack, setTitleStack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    const [servicesDropdownOpen, setServicesDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [studyIndiaDropdownOpen, setStudyIndiaDropdownOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t3;
    if ($[3] !== servicesDropdownOpen || $[4] !== studyIndiaDropdownOpen) {
        t3 = ({
            "MobileMenu[openSubMenu]": (item)=>{
                if (item.label === "Services") {
                    setServicesDropdownOpen(!servicesDropdownOpen);
                    return;
                }
                if (item.label === "Study India") {
                    setStudyIndiaDropdownOpen(!studyIndiaDropdownOpen);
                    return;
                }
                setServicesDropdownOpen(false);
                setStudyIndiaDropdownOpen(false);
                if (item.items) {
                    setMenuStack({
                        "MobileMenu[openSubMenu > setMenuStack()]": (prev)=>[
                                ...prev,
                                item.items
                            ]
                    }["MobileMenu[openSubMenu > setMenuStack()]"]);
                    setTitleStack({
                        "MobileMenu[openSubMenu > setTitleStack()]": (prev_0)=>[
                                ...prev_0,
                                item.label
                            ]
                    }["MobileMenu[openSubMenu > setTitleStack()]"]);
                }
            }
        })["MobileMenu[openSubMenu]"];
        $[3] = servicesDropdownOpen;
        $[4] = studyIndiaDropdownOpen;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const openSubMenu = t3;
    let t4;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "MobileMenu[goBack]": ()=>{
                setMenuStack(_MobileMenuGoBackSetMenuStack);
                setTitleStack(_MobileMenuGoBackSetTitleStack);
                setServicesDropdownOpen(false);
                setStudyIndiaDropdownOpen(false);
            }
        })["MobileMenu[goBack]"];
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const goBack = t4;
    let t5;
    if ($[7] !== setVisible) {
        t5 = ({
            "MobileMenu[headerTemplate]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between bg-[#f1f1f1] w-full py-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-xl font-bold text-blue-600",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                src: "/logo.webp",
                                alt: "Logo",
                                width: "100"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                lineNumber: 94,
                                columnNumber: 178
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                            lineNumber: 94,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "btnico",
                            onClick: {
                                "MobileMenu[headerTemplate > <button>.onClick]": ()=>{
                                    setVisible(false);
                                    setServicesDropdownOpen(false);
                                    setStudyIndiaDropdownOpen(false);
                                }
                            }["MobileMenu[headerTemplate > <button>.onClick]"],
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "pi pi-times text-xl text-black"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                lineNumber: 100,
                                columnNumber: 61
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                            lineNumber: 94,
                            columnNumber: 234
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                    lineNumber: 94,
                    columnNumber: 43
                }, this)
        })["MobileMenu[headerTemplate]"];
        $[7] = setVisible;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    const headerTemplate = t5;
    let t6;
    if ($[9] !== setVisible) {
        t6 = ({
            "MobileMenu[handleSidebarHide]": ()=>{
                setVisible(false);
                setServicesDropdownOpen(false);
                setStudyIndiaDropdownOpen(false);
            }
        })["MobileMenu[handleSidebarHide]"];
        $[9] = setVisible;
        $[10] = t6;
    } else {
        t6 = $[10];
    }
    const handleSidebarHide = t6;
    const t7 = `translateX(-${(menuStack.length - 1) * 100}%)`;
    let t8;
    if ($[11] !== t7) {
        t8 = {
            transform: t7
        };
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== menuStack || $[14] !== openSubMenu || $[15] !== servicesDropdownOpen || $[16] !== setVisible || $[17] !== studyIndiaDropdownOpen || $[18] !== titleStack) {
        let t10;
        if ($[20] !== openSubMenu || $[21] !== servicesDropdownOpen || $[22] !== setVisible || $[23] !== studyIndiaDropdownOpen || $[24] !== titleStack) {
            t10 = ({
                "MobileMenu[menuStack.map()]": (menuLevel, levelIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mobile-menu-level",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-4 py-3 bg-[#005A8B]",
                                children: [
                                    levelIndex > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: goBack,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "pi pi-arrow-left text-lg text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                            lineNumber: 139,
                                            columnNumber: 227
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 139,
                                        columnNumber: 202
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-semibold text-white",
                                        children: titleStack[levelIndex]
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                        lineNumber: 139,
                                        columnNumber: 290
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                lineNumber: 139,
                                columnNumber: 119
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "divide-y divide-[#eee]",
                                children: menuLevel.map({
                                    "MobileMenu[menuStack.map() > menuLevel.map()]": (item_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-gray-100 active:bg-gray-200 transition-colors duration-200",
                                                    onClick: {
                                                        "MobileMenu[menuStack.map() > menuLevel.map() > <div>.onClick]": ()=>item_0.items ? openSubMenu(item_0) : null
                                                    }["MobileMenu[menuStack.map() > menuLevel.map() > <div>.onClick]"],
                                                    children: [
                                                        item_0.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: item_0.url,
                                                            onClick: {
                                                                "MobileMenu[menuStack.map() > menuLevel.map() > <Link>.onClick]": ()=>{
                                                                    setVisible(false);
                                                                    setServicesDropdownOpen(false);
                                                                    setStudyIndiaDropdownOpen(false);
                                                                }
                                                            }["MobileMenu[menuStack.map() > menuLevel.map() > <Link>.onClick]"],
                                                            className: "flex-1 text-[14px] hover:text-blue-600 active:text-blue-700 transition-colors duration-200",
                                                            children: item_0.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 99
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "flex-1 text-[14px]",
                                                            children: item_0.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 215
                                                        }, this),
                                                        item_0.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            className: `pi transition-all duration-200 hover:scale-110 hover:text-[#005A8B] ${item_0.label === "Services" && servicesDropdownOpen ? "pi-chevron-up" : item_0.label === "Services" ? "pi-chevron-down" : item_0.label === "Study India" && studyIndiaDropdownOpen ? "pi-chevron-up" : item_0.label === "Study India" ? "pi-chevron-down" : "pi-angle-right"}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 291
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 99
                                                }, this),
                                                item_0.label === "Services" && item_0.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `overflow-hidden transition-all duration-300 ease-in-out ${servicesDropdownOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 border-t border-gray-200",
                                                        children: item_0.items.map({
                                                            "MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)()]": (subItem, subIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border-b border-gray-100 last:border-b-0",
                                                                    children: subItem.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: subItem.url,
                                                                        onClick: {
                                                                            "MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <Link>.onClick]": ()=>{
                                                                                setVisible(false);
                                                                                setServicesDropdownOpen(false);
                                                                                setStudyIndiaDropdownOpen(false);
                                                                            }
                                                                        }["MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <Link>.onClick]"],
                                                                        className: "block px-6 py-3 text-[13px] text-gray-700 hover:text-[#005A8B] hover:bg-white active:bg-gray-100 transition-all duration-200",
                                                                        children: subItem.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 199
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white active:bg-gray-100 transition-colors duration-200",
                                                                        onClick: {
                                                                            "MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <div>.onClick]": ()=>subItem.items ? openSubMenu(subItem) : null
                                                                        }["MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <div>.onClick]"],
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex-1 text-[13px] text-gray-700",
                                                                                children: subItem.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 109
                                                                            }, this),
                                                                            subItem.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "pi pi-angle-right text-xs text-gray-500 transition-all duration-200 hover:scale-110 hover:text-[#005A8B]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 157,
                                                                                columnNumber: 200
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 272
                                                                    }, this)
                                                                }, subIndex, false, {
                                                                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 111
                                                                }, this)
                                                        }["MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)()]"])
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                        lineNumber: 148,
                                                        columnNumber: 856
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 705
                                                }, this),
                                                item_0.label === "Study India" && item_0.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `overflow-hidden transition-all duration-300 ease-in-out ${studyIndiaDropdownOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-gray-50 border-t border-gray-200",
                                                        children: item_0.items.map({
                                                            "MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)()]": (subItem_0, subIndex_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "border-b border-gray-100 last:border-b-0",
                                                                    children: subItem_0.url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: subItem_0.url,
                                                                        onClick: {
                                                                            "MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <Link>.onClick]": ()=>{
                                                                                setVisible(false);
                                                                                setStudyIndiaDropdownOpen(false);
                                                                                setServicesDropdownOpen(false);
                                                                            }
                                                                        }["MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <Link>.onClick]"],
                                                                        className: "block px-6 py-3 text-[13px] text-gray-700 hover:text-[#005A8B] hover:bg-white active:bg-gray-100 transition-all duration-200",
                                                                        children: subItem_0.label
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                        lineNumber: 159,
                                                                        columnNumber: 207
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "flex items-center justify-between px-6 py-3 cursor-pointer hover:bg-white active:bg-gray-100 transition-colors duration-200",
                                                                        onClick: {
                                                                            "MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <div>.onClick]": ()=>subItem_0.items ? openSubMenu(subItem_0) : null
                                                                        }["MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)() > <div>.onClick]"],
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "flex-1 text-[13px] text-gray-700",
                                                                                children: subItem_0.label
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 167,
                                                                                columnNumber: 109
                                                                            }, this),
                                                                            subItem_0.items && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: "pi pi-angle-right text-xs text-gray-500 transition-all duration-200 hover:scale-110 hover:text-[#005A8B]"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                                lineNumber: 167,
                                                                                columnNumber: 204
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                        lineNumber: 165,
                                                                        columnNumber: 274
                                                                    }, this)
                                                                }, subIndex_0, false, {
                                                                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                                    lineNumber: 159,
                                                                    columnNumber: 115
                                                                }, this)
                                                        }["MobileMenu[menuStack.map() > menuLevel.map() > (anonymous)()]"])
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 306
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                                    lineNumber: 158,
                                                    columnNumber: 153
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                            lineNumber: 140,
                                            columnNumber: 83
                                        }, this)
                                }["MobileMenu[menuStack.map() > menuLevel.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                                lineNumber: 139,
                                columnNumber: 378
                            }, this)
                        ]
                    }, levelIndex, true, {
                        fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                        lineNumber: 139,
                        columnNumber: 67
                    }, this)
            })["MobileMenu[menuStack.map()]"];
            $[20] = openSubMenu;
            $[21] = servicesDropdownOpen;
            $[22] = setVisible;
            $[23] = studyIndiaDropdownOpen;
            $[24] = titleStack;
            $[25] = t10;
        } else {
            t10 = $[25];
        }
        t9 = menuStack.map(t10);
        $[13] = menuStack;
        $[14] = openSubMenu;
        $[15] = servicesDropdownOpen;
        $[16] = setVisible;
        $[17] = studyIndiaDropdownOpen;
        $[18] = titleStack;
        $[19] = t9;
    } else {
        t9 = $[19];
    }
    let t10;
    if ($[26] !== t8 || $[27] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex-1 overflow-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mobile-menu-wrapper",
                    style: t8,
                    children: t9
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                    lineNumber: 193,
                    columnNumber: 91
                }, this)
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                lineNumber: 193,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
            lineNumber: 193,
            columnNumber: 11
        }, this);
        $[26] = t8;
        $[27] = t9;
        $[28] = t10;
    } else {
        t10 = $[28];
    }
    let t11;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "small",
            icon: "pi pi-youtube",
            label: "YOUTUBE",
            className: "text-white! bg-[#CB1E17]! border-[#CB1E17]!",
            rounded: true
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
            lineNumber: 202,
            columnNumber: 11
        }, this);
        $[29] = t11;
    } else {
        t11 = $[29];
    }
    let t12;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-3 bg-[#f1f1f1] flex flex-col gap-2",
            children: [
                t11,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "pl-4 h-[43px] pr-12 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "NEET UPDATE"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                            lineNumber: 209,
                            columnNumber: 225
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: "/images/mic.webp",
                            width: "40",
                            height: "50",
                            alt: "",
                            className: "absolute right-[-5px] top-[2px] animate-bounce"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                            lineNumber: 209,
                            columnNumber: 249
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                    lineNumber: 209,
                    columnNumber: 70
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
            lineNumber: 209,
            columnNumber: 11
        }, this);
        $[30] = t12;
    } else {
        t12 = $[30];
    }
    let t13;
    if ($[31] !== t10) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                t10,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
            lineNumber: 216,
            columnNumber: 11
        }, this);
        $[31] = t10;
        $[32] = t13;
    } else {
        t13 = $[32];
    }
    let t14;
    if ($[33] !== handleSidebarHide || $[34] !== headerTemplate || $[35] !== t13 || $[36] !== visible) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$sidebar$2f$sidebar$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sidebar"], {
                visible: visible,
                onHide: handleSidebarHide,
                position: "left",
                className: "w-[280px] mobile-sidebar",
                header: headerTemplate,
                showCloseIcon: false,
                children: t13
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/nav/MobileMenu.tsx",
                lineNumber: 224,
                columnNumber: 13
            }, this)
        }, void 0, false);
        $[33] = handleSidebarHide;
        $[34] = headerTemplate;
        $[35] = t13;
        $[36] = visible;
        $[37] = t14;
    } else {
        t14 = $[37];
    }
    return t14;
}
_s(MobileMenu, "Uj5Enu9AWYdWa0saPiNhyn3Z0SU=");
_c = MobileMenu;
function _MobileMenuGoBackSetTitleStack(prev_2) {
    return prev_2.slice(0, -1);
}
function _MobileMenuGoBackSetMenuStack(prev_1) {
    return prev_1.slice(0, -1);
}
var _c;
__turbopack_context__.k.register(_c, "MobileMenu");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/components/header/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/image/image.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$components$2f$nav$2f$MainMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/components/nav/MainMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$components$2f$nav$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/components/nav/MobileMenu.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/data/mainMenuData.ts [app-client] (ecmascript)");
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
function Header() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "a8d26d776ea534199366b255ec94c03d2ee4cb7a288c6805e2e6aaa1e6f70fbd") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a8d26d776ea534199366b255ec94c03d2ee4cb7a288c6805e2e6aaa1e6f70fbd";
    }
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-[#121212]",
            href: "mailto:info@radicaleducation.in",
            children: "info@radicaleducation.in"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 22,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-[#121212]",
            href: "tel:+91 9797972465",
            children: "+91 9797972465"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 29,
            columnNumber: 10
        }, this);
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/neet-college-predictor",
            className: "text-[#121212] relative",
            children: [
                "NEET COLLEGE PREDICTOR",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-[-5px] top-[-5px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex size-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 194
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 36,
                                columnNumber: 299
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 36,
                        columnNumber: 155
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 36,
                    columnNumber: 105
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-[#121212]",
            href: "/neet-ug",
            children: "NEET UG"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    let t4;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/neet-webinar",
            className: "text-[#121212] relative",
            children: [
                "NEET WEBINAR",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-[-5px] top-[-5px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex size-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 174
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 50,
                                columnNumber: 279
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 50,
                        columnNumber: 135
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 50,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 50,
            columnNumber: 10
        }, this);
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://twitter.com/Radical_Edu_",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/twitter.svg",
                width: "16",
                height: "16",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 57,
                columnNumber: 72
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://www.facebook.com/profile.php?id=61556350017734",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/facebook.svg",
                width: "18",
                height: "18",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 64,
                columnNumber: 94
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://www.instagram.com/radicaleducationofficial/",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/instagram.svg",
                width: "16",
                height: "16",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 71,
                columnNumber: 91
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 71,
            columnNumber: 10
        }, this);
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    let t8;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/linkedin.svg",
                width: "16",
                height: "16",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 78,
                columnNumber: 124
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[9] = t8;
    } else {
        t8 = $[9];
    }
    let t9;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/whatsapp.svg",
                width: "20",
                height: "20",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 85,
                columnNumber: 93
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 85,
            columnNumber: 10
        }, this);
        $[10] = t9;
    } else {
        t9 = $[10];
    }
    let t10;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://t.me/radicaleducation",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/teligram.svg",
                width: "18",
                height: "18",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 92,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "bg-white px-3 text-center py-3 lg:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 justify-center text-xs",
                children: [
                    t0,
                    "|",
                    t1,
                    "|",
                    t2,
                    "|",
                    t3,
                    "|",
                    t4,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 w-full",
                        children: [
                            t5,
                            t6,
                            t7,
                            t8,
                            t9,
                            t10,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://www.youtube.com/@radicaleducationofficial",
                                target: "_blank",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                    src: "/images/youtube.svg",
                                    width: "20",
                                    height: "20",
                                    alt: ""
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                    lineNumber: 99,
                                    columnNumber: 325
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 99,
                                columnNumber: 246
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 99,
                        columnNumber: 158
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 99,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[12] = t11;
    } else {
        t11 = $[12];
    }
    let t12;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/",
            className: "headerLogo",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/logo.webp",
                alt: "Logo",
                width: "145"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 106,
                columnNumber: 49
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[13] = t12;
    } else {
        t12 = $[13];
    }
    let t13;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-[#121212]",
            href: "mailto:info@radicaleducation.in",
            children: "info@radicaleducation.in"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[14] = t13;
    } else {
        t13 = $[14];
    }
    let t14;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-[#121212]",
            href: "tel:+91 9797972465",
            children: "+91 9797972465"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 120,
            columnNumber: 11
        }, this);
        $[15] = t14;
    } else {
        t14 = $[15];
    }
    let t15;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "/neet-college-predictor",
            className: "text-[#121212] relative",
            children: [
                "NEET COLLEGE PREDICTOR",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute right-[-5px] top-[-5px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "relative flex size-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 127,
                                columnNumber: 195
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 127,
                                columnNumber: 300
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 127,
                        columnNumber: 156
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 127,
                    columnNumber: 106
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 127,
            columnNumber: 11
        }, this);
        $[16] = t15;
    } else {
        t15 = $[16];
    }
    let t16;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "text-[#121212]",
            href: "/neet-ug",
            children: "NEET UG"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 134,
            columnNumber: 11
        }, this);
        $[17] = t16;
    } else {
        t16 = $[17];
    }
    let t17;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-6",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden lg:flex items-center gap-3 text-[14px] text-[#121212] topInfo",
                    children: [
                        t13,
                        "|",
                        t14,
                        "|",
                        t15,
                        "|",
                        t16,
                        "|",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/neet-webinar",
                            className: "text-[#121212] relative",
                            children: [
                                "NEET WEBINAR",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute right-[-5px] top-[-5px]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative flex size-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FF0000] opacity-75"
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                                lineNumber: 141,
                                                columnNumber: 331
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "relative inline-flex size-2 rounded-full bg-[#FF0000]"
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                                lineNumber: 141,
                                                columnNumber: 436
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                        lineNumber: 141,
                                        columnNumber: 292
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                    lineNumber: 141,
                                    columnNumber: 242
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                            lineNumber: 141,
                            columnNumber: 167
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 141,
                    columnNumber: 57
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 141,
            columnNumber: 11
        }, this);
        $[18] = t17;
    } else {
        t17 = $[18];
    }
    let t18;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://twitter.com/Radical_Edu_",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/twitter.svg",
                width: "16",
                height: "16",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 148,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[19] = t18;
    } else {
        t18 = $[19];
    }
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://www.facebook.com/profile.php?id=61556350017734",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/facebook.svg",
                width: "18",
                height: "18",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 155,
                columnNumber: 95
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[20] = t19;
    } else {
        t19 = $[20];
    }
    let t20;
    if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://www.instagram.com/radicaleducationofficial/",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/instagram.svg",
                width: "16",
                height: "16",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 162,
                columnNumber: 92
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[21] = t20;
    } else {
        t20 = $[21];
    }
    let t21;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://www.linkedin.com/company/radical-education-official/about/?viewAsMember=true",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/linkedin.svg",
                width: "16",
                height: "16",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 169,
                columnNumber: 125
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 169,
            columnNumber: 11
        }, this);
        $[22] = t21;
    } else {
        t21 = $[22];
    }
    let t22;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://whatsapp.com/channel/0029Vajjreq0G0Xmr5ILp81P",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/whatsapp.svg",
                width: "20",
                height: "20",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 176,
                columnNumber: 94
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 176,
            columnNumber: 11
        }, this);
        $[23] = t22;
    } else {
        t22 = $[23];
    }
    let t23;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://t.me/radicaleducation",
            target: "_blank",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                src: "/images/teligram.svg",
                width: "18",
                height: "18",
                alt: ""
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 183,
                columnNumber: 70
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 183,
            columnNumber: 11
        }, this);
        $[24] = t23;
    } else {
        t23 = $[24];
    }
    let t24;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hidden lg:flex items-center gap-4",
            children: [
                t18,
                t19,
                t20,
                t21,
                t22,
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "https://www.youtube.com/@radicaleducationofficial",
                    target: "_blank",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                        src: "/images/youtube.svg",
                        width: "20",
                        height: "20",
                        alt: ""
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 190,
                        columnNumber: 171
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 190,
                    columnNumber: 92
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, this);
        $[25] = t24;
    } else {
        t24 = $[25];
    }
    let t25;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                size: "small",
                className: "text-white! bg-[#CB1E17]! border-[#CB1E17]! p-0! h-10 w-10 flex justify-center items-center",
                rounded: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "pi pi-youtube text-xl!"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 197,
                    columnNumber: 178
                }, this)
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 197,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[26] = t25;
    } else {
        t25 = $[26];
    }
    let t26;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "/neet-update",
                className: "text-xs py-3 pl-4 pr-10 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]! inline-block",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-nowrap",
                        children: "NEET UPDATE"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 204,
                        columnNumber: 228
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                        src: "/images/mic.webp",
                        width: "40",
                        height: "50",
                        alt: "",
                        className: "absolute right-[-8px] top-0 animate-bounce"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 204,
                        columnNumber: 276
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 204,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[27] = t26;
    } else {
        t26 = $[27];
    }
    let t27;
    if ($[28] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "hdrTop bg-white py-3 lg:bg-[#ffffff] w-full  top-0 left-0 z-[100]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container px-3 flex items-center justify-between",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center lg:gap-6 gap-3",
                        children: [
                            t24,
                            t25,
                            t26,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btnico cursor-pointer relative",
                                    onClick: {
                                        "Header[<button>.onClick]": ()=>setVisible(true)
                                    }["Header[<button>.onClick]"],
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "pi pi-bars text-2xl! text-black"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                        lineNumber: 213,
                                        columnNumber: 44
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                    lineNumber: 211,
                                    columnNumber: 261
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 211,
                                columnNumber: 234
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 211,
                        columnNumber: 169
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 211,
                columnNumber: 98
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 211,
            columnNumber: 11
        }, this);
        $[28] = t27;
    } else {
        t27 = $[28];
    }
    let t28;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "deskMnu",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$components$2f$nav$2f$MainMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                mainMenuData: __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$data$2f$mainMenuData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainMenuData"]
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                lineNumber: 220,
                columnNumber: 36
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[29] = t28;
    } else {
        t28 = $[29];
    }
    let t29;
    if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            size: "small",
            icon: "pi pi-youtube",
            label: "YOUTUBE",
            className: "text-white! bg-[#CB1E17]! border-[#CB1E17]!",
            rounded: true
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[30] = t29;
    } else {
        t29 = $[30];
    }
    let t30;
    if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "w-full sticky top-0 left-0 z-[100]",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "hdrBtm hidden lg:block bg-[rgba(0,0,0,0.3)] backdrop-blur-[10px] absolute w-full left-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container px-3 py-2 flex items-center justify-between relative",
                        children: [
                            t28,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-5 items-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3",
                                    children: [
                                        t29,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/neet-update",
                                            className: "text-sm py-2 pl-4 pr-10 rounded-full cursor-pointer relative text-white! bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]! inline-block",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-center",
                                                    children: "NEET UPDATE"
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 529
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                                                    src: "/images/mic.webp",
                                                    width: "50",
                                                    height: "60",
                                                    alt: "",
                                                    className: "absolute right-[-15px] top-0 animate-bounce"
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                                    lineNumber: 234,
                                                    columnNumber: 577
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                            lineNumber: 234,
                                            columnNumber: 339
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                    lineNumber: 234,
                                    columnNumber: 306
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                                lineNumber: 234,
                                columnNumber: 265
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                        lineNumber: 234,
                        columnNumber: 180
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 234,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/header/Header.tsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[31] = t30;
    } else {
        t30 = $[31];
    }
    let t31;
    if ($[32] !== visible) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t11,
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$components$2f$nav$2f$MobileMenu$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    visible: visible,
                    setVisible: setVisible
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/header/Header.tsx",
                    lineNumber: 241,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true);
        $[32] = visible;
        $[33] = t31;
    } else {
        t31 = $[33];
    }
    return t31;
}
_s(Header, "OGsIWlGlwYpVUqIrDReJ1GWx7rw=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/components/ScrollEffectProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollEffectProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ScrollEffectProvider() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(8);
    if ($[0] !== "49a3e2dffb4d866fb88dfef4b433d1a09557d91b50fa50e1f8063196ca857143") {
        for(let $i = 0; $i < 8; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49a3e2dffb4d866fb88dfef4b433d1a09557d91b50fa50e1f8063196ca857143";
    }
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "ScrollEffectProvider[useEffect()]": ()=>{
                setIsMounted(true);
            }
        })["ScrollEffectProvider[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] !== isMounted) {
        t2 = ({
            "ScrollEffectProvider[useEffect()]": ()=>{
                if (!isMounted) {
                    return;
                }
                const animationElements = document.querySelectorAll(".imageeffect .wp-block-image, .fadeLeft, .fadeUp, .fadeRight, .fadePopup, .customEffect");
                const check_if_in_view = {
                    "ScrollEffectProvider[useEffect() > check_if_in_view]": ()=>{
                        const windowHeight = window.innerHeight;
                        const windowTop = window.scrollY;
                        const windowBottom = windowTop + windowHeight;
                        animationElements.forEach({
                            "ScrollEffectProvider[useEffect() > check_if_in_view > animationElements.forEach()]": (el)=>{
                                const element = el;
                                const elementTop = element.getBoundingClientRect().top + window.scrollY;
                                const elementBottom = elementTop + element.offsetHeight;
                                if (elementBottom >= windowTop && elementTop <= windowBottom) {
                                    element.classList.add("in-view");
                                } else {
                                    element.classList.remove("in-view");
                                }
                            }
                        }["ScrollEffectProvider[useEffect() > check_if_in_view > animationElements.forEach()]"]);
                    }
                }["ScrollEffectProvider[useEffect() > check_if_in_view]"];
                const timeoutId = setTimeout({
                    "ScrollEffectProvider[useEffect() > setTimeout()]": ()=>{
                        check_if_in_view();
                        window.addEventListener("scroll", check_if_in_view);
                        window.addEventListener("resize", check_if_in_view);
                    }
                }["ScrollEffectProvider[useEffect() > setTimeout()]"], 100);
                return ()=>{
                    clearTimeout(timeoutId);
                    window.removeEventListener("scroll", check_if_in_view);
                    window.removeEventListener("resize", check_if_in_view);
                };
            }
        })["ScrollEffectProvider[useEffect()]"];
        $[3] = isMounted;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== isMounted || $[6] !== pathname) {
        t3 = [
            pathname,
            isMounted
        ];
        $[5] = isMounted;
        $[6] = pathname;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    return null;
}
_s(ScrollEffectProvider, "vBUUMTT5VQXiwKnQjd+hLlaSYzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollEffectProvider;
var _c;
__turbopack_context__.k.register(_c, "ScrollEffectProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/components/ClientWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ClientWrapper(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(5);
    if ($[0] !== "466c42c825226ad7324651eef3b9a5f67e4bcf134e10017e459ba65c2c07ce12") {
        for(let $i = 0; $i < 5; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "466c42c825226ad7324651eef3b9a5f67e4bcf134e10017e459ba65c2c07ce12";
    }
    const { children } = t0;
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ({
            "ClientWrapper[useEffect()]": ()=>{
                setIsMounted(true);
            }
        })["ClientWrapper[useEffect()]"];
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    if (!isMounted) {
        return null;
    }
    let t3;
    if ($[3] !== children) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
        $[3] = children;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    return t3;
}
_s(ClientWrapper, "h7njlszr1nxUzrk46zHyBTBrvgI=");
_c = ClientWrapper;
var _c;
__turbopack_context__.k.register(_c, "ClientWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/components/EnquireButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnquireButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/dialog/dialog.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/button/button.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/toast/toast.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/inputtext/inputtext.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$dropdown$2f$dropdown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/dropdown/dropdown.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/primereact/image/image.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/swiper/swiper-react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/swiper/modules/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/swiper/modules/navigation.mjs [app-client] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/swiper/modules/autoplay.mjs [app-client] (ecmascript) <export default as Autoplay>");
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
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "2b1174a7774abe58b35c15deeae7e1c0d3058682f6220008478c6803791e436d") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2b1174a7774abe58b35c15deeae7e1c0d3058682f6220008478c6803791e436d";
    }
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const toast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "",
            email: "",
            mobile: "",
            course: ""
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                label: "MBBS INDIA",
                value: "MBBS INDIA"
            },
            {
                label: "MBBS ABROAD",
                value: "MBBS ABROAD"
            },
            {
                label: "BDS INDIA",
                value: "BDS INDIA"
            },
            {
                label: "AYUSH INDIA",
                value: "AYUSH INDIA"
            },
            {
                label: "MD/MS/DNB",
                value: "MD/MS/DNB"
            },
            {
                label: "MBA",
                value: "MBA"
            },
            {
                label: "PGDM",
                value: "PGDM"
            },
            {
                label: "B.TECH",
                value: "B.TECH"
            },
            {
                label: "M.TECH",
                value: "M.TECH"
            },
            {
                label: "OTHERS",
                value: "OTHERS"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const courseOptions = t1;
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "EnquireButton[showError]": (msg)=>{
                toast.current?.show({
                    severity: "error",
                    summary: "Validation Error",
                    detail: msg,
                    life: 3000
                });
            }
        })["EnquireButton[showError]"];
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const showError = t2;
    let t3;
    if ($[4] !== form.course || $[5] !== form.email || $[6] !== form.mobile || $[7] !== form.name) {
        t3 = ({
            "EnquireButton[handleSubmit]": ()=>{
                if (!form.name.trim()) {
                    return showError("Name is required");
                }
                if (!form.email.trim()) {
                    return showError("Email is required");
                }
                if (!form.mobile.trim()) {
                    return showError("Mobile number is required");
                }
                if (!/^\d{10}$/.test(form.mobile)) {
                    return showError("Mobile number must be exactly 10 digits");
                }
                if (!form.course) {
                    return showError("Please select a course");
                }
                toast.current?.show({
                    severity: "success",
                    summary: "Enquiry Submitted",
                    detail: "We will contact you shortly",
                    life: 3000
                });
                setForm({
                    name: "",
                    email: "",
                    mobile: "",
                    course: ""
                });
                setVisible(false);
            }
        })["EnquireButton[handleSubmit]"];
        $[4] = form.course;
        $[5] = form.email;
        $[6] = form.mobile;
        $[7] = form.name;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleSubmit = t3;
    let t4;
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$toast$2f$toast$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Toast"], {
            ref: toast
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 178,
            columnNumber: 10
        }, this);
        t5 = ({
            "EnquireButton[<button>.onClick]": ()=>setVisible(true)
        })["EnquireButton[<button>.onClick]"];
        $[9] = t4;
        $[10] = t5;
    } else {
        t4 = $[9];
        t5 = $[10];
    }
    let t6;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = {
            transform: "translateY(-50%) rotate(-90deg)",
            transformOrigin: "center"
        };
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t5,
            className: "\r\n          fixed right-[-70px] top-1/2 z-50\r\n          bg-[#CB1E17] text-white tracking-widest\r\n          px-6 py-3 rounded-t-2xl shadow-xl\r\n          hover:bg-red-600 transition\r\n          flex items-center gap-2 text-xs cursor-pointer\r\n        ",
            style: t6,
            children: [
                "ENQUIRE NOW",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "pi pi-envelope text-xs!"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 200,
                    columnNumber: 327
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 200,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = ({
            "EnquireButton[<Dialog>.onHide]": ()=>setVisible(false)
        })["EnquireButton[<Dialog>.onHide]"];
        $[13] = t8;
    } else {
        t8 = $[13];
    }
    let t9;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ({
            "EnquireButton[<button>.onClick]": ()=>setVisible(false)
        })["EnquireButton[<button>.onClick]"];
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: "btnico absolute right-[10px] top-[10px] cursor-pointer",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "pi pi-times-circle text-xl!"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 225,
                columnNumber: 99
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 225,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-3xl font-bold text-black mb-1",
                    children: [
                        "Request a ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[#00CFB2]",
                            children: "Callback"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                            lineNumber: 232,
                            columnNumber: 78
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 232,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-black",
                    children: "Stay Ahead for NEET 2025! Get Expert Guidance & Latest Update."
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 232,
                    columnNumber: 132
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "p-inputgroup-addon bg-white!",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "pi pi-user"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 239,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== form) {
        t13 = ({
            "EnquireButton[<InputText>.onChange]": (e)=>setForm({
                    ...form,
                    name: e.target.value
                })
        })["EnquireButton[<InputText>.onChange]"];
        $[18] = form;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== form.name || $[21] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
            id: "name",
            value: form.name,
            onChange: t13,
            className: "w-full border-l-0! pl-0!"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[20] = form.name;
        $[21] = t13;
        $[22] = t14;
    } else {
        t14 = $[22];
    }
    let t15;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "name",
            className: "text-sm",
            children: "Full Name*"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 268,
            columnNumber: 11
        }, this);
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t14) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-inputgroup",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "p-float-label",
                    children: [
                        t14,
                        t15
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 275,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 275,
            columnNumber: 11
        }, this);
        $[24] = t14;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "p-inputgroup-addon bg-white!",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "pi pi-envelope"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 283,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== form) {
        t18 = ({
            "EnquireButton[<InputText>.onChange]": (e_0)=>setForm({
                    ...form,
                    email: e_0.target.value
                })
        })["EnquireButton[<InputText>.onChange]"];
        $[27] = form;
        $[28] = t18;
    } else {
        t18 = $[28];
    }
    let t19;
    if ($[29] !== form.email || $[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
            id: "email",
            value: form.email,
            onChange: t18,
            className: "w-full border-l-0! pl-0!"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, this);
        $[29] = form.email;
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    let t20;
    if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "email",
            className: "text-sm",
            children: "Email Address*"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[32] = t20;
    } else {
        t20 = $[32];
    }
    let t21;
    if ($[33] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-inputgroup",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "p-float-label",
                    children: [
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 319,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 319,
            columnNumber: 11
        }, this);
        $[33] = t19;
        $[34] = t21;
    } else {
        t21 = $[34];
    }
    let t22;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "p-inputgroup-addon bg-white!",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "pi pi-phone"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 327,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 327,
            columnNumber: 11
        }, this);
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] !== form) {
        t23 = ({
            "EnquireButton[<InputText>.onChange]": (e_1)=>setForm({
                    ...form,
                    mobile: e_1.target.value.replace(/\D/g, "")
                })
        })["EnquireButton[<InputText>.onChange]"];
        $[36] = form;
        $[37] = t23;
    } else {
        t23 = $[37];
    }
    let t24;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = {
            paddingLeft: 0
        };
        $[38] = t24;
    } else {
        t24 = $[38];
    }
    let t25;
    if ($[39] !== form.mobile || $[40] !== t23) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$inputtext$2f$inputtext$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputText"], {
            id: "mobile",
            value: form.mobile,
            keyfilter: "int",
            maxLength: 10,
            onChange: t23,
            className: "w-full border-l-0!",
            style: t24
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 356,
            columnNumber: 11
        }, this);
        $[39] = form.mobile;
        $[40] = t23;
        $[41] = t25;
    } else {
        t25 = $[41];
    }
    let t26;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "mobile",
            className: "text-sm",
            children: "Mobile Number*"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== t25) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-inputgroup",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "p-float-label",
                    children: [
                        t25,
                        t26
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 372,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 372,
            columnNumber: 11
        }, this);
        $[43] = t25;
        $[44] = t27;
    } else {
        t27 = $[44];
    }
    let t28;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "p-inputgroup-addon bg-white!",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                className: "pi pi-book"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 380,
                columnNumber: 58
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 380,
            columnNumber: 11
        }, this);
        $[45] = t28;
    } else {
        t28 = $[45];
    }
    let t29;
    if ($[46] !== form) {
        t29 = ({
            "EnquireButton[<Dropdown>.onChange]": (e_2)=>setForm({
                    ...form,
                    course: e_2.value
                })
        })["EnquireButton[<Dropdown>.onChange]"];
        $[46] = form;
        $[47] = t29;
    } else {
        t29 = $[47];
    }
    let t30;
    if ($[48] !== form.course || $[49] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$dropdown$2f$dropdown$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropdown"], {
            id: "course",
            value: form.course,
            options: courseOptions,
            onChange: t29,
            className: "w-full border-l-0!"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[48] = form.course;
        $[49] = t29;
        $[50] = t30;
    } else {
        t30 = $[50];
    }
    let t31;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "course",
            className: "text-sm",
            children: "Select Course*"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 409,
            columnNumber: 11
        }, this);
        $[51] = t31;
    } else {
        t31 = $[51];
    }
    let t32;
    if ($[52] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-inputgroup",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "p-float-label w-full",
                    children: [
                        t30,
                        t31
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 416,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 416,
            columnNumber: 11
        }, this);
        $[52] = t30;
        $[53] = t32;
    } else {
        t32 = $[53];
    }
    let t33;
    if ($[54] !== handleSubmit) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$button$2f$button$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                label: "SUBMIT",
                icon: "pi pi-arrow-right",
                iconPos: "right",
                className: "w-full bg-gradient-to-l! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                onClick: handleSubmit
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 424,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 424,
            columnNumber: 11
        }, this);
        $[54] = handleSubmit;
        $[55] = t33;
    } else {
        t33 = $[55];
    }
    let t34;
    if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: "tel:+919797972465",
                className: "rounded-lg flex items-center gap-2 p-2 w-full bg-gradient-to-r! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-9 w-9 flex items-center justify-center rounded-full border-2 border-[#fff]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "pi pi-phone text-white text-[14px]!"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                lineNumber: 432,
                                columnNumber: 270
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                            lineNumber: 432,
                            columnNumber: 176
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                        lineNumber: 432,
                        columnNumber: 171
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-white font-bold text-sm",
                                children: "+919797972465"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                lineNumber: 432,
                                columnNumber: 340
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-black text-[10px] text-nowrap",
                                children: "Call for a Consultation!"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                lineNumber: 432,
                                columnNumber: 405
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                        lineNumber: 432,
                        columnNumber: 335
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 432,
                columnNumber: 16
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[56] = t34;
    } else {
        t34 = $[56];
    }
    let t35;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-2",
            children: [
                t34,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "#",
                        className: "rounded-lg flex items-center gap-2 px-2 py-1 w-full bg-gradient-to-l! from-[#00CFB2]! to-[#005A8B]! border-[#00CFB2]!",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-9 w-9 flex items-center justify-center rounded-full border-2 border-[#fff]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: "pi pi-whatsapp text-white text-[18px]!"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                        lineNumber: 439,
                                        columnNumber: 305
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                    lineNumber: 439,
                                    columnNumber: 211
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                lineNumber: 439,
                                columnNumber: 206
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-white font-bold text-xs",
                                        children: "NEET 2026 LATEST UPDATES"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                        lineNumber: 439,
                                        columnNumber: 378
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-black text-[8px] text-nowrap",
                                        children: "Join Our WhatsApp Channel Now"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                        lineNumber: 439,
                                        columnNumber: 454
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                lineNumber: 439,
                                columnNumber: 373
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                        lineNumber: 439,
                        columnNumber: 61
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 439,
                    columnNumber: 56
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 439,
            columnNumber: 11
        }, this);
        $[57] = t35;
    } else {
        t35 = $[57];
    }
    let t36;
    if ($[58] !== t16 || $[59] !== t21 || $[60] !== t27 || $[61] !== t32 || $[62] !== t33) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:px-6 px-4 lg:py-8 md:py-6 py-4 bg-[#e7fffc]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-5",
                children: [
                    t11,
                    t16,
                    t21,
                    t27,
                    t32,
                    t33,
                    t35
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 446,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 446,
            columnNumber: 11
        }, this);
        $[58] = t16;
        $[59] = t21;
        $[60] = t27;
        $[61] = t32;
        $[62] = t33;
        $[63] = t36;
    } else {
        t36 = $[63];
    }
    let t37;
    if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
        t37 = [
            __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
            __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
        ];
        $[64] = t37;
    } else {
        t37 = $[64];
    }
    let t38;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = {
            delay: 3000,
            disableOnInteraction: false
        };
        $[65] = t38;
    } else {
        t38 = $[65];
    }
    let t39;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Swiper"], {
                modules: t37,
                navigation: true,
                autoplay: t38,
                loop: true,
                className: "px-2! flotingFormSlider",
                children: sliderData.map(_EnquireButtonSliderDataMap)
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 475,
                columnNumber: 35
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 475,
            columnNumber: 11
        }, this);
        $[66] = t39;
    } else {
        t39 = $[66];
    }
    let t40;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "font-medium text-gray-900",
            children: [
                "How Radical Education Supports ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                    className: "hidden sm:block"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 482,
                    columnNumber: 84
                }, this),
                "You in Securing Admissions"
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 482,
            columnNumber: 11
        }, this);
        $[67] = t40;
    } else {
        t40 = $[67];
    }
    let t41;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:px-6 px-4 lg:py-8 md:py-6 py-4 bg-white",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: [
                    t39,
                    t40,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
                        children: cardsData.map(_EnquireButtonCardsDataMap)
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                        lineNumber: 489,
                        columnNumber: 108
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 489,
                columnNumber: 71
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 489,
            columnNumber: 11
        }, this);
        $[68] = t41;
    } else {
        t41 = $[68];
    }
    let t42;
    if ($[69] !== t36) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid lg:grid-cols-2 grid-cols-1 rounded-lg overflow-hidden relative",
            children: [
                t10,
                t36,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 496,
            columnNumber: 11
        }, this);
        $[69] = t36;
        $[70] = t42;
    } else {
        t42 = $[70];
    }
    let t43;
    if ($[71] !== t42 || $[72] !== visible) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t4,
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$dialog$2f$dialog$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                    header: false,
                    visible: visible,
                    onHide: t8,
                    modal: true,
                    className: "w-[95vw] max-w-[900px] noDialogHeader DialogBodyNoPadding transparentDialog rounded-lg",
                    children: t42
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 504,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true);
        $[71] = t42;
        $[72] = visible;
        $[73] = t43;
    } else {
        t43 = $[73];
    }
    return t43;
}
_s(EnquireButton, "iZ2L9t9fKsp2rs7xyOD9Ha1W8Ws=");
_c = EnquireButton;
function _EnquireButtonCardsDataMap(card) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border border-[#00CFB2] rounded-xl px-2 py-3 space-y-2 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[56px] relative inline-flex items-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                    src: card.image,
                    alt: card.title,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                    lineNumber: 514,
                    columnNumber: 168
                }, this)
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 514,
                columnNumber: 108
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-medium text-gray-800 text-sm",
                children: card.title
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 514,
                columnNumber: 244
            }, this)
        ]
    }, card.id, true, {
        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
        lineNumber: 514,
        columnNumber: 10
    }, this);
}
function _EnquireButtonSliderDataMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SwiperSlide"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            className: "",
            href: item.link,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-20 h-14 relative shrink-0 flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$primereact$2f$image$2f$image$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
                            src: item.image,
                            alt: item.title,
                            className: "object-cover rounded-md"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                            lineNumber: 517,
                            columnNumber: 192
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                        lineNumber: 517,
                        columnNumber: 129
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-semibold text-gray-800 mb-1 text-sm md:text-base line-clamp-1",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                lineNumber: 517,
                                columnNumber: 282
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: item.date
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                                lineNumber: 517,
                                columnNumber: 382
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                        lineNumber: 517,
                        columnNumber: 277
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
                lineNumber: 517,
                columnNumber: 73
            }, this)
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
            lineNumber: 517,
            columnNumber: 37
        }, this)
    }, item.id, false, {
        fileName: "[project]/crm/radical/src/components/EnquireButton.tsx",
        lineNumber: 517,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "EnquireButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crm_radical_src_27640fe4._.js.map