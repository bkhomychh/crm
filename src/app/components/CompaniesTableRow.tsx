import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

import { StatusLabel } from '@/app/components';
import { CompanyStatus } from '@/lib/api';
import companyImg from '@/assets/images/company.png';
import styles from '@/styles/companies/companies-table-row.module.scss';

export interface CompaniesTableRowProps {
  id: string;
  category: string;
  company: { name: string; imgSrc?: string | StaticImageData };
  status: CompanyStatus;
  promotion: boolean;
  country: string;
  date: string;
}

export default function CompaniesTableRow({
  id,
  category,
  company,
  status,
  promotion,
  country,
  date,
}: CompaniesTableRowProps) {
  return (
    <tr className={styles.tableRow}>
      <td
        className={clsx(
          styles.category,
          status === CompanyStatus.ACTIVE && styles.success,
          status === CompanyStatus.NOT_ACTIVE && styles.error,
          status === CompanyStatus.PENDING && styles.warning,
          status === CompanyStatus.SUSPENDED && styles.info,
        )}
      >
        {category}
      </td>
      <td className={styles.cell}>
        <Link className={styles.row} href={`/companies/${id}`}>
          {/* {company.imgSrc && ( */}
          <Image
            unoptimized
            className={styles.img}
            // src={company.imgSrc}
            src={companyImg}
            width={32}
            height={32}
            alt="Preview"
          />
          {/* )} */}

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
      <td className={styles.cell}>
        {new Date(date).toLocaleDateString('uk-UA')}
      </td>
    </tr>
  );
}
