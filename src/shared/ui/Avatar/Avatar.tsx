import { CSSProperties, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  borderRadius?: string;
}

export const Avatar = ({ alt, className, size, src, borderRadius }: AvatarProps) => {
  const fallback = <Skeleton width={size} height={size} border={borderRadius} />;
  const errorFallback = <div>error</div>;
  const sizeStyles = useMemo<CSSProperties>(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
      borderRadius,
    }),
    [size, borderRadius]
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      src={src}
      alt={alt}
      style={sizeStyles}
      className={classNames('', {}, [className])}
    />
  );
};
