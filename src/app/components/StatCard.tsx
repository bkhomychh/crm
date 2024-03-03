import styles from '@/styles/dashboard/stat-card.module.scss';

export interface StatCardProps {
  title: string;
  number: number;
}

export default function StatCard({ title, number }: StatCardProps) {
  return (
    <li className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <p className={styles.text}>{title}</p>
          <span className={styles.number}>{number}</span>
        </div>
      </div>
    </li>
  );
}
