import Link from 'next/link';
import Image from 'next/image';

import { SidebarLink } from '@/components';
import styles from './Sidebar.module.scss';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image
          src="/logo.svg"
          className={styles.logo}
          width={122}
          height={25}
          alt="logo"
        />
      </Link>

      <ul className={styles.links}>
        <li>
          <SidebarLink
            text="Dashboard"
            iconSrc="/sprite.svg#squares"
            pathname="/dashboard"
          />
        </li>
        <li>
          <SidebarLink
            text="Companies"
            iconSrc="/sprite.svg#briefcase"
            pathname="/companies"
          />
        </li>
      </ul>

      <button className={styles.exitBtn}>
        <svg width={18} height={18}>
          <use href="/sprite.svg#exit"></use>
        </svg>
        Exit
      </button>
    </aside>
  );
}
