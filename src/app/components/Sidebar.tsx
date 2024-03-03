'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { SidebarLink } from '@/components';
import styles from '@/styles/common/sidebar.module.scss';

export interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const pathname = usePathname();
  console.log(pathname);
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
        <SidebarLink
          current={pathname === '/dashboard'}
          text="Dashboard"
          iconSrc="/sprite.svg#squares"
          pathname="/dashboard"
        />
        <SidebarLink
          current={pathname === '/companies'}
          text="Companies"
          iconSrc="/sprite.svg#briefcase"
          pathname="/companies"
        />
      </ul>

      <div className={styles.buttonWrapper}>
        <button className={styles.exitBtn}>
          <svg width={18} height={18}>
            <use href="/sprite.svg#exit"></use>
          </svg>
          Exit
        </button>
      </div>
    </aside>
  );
}
