import { StatCard } from '@/app/components';
import styles from '@/styles/dashboard/statistics.module.scss';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <ul className={styles.list}>
      <StatCard title="Total promotions" number={432} />
      <StatCard title="Total category" number={8} />
      <StatCard title="New companies" number={28} />
      <StatCard title="Total active companies" number={670} />
    </ul>
  );
}
