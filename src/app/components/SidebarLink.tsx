import Link from 'next/link';

import styles from '@/styles/common/sidebar-link.module.scss';
import clsx from 'clsx';

export interface SidebarLinkProps {
  current: boolean;
  text: string;
  iconSrc: string;
  pathname: string;
}

export default function SidebarLink({
  current,
  text,
  iconSrc,
  pathname,
}: SidebarLinkProps) {
  return (
    <li>
      <Link
        className={clsx(styles.link, current && styles.active)}
        href={pathname}
      >
        <svg width={18} height={18}>
          <use href={iconSrc}></use>
        </svg>
        {text}
      </Link>
    </li>
  );
}
