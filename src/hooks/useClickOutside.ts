import { RefObject, useEffect } from 'react';

interface HookProps {
  ref: RefObject<HTMLElement>;
  enabled: boolean;
  onClickOutside: () => void;
}

export const useClickOutside = ({
  ref,
  enabled,
  onClickOutside,
}: HookProps): void => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const handleClick = ({ target }: globalThis.MouseEvent) => {
      ref.current === target && onClickOutside();
    };

    document.addEventListener('click', handleClick);

    return () => document.removeEventListener('click', handleClick);
  }, [enabled]);
};
