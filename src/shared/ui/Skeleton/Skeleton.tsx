import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  margin?: string;
  border?: string;
  borderRadius?: string;
}

export const Skeleton = memo(
  ({ className, border, height, width, borderRadius, margin }: SkeletonProps) => (
    <div
      className={classNames(styles.Skeleton, {}, [className])}
      style={{ width, border, height, borderRadius, margin }}
    />
  )
);
