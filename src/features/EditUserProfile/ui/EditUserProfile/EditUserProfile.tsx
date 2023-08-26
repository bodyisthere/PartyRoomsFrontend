import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';

import styles from './EditUserProfile.module.scss';
import { getEditUserProfileAbout } from '../../model/selectors/getEditUserProfileAbout';
import { getEditUserProfileHobby } from '../../model/selectors/getEditUserProfileHobby';
import { getEditUserProfileWant } from '../../model/selectors/getEditUserProfileWant';
import { getEditUserProfileDWant } from '../../model/selectors/getEditUserProfileDWant';
import { ChangeAvatar } from '@/features/changeAvatar';
import { UserProfileLayout } from '@/shared/layouts/UserProfileLayout';
import { EditUserProfileAbout } from '../EditUserProfileAbout/EditUserProfileAbout';

interface EditUserProfileProps {
  className?: string;
}

export function EditUserProfile({ className }: EditUserProfileProps) {
  const { t } = useTranslation();
  const about = useSelector(getEditUserProfileAbout);
  const hobby = useSelector(getEditUserProfileHobby);
  const want = useSelector(getEditUserProfileWant);
  const dwant = useSelector(getEditUserProfileDWant);

  const avatarBlock = <ChangeAvatar borderRadius='15px' size={300} className={styles.avatar} />;

  const aboutBlock = <EditUserProfileAbout />;

  return <UserProfileLayout avatar={avatarBlock} about={aboutBlock} />;
}
