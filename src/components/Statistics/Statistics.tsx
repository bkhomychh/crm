import Link from 'next/link';
import Image from 'next/image';

import { SidebarLink } from '@/components';
import styles from './Statistics.module.scss';

export interface StatisticsProps {}

export default function Statistics() {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <div className={styles.content}>
          <div>
            <p className={styles.text}>Total promotions</p>
            <span className={styles.number}>432</span>
          </div>
        </div>
      </li>
      <li className={styles.listItem}>
        <div className={styles.content}>
          <div>
            <p className={styles.text}>Total category</p>
            <span className={styles.number}>8</span>
          </div>
        </div>
      </li>
      <li className={styles.listItem}>
        <div className={styles.content}>
          <div>
            <p className={styles.text}>New companies</p>
            <span className={styles.number}>28</span>
          </div>
        </div>
      </li>
      <li className={styles.listItem}>
        <div className={styles.content}>
          <div>
            <p className={styles.text}>Total active companies</p>
            <span className={styles.number}>670</span>
          </div>
        </div>
      </li>
    </ul>
  );
}
