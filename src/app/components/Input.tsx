'use client';

import { ChangeEvent, InputHTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from '@/styles/common/input.module.scss';
import { UseFormRegisterReturn } from 'react-hook-form';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: string;
}

export default function Input({
  className,
  register,
  error,
  type,
  ...props
}: InputProps) {
  return (
    <div className={styles.wrapper}>
      <input
        className={clsx(styles.input, className)}
        type={type}
        {...register}
        {...props}
      />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
