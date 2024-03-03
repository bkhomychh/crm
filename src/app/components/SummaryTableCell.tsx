import styles from '@/styles/dashboard/summary-table-cell.module.scss';

export interface SummaryTableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function SummaryTableCell({
  align = 'left',
  children,
}: SummaryTableCellProps) {
  return (
    <td className={styles.cell} style={{ textAlign: align }}>
      {children}
    </td>
  );
}
