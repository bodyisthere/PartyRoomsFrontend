import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Button.module.scss';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonTheme = 'clear' | 'calm' | 'success' | 'attention';

export type ButtonSize = 's' | 'm' | 'l' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  theme?: ButtonTheme;
  size?: ButtonSize;
  children?: ReactNode;
}

export const Button = ({
  className,
  disabled,
  theme = 'clear',
  size = 'm',
  children,
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
