import { CompanyCategories, SalesDetails, Statistics } from '@/components';
import styles from './page.module.scss';

export interface DashboardProps {
  children: React.ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {
  return (
    <>
      <Statistics />
      <div className={styles.container}>
        <SalesDetails />
        <CompanyCategories />
      </div>
    </>
  );
}
