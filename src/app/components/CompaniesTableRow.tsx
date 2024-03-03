import Image, { StaticImageData } from 'next/image';
import clsx from 'clsx';

import styles from '@/styles/companies/companies-table-row.module.scss';
import StatusLabel, { Status } from '@/app/components/StatusLabel';
import Link from 'next/link';

export interface CompaniesTableRowProps {
  category: string;
  company: { name: string; imgSrc: string | StaticImageData };
  status: Status;
  promotion: boolean;
  country: string;
  data: string;
}

export default function CompaniesTableRow({
  category,
  company,
  status,
  promotion,
  country,
  data,
}: CompaniesTableRowProps) {
  return (
    <tr className={styles.tableRow}>
      <td
        className={clsx(
          styles.category,
          status === Status.ACTIVE && styles.success,
          status === Status.NOT_ACTIVE && styles.error,
          status === Status.PENDING && styles.warning,
          status === Status.SUSPENDED && styles.info,
        )}
      >
        {category}
      </td>
      <td className={styles.cell}>
        <Link className={styles.row} href="/companies/1">
          <Image className={styles.img} src={company.imgSrc} alt="Preview" />
          {company.name}
        </Link>
      </td>
      <td>
        <div className={styles.centeredWrapper}>
          <StatusLabel status={status} />
        </div>
      </td>
      <td
        className={clsx(
          styles.cell,
          styles.promotion,
          promotion ? styles.success : styles.error,
        )}
      >
        <div className={styles.centeredWrapper}>
          <svg width={16} height={16}>
            <use href={`./sprite.svg#${promotion ? 'check' : 'x-mark'}`}></use>
          </svg>
          {promotion ? 'Yes' : 'No'}
        </div>
      </td>
      <td className={styles.cell}>{country}</td>
      <td className={styles.cell}>{data}</td>
    </tr>
  );
}
