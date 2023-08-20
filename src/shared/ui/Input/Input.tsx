import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Input.module.scss';
import { InputHTMLAttributes, ReactNode, useEffect, useRef, useState } from 'react';
import { HStack, VStack } from '../Stack';
import { Text } from '../Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputTheme = 'form-input';

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
  size?: InputSize;
  theme?: InputTheme;
}

export const Input = ({
  className,
  value,
  onChange,
  type = 'text',
  placeholder,
  autofocus,
  readonly,
  addonLeft,
  addonRight,
  label,
  theme = 'form-input',
  size = 'm',
  ...otherProps
}: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

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

  const mods: Mods = {
    [styles.readonly]: readonly,
    [styles.focused]: isFocused,
    [styles[theme]]: true,
    [styles.withAddonLeft]: Boolean(addonLeft),
    [styles.withAddonRight]: Boolean(addonRight),
  };

  const input = (
    <div className={classNames(styles.InputWrapper, mods, [className, styles[size]])}>
      {addonLeft && <div className={styles.addonLeft}>{addonLeft}</div>}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={onChangeHandler}
        className={styles.input}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {addonRight && <div className={styles.addonRight}>{addonRight}</div>}
    </div>
  );

  if (label) {
    return (
      <VStack
        max
        gap='4'
        className={classNames(styles.InputWrapper, mods, [className, styles[size]])}
      >
        <Text text={label} bold='bold_900' size='size_l' />
        {input}
      </VStack>
    );
  }

  return input;
};
