import Image from 'next/image';

import styles from '@/styles/common/promotion.module.scss';
import { Promotion } from '@/types/Promotion';

export interface PromotionProps {
  // promotion: Promotion;
}

export default function PromotionComponent({}: PromotionProps) {
  return (
    <li className={styles.card}>
      <div className={styles.imgWrapper}>
        {/* <Image src={''} alt="Promotion preview" /> */}
        <span className={styles.discount}>-20%</span>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>Discount on this product</h3>
        <p className={styles.text}>
          Jorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </li>
  );
}
