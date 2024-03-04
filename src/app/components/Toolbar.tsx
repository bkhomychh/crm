'use client';

import { SearchField } from '@/components';
import styles from '@/styles/common/toolbar.module.scss';

export interface ToolbarProps {
  children: React.ReactNode;
}

export default function Toolbar({ children }: ToolbarProps) {
  return (
    <div className={styles.wrapper}>
      <SearchField />
      {children}
    </div>
  );
}
