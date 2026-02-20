'use client';

import { PrimeReactProvider } from 'primereact/api';
import WebSocketProvider from '@/contexts/WebSocketProvider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <PrimeReactProvider
      value={{
        ripple: true,
        inputStyle: 'outlined',
      }}
    >
      <WebSocketProvider>
        {children}
      </WebSocketProvider>
    </PrimeReactProvider>
  );
}

