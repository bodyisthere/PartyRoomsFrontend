import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Block.module.scss';
import { ReactNode } from 'react';

interface BlockProps {
  className?: string;
  children: ReactNode;
  width?: string;
  height?: string;
}

export const Block = ({ className, children, height = '95vh', width = '90vw' }: BlockProps) => {
  return (
    <div style={{ width, height }} className={classNames(styles.Block, {}, [className])}>
      {children}
    </div>
  );
};
