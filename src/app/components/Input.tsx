import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from '@/styles/common/input.module.scss';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return <input className={clsx(styles.input, className)} {...props} />;
}
