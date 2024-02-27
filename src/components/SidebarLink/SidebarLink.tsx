import Link from 'next/link';

import styles from './SidebarLink.module.scss';

export interface SidebarLinkProps {
  text: string;
  iconSrc: string;
  pathname: string;
}

export default function SidebarLink({
  text,
  iconSrc,
  pathname,
}: SidebarLinkProps) {
  return (
    <Link className={styles.link} href={pathname}>
      <svg width={18} height={18}>
        <use href={iconSrc}></use>
      </svg>
      {text}
    </Link>
  );
}
