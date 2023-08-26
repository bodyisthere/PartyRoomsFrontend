/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

export const Overlay = memo(({ className, onClick }: OverlayProps) => {
  return <div onClick={onClick} className={classNames(styles.Overlay, {}, [className])} />;
});
