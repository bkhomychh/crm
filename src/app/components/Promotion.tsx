import Image from 'next/image';

import styles from '@/styles/common/promotion.module.scss';
import { Promotion } from '@/lib/api';

export interface PromotionProps {
  promotion: Promotion;
}

export default function PromotionComponent({ promotion }: PromotionProps) {
  return (
    <li className={styles.card}>
      <div className={styles.imgWrapper}>
        {promotion.avatar && (
          <Image
            fill
            src={promotion.avatar}
            width={160}
            height={160}
            alt="promotion avatar"
          />
        )}
        <span className={styles.discount}>-{promotion.discount}%</span>
      </div>

      <div className={styles.info}>
        <h3 className={styles.title}>{promotion.title}</h3>
        <p className={styles.text}>{promotion.description}</p>
      </div>
    </li>
  );
}
