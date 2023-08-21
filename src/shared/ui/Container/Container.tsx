import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ContainerProps {
  className?: string;
  maxWidth?: string;
  maxHeight?: string;
  padding?: string;
  children?: ReactNode;
  testId: string;
}

export const Container = ({
  className,
  maxWidth,
  maxHeight,
  padding,
  children,
  testId,
}: ContainerProps) => {
  return (
    <div
      className={classNames('', {}, [className])}
      style={{ maxWidth, padding, maxHeight }}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
