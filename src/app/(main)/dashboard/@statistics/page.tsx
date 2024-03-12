import { StatCard } from '@/app/components';
import { SummaryStats, getSummaryStats } from '@/lib/api';
import styles from '@/styles/dashboard/statistics.module.scss';

const labelByStat: Record<keyof SummaryStats, string> = {
  promotions: 'Total promotions',
  categories: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getSummaryStats();

  return (
    <ul className={styles.list}>
      {(Object.keys(labelByStat) as (keyof SummaryStats)[]).map((key) => (
        <StatCard key={key} title={labelByStat[key]} number={data[key]} />
      ))}
    </ul>
  );
}
