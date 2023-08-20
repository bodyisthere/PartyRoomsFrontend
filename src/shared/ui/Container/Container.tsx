import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ContainerProps {
  className?: string;
  maxWidth?: string;
  padding?: string;
  children?: ReactNode;
  testId: string;
}

export const Container = ({ className, maxWidth, padding, children, testId }: ContainerProps) => {
  return (
    <div
      className={classNames('', {}, [className])}
      style={{ maxWidth, padding }}
      data-testid={testId}
    >
      {children}
    </div>
  );
};
