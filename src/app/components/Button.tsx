'use client';

import styles from '@/styles/common/button.module.scss';
import clsx from 'clsx';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  className,
  children,
  ...otherProps
}: ButtonProps) {
  return (
    <button
      className={clsx(styles.btn, className)}
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
}
