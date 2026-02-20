'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import io, { Socket } from 'socket.io-client';

interface WebSocketMessage {
  type: string;
  [key: string]: any;
}

type MessageHandler = (data: WebSocketMessage) => void;

export function useWebSocket(url: string = process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:8081') {
  const [isConnected, setIsConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const wsRef = useRef<Socket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = 10; // Increased from 5 to 10
  const messageHandlersRef = useRef<Set<MessageHandler>>(new Set());
  const reconnectTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isManualCloseRef = useRef(false);
  const urlRef = useRef(url);

  // Store url in ref to avoid dependency changes
  useEffect(() => {
    urlRef.current = url;
  }, [url]);

  const connect = useCallback(() => {
    // Prevent multiple simultaneous connections
    if (wsRef.current && wsRef.current.connected) {
      return;
    }

    isManualCloseRef.current = false;

    // Get auth token - try multiple storage locations
    let token = null;
    if (typeof window !== 'undefined') {
      token = localStorage.getItem('token') || sessionStorage.getItem('token') || null;
      
      // If no token found, check for JWT in cookies
      if (!token) {
        const cookies = document.cookie.split(';');
        const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('token='));
        if (tokenCookie) {
          token = tokenCookie.split('=')[1];
        }
      }
    }
    
    console.log('WebSocket connecting with token:', token ? 'present' : 'undefined');
    
    // Connect to Socket.IO server
    const newSocket = io(urlRef.current, {
      auth: token ? { token } : undefined,
      query: token ? { token } : undefined,
      transports: ['websocket', 'polling'],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      timeout: 20000,
      randomizationFactor: 0.5
    });

    wsRef.current = newSocket;

    // Connection event
    newSocket.on('connect', () => {
      console.log('Socket.IO connected');
      setIsConnected(true);
      setError(null);
      reconnectAttemptsRef.current = 0;
    });

    // Disconnection event
    newSocket.on('disconnect', (reason) => {
      console.log('Socket.IO disconnected:', reason);
      setIsConnected(false);

      // Attempt reconnection only if not manually closed
      if (reason !== 'io client disconnect' && !isManualCloseRef.current && reconnectAttemptsRef.current < maxReconnectAttempts) {
        reconnectAttemptsRef.current += 1;
        const delay = Math.min(1000 * Math.pow(2, reconnectAttemptsRef.current), 30000);
        console.log(`Reconnecting in ${delay}ms... (attempt ${reconnectAttemptsRef.current})`);

        reconnectTimeoutRef.current = setTimeout(() => {
          // Disconnect the current socket
          if (wsRef.current) {
            wsRef.current.off('connect');
            wsRef.current.off('disconnect');
            wsRef.current.off('connect_error');
            wsRef.current.offAny();
            wsRef.current.disconnect();
          }
          connect();
        }, delay);
      }
    });

    // Connection error event
    newSocket.on('connect_error', (error) => {
      console.error('Socket.IO connection error:', error);
      setError(`Socket.IO connection error: ${error.message || 'Unknown error'}`);
      
      // Don't attempt reconnection for authentication errors
      if (error.message && error.message.includes('Authentication error')) {
        console.log('Authentication failed, stopping reconnection attempts');
        isManualCloseRef.current = true;
      }
    });

    // Listen for all incoming messages
    newSocket.onAny((event, data) => {
      console.log('Socket.IO message received:', { type: event, ...data });
      
      // Validate message structure
      if (!event || typeof event !== 'string') {
        console.warn('Invalid WebSocket message format - missing event type');
        return;
      }
      
      // Notify all registered handlers
      messageHandlersRef.current.forEach((handler) => {
        try {
          handler({ type: event, ...data });
        } catch (err) {
          console.error('Error in message handler:', err);
        }
      });
    });
  }, []);

  const disconnect = useCallback(() => {
    isManualCloseRef.current = true;
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = null;
    }
    if (wsRef.current) {
      wsRef.current.off('connect');
      wsRef.current.off('disconnect');
      wsRef.current.off('connect_error');
      wsRef.current.offAny();
      wsRef.current.disconnect();
      wsRef.current = null;
    }
  }, []);

  const sendMessage = useCallback((event: string, data: any) => {
    if (wsRef.current && wsRef.current.connected) {
      wsRef.current.emit(event, data);
    } else {
      console.warn('Socket.IO is not connected. Message not sent.');
    }
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
