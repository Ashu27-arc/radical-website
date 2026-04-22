'use client';

import React, { ReactNode } from 'react';
import { useWebSocket } from '@/hooks/useWebSocket';
import NotificationToast from '@/components/NotificationToast';

interface WebSocketProviderProps {
  children: ReactNode;
}

const WebSocketProvider = ({ children }: WebSocketProviderProps) => {
  useWebSocket(); // Keep the hook call for connection side effects

  return (
    <>
      {children}
      <NotificationToast />
    </>
  );
};

export default WebSocketProvider;