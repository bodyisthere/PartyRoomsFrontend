import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  onClose?: () => void;
}

export function Modal({ className, children, onClose }: ModalProps) {
  const close = useModal({ onClose });

  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <div className={classNames(styles.Modal, {}, [className])}>
        <Overlay onClick={close} />
        <div className={styles.content}>{children}</div>
      </div>
    </Portal>
  );
}
