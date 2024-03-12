import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

import { CompaniesTable } from '@/app/components';
import { getQueryClient } from '@/lib/utils';
import { getCompanies } from '@/lib/api';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies'],
    queryFn: () => getCompanies({ cache: 'no-store' }),
    staleTime: 1000 * 10,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CompaniesTable />
    </HydrationBoundary>
  );
}
