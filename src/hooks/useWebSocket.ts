'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface WebSocketMessage {
  type: string;
  [key: string]: any;
}

type MessageHandler = (data: WebSocketMessage) => void;

export function useWebSocket(url: string = process.env.NEXT_PUBLIC_WS_URL || 'wss://backend-radical.onrender.com') {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 5;
  const messageHandlersRef = useRef<Set<MessageHandler>>(new Set());
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isConnectingRef = useRef(false);
  const isManualCloseRef = useRef(false);
  const urlRef = useRef(url);

  // Store url in ref to avoid dependency changes
  useEffect(() => {
    urlRef.current = url;
  }, [url]);

  const connect = useCallback(() => {
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
      const connectionTimeout = setTimeout(() => {
        if (ws.readyState !== WebSocket.OPEN) {
          console.warn('WebSocket connection timeout, closing...');
          ws.close();
        }
      }, 5000);

      ws.onopen = () => {
        clearTimeout(connectionTimeout);
        console.log('WebSocket connected');
        setIsConnected(true);
        setError(null);
        reconnectAttemptsRef.current = 0;
        isConnectingRef.current = false;

        // Send authentication token if available
        const token = localStorage.getItem('token');
        if (token) {
          ws.send(JSON.stringify({ type: 'auth', token }));
        } else {
          // For public website, send a public connection request
          ws.send(JSON.stringify({ type: 'public_connect' }));
        }
      };

      ws.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('WebSocket message received:', data);
          
          // Notify all registered handlers
          messageHandlersRef.current.forEach((handler) => {
            try {
              handler(data);
            } catch (err) {
              console.error('Error in message handler:', err);
            }
          });
        } catch (err) {
          console.error('Error parsing WebSocket message:', err);
        }
      };

      ws.onclose = () => {
        clearTimeout(connectionTimeout);
        console.log('WebSocket disconnected');
        setIsConnected(false);
        isConnectingRef.current = false;

        // Attempt reconnection only if not manually closed
        if (!isManualCloseRef.current && reconnectAttemptsRef.current < maxReconnectAttempts) {
          reconnectAttemptsRef.current += 1;
          const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
          console.log(`Reconnecting in ${delay}ms... (attempt ${reconnectAttemptsRef.current})`);

          reconnectTimeoutRef.current = setTimeout(() => {
            connect();
          }, delay);
        }
      };

      ws.onerror = (_err) => {
        clearTimeout(connectionTimeout);
        // WebSocket error events don't contain detailed info for security reasons
        // Log the readyState to help diagnose connection issues
        const readyStateMap: Record<number, string> = {
          0: 'CONNECTING',
          1: 'OPEN',
          2: 'CLOSING',
          3: 'CLOSED'
        };
        const state = readyStateMap[ws.readyState] || 'UNKNOWN';
        console.error(`WebSocket error: Connection failed (readyState: ${state}). Is the backend server running on ${urlRef.current}?`);
        setError(`WebSocket connection error: ${state}`);
        isConnectingRef.current = false;
      };
    } catch (err) {
      console.error('Failed to create WebSocket connection:', err);
      setError('Failed to create WebSocket connection');
      isConnectingRef.current = false;
    }
  }, []);

  const disconnect = useCallback(() => {
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
  }, []);

  const sendMessage = useCallback((message: any) => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(JSON.stringify(message));
      return true;
    }
    console.warn('WebSocket is not connected. Message not sent.');
    return false;
  }, []);

  const addMessageHandler = useCallback((handler: MessageHandler) => {
    messageHandlersRef.current.add(handler);
    return () => {
      messageHandlersRef.current.delete(handler);
    };
  }, []);

  useEffect(() => {
    connect();
    
    return () => {
      disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isConnected,
    error,
    sendMessage,
    addMessageHandler,
  };
}
