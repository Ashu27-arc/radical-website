'use client';

import React, { ReactNode } from 'react';
import { useWebSocket } from '@/hooks/useWebSocket';
import NotificationToast from '@/components/NotificationToast';

interface WebSocketProviderProps {
  children: ReactNode;
}

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  const { isConnected, error } = useWebSocket();

  return (
    <>
      {children}
      <NotificationToast />
      {/* Connection status indicator */}
      {isConnected && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-full text-xs font-medium shadow-sm">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Live Updates</span>
          </div>
        </div>
      )}
      {error && (
        <div className="fixed bottom-4 right-4 z-40">
          <div className="flex items-center gap-2 bg-red-100 text-red-800 px-3 py-2 rounded-full text-xs font-medium shadow-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            <span>Connection Error</span>
          </div>
        </div>
      )}
    </>
  );
};

export default WebSocketProvider;