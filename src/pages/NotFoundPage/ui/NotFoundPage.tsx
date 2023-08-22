import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

export function NotFoundPage({ className }: NotFoundPageProps) {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.NotFoundPage, {}, [className])} data-testid='NotFoundPage' />
  );
}
