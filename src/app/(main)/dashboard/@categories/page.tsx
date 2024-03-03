import { DashboardCard } from '@/app/components';
import styles from '@/styles/dashboard/categories.module.scss';

const data = [
  {
    id: 1,
    name: 'Products',
    number: 4,
  },
  {
    id: 2,
    name: 'Products',
    number: 8,
  },
  {
    id: 3,
    name: 'Products',
    number: 26,
  },
  {
    id: 4,
    name: 'Products',
    number: 1,
  },
  {
    id: 5,
    name: 'Products',
    number: 37,
  },
  {
    id: 6,
    name: 'Products',
    number: 22,
  },
  {
    id: 7,
    name: 'Products',
    number: 4,
  },
  {
    id: 8,
    name: 'Products',
    number: 12,
  },
];

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <DashboardCard title="Categories of companies">
      <ul className={styles.categoryList}>
        {data.map(({ id, name, number }) => (
          <li key={id} className={styles.category}>
            <p className={styles.name}>{name}</p>
            <span className={styles.number}>{number}</span>
          </li>
        ))}
      </ul>
    </DashboardCard>
  );
}
