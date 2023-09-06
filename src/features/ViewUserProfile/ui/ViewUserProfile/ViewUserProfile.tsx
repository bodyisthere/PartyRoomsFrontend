import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ViewUserProfile.module.scss';
import { UserProfileLayout } from '@/shared/layouts/UserProfileLayout';
import { ViewUserProfileAbout } from '../ViewUserProfileAbout/ViewUserProfileAbout';
import { Avatar } from '@/shared/ui/Avatar';
import { getUserAuthData } from '@/entities/User';

interface ViewUserProfileProps {
  className?: string;
}

export function ViewUserProfile({ className }: ViewUserProfileProps) {
  const { t } = useTranslation();
  const userData = useSelector(getUserAuthData);

  const about = <ViewUserProfileAbout />;

  const avatar = <Avatar size={300} src={userData?.avatar} borderRadius='15px' />;

  const hobby = <h1>hobby</h1>;

  return <UserProfileLayout about={about} avatar={avatar} hobby={hobby} />;
}
