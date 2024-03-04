import styles from '@/styles/companies/company-promotions.module.scss';
import Promotion from './Promotion';

export interface CompanyPromotionsProps {}

export default function CompanyPromotions({}: CompanyPromotionsProps) {
  return (
    <ul className={styles.promotions}>
      <Promotion />
      <Promotion />
      <Promotion />
      <Promotion />
      <Promotion />
      <Promotion />
    </ul>
  );
}
