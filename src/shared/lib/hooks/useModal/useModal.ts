import { useCallback, useEffect } from 'react';

interface UseModalProps {
  onClose?: () => void;
}

export function useModal({ onClose }: UseModalProps) {
  const close = useCallback(() => {
    if (onClose) onClose();
  }, [onClose]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    },
    [close]
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);

    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onKeyDown]);

  return close;
}
