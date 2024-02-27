import Image from 'next/image';

import styles from './Header.module.scss';
import UserAvatar from '/avatar.png';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Dashboard</h1>

      <div className={styles.wrapper}>
        <Image
          className={styles.avatar}
          width={44}
          height={44}
          src="/avatar.png"
          alt="User avatar"
        />
        <div className={styles.info}>
          <span className={styles.userName}>Adam Smith</span>
          <span className={styles.userEmail}>adamsmith@gmail.com</span>
        </div>
      </div>
    </header>
  );
}
