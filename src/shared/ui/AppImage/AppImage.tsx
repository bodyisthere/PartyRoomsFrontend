import {
  ImgHTMLAttributes, ReactElement, useLayoutEffect, useState,
} from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement>{
  className?: string;
  fallback?: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = (
  {
    className, src, alt = 'image', errorFallback, fallback, ...otherProps
  }: AppImageProps,
) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useLayoutEffect(() => {
    const img = new Image();
    img.src = src ?? '';
    img.onload = () => {
      setIsLoading(false);
    };
    img.onerror = () => {
      setIsLoading(false);
      setError(true);
    };
  }, [src]);

  if (isLoading && fallback) {
    return fallback;
  }

  if (error && errorFallback) {
    return errorFallback;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      {...otherProps}
    />
  );
};
