'use client';

import { Button, ToolBar } from '@/app/components';
import { useRouter } from 'next/navigation';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();

  return (
    <ToolBar>
      <Button onClick={() => router.push('/companies/1/new-promotion')}>
        Add promotion
      </Button>
    </ToolBar>
  );
}
