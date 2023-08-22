import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
}

export function Page({ className, children }: PageProps) {
  return <div className={classNames(styles.Page, {}, [className])}>{children}</div>;
}
