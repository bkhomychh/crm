import styles from '@/styles/dashboard/summary-table-cell.module.scss';
import Image, { StaticImageData } from 'next/image';

export interface SummaryTableCellProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  imgSrc?: string | StaticImageData;
}

export default function SummaryTableCell({
  align = 'left',
  children,
  imgSrc,
}: SummaryTableCellProps) {
  return (
    <td className={styles.cell} style={{ textAlign: align }}>
      <div className={styles.row}>
        {imgSrc && <Image className={styles.img} src={imgSrc} alt="Preview" />}
        {children}
      </div>
    </td>
  );
}
