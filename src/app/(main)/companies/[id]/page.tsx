'use client';

import { useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';
import {
  Button,
  CompanyInfo,
  CompanyPromotions,
  ToolBar,
} from '@/app/components';
import styles from '@/styles/companies/[id]/page.module.scss';

interface PageProps {
  params: { id: string };
}

// export function generateStaticParams() {
// return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

export default function Page({ params }: PageProps) {
  const router = useRouter();

  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <>
      <ToolBar>
        <Button onClick={() => router.push('/companies/1/new-promotion')}>
          Add promotion
        </Button>
      </ToolBar>
      <div className={styles.container}>
        <CompanyInfo companyId="1" />
        <CompanyPromotions />
      </div>
    </>
  );
}
