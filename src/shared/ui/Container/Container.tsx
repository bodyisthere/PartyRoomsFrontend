import { ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ContainerProps {
  className?: string;
  maxWidth?: string;
  padding?: string;
  children?: ReactNode;
}

export const Container = ({ className, maxWidth, padding, children }: ContainerProps) => {
  return (
    <div className={classNames('', {}, [className])} style={{ maxWidth, padding }}>
      {children}
    </div>
  );
};
