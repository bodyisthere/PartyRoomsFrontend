import { InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Input.module.scss';
import { HStack, VStack } from '../Stack';
import { Text } from '../Text';
import EyeClose from '../../assets/icons/EyeClose.svg';
import EyeOpen from '../../assets/icons/EyeOpen.svg';
import { Icon } from '../Icon';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputTheme = 'form-input' | 'dark-pick';

type InputSize = 's' | 'm' | 'l' | 'xl';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  isError?: boolean;
  isPassword?: boolean;
  size?: InputSize;
  theme?: InputTheme;
  maxWidth?: boolean;
}

export function Input({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  readonly,
  addonLeft,
  maxWidth = true,
  addonRight,
  label,
  isPassword,
  isError,
  theme = 'form-input',
  size = 'm',
  ...otherProps
}: InputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const togglePassword = () => {
    setIsPasswordShow((prev) => !prev);
  };

  const mods: Mods = {
    [styles.readonly]: readonly,
    [styles.focused]: isFocused,
    [styles[theme]]: true,
    [styles[size]]: true,
    [styles.addonLeft]: Boolean(addonLeft),
    [styles.addonRight]: Boolean(addonRight),
    [styles.error]: isError,
    [styles.maxWidth]: maxWidth,
  };

  const matchType = () => {
    if (isPassword) {
      return isPasswordShow ? 'text' : 'password';
    }
    return type;
  };

  const input = (
    <div className={classNames(styles.InputWrapper, mods, [className, styles[size]])}>
      {addonLeft && (
        <HStack align='center' className={`${styles.addonLeft} ${styles.addon}`}>
          {addonLeft}
        </HStack>
      )}
      <input
        type={matchType()}
        value={value || ''}
        onChange={onChangeHandler}
        className={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {isPassword && (
        <Icon clickable onClick={togglePassword} Svg={isPasswordShow ? EyeOpen : EyeClose} />
      )}
      {addonRight && (
        <HStack className={`${styles.addonLeft} ${styles.addon}`} align='center'>
          {addonRight}
        </HStack>
      )}
    </div>
  );

  if (label) {
    return (
      <VStack gap='4' className={classNames(styles.InputWrapper, mods, [className, styles[size]])}>
        <Text align='left' text={label} bold='bold_900' size='size_l' />
        {input}
      </VStack>
    );
  }

  return input;
}
