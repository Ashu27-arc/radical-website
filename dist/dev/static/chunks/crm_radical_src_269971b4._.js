(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/crm/radical/src/hooks/useWebSocket.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useWebSocket",
    ()=>useWebSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useWebSocket(url = 'ws://localhost:8080') {
    _s();
    const [isConnected, setIsConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const wsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const reconnectAttemptsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const maxReconnectAttempts = 5;
    const messageHandlersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const reconnectTimeoutRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isConnectingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const isManualCloseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const urlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(url);
    // Store url in ref to avoid dependency changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebSocket.useEffect": ()=>{
            urlRef.current = url;
        }
    }["useWebSocket.useEffect"], [
        url
    ]);
    const connect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocket.useCallback[connect]": ()=>{
            // Prevent multiple simultaneous connections
            if (isConnectingRef.current || wsRef.current?.readyState === WebSocket.OPEN) {
                return;
            }
            isConnectingRef.current = true;
            isManualCloseRef.current = false;
            try {
                // Close existing connection if any
                if (wsRef.current) {
                    // Only close if connection is established or connecting
                    if (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING) {
                        wsRef.current.close();
                    }
                }
                const ws = new WebSocket(urlRef.current);
                wsRef.current = ws;
                // Connection timeout - if not connected within 5 seconds, close and retry
                const connectionTimeout = setTimeout({
                    "useWebSocket.useCallback[connect].connectionTimeout": ()=>{
                        if (ws.readyState !== WebSocket.OPEN) {
                            console.warn('WebSocket connection timeout, closing...');
                            ws.close();
                        }
                    }
                }["useWebSocket.useCallback[connect].connectionTimeout"], 5000);
                ws.onopen = ({
                    "useWebSocket.useCallback[connect]": ()=>{
                        clearTimeout(connectionTimeout);
                        console.log('WebSocket connected');
                        setIsConnected(true);
                        setError(null);
                        reconnectAttemptsRef.current = 0;
                        isConnectingRef.current = false;
                        // Send authentication token if available
                        const token = localStorage.getItem('token');
                        if (token) {
                            ws.send(JSON.stringify({
                                type: 'auth',
                                token
                            }));
                        } else {
                            // For public website, send a public connection request
                            ws.send(JSON.stringify({
                                type: 'public_connect'
                            }));
                        }
                    }
                })["useWebSocket.useCallback[connect]"];
                ws.onmessage = ({
                    "useWebSocket.useCallback[connect]": (event)=>{
                        try {
                            const data = JSON.parse(event.data);
                            console.log('WebSocket message received:', data);
                            // Notify all registered handlers
                            messageHandlersRef.current.forEach({
                                "useWebSocket.useCallback[connect]": (handler)=>{
                                    try {
                                        handler(data);
                                    } catch (err) {
                                        console.error('Error in message handler:', err);
                                    }
                                }
                            }["useWebSocket.useCallback[connect]"]);
                        } catch (err) {
                            console.error('Error parsing WebSocket message:', err);
                        }
                    }
                })["useWebSocket.useCallback[connect]"];
                ws.onclose = ({
                    "useWebSocket.useCallback[connect]": ()=>{
                        clearTimeout(connectionTimeout);
                        console.log('WebSocket disconnected');
                        setIsConnected(false);
                        isConnectingRef.current = false;
                        // Attempt reconnection only if not manually closed
                        if (!isManualCloseRef.current && reconnectAttemptsRef.current < maxReconnectAttempts) {
                            reconnectAttemptsRef.current += 1;
                            const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
                            console.log(`Reconnecting in ${delay}ms... (attempt ${reconnectAttemptsRef.current})`);
                            reconnectTimeoutRef.current = setTimeout({
                                "useWebSocket.useCallback[connect]": ()=>{
                                    connect();
                                }
                            }["useWebSocket.useCallback[connect]"], delay);
                        }
                    }
                })["useWebSocket.useCallback[connect]"];
                ws.onerror = ({
                    "useWebSocket.useCallback[connect]": (_err)=>{
                        clearTimeout(connectionTimeout);
                        // WebSocket error events don't contain detailed info for security reasons
                        // Log the readyState to help diagnose connection issues
                        const readyStateMap = {
                            0: 'CONNECTING',
                            1: 'OPEN',
                            2: 'CLOSING',
                            3: 'CLOSED'
                        };
                        const state = readyStateMap[ws.readyState] || 'UNKNOWN';
                        console.error(`WebSocket error: Connection failed (readyState: ${state}). Is the backend server running on ${urlRef.current}?`);
                        setError(`WebSocket connection error: ${state}`);
                        isConnectingRef.current = false;
                    }
                })["useWebSocket.useCallback[connect]"];
            } catch (err) {
                console.error('Failed to create WebSocket connection:', err);
                setError('Failed to create WebSocket connection');
                isConnectingRef.current = false;
            }
        }
    }["useWebSocket.useCallback[connect]"], []);
    const disconnect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocket.useCallback[disconnect]": ()=>{
            isManualCloseRef.current = true;
            if (reconnectTimeoutRef.current) {
                clearTimeout(reconnectTimeoutRef.current);
                reconnectTimeoutRef.current = null;
            }
            if (wsRef.current) {
                wsRef.current.onclose = null; // Prevent reconnection on cleanup
                // Only close if connection is established or connecting
                if (wsRef.current.readyState === WebSocket.OPEN || wsRef.current.readyState === WebSocket.CONNECTING) {
                    wsRef.current.close();
                }
                wsRef.current = null;
            }
        }
    }["useWebSocket.useCallback[disconnect]"], []);
    const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocket.useCallback[sendMessage]": (message)=>{
            if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
                wsRef.current.send(JSON.stringify(message));
                return true;
            }
            console.warn('WebSocket is not connected. Message not sent.');
            return false;
        }
    }["useWebSocket.useCallback[sendMessage]"], []);
    const addMessageHandler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useWebSocket.useCallback[addMessageHandler]": (handler)=>{
            messageHandlersRef.current.add(handler);
            return ({
                "useWebSocket.useCallback[addMessageHandler]": ()=>{
                    messageHandlersRef.current.delete(handler);
                }
            })["useWebSocket.useCallback[addMessageHandler]"];
        }
    }["useWebSocket.useCallback[addMessageHandler]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useWebSocket.useEffect": ()=>{
            connect();
            return ({
                "useWebSocket.useEffect": ()=>{
                    disconnect();
                }
            })["useWebSocket.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["useWebSocket.useEffect"], []);
    return {
        isConnected,
        error,
        sendMessage,
        addMessageHandler
    };
}
_s(useWebSocket, "NFY5SlO2L76HytfHxtkbKK4slOA=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/crm/radical/src/app/blogs/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/src/hooks/useWebSocket.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const categoryColors = {
    'Educational': 'bg-teal-500',
    'Education': 'bg-teal-500',
    'Exams': 'bg-orange-500',
    'Government': 'bg-gray-600',
    'Careers': 'bg-blue-500',
    'MBBS in India': 'bg-green-100 text-green-700',
    'MBBS Abroad': 'bg-teal-100 text-teal-700',
    'NEET UG': 'bg-red-100 text-red-700',
    'NEET PG': 'bg-yellow-100 text-yellow-700',
    'Development': 'bg-gray-200 text-gray-700'
};
const defaultCategoryColor = 'bg-[#005A8B] text-white';
const BlogsPage = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(82);
    if ($[0] !== "96ebcc2908a06877569ecaaf6c1fea522bda9161e5a58f32640d631ea9f42f28") {
        for(let $i = 0; $i < 82; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "96ebcc2908a06877569ecaaf6c1fea522bda9161e5a58f32640d631ea9f42f28";
    }
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { addMessageHandler, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"])("ws://localhost:8080");
    let t1;
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogs"])().then((data)=>{
                setBlogs(data);
                setLoading(false);
            }).catch(()=>setLoading(false));
        };
        t2 = [];
        $[2] = t1;
        $[3] = t2;
    } else {
        t1 = $[2];
        t2 = $[3];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    let t4;
    if ($[4] !== addMessageHandler) {
        t3 = ()=>{
            const removeHandler = addMessageHandler((data_0)=>{
                console.log("Website received WebSocket message:", data_0);
                bb7: switch(data_0.type){
                    case "NEW_BLOG":
                        {
                            if (data_0.blog && data_0.blog.status === "Published") {
                                setBlogs((prev_1)=>{
                                    const exists = prev_1.find((b_1)=>b_1.id === data_0.blog.id);
                                    if (exists) {
                                        return prev_1;
                                    }
                                    console.log("Adding new blog to website:", data_0.blog.title);
                                    return [
                                        data_0.blog,
                                        ...prev_1
                                    ];
                                });
                            }
                            break bb7;
                        }
                    case "UPDATE_BLOG":
                        {
                            setBlogs((prev_0)=>prev_0.map((b_0)=>b_0.id === data_0.blog.id ? data_0.blog : b_0));
                            break bb7;
                        }
                    case "DELETE_BLOG":
                        {
                            setBlogs((prev)=>prev.filter((b)=>b.id !== data_0.blogId));
                        }
                }
            });
            return ()=>{
                removeHandler();
            };
        };
        t4 = [
            addMessageHandler
        ];
        $[4] = addMessageHandler;
        $[5] = t3;
        $[6] = t4;
    } else {
        t3 = $[5];
        t4 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t3, t4);
    let t5;
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = ()=>{
            const interval = setInterval(()=>{
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogs"])().then((data_1)=>{
                    setBlogs((prev_2)=>{
                        if (data_1.length !== prev_2.length) {
                            console.log("Poll update: New blogs detected");
                            return data_1;
                        }
                        return prev_2;
                    });
                });
            }, 5000);
            return ()=>clearInterval(interval);
        };
        t6 = [];
        $[7] = t5;
        $[8] = t6;
    } else {
        t5 = $[7];
        t6 = $[8];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t5, t6);
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = (direction)=>{
            if (scrollRef.current) {
                const { current } = scrollRef;
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
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const scroll = t7;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t8;
    let t9;
    if ($[10] !== activeCategory || $[11] !== blogs || $[12] !== isConnected || $[13] !== loading || $[14] !== searchQuery) {
        const publishedBlogs = blogs.filter(_temp);
        const categories = [
            "All",
            ...Array.from(new Set(publishedBlogs.map(_temp2).filter(Boolean)))
        ];
        let t16;
        if ($[23] !== activeCategory || $[24] !== searchQuery) {
            t16 = (b_4)=>{
                const matchCategory = activeCategory === "All" || b_4.category === activeCategory;
                const matchSearch = !searchQuery.trim() || b_4.title.toLowerCase().includes(searchQuery.toLowerCase()) || b_4.excerpt && b_4.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
                return matchCategory && matchSearch;
            };
            $[23] = activeCategory;
            $[24] = searchQuery;
            $[25] = t16;
        } else {
            t16 = $[25];
        }
        const filtered = publishedBlogs.filter(t16);
        const featuredBlog = filtered[0];
        const sidebarBlogs = filtered.slice(1, 4);
        const gridBlogs = filtered;
        const getCategoryColor = _temp3;
        const formatDate = _temp4;
        t14 = "min-h-screen";
        const t17 = `w-2 h-2 rounded-full ${isConnected ? "bg-green-500 animate-pulse" : "bg-red-500"}`;
        let t18;
        if ($[26] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t17
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 192,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[26] = t17;
            $[27] = t18;
        } else {
            t18 = $[27];
        }
        const t19 = isConnected ? "Live Updates" : "Offline";
        let t20;
        if ($[28] !== t19) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs text-gray-500",
                children: t19
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 201,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[28] = t19;
            $[29] = t20;
        } else {
            t20 = $[29];
        }
        let t21;
        if ($[30] !== t18 || $[31] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end mb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        t18,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 209,
                    columnNumber: 52
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 209,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[30] = t18;
            $[31] = t20;
            $[32] = t21;
        } else {
            t21 = $[32];
        }
        let t22;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = (e)=>setSearchQuery(e.target.value);
            $[33] = t22;
        } else {
            t22 = $[33];
        }
        let t23;
        if ($[34] !== searchQuery) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-2xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "search your blog here",
                    value: searchQuery,
                    onChange: t22,
                    className: "w-full px-4 md:px-6 py-3 shadow-lg drop-shadow-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 225,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 225,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[34] = searchQuery;
            $[35] = t23;
        } else {
            t23 = $[35];
        }
        let t24;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-[#005A8B] text-white px-6 md:px-8 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap text-sm md:text-base w-full sm:w-auto",
                children: "Search"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[36] = t24;
        } else {
            t24 = $[36];
        }
        let t25;
        if ($[37] !== t23) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row justify-center items-center gap-4 -mb-4 py-4 md:py-8",
                children: [
                    t23,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 240,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[37] = t23;
            $[38] = t25;
        } else {
            t25 = $[38];
        }
        let t26;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = {
                scrollbarWidth: "none",
                msOverflowStyle: "none"
            };
            $[39] = t26;
        } else {
            t26 = $[39];
        }
        let t27;
        if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/blogs/left-arrow.webp",
                    alt: "Previous",
                    width: 20,
                    height: 20,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 258,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 258,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[40] = t27;
        } else {
            t27 = $[40];
        }
        let t28;
        if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/blogs/right-arrow.webp",
                    alt: "Next",
                    width: 20,
                    height: 20,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 265,
                    columnNumber: 152
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 265,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[41] = t28;
        } else {
            t28 = $[41];
        }
        const t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-2 md:space-x-8 p-2 rounded-full min-w-max",
            children: [
                t27,
                categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategory(category),
                        className: `px-3 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap ${activeCategory === category ? "bg-[#005A8B] text-white" : category === "Education" ? "bg-[#BFE6DB] text-[#00A88E]" : category === "Exams" ? "bg-[#FFE0B2] text-[#C77700]" : category === "Careers" ? "bg-[#D5DCE5] text-[#004E89]" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                        children: category
                    }, index, false, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 270,
                        columnNumber: 131
                    }, ("TURBOPACK compile-time value", void 0))),
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 270,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0));
        let t30;
        if ($[42] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: scrollRef,
                className: "flex justify-start md:justify-center overflow-hidden md:overflow-x-auto [&::-webkit-scrollbar]:hidden",
                style: t26,
                children: t29
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 273,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[42] = t29;
            $[43] = t30;
        } else {
            t30 = $[43];
        }
        let t31;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = ()=>scroll("left");
            $[44] = t31;
        } else {
            t31 = $[44];
        }
        let t32;
        let t33;
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: t31,
                className: "w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/images/blogs/left-arrow.webp",
                    alt: "Previous",
                    width: 20,
                    height: 20,
                    className: "object-contain"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 289,
                    columnNumber: 156
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 289,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t33 = ()=>scroll("right");
            $[45] = t32;
            $[46] = t33;
        } else {
            t32 = $[45];
            t33 = $[46];
        }
        let t34;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex md:hidden justify-center space-x-4 mt-4 w-full",
                children: [
                    t32,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: t33,
                        className: "w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/blogs/right-arrow.webp",
                            alt: "Next",
                            width: 20,
                            height: 20,
                            className: "object-contain"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 299,
                            columnNumber: 230
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 299,
                        columnNumber: 87
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 299,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[47] = t34;
        } else {
            t34 = $[47];
        }
        if ($[48] !== t21 || $[49] !== t25 || $[50] !== t30) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white py-2 md:py-4 animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        t21,
                        t25,
                        t30,
                        t34
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 305,
                    columnNumber: 67
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 305,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[48] = t21;
            $[49] = t25;
            $[50] = t30;
            $[51] = t15;
        } else {
            t15 = $[51];
        }
        t11 = "container mx-auto px-4 py-2 md:py-4";
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8",
                children: "Fresh Update"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 315,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[52] = t12;
        } else {
            t12 = $[52];
        }
        let t35;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t35 = {
                animationDelay: "0.1s"
            };
            $[53] = t35;
        } else {
            t35 = $[53];
        }
        const t36 = featuredBlog ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/blogs/${featuredBlog.slug}`,
            className: "block",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative h-48 md:h-80",
                        children: featuredBlog.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: featuredBlog.featuredImage,
                            alt: featuredBlog.title,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 329,
                            columnNumber: 295
                        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/blogs/b.webp",
                            alt: featuredBlog.title,
                            fill: true,
                            className: "object-cover"
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 329,
                            columnNumber: 402
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 329,
                        columnNumber: 226
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 md:p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `inline-block ${getCategoryColor(featuredBlog.category)} text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4`,
                                children: featuredBlog.category
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 329,
                                columnNumber: 535
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 hover:text-blue-600 transition-colors",
                                children: featuredBlog.title
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 329,
                                columnNumber: 707
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2",
                                children: featuredBlog.excerpt || featuredBlog.title
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 329,
                                columnNumber: 843
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center text-gray-500 text-xs md:text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: featuredBlog.author
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 1035
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mx-2",
                                        children: "•"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 1069
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: formatDate(featuredBlog.date)
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 329,
                                        columnNumber: 1100
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 329,
                                columnNumber: 967
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 329,
                        columnNumber: 507
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 329,
                columnNumber: 93
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 329,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg overflow-hidden border border-gray-200 p-8 text-center text-gray-500",
            children: loading ? "Loading..." : "No published blogs yet. Check back later."
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 329,
            columnNumber: 1172
        }, ("TURBOPACK compile-time value", void 0));
        let t37;
        if ($[54] !== t36) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:col-span-2 animate-fadeIn",
                style: t35,
                children: t36
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 332,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[54] = t36;
            $[55] = t37;
        } else {
            t37 = $[55];
        }
        let t38;
        if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute -bottom-4 left-0 right-0 border-b-3 border-gray-200 lg:col-span-3"
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 340,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[56] = t38;
        } else {
            t38 = $[56];
        }
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative",
            children: [
                t37,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4 md:space-y-6",
                    children: sidebarBlogs.map((post, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/blogs/${post.slug}`,
                            className: "block animate-fadeIn",
                            style: {
                                animationDelay: `${0.2 + index_0 * 0.1}s`
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `bg-white rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${index_0 < sidebarBlogs.length - 1 ? "border-b-2 border-gray-200" : ""}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4`,
                                        children: post.category
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 215
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors",
                                        children: post.title
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 371
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2",
                                        children: post.excerpt || post.title
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 500
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-gray-500 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: post.author
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 663
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-2",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 689
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: formatDate(post.date)
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 347,
                                                columnNumber: 720
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 606
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 347,
                                columnNumber: 12
                            }, ("TURBOPACK compile-time value", void 0))
                        }, post.id, false, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 345,
                            columnNumber: 166
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 345,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0)),
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 345,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t10 = "mt-16 md:mt-30";
        t8 = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6";
        let t39;
        if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = (blog, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: `/blogs/${blog.slug}`,
                    className: "block animate-fadeIn",
                    style: {
                        animationDelay: `${0.3 + index_1 * 0.1}s`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-40 md:h-48",
                                children: blog.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: blog.featuredImage,
                                    alt: blog.title,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 214
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: [
                                        "/images/blogs/card.webp",
                                        "/images/blogs/card-1.webp",
                                        "/images/blogs/card-2.webp"
                                    ][index_1 % 3],
                                    alt: blog.title,
                                    fill: true,
                                    className: "object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 354,
                                    columnNumber: 305
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 354,
                                columnNumber: 153
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4 md:p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: `inline-block ${getCategoryColor(blog.category)} px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3`,
                                        children: blog.category
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 508
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors line-clamp-2",
                                        children: blog.title
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 653
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2",
                                        children: blog.excerpt || blog.title
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 795
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center text-gray-500 text-xs",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: blog.author
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 958
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mx-2",
                                                children: "•"
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 984
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: formatDate(blog.date)
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 1015
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 354,
                                        columnNumber: 901
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 354,
                                columnNumber: 480
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 354,
                        columnNumber: 10
                    }, ("TURBOPACK compile-time value", void 0))
                }, blog.id, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 352,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0));
            $[57] = t39;
        } else {
            t39 = $[57];
        }
        t9 = gridBlogs.map(t39);
        $[10] = activeCategory;
        $[11] = blogs;
        $[12] = isConnected;
        $[13] = loading;
        $[14] = searchQuery;
        $[15] = t10;
        $[16] = t11;
        $[17] = t12;
        $[18] = t13;
        $[19] = t14;
        $[20] = t15;
        $[21] = t8;
        $[22] = t9;
    } else {
        t10 = $[15];
        t11 = $[16];
        t12 = $[17];
        t13 = $[18];
        t14 = $[19];
        t15 = $[20];
        t8 = $[21];
        t9 = $[22];
    }
    let t16;
    if ($[58] !== t8 || $[59] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t8,
            children: t9
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 385,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[58] = t8;
        $[59] = t9;
        $[60] = t16;
    } else {
        t16 = $[60];
    }
    let t17;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex justify-center items-center mt-8 md:mt-12 space-x-1 bg-white shadow-lg rounded-full px-4 md:px-6 py-3 w-fit mx-auto overflow-x-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap",
                    children: "← Previous"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 394,
                    columnNumber: 165
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base",
                    children: "1"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 394,
                    columnNumber: 295
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 md:px-3 py-2 bg-blue-600 text-white rounded text-sm md:text-base",
                    children: "2"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 394,
                    columnNumber: 398
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base",
                    children: "3"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 394,
                    columnNumber: 498
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base",
                    children: "4"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 394,
                    columnNumber: 601
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base",
                    children: "5"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 394,
                    columnNumber: 704
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap",
                    children: "Next →"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 394,
                    columnNumber: 807
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 394,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[61] = t17;
    } else {
        t17 = $[61];
    }
    let t18;
    if ($[62] !== t10 || $[63] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 401,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[62] = t10;
        $[63] = t16;
        $[64] = t18;
    } else {
        t18 = $[64];
    }
    let t19;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = {
            animationDelay: "0.9s"
        };
        $[65] = t19;
    } else {
        t19 = $[65];
    }
    let t20;
    if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4",
            children: [
                "Connect With ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-400",
                    children: "Our Counselor"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 419,
                    columnNumber: 127
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 419,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[66] = t20;
    } else {
        t20 = $[66];
    }
    let t21;
    if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative rounded-2xl overflow-hidden mx-4 md:mx-0",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[300px] md:h-[500px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/images/blogs/contact.webp",
                        alt: "Contact Background",
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 426,
                        columnNumber: 127
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-opacity-30"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 426,
                        columnNumber: 231
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 426,
                columnNumber: 78
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 426,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[67] = t21;
    } else {
        t21 = $[67];
    }
    let t22;
    let t23;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "text",
            placeholder: "Full Name",
            className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 434,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "tel",
            placeholder: "Phone No",
            className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base"
        }, void 0, false, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 435,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[68] = t22;
        $[69] = t23;
    } else {
        t22 = $[68];
        t23 = $[69];
    }
    let t24;
    if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 border-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Select Course"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 444,
                    columnNumber: 193
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "mbbs",
                    children: "MBBS"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 444,
                    columnNumber: 232
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "bds",
                    children: "BDS"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 444,
                    columnNumber: 266
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "ayush",
                    children: "AYUSH"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 444,
                    columnNumber: 298
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "neet-pg",
                    children: "NEET PG"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 444,
                    columnNumber: 334
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 444,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[70] = t24;
    } else {
        t24 = $[70];
    }
    let t25;
    if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
            className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 border-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "",
                    children: "Select State"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 451,
                    columnNumber: 193
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "delhi",
                    children: "Delhi"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 451,
                    columnNumber: 231
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "mumbai",
                    children: "Mumbai"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 451,
                    columnNumber: 267
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "bangalore",
                    children: "Bangalore"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 451,
                    columnNumber: 305
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "chennai",
                    children: "Chennai"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 451,
                    columnNumber: 349
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                    value: "kolkata",
                    children: "Kolkata"
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 451,
                    columnNumber: 389
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 451,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[71] = t25;
    } else {
        t25 = $[71];
    }
    let t26;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-12 md:mt-16 mb-6 md:mb-8 animate-fadeIn",
            style: t19,
            children: [
                t20,
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center -mt-40 md:-mt-90 relative z-10 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#005A8B] bg-opacity-90 rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto shadow-2xl",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "space-y-3 md:space-y-4",
                            children: [
                                t22,
                                t23,
                                t24,
                                t25,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-3 text-left",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            id: "consent",
                                            className: "mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 383
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "consent",
                                            className: "text-white text-xs md:text-sm",
                                            children: "I Consent To Receiving Calls, WhatsApp, Email And Google RCS From Advisor To Assist With This Enquiry."
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 458,
                                            columnNumber: 530
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 329
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-200 text-sm md:text-base",
                                    children: "Submit"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 713
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 458,
                            columnNumber: 268
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 458,
                        columnNumber: 166
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 458,
                    columnNumber: 93
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 458,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[72] = t26;
    } else {
        t26 = $[72];
    }
    let t27;
    if ($[73] !== t11 || $[74] !== t12 || $[75] !== t13 || $[76] !== t18) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t13,
                t18,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 465,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[73] = t11;
        $[74] = t12;
        $[75] = t13;
        $[76] = t18;
        $[77] = t27;
    } else {
        t27 = $[77];
    }
    let t28;
    if ($[78] !== t14 || $[79] !== t15 || $[80] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: [
                t15,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
            lineNumber: 476,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[78] = t14;
        $[79] = t15;
        $[80] = t27;
        $[81] = t28;
    } else {
        t28 = $[81];
    }
    return t28;
};
_s(BlogsPage, "LLY6wse2EALYecwx1h/gHht/XZI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"]
    ];
});
_c = BlogsPage;
const __TURBOPACK__default__export__ = BlogsPage;
function _temp(b_2) {
    return b_2.status === "Published";
}
function _temp2(b_3) {
    return b_3.category;
}
function _temp3(cat) {
    return categoryColors[cat] || defaultCategoryColor;
}
function _temp4(d) {
    if (!d) {
        return "";
    }
    const date = new Date(d);
    return isNaN(date.getTime()) ? d : date.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric"
    });
}
var _c;
__turbopack_context__.k.register(_c, "BlogsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crm_radical_src_269971b4._.js.map