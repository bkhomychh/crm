import { notFound } from 'next/navigation';

import { CompanyInfo, CompanyPromotions } from '@/app/components';
import { Company, getCompany, getPromotions } from '@/lib/api';
import { getQueryClient } from '@/lib/utils';
import styles from '@/styles/companies/[id]/page.module.scss';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

interface PageProps {
  params: { id: string };
}

export default async function Page({ params }: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params.id],
    queryFn: () => getCompany(params.id, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ['promotions', params.id],
    queryFn: () =>
      getPromotions({ companyId: params.id }, { cache: 'no-store' }),
    staleTime: 10 * 1000,
  });

  const company = queryClient.getQueryData(['companies', params.id]) as Company;

  if (!company) {
    notFound();
  }

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <div className={styles.container}>
        <CompanyInfo companyId={params.id} />
        <CompanyPromotions companyId={params.id} />
      </div>
    </HydrationBoundary>
  );
}
