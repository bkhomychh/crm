import { DashboardCard } from '@/app/components';
import { getCategories } from '@/lib/api';
import styles from '@/styles/dashboard/categories.module.scss';

export interface PageProps {}

export default async function Page({}: PageProps) {
  const data = await getCategories();

  return (
    <DashboardCard title="Categories of companies">
      <ul className={styles.categoryList}>
        {data.map(({ id, title }) => (
          <li key={id} className={styles.category}>
            <p className={styles.name}>{title}</p>
            <span className={styles.number}>{id}</span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
