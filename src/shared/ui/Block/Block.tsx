import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Block.module.scss';
import { ReactNode } from 'react';

interface BlockProps {
  className?: string;
  children: ReactNode;
}

export const Block = ({ className, children }: BlockProps) => {
  return <div className={classNames(styles.Block, {}, [className])}>{children}</div>;
};
