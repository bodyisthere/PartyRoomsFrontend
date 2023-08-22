import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ContainerProps {
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  children?: ReactNode;
}

export function Container({ className, maxWidth, maxHeight, padding, children }: ContainerProps) {
  return (
    <div className={classNames('', {}, [className])} style={{ maxWidth, padding, maxHeight }}>
      {children}
    </div>
  );
}
