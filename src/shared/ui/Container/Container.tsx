import { ReactNode } from 'react';

import styles from './Container.module.scss';

import { Mods, classNames } from '@/shared/lib/classNames/classNames';

interface ContainerProps {
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  center?: boolean;
  children?: ReactNode;
  testid?: string;
}

export function Container({
  className,
  maxWidth,
  maxHeight,
  padding,
  children,
  testid,
  center = false,
}: ContainerProps) {
  const mods: Mods = {
    [styles.center]: center,
  };

  return (
    <div
      className={classNames('', mods, [className])}
      style={{ maxWidth, padding, maxHeight }}
      data-testid={testid}
    >
      {children}
    </div>
  );
}
