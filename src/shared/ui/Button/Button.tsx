import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonTheme = 'default' | 'attention' | 'success';

export type ButtonSize = 'size_m' | 'size_l' | 'size_xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  size?: ButtonSize;
  disabled?: boolean;
  children: ReactNode;
}

export const Button = ({
  className,
  children,
  disabled,
  size = 'size_m',
  theme = 'default',
  ...otherProps
}: ButtonProps) => {
  const mods: Mods = {
    [styles[theme]]: true,
    [styles[size]]: true,
    [styles.disabled]: disabled,
  };
  return (
    <button
      type='button'
      disabled={disabled}
      className={classNames(styles.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
