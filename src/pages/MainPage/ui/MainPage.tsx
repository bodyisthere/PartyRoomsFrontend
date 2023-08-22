import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './MainPage.module.scss';

interface MainPageProps {
  className?: string;
}

function MainPage({ className }: MainPageProps) {
  const { t } = useTranslation();
  return <div className={classNames(styles.MainPage, {}, [className])} data-testid='MainPage' />;
}

export default MainPage;
