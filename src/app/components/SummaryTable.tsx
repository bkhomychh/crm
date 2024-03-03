import styles from '@/styles/dashboard/summary-table.module.scss';

export interface SummaryTableProps {
  headers: React.ReactNode;
  children: React.ReactNode;
}

export default function SummaryTable({ headers, children }: SummaryTableProps) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>{headers}</tr>
      </thead>
      <tbody className={styles.tbody}>{children}</tbody>
    </table>
  );
}
