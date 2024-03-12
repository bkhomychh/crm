import styles from '@/styles/dashboard/summary-table-cell.module.scss';
import clsx from 'clsx';
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
    <td className={styles.cell} >
      <div className={clsx(styles.row, styles[align])}>
        {imgSrc && <Image className={styles.img} src={imgSrc} alt="Preview" />}
        {children}
      </div>
    </td>
  );
}
