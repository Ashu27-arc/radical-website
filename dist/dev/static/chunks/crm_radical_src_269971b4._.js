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
const API_URL = ("TURBOPACK compile-time value", "https://backend-radical.onrender.com") || 'https://backend-radical.onrender.com';
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
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
function useWebSocket(url = ("TURBOPACK compile-time value", "wss://backend-radical.onrender.com") || 'wss://backend-radical.onrender.com') {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/crm/radical/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
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
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('All');
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [blogs, setBlogs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const blogsPerPage = 6;
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { addMessageHandler, isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"])(("TURBOPACK compile-time value", "wss://backend-radical.onrender.com") || 'wss://backend-radical.onrender.com');
    // Initial load of blogs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogsPage.useEffect": ()=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogs"])().then({
                "BlogsPage.useEffect": (data)=>{
                    setBlogs(data);
                    setLoading(false);
                }
            }["BlogsPage.useEffect"]).catch({
                "BlogsPage.useEffect": (error)=>{
                    console.error('Error loading blogs:', error);
                    setLoading(false);
                }
            }["BlogsPage.useEffect"]);
        }
    }["BlogsPage.useEffect"], []);
    // Listen for real-time blog updates via WebSocket
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogsPage.useEffect": ()=>{
            const removeHandler = addMessageHandler({
                "BlogsPage.useEffect.removeHandler": (data_0)=>{
                    console.log('Website received WebSocket message:', data_0);
                    switch(data_0.type){
                        case 'NEW_BLOG':
                            // Add new blog to the list if it's published
                            if (data_0.blog && data_0.blog.status === 'Published') {
                                setBlogs({
                                    "BlogsPage.useEffect.removeHandler": (prev_1)=>{
                                        // Check if blog already exists
                                        const exists = prev_1.find({
                                            "BlogsPage.useEffect.removeHandler.exists": (b_1)=>b_1.id === data_0.blog.id
                                        }["BlogsPage.useEffect.removeHandler.exists"]);
                                        if (exists) return prev_1;
                                        console.log('Adding new blog to website:', data_0.blog.title);
                                        return [
                                            data_0.blog,
                                            ...prev_1
                                        ];
                                    }
                                }["BlogsPage.useEffect.removeHandler"]);
                            }
                            break;
                        case 'UPDATE_BLOG':
                            // Update existing blog in the list
                            setBlogs({
                                "BlogsPage.useEffect.removeHandler": (prev_0)=>prev_0.map({
                                        "BlogsPage.useEffect.removeHandler": (b_0)=>b_0.id === data_0.blog.id ? data_0.blog : b_0
                                    }["BlogsPage.useEffect.removeHandler"])
                            }["BlogsPage.useEffect.removeHandler"]);
                            break;
                        case 'DELETE_BLOG':
                            // Remove blog from the list
                            setBlogs({
                                "BlogsPage.useEffect.removeHandler": (prev)=>prev.filter({
                                        "BlogsPage.useEffect.removeHandler": (b)=>b.id !== data_0.blogId
                                    }["BlogsPage.useEffect.removeHandler"])
                            }["BlogsPage.useEffect.removeHandler"]);
                            break;
                    }
                }
            }["BlogsPage.useEffect.removeHandler"]);
            return ({
                "BlogsPage.useEffect": ()=>{
                    removeHandler();
                }
            })["BlogsPage.useEffect"];
        }
    }["BlogsPage.useEffect"], [
        addMessageHandler
    ]);
    // Also poll for updates every 5 seconds as fallback
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogsPage.useEffect": ()=>{
            const interval = setInterval({
                "BlogsPage.useEffect.interval": ()=>{
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBlogs"])().then({
                        "BlogsPage.useEffect.interval": (data_1)=>{
                            setBlogs({
                                "BlogsPage.useEffect.interval": (prev_2)=>{
                                    // Only update if different
                                    if (data_1.length !== prev_2.length) {
                                        console.log('Poll update: New blogs detected');
                                        return data_1;
                                    }
                                    return prev_2;
                                }
                            }["BlogsPage.useEffect.interval"]);
                        }
                    }["BlogsPage.useEffect.interval"]);
                }
            }["BlogsPage.useEffect.interval"], 5000);
            return ({
                "BlogsPage.useEffect": ()=>clearInterval(interval)
            })["BlogsPage.useEffect"];
        }
    }["BlogsPage.useEffect"], []);
    const scroll = (direction)=>{
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = 200;
            if (direction === 'left') {
                current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth'
                });
            } else {
                current.scrollBy({
                    left: scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
    };
    const publishedBlogs = blogs.filter((b_2)=>b_2.status === 'Published');
    const categories = [
        'All',
        ...Array.from(new Set(publishedBlogs.map((b_3)=>b_3.category).filter(Boolean)))
    ];
    // Reset to first page when filters change and ensure page is valid
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogsPage.useEffect": ()=>{
            setCurrentPage({
                "BlogsPage.useEffect": (prev_3)=>{
                    const maxPages = Math.ceil(publishedBlogs.filter({
                        "BlogsPage.useEffect.maxPages": (b_4)=>{
                            const matchCategory = activeCategory === 'All' || b_4.category === activeCategory;
                            const matchSearch = !searchQuery.trim() || b_4.title.toLowerCase().includes(searchQuery.toLowerCase()) || b_4.excerpt && b_4.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
                            return matchCategory && matchSearch;
                        }
                    }["BlogsPage.useEffect.maxPages"]).length / blogsPerPage);
                    return prev_3 > maxPages ? 1 : prev_3;
                }
            }["BlogsPage.useEffect"]);
        }
    }["BlogsPage.useEffect"], [
        activeCategory,
        searchQuery,
        publishedBlogs
    ]);
    const filtered = publishedBlogs.filter((b_5)=>{
        const matchCategory_0 = activeCategory === 'All' || b_5.category === activeCategory;
        const matchSearch_0 = !searchQuery.trim() || b_5.title.toLowerCase().includes(searchQuery.toLowerCase()) || b_5.excerpt && b_5.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory_0 && matchSearch_0;
    });
    // Handle case where there aren't enough blogs - use paginated data
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filtered.slice(indexOfFirstBlog, indexOfLastBlog);
    const totalPages = Math.max(1, Math.ceil(filtered.length / blogsPerPage));
    // Use paginated data for featured and sidebar
    const featuredBlog = currentBlogs[0] || null;
    const sidebarBlogs = currentBlogs.length > 1 ? currentBlogs.slice(1, Math.min(4, currentBlogs.length)) : [];
    const gridBlogs = currentBlogs;
    const getCategoryColor = (cat)=>categoryColors[cat] || defaultCategoryColor;
    const formatDate = (d)=>{
        if (!d) return '';
        const date = new Date(d);
        return isNaN(date.getTime()) ? d : date.toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        });
    };
    const handlePageChange = (page)=>{
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            // Scroll to top when page changes
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    };
    const renderPagination = ()=>{
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
        // Adjust start page if we're near the end
        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }
        // Previous button
        if (currentPage > 1) {
            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handlePageChange(currentPage - 1),
                className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap hover:bg-gray-100 rounded transition-colors",
                children: "← Previous"
            }, "prev", false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 176,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)));
        }
        // First page
        if (startPage > 1) {
            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handlePageChange(1),
                className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base hover:bg-gray-100 rounded transition-colors",
                children: "1"
            }, 1, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 183,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)));
            if (startPage > 2) {
                pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-1 py-2 text-gray-400 text-sm md:text-base",
                    children: "..."
                }, "start-ellipsis", false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 187,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0)));
            }
        }
        // Page numbers
        for(let i = startPage; i <= endPage; i++){
            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handlePageChange(i),
                className: `px-2 md:px-3 py-2 rounded text-sm md:text-base transition-colors ${i === currentPage ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'}`,
                children: i
            }, i, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 195,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)));
        }
        // Last page
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-1 py-2 text-gray-400 text-sm md:text-base",
                    children: "..."
                }, "end-ellipsis", false, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 203,
                    columnNumber: 20
                }, ("TURBOPACK compile-time value", void 0)));
            }
            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handlePageChange(totalPages),
                className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base hover:bg-gray-100 rounded transition-colors",
                children: totalPages
            }, totalPages, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 207,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)));
        }
        // Next button
        if (currentPage < totalPages) {
            pages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>handlePageChange(currentPage + 1),
                className: "px-2 md:px-3 py-2 text-gray-500 hover:text-gray-700 text-sm md:text-base whitespace-nowrap hover:bg-gray-100 rounded transition-colors",
                children: "Next →"
            }, "next", false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 214,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)));
        }
        return pages;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white py-2 md:py-4 animate-fadeIn",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-2 h-2 rounded-full ${isConnected ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 227,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-gray-500",
                                        children: isConnected ? 'Live Updates' : 'Offline'
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 226,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row justify-center items-center gap-4 -mb-4 py-4 md:py-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full max-w-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        placeholder: "search your blog here",
                                        value: searchQuery,
                                        onChange: (e)=>setSearchQuery(e.target.value),
                                        className: "w-full px-4 md:px-6 py-3 shadow-lg drop-shadow-lg rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 235,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "bg-[#005A8B] text-white px-6 md:px-8 py-3 rounded-full hover:bg-blue-700 transition-colors whitespace-nowrap text-sm md:text-base w-full sm:w-auto",
                                    children: "Search"
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 238,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: scrollRef,
                            className: "flex justify-start md:justify-center overflow-hidden md:overflow-x-auto [&::-webkit-scrollbar]:hidden",
                            style: {
                                scrollbarWidth: 'none',
                                msOverflowStyle: 'none'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex space-x-2 md:space-x-8 p-2 rounded-full min-w-max",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('left'),
                                        className: "hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/blogs/left-arrow.webp",
                                            alt: "Previous",
                                            width: 20,
                                            height: 20,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 250,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    categories.map((category, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActiveCategory(category),
                                            className: `px-3 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base whitespace-nowrap ${activeCategory === category ? 'bg-[#005A8B] text-white' : category === 'Education' ? 'bg-[#BFE6DB] text-[#00A88E]' : category === 'Exams' ? 'bg-[#FFE0B2] text-[#C77700]' : category === 'Careers' ? 'bg-[#D5DCE5] text-[#004E89]' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`,
                                            children: category
                                        }, index, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 253,
                                            columnNumber: 52
                                        }, ("TURBOPACK compile-time value", void 0))),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>scroll('right'),
                                        className: "hidden md:flex w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/images/blogs/right-arrow.webp",
                                            alt: "Next",
                                            width: 20,
                                            height: 20,
                                            className: "object-contain"
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 257,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 248,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 244,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex md:hidden justify-center space-x-4 mt-4 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scroll('left'),
                                    className: "w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/blogs/left-arrow.webp",
                                        alt: "Previous",
                                        width: 20,
                                        height: 20,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scroll('right'),
                                    className: "w-10 h-10 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/images/blogs/right-arrow.webp",
                                        alt: "Next",
                                        width: 20,
                                        height: 20,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 269,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 268,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                    lineNumber: 223,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 222,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-2 md:py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8",
                        children: "Fresh Update"
                    }, void 0, false, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 277,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 animate-fadeIn",
                                style: {
                                    animationDelay: '0.1s'
                                },
                                children: featuredBlog ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 51
                                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "/images/blogs/b.webp",
                                                    alt: featuredBlog.title,
                                                    fill: true,
                                                    className: "object-contain"
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 153
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 286,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-4 md:p-6",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `inline-block ${getCategoryColor(featuredBlog.category)} text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4`,
                                                        children: featuredBlog.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "text-lg md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 hover:text-blue-600 transition-colors",
                                                        children: featuredBlog.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-2",
                                                        children: featuredBlog.excerpt || featuredBlog.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 296,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center text-gray-500 text-xs md:text-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: featuredBlog.author
                                                            }, void 0, false, {
                                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                                lineNumber: 300,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mx-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: formatDate(featuredBlog.date)
                                                            }, void 0, false, {
                                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                                lineNumber: 302,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 299,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 284,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg overflow-hidden border border-gray-200 p-8 text-center text-gray-500",
                                    children: loading ? 'Loading...' : 'No published blogs yet. Check back later.'
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 md:space-y-6",
                                children: sidebarBlogs.length > 0 ? sidebarBlogs.map((post, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/blogs/${post.slug}`,
                                        className: "block animate-fadeIn",
                                        style: {
                                            animationDelay: `${0.2 + index_0 * 0.1}s`
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `bg-white rounded-lg p-4 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer ${index_0 < sidebarBlogs.length - 1 ? 'border-b-2 border-gray-200' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `inline-block ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-xs md:text-sm mb-3 md:mb-4`,
                                                    children: post.category
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors",
                                                    children: post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 320,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2",
                                                    children: post.excerpt || post.title
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center text-gray-500 text-xs",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: post.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                            lineNumber: 327,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "mx-2",
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                            lineNumber: 328,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: formatDate(post.date)
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                            lineNumber: 329,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 326,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 316,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, post.id, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 313,
                                        columnNumber: 76
                                    }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-lg p-6 text-center text-gray-500 border-2 border-dashed border-gray-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm md:text-base",
                                            children: "No additional blogs available"
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 333,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs md:text-sm mt-2",
                                            children: "More blogs will appear here as they are published"
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 334,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 28
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 312,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-4 left-0 right-0 border-b-3 border-gray-200 lg:col-span-3"
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-16 md:mt-30",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6",
                                children: gridBlogs.map((blog, index_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                        className: "object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 43
                                                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: [
                                                            "/images/blogs/card.webp",
                                                            "/images/blogs/card-1.webp",
                                                            "/images/blogs/card-2.webp"
                                                        ][index_1 % 3],
                                                        alt: blog.title,
                                                        fill: true,
                                                        className: "object-contain"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 129
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 349,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-4 md:p-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `inline-block ${getCategoryColor(blog.category)} px-3 py-1 rounded-full text-xs md:text-sm mb-2 md:mb-3`,
                                                            children: blog.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                            lineNumber: 353,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-base md:text-lg font-bold text-gray-800 mb-2 md:mb-3 hover:text-blue-600 transition-colors line-clamp-2",
                                                            children: blog.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                            lineNumber: 356,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2",
                                                            children: blog.excerpt || blog.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                            lineNumber: 359,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center text-gray-500 text-xs",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: blog.author
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "mx-2",
                                                                    children: "•"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                                    lineNumber: 364,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: formatDate(blog.date)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                                    lineNumber: 365,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 348,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, blog.id, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 47
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 344,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center mt-8 md:mt-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm md:text-base text-gray-600 mb-3",
                                        children: [
                                            "Page ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-blue-600",
                                                children: currentPage
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 20
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " of ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold",
                                                children: totalPages
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 376,
                                                columnNumber: 90
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 375,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center items-center space-x-1 bg-white shadow-lg rounded-full px-4 md:px-6 py-3 w-fit mx-auto overflow-x-auto",
                                        children: renderPagination()
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 379,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 373,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-12 md:mt-16 mb-6 md:mb-8 animate-fadeIn",
                        style: {
                            animationDelay: '0.9s'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 text-center px-4",
                                children: [
                                    "Connect With ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-blue-400",
                                        children: "Our Counselor"
                                    }, void 0, false, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 391,
                                        columnNumber: 26
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 390,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                            lineNumber: 398,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-opacity-30"
                                        }, void 0, false, {
                                            fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 397,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 395,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-center -mt-40 md:-mt-90 relative z-10 px-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#005A8B] bg-opacity-90 rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                        className: "space-y-3 md:space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                placeholder: "Full Name",
                                                className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base"
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 409,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "tel",
                                                placeholder: "Phone No",
                                                className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base"
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 412,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 border-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select Course"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 416,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "mbbs",
                                                        children: "MBBS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 417,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "bds",
                                                        children: "BDS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 418,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ayush",
                                                        children: "AYUSH"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 419,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "neet-pg",
                                                        children: "NEET PG"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 415,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                className: "w-full px-3 md:px-4 py-2 md:py-3 rounded-lg border-1 border-white focus:outline-none focus:ring-2 focus:ring-blue-300 text-gray-700 bg-white text-sm md:text-base",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "",
                                                        children: "Select State"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 425,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "delhi",
                                                        children: "Delhi"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 426,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "mumbai",
                                                        children: "Mumbai"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 427,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "bangalore",
                                                        children: "Bangalore"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "chennai",
                                                        children: "Chennai"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "kolkata",
                                                        children: "Kolkata"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 424,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start space-x-3 text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        type: "checkbox",
                                                        id: "consent",
                                                        className: "mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 flex-shrink-0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                        htmlFor: "consent",
                                                        className: "text-white text-xs md:text-sm",
                                                        children: "I Consent To Receiving Calls, WhatsApp, Email And Google RCS From Advisor To Assist With This Enquiry."
                                                    }, void 0, false, {
                                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                        lineNumber: 436,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "submit",
                                                className: "w-full bg-gradient-to-r from-[#63CDB4] to-[#0077BF] hover:from-[#0077BF] hover:to-[#63CDB4] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-200 text-sm md:text-base",
                                                children: "Submit"
                                            }, void 0, false, {
                                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                                lineNumber: 443,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                        lineNumber: 407,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                    lineNumber: 406,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                                lineNumber: 405,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                        lineNumber: 386,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
                lineNumber: 276,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/crm/radical/src/app/blogs/page.tsx",
        lineNumber: 220,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BlogsPage, "Xa+SjZ3GNqKcNMiHgBjoU8g51U8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$crm$2f$radical$2f$src$2f$hooks$2f$useWebSocket$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWebSocket"]
    ];
});
_c = BlogsPage;
const __TURBOPACK__default__export__ = BlogsPage;
var _c;
__turbopack_context__.k.register(_c, "BlogsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=crm_radical_src_269971b4._.js.map