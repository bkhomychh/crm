import styles from '@/styles/companies/companies-table.module.scss';

export interface CompaniesTableProps {
  headers: React.ReactNode;
  children: React.ReactNode;
}

export default function CompaniesTable({
  headers,
  children,
}: CompaniesTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>{headers}</tr>
        </thead>
        <tbody className={styles.tbody}>{children}</tbody>
      </table>
    </div>
  );
}
