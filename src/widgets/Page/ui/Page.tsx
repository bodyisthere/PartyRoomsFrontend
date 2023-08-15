import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Page.module.scss';
import { ReactNode } from 'react';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export const Page = ({ className, children }: PageProps) => {
  return <div className={classNames(styles.Page, {}, [className])}>{children}</div>;
};
