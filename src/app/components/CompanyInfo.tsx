'use client';

import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';

import { StatusLabel } from '@/components';
import companyImage from '@/assets/images/company.png';
import styles from '@/styles/companies/company-info.module.scss';
import { getCompany } from '@/lib/api';

export interface CompanyInfoProps {
  companyId: string;
}

export default function CompanyInfo({ companyId }: CompanyInfoProps) {
  const { data: company } = useQuery({
    queryKey: ['companies', companyId],
    queryFn: () => getCompany(companyId),
    staleTime: 10 * 1000,
  });

  if (!company) return null;

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image
          className={styles.logo}
          width={80}
          height={80}
          src={company.avatar || companyImage}
          alt="Company logo"
        />
        <h2 className={styles.title}>{'Costco Wholesale'}</h2>
        <StatusLabel status={company.status} />
      </div>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>About company</h3>

        <ul className={styles.info}>
          <li>
            <p className={styles.text}>Category: {company.categoryTitle}</p>
          </li>
          <li>
            <p className={styles.text}>Country: {company.countryTitle}</p>
          </li>
          <li>
            <p className={styles.text}>
              Joined date:{' '}
              {new Date(company.joinedDate).toLocaleDateString('uk')}
            </p>
          </li>
        </ul>

        <span className={styles.divider}></span>

        <p className={styles.text}>{company.description}</p>
      </section>
    </div>
  );
}
