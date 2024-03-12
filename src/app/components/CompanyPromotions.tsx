'use client';
import { useQuery } from '@tanstack/react-query';

import styles from '@/styles/companies/company-promotions.module.scss';
import Promotion from './Promotion';
import { getPromotions } from '@/lib/api';

export interface CompanyPromotionsProps {
  companyId: string;
}

export default function CompanyPromotions({
  companyId,
}: CompanyPromotionsProps) {
  const { data } = useQuery({
    queryKey: ['promotions', companyId],
    queryFn: () => getPromotions({ companyId }),
    staleTime: 10 * 1000,
  });

  return (
    <ul className={styles.promotions}>
      {data?.map((promotion) => <Promotion promotion={promotion} />)}
    </ul>
  );
}
