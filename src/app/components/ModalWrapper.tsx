'use client';

import { useRef } from 'react';

import styles from '@/styles/common/modal-wrapper.module.scss';
import { useClickOutside } from '@/hooks';

export interface ModalWrapperProps {
  children: React.ReactNode;
  isShown: boolean;
  onClose: () => void;
}

export default function ModalWrapper({
  isShown,
  onClose,
  children,
}: ModalWrapperProps) {
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useClickOutside({
    ref: backdropRef,
    enabled: isShown,
    onClickOutside: onClose,
  });

  return (
    <div className={styles.backdrop} ref={backdropRef}>
      <div className={styles.modal}>
        {children}
        <button className={styles.closeBtn} type="button" onClick={onClose}>
          <svg width={24} height={24}>
            <use href="/sprite.svg#x-mark"></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
