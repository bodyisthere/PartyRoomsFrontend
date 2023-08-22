import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Block.module.scss';

interface BlockProps {
  className?: string;
  children: ReactNode;
  width?: string;
  height?: string;
}

export function Block({ className, children, height = '95vh', width = '90vw' }: BlockProps) {
  return (
    <div style={{ width, height }} className={classNames(styles.Block, {}, [className])}>
      {children}
    </div>
  );
}
