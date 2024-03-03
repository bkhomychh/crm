'use client';

import { Button, SearchField } from '@/components';
import styles from '@/styles/common/toolbar.module.scss';

export interface ToolbarProps {}

export default function Toolbar({}: ToolbarProps) {
  return (
    <div className={styles.wrapper}>
      <SearchField />
      <Button onClick={() => null}>Add company</Button>
    </div>
  );
}
