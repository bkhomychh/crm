'use client';

import { ModalWrapper, NewCompanyForm } from '@/app/components';
import { useRouter } from 'next/navigation';

export interface PageProps {}

export default function Page({}: PageProps) {
  const router = useRouter();

  return (
    <ModalWrapper isShown onClose={() => router.back()}>
      <NewCompanyForm />
    </ModalWrapper>
  );
}
