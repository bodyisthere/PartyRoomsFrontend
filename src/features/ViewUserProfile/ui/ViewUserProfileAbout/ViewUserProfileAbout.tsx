import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ViewUserProfileAbout.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';
import { Textarea } from '@/shared/ui/Textarea';
import Pen from '@/shared/assets/icons/Pen.svg';
import { getUserAbout } from '@/entities/User/model/selectors/getUserAbout/getUserAbout';

interface ViewUserProfileAboutProps {
  className?: string;
}

export function ViewUserProfileAbout({ className }: ViewUserProfileAboutProps) {
  const { t } = useTranslation();
  const about = useSelector(getUserAbout);

  return (
    <div className={styles.UserProfileAbout}>
      <HStack justify='between' className={styles.name}>
        <Text title='Николай Иванов, 20' bold='bold_900' size='size_xl' />
        <Icon Svg={Pen} clickable onClick={() => console.log('click')} />
      </HStack>
      <div className={styles.about}>
        <Text text='О себе' bold='bold_900' size='size_xl' />
        <Textarea maxHeight readonly value={about} />
      </div>
    </div>
  );
}
