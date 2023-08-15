import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Text.module.scss';
import { memo } from 'react';

export type TextTheme = 'primary' | 'error';

export type TextAlign = 'right' | 'left' | 'center';

export type TextBold = '100' | '300' | '400' | '500' | '700' | '900';

export enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

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
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

export const Text = memo(
  ({
    align = 'left',
    className,
    bold = '400',
    size = TextSize.L,
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
