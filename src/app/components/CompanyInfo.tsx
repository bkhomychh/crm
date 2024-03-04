import Image, { StaticImageData } from 'next/image';

import { StatusLabel } from '@/components';
import { Status } from './StatusLabel';
import companyImage from '@/assets/images/company.png';
import styles from '@/styles/companies/company-info.module.scss';

export interface CompanyInfoProps {
  companyId: string;
}

export default function CompanyInfo({ companyId }: CompanyInfoProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Image className={styles.logo} src={companyImage} alt="Company logo" />
        <h2 className={styles.title}>{'Costco Wholesale'}</h2>
        <StatusLabel status={Status.ACTIVE} />
      </div>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>About company</h3>

        <ul className={styles.info}>
          <li>
            <p className={styles.text}>Category: products</p>
          </li>
          <li>
            <p className={styles.text}>Country: USA</p>
          </li>
          <li>
            <p className={styles.text}>Joined data: 19.02.2023</p>
          </li>
        </ul>

        <span className={styles.divider}></span>

        <p className={styles.text}>
          Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos.
        </p>
      </section>
    </div>
  );
}
