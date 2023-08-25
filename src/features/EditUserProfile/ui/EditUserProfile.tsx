import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Container } from '@/shared/ui/Container';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Block } from '@/shared/ui/Block';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Textarea } from '@/shared/ui/Textarea';
import Pen from '@/shared/assets/icons/Pen.svg';

import styles from './EditUserProfile.module.scss';
import { getEditUserProfileAbout } from '../model/selectors/getEditUserProfileAbout';
import { getEditUserProfileHobby } from '../model/selectors/getEditUserProfileHobby';
import { getEditUserProfileWant } from '../model/selectors/getEditUserProfileWant';
import { getEditUserProfileDWant } from '../model/selectors/getEditUserProfileDWant';
import { ChangeAvatar } from '@/features/changeAvatar';
import { UserProfileLayout } from '@/shared/layouts/UserProfileLayout';

interface EditUserProfileProps {
  className?: string;
}

export function EditUserProfile({ className }: EditUserProfileProps) {
  const { t } = useTranslation();
  const about = useSelector(getEditUserProfileAbout);
  const hobby = useSelector(getEditUserProfileHobby);
  const want = useSelector(getEditUserProfileWant);
  const dwant = useSelector(getEditUserProfileDWant);

  const avatar = <ChangeAvatar borderRadius='15px' size={300} className={styles.avatar} />;

  return (
    <UserProfileLayout avatar={avatar} />
    //       <ChangeAvatar
    //         borderRadius='15px'
    //         size={300}
    //         className={styles.avatar}
    //         src='https://pm1.aminoapps.com/7119/b0abdf491cffde4bdf95850956c1b15a5591a4b5r1-712-707v2_uhq.jpg'
    //       />
    //       <div className={`${styles.item}`}>
    //         <HStack justify='between' className={styles.name}>
    //           <Text title='Николай Иванов, 20' bold='bold_900' size='size_xl' />
    //           <Icon Svg={Pen} clickable onClick={() => console.log('click')} />
    //         </HStack>
    //         <div className={styles.about}>
    //           <Text text='О себе' bold='bold_900' size='size_xl' />
    //           <Textarea />
    //         </div>
  );
}
