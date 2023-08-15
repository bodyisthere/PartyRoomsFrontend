import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

const MainPage = ({ className }: MainPageProps) => {
  const { t } = useTranslation();
  return <div className={classNames(styles.MainPage, {}, [className])} />;
};

export default MainPage;
