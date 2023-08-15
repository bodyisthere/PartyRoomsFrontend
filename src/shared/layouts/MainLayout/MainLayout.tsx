import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  className?: string;
}

export const MainLayout = ({ className }: MainLayoutProps) => {
  const { t } = useTranslation();
  return <div className={classNames(styles.MainLayout, {}, [className])} />;
};
