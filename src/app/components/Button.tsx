'use client';

import styles from '@/styles/common/button.module.scss';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, ...otherProps }: ButtonProps) {
  return (
    <button className={styles.btn} type="button" {...otherProps}>
      {children}
    </button>
  );
}
