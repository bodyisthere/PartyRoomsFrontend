import { memo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Text.module.scss';

export type TextTheme = 'primary' | 'error' | 'placeholder' | 'black';

export type TextAlign = 'right' | 'left' | 'center';

export type TextBold = 'bold_100' | 'bold_300' | 'bold_400' | 'bold_500' | 'bold_700' | 'bold_900';

export type TextSize = 'size_s' | 'size_m' | 'size_l' | 'size_xl';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  bold?: TextBold;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const sizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  size_s: 'h3',
  size_m: 'h2',
  size_l: 'h1',
  size_xl: 'h1',
};

export const Text = memo(
  ({
    align = 'left',
    className,
    bold = 'bold_400',
    size = 'size_l',
    text,
    theme = 'primary',
    title,
  }: TextProps) => {
    const HeaderTag = sizeToHeaderTag[size];

    const mods: Mods = {
      [styles[theme]]: true,
      [styles[align]]: true,
      [styles[size]]: true,
      [styles[bold]]: true,
    };

    return (
      <div className={classNames(styles.Text, mods, [className])}>
        {title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
    );
  }
);
