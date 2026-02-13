(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
"use client";
;
;
const BlogSidebar = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(18);
    if ($[0] !== "e3f4405ca77d700c2043fbf34333456c32617d5194c9b1632ae2498e8705d880") {
        for(let $i = 0; $i < 18; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e3f4405ca77d700c2043fbf34333456c32617d5194c9b1632ae2498e8705d880";
    }
    const { className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `lg:col-span-1 mt-8 lg:mt-8 lg:ml-auto lg:mr-0 animate-fadeIn mb-20 overflow-hidden ${className}`;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = {
            animationDelay: "0.2s",
            animationFillMode: "both"
        };
        $[1] = t3;
    } else {
        t3 = $[1];
    }
    let t4;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg md:text-xl font-bold text-gray-800 mb-4 text-center",
            children: "Get In Touch"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 32,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[2] = t4;
    } else {
        t4 = $[2];
    }
    let t5;
    let t6;
    let t7;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Name",
            className: "w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-shadow focus:shadow-md"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 41,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "email",
            placeholder: "Email Address",
            className: "w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-shadow focus:shadow-md"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 42,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "tel",
            placeholder: "Mobile No",
            className: "w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base transition-shadow focus:shadow-md"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 43,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = t5;
        $[4] = t6;
        $[5] = t7;
    } else {
        t5 = $[3];
        t6 = $[4];
        t7 = $[5];
    }
    let t8;
    let t9;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-[#E1F2FF] p-4 md:p-6 rounded-lg mb-8 transition-transform hover:scale-[1.01] duration-300 shadow-sm",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t5,
                        t6,
                        t7,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                            className: "w-full bg-white p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-sm md:text-base transition-shadow focus:shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "Select Course"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 368
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "MBBS"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 398
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "BDS"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 419
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                    children: "NEET PG"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 439
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 55,
                            columnNumber: 173
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white py-3 rounded-lg font-medium hover:from-teal-500 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-sm md:text-base",
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 55,
                            columnNumber: 472
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                    lineNumber: 55,
                    columnNumber: 134
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 55,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg md:text-xl font-bold text-[#287FC4] mb-6 ml-4 md:ml-10",
            children: "Related"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 56,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[6] = t8;
        $[7] = t9;
    } else {
        t8 = $[6];
        t9 = $[7];
    }
    let t10;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-gray-800 mb-2 leading-tight text-sm md:text-base group-hover:text-[#287FC4] transition-colors break-words",
            children: "NEET Exam in India: Your Gateway to a Bright Medical"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 65,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t10;
    } else {
        t10 = $[8];
    }
    let t11;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 mx-4 rounded-lg border-[#ABABAB] border-b hover:bg-gray-50 transition-colors duration-300 cursor-pointer group",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-xs md:text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Garima Pareek"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 72,
                            columnNumber: 198
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-2",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 72,
                            columnNumber: 224
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "15 Jan 2025"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 72,
                            columnNumber: 255
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                    lineNumber: 72,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 72,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = t11;
    } else {
        t11 = $[9];
    }
    let t12;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-[#000000] mb-2 leading-tight text-sm md:text-base group-hover:text-[#287FC4] transition-colors break-words",
            children: "NEET Exam in India: Your Gateway to a Bright Medical"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 79,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t12;
    } else {
        t12 = $[10];
    }
    let t13;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 mx-4 rounded-lg border-[#ABABAB] border-b hover:bg-gray-50 transition-colors duration-300 cursor-pointer group",
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-gray-500 text-xs md:text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Garima Pareek"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 198
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-2",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 224
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "15 Jan 2025"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 255
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                    lineNumber: 86,
                    columnNumber: 148
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 86,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t13;
    } else {
        t13 = $[11];
    }
    let t14;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
            className: "font-semibold text-[#000000] mb-2 leading-tight text-sm md:text-base group-hover:text-[#287FC4] transition-colors break-words",
            children: "NEET Exam in India: Your Gateway to a Bright Medical"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 93,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t14;
    } else {
        t14 = $[12];
    }
    let t15;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t11,
                t13,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 mx-4 rounded-lg border-[#ABABAB] border-b hover:bg-gray-50 transition-colors duration-300 cursor-pointer group",
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-gray-500 text-xs md:text-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Garima Pareek"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 235
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "mx-2",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 261
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "15 Jan 2025"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                    lineNumber: 100,
                                    columnNumber: 292
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 100,
                            columnNumber: 185
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                    lineNumber: 100,
                    columnNumber: 48
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 100,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t15;
    } else {
        t15 = $[13];
    }
    let t16;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: "/images/blogs/ad-1.webp",
                alt: "Study MBBS in Kyrgyzstan",
                className: "w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                lineNumber: 107,
                columnNumber: 184
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 107,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t16;
    } else {
        t16 = $[14];
    }
    let t17;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t9,
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 mx-4 space-y-4",
                    children: [
                        t16,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-xl",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/blogs/ad.webp",
                                alt: "NEET PG Admission",
                                className: "w-full h-auto opacity-90 hover:opacity-100 transition-opacity"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                                lineNumber: 114,
                                columnNumber: 240
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                            lineNumber: 114,
                            columnNumber: 67
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
                    lineNumber: 114,
                    columnNumber: 25
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 114,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[15] = t17;
    } else {
        t17 = $[15];
    }
    let t18;
    if ($[16] !== t2) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            style: t3,
            children: [
                t8,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx",
            lineNumber: 121,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t2;
        $[17] = t18;
    } else {
        t18 = $[17];
    }
    return t18;
};
_c = BlogSidebar;
const __TURBOPACK__default__export__ = BlogSidebar;
var _c;
__turbopack_context__.k.register(_c, "BlogSidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/lib/api.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBlogBySlug",
    ()=>getBlogBySlug,
    "getBlogs",
    ()=>getBlogs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_URL = __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
async function getBlogs() {
    // Add cache-busting query param to always get fresh data
    const res = await fetch(`${API_URL}/api/blogs?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
        }
    });
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
}
async function getBlogBySlug(slug) {
    const res = await fetch(`${API_URL}/api/blogs/slug/${encodeURIComponent(slug)}?_t=${Date.now()}`, {
        cache: 'no-store',
        headers: {
            'Cache-Control': 'no-cache, no-store, must-revalidate',
            'Pragma': 'no-cache'
        }
    });
    if (!res.ok) return null;
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$components$2f$blogsDetails$2f$BlogSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/components/blogsDetails/BlogSidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/lib/api.ts [app-client] (ecmascript)");
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
const formatDate = (d)=>{
    if (!d) return '';
    const date = new Date(d);
    return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });
};
const BlogsRead = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(49);
    if ($[0] !== "5e47dab694cdd1f80a60d505cf8e7b1829f0e6696ba84589062426887b4307ea") {
        for(let $i = 0; $i < 49; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5e47dab694cdd1f80a60d505cf8e7b1829f0e6696ba84589062426887b4307ea";
    }
    const { slug } = t0;
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const categoryContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [blog, setBlog] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] !== slug) {
        t1 = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogBySlug"])(slug).then((data)=>{
                setBlog(data);
                setLoading(false);
            }).catch(()=>setLoading(false));
        };
        t2 = [
            slug
        ];
        $[1] = slug;
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            "All",
            "Education",
            "Exams",
            "Government",
            "Careers"
        ];
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const categories = t3;
    let t4;
    if ($[5] !== searchTerm) {
        t4 = ()=>{
            console.log("Searching for:", searchTerm);
        };
        $[5] = searchTerm;
        $[6] = t4;
    } else {
        t4 = $[6];
    }
    const handleSearch = t4;
    let t5;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = (direction)=>{
            if (categoryContainerRef.current) {
                const { current } = categoryContainerRef;
                if (direction === "left") {
                    current.scrollBy({
                        left: -200,
                        behavior: "smooth"
                    });
                } else {
                    current.scrollBy({
                        left: 200,
                        behavior: "smooth"
                    });
                }
            }
        };
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    const scroll = t5;
    let t6;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (e)=>setSearchTerm(e.target.value);
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== searchTerm) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full max-w-md lg:max-w-sm lg:-ml-10",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                placeholder: "search your blog here",
                value: searchTerm,
                onChange: t6,
                className: "w-full px-4 py-2 rounded-full borderbg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-400"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                lineNumber: 108,
                columnNumber: 74
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 108,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = searchTerm;
        $[10] = t7;
    } else {
        t7 = $[10];
    }
    let t8;
    if ($[11] !== handleSearch) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-x-2",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleSearch,
                className: "bg-[#005A8B] hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-full font-medium transition-colors duration-200 border border-blue-600 text-sm md:text-base",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                lineNumber: 116,
                columnNumber: 37
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 116,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = handleSearch;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = ()=>scroll("left");
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t9,
            className: "hidden md:flex w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center flex-shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/blogs/left-arrow.webp",
                alt: "Scroll Left",
                width: 16,
                height: 16,
                className: "object-contain opacity-60 hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                lineNumber: 131,
                columnNumber: 262
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 131,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = {
            scrollbarWidth: "none",
            msOverflowStyle: "none"
        };
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "bcc2efa1ea41dd3c",
            children: "div.jsx-bcc2efa1ea41dd3c::-webkit-scrollbar{display:none}"
        }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0));
        $[15] = t11;
        $[16] = t12;
    } else {
        t11 = $[15];
        t12 = $[16];
    }
    let t13;
    if ($[17] !== activeCategory) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: categoryContainerRef,
            className: "flex gap-2 items-center flex-1 overflow-x-auto scrollbar-hide py-1",
            style: t11,
            children: [
                t12,
                categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(category),
                        className: `px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 text-sm whitespace-nowrap ${activeCategory === category ? category === "All" ? "bg-[#2CBF0F] text-white shadow-md" : category === "Education" ? "bg-[#BFE6DB] text-[#00A88E] shadow-md" : category === "Exams" ? "bg-[#FFE0B2] text-[#C77700] shadow-md" : category === "Government" ? "bg-[#D5DCE5] text-[#2C3E50] shadow-md" : category === "Careers" ? "bg-[#C9E2FF] text-[#004E89] shadow-md" : "bg-[#C9E2FF] text-[#004E89] shadow-md" : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 hover:border-gray-300"}`,
                        children: category
                    }, category, false, {
                        fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                        lineNumber: 152,
                        columnNumber: 167
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 152,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = activeCategory;
        $[18] = t13;
    } else {
        t13 = $[18];
    }
    let t14;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = ()=>scroll("right");
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    let t15;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t14,
            className: "hidden md:flex w-8 h-8 rounded-full bg-white shadow-sm hover:shadow-md transition-all duration-200 items-center justify-center flex-shrink-0 border border-gray-200 hover:border-gray-300 hover:scale-110 active:scale-95",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/blogs/right-arrow.webp",
                alt: "Scroll Right",
                width: 16,
                height: 16,
                className: "object-contain opacity-60 hover:opacity-100"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                lineNumber: 167,
                columnNumber: 263
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 167,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[20] = t15;
    } else {
        t15 = $[20];
    }
    let t16;
    if ($[21] !== t13) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex bg-white lg:bg-transparent rounded-full lg:rounded-none shadow-sm lg:shadow-none p-1 lg:p-0 items-center gap-2 flex-1 min-w-0 w-full lg:w-auto overflow-hidden",
            children: [
                t10,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 174,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = t13;
        $[22] = t16;
    } else {
        t16 = $[22];
    }
    let t17;
    if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ()=>scroll("left");
        $[23] = t17;
    } else {
        t17 = $[23];
    }
    let t18;
    let t19;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: t17,
            className: "flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/images/blogs/left-arrow.webp",
                alt: "Scroll Left",
                width: 20,
                height: 20,
                className: "object-contain"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                lineNumber: 190,
                columnNumber: 203
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 190,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t19 = ()=>scroll("right");
        $[24] = t18;
        $[25] = t19;
    } else {
        t18 = $[24];
        t19 = $[25];
    }
    let t20;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex md:hidden justify-center gap-4 w-full mt-2",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: t19,
                    className: "flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 items-center justify-center border border-gray-100 active:scale-95",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/blogs/right-arrow.webp",
                        alt: "Scroll Right",
                        width: 20,
                        height: 20,
                        className: "object-contain"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                        lineNumber: 200,
                        columnNumber: 273
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 200,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 200,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[26] = t20;
    } else {
        t20 = $[26];
    }
    let t21;
    if ($[27] !== t16 || $[28] !== t7 || $[29] !== t8) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-6xl mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col lg:flex-row gap-4 items-start justify-start mb-8",
                children: [
                    t7,
                    t8,
                    t16,
                    t20
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                lineNumber: 207,
                columnNumber: 51
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 207,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t16;
        $[28] = t7;
        $[29] = t8;
        $[30] = t21;
    } else {
        t21 = $[30];
    }
    let t22;
    if ($[31] !== blog || $[32] !== loading) {
        t22 = loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-pulse space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 bg-gray-200 rounded w-24"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 62
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-8 bg-gray-200 rounded w-3/4"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 110
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-gray-200 rounded w-1/3"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 159
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-48 bg-gray-200 rounded-lg"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 208
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-gray-200 rounded w-full"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 255
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-4 bg-gray-200 rounded w-full"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 305
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 217,
            columnNumber: 21
        }, ("TURBOPACK compile-time value", void 0)) : !blog ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-xl font-bold text-gray-800 mb-2",
                    children: "Blog not found"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 407
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 mb-4",
                    children: "The blog you are looking for does not exist or has been removed."
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 479
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/blogs",
                    className: "text-[#005A8B] hover:underline font-medium",
                    children: "← Back to Blogs"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 581
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 217,
            columnNumber: 372
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-block text-[#00A88E] px-3 py-1 rounded text-sm font-medium bg-[#BFE6DB]",
                        children: blog.category
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                        lineNumber: 217,
                        columnNumber: 711
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 689
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 break-words",
                    children: blog.title
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 836
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center text-gray-500 text-sm mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: blog.author
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                            lineNumber: 217,
                            columnNumber: 1004
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mx-2",
                            children: "•"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                            lineNumber: 217,
                            columnNumber: 1030
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: formatDate(blog.date)
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                            lineNumber: 217,
                            columnNumber: 1061
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 942
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 relative w-full h-48 md:h-64",
                    children: blog.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: blog.featuredImage,
                        alt: blog.title,
                        fill: true,
                        className: "object-cover rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                        lineNumber: 217,
                        columnNumber: 1176
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/blogs/card.webp",
                        alt: blog.title,
                        fill: true,
                        className: "object-cover rounded-lg"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                        lineNumber: 217,
                        columnNumber: 1278
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 1103
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "prose max-w-none text-gray-700 leading-relaxed mb-8 text-sm md:text-base prose-headings:text-gray-800 prose-p:mb-4 break-words overflow-wrap-anywhere",
                    style: {
                        wordBreak: "break-word",
                        overflowWrap: "anywhere"
                    },
                    dangerouslySetInnerHTML: {
                        __html: blog.content || blog.excerpt || ""
                    }
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 217,
                    columnNumber: 1389
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
        $[31] = blog;
        $[32] = loading;
        $[33] = t22;
    } else {
        t22 = $[33];
    }
    let t23;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg md:text-xl font-bold text-gray-800 mb-6",
            children: "Comment"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 231,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[34] = t23;
    } else {
        t23 = $[34];
    }
    let t24;
    if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-8 h-8 bg-black text-white rounded flex items-center justify-center",
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "𝕏"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 238,
                    columnNumber: 101
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 238,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[35] = t24;
    } else {
        t24 = $[35];
    }
    let t25;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-8 h-8 bg-blue-600 text-white rounded flex items-center justify-center",
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "f"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 245,
                    columnNumber: 104
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 245,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t25;
    } else {
        t25 = $[36];
    }
    let t26;
    if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "w-8 h-8 bg-blue-700 text-white rounded flex items-center justify-center",
            children: [
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm",
                    children: "in"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 252,
                    columnNumber: 104
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 252,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[37] = t26;
    } else {
        t26 = $[37];
    }
    let t27;
    if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-3 md:gap-4 mb-6",
            children: [
                t24,
                t25,
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center",
                    children: [
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: "✉"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                            lineNumber: 259,
                            columnNumber: 174
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 259,
                    columnNumber: 81
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 259,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[38] = t27;
    } else {
        t27 = $[38];
    }
    let t28;
    if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
            placeholder: "write your comment here...",
            className: "w-full p-3 md:p-4 border border-gray-300 rounded-lg resize-none h-24 md:h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 266,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t28;
    } else {
        t28 = $[39];
    }
    let t29;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pt-8",
            children: [
                t23,
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t28,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col md:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "name",
                                    className: "flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                                    lineNumber: 273,
                                    columnNumber: 124
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "email address",
                                    className: "flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                                    lineNumber: 273,
                                    columnNumber: 294
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white px-4 md:px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm md:text-base",
                                    children: "Post ➤"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                                    lineNumber: 273,
                                    columnNumber: 474
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                            lineNumber: 273,
                            columnNumber: 75
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                    lineNumber: 273,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 273,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[40] = t29;
    } else {
        t29 = $[40];
    }
    let t30;
    if ($[41] !== t22) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "lg:col-span-2 overflow-hidden",
            children: [
                t22,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 280,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t22;
        $[42] = t30;
    } else {
        t30 = $[42];
    }
    let t31;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$components$2f$blogsDetails$2f$BlogSidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 288,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[43] = t31;
    } else {
        t31 = $[43];
    }
    let t32;
    if ($[44] !== t30) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 mt-8 lg:ml-22 overflow-hidden",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8",
                children: [
                    t30,
                    t31
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
                lineNumber: 295,
                columnNumber: 81
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 295,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = t30;
        $[45] = t32;
    } else {
        t32 = $[45];
    }
    let t33;
    if ($[46] !== t21 || $[47] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full bg-gray-50 py-8 md:py-20 relative animate-fadeIn",
            children: [
                t21,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/components/blogsDetails/blogsRead.tsx",
            lineNumber: 303,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t21;
        $[47] = t32;
        $[48] = t33;
    } else {
        t33 = $[48];
    }
    return t33;
};
_s(BlogsRead, "no6rL3YKo2egVRW/vFHLv2dTxfU=");
_c = BlogsRead;
const __TURBOPACK__default__export__ = BlogsRead;
var _c;
__turbopack_context__.k.register(_c, "BlogsRead");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crm_radical_src_8b886d64._.js.map