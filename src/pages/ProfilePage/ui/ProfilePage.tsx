import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ProfilePage.module.scss';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.ProfilePage, {}, [className])} data-testid='ProfilePage' />
  );
};

export default ProfilePage;
