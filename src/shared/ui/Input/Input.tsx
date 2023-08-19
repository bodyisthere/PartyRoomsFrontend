import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import styles from './Input.module.scss';

interface InputProps {
  className?: string;
  label?: string;
}

export const Input = ({ className, label }: InputProps) => {
  return <div className={classNames(styles.Input, {}, [className])} />;
};
