import styles from '@/styles/dashboard/dashboard-card.module.scss';

export interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
}

export default function DashboardCard({ title, children }: DashboardCardProps) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </div>
  );
}
