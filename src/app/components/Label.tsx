import { LabelHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from '@/styles/common/label.module.scss';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={clsx(styles.label, className)} {...props}>
      {children}
    </label>
  );
}
