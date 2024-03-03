import styles from '@/styles/dashboard/page.module.scss';
import clsx from 'clsx';

export interface LayoutProps {
  children: React.ReactNode;
  statistics: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
  countries: React.ReactNode;
  promotions: React.ReactNode;
}

export default function Layout({
  children,
  statistics,
  sales,
  categories,
  countries,
  promotions,
}: LayoutProps) {
  return (
    <>
      {children}
      <main className={styles.main}>
        {statistics}
        <div className={styles.row}>
          {sales}
          {categories}
        </div>
        <div className={styles.grid}>
          {countries}
          {promotions}
        </div>
      </main>
    </>
  );
}
