import styles from '@/styles/companies/companies-table-header.module.scss';

export interface CompaniesTableHeaderProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

export default function CompaniesTableHeader({
  align = 'left',
  children,
}: CompaniesTableHeaderProps) {
  return (
    <th className={styles.cell} style={{ textAlign: align }}>
      {children}
    </th>
  );
}
