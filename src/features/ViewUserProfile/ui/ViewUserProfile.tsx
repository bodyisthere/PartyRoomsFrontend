import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ViewUserProfile.module.scss';

interface ViewUserProfileProps {
  className?: string;
}

export function ViewUserProfile({ className }: ViewUserProfileProps) {
  const { t } = useTranslation();
  return <div className={classNames(styles.ViewUserProfile, {}, [className])} />;
}
