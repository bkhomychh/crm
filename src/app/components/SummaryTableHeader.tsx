import styles from '@/styles/dashboard/summary-table-header.module.scss';

export interface SummaryTableHeaderProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function SummaryTableHeader({
  align = 'left',
  children,
}: SummaryTableHeaderProps) {
  return (
    <th className={styles.cell} style={{ textAlign: align }}>
      {children}
    </th>
  );
}
