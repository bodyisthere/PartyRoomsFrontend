import { TextareaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Textarea.module.scss';

type HTMLTextAreaProps = Omit<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type TextAreaTheme = 'form-textarea';

type TextAreaSize = 's' | 'm' | 'l';

interface TextAreaProps extends HTMLTextAreaProps {
  className?: string;
  value?: string | number;
  label?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
  isError?: boolean;
  isPassword?: boolean;
  size?: TextAreaSize;
  theme?: TextAreaTheme;
  maxHeight?: boolean;
}

export function Textarea({
  className,
  value,
  onChange,
  placeholder,
  autofocus,
  readonly,
  label,
  isPassword,
  isError,
  theme = 'form-textarea',
  maxHeight = false,
  size = 'm',
  ...otherProps
}: TextAreaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
    [styles.maxHeight]: maxHeight,
    [styles[theme]]: true,
    [styles.error]: isError,
    [styles[size]]: true,
  };

  return (
    <div className={classNames(styles.TextareaWrapper, mods, [className])}>
      <textarea
        ref={ref}
        value={value || ''}
        onChange={onChangeHandler}
        onFocus={onFocus}
        onBlur={onBlur}
        readOnly={readonly}
        placeholder={placeholder}
        className={styles.textarea}
        {...otherProps}
      />
    </div>
  );
}
