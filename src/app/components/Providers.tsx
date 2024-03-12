'use client';

import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  const queryClient = useRef(new QueryClient());

  return (
    <QueryClientProvider client={queryClient.current}>
      {children}
    </QueryClientProvider>
  );
}
