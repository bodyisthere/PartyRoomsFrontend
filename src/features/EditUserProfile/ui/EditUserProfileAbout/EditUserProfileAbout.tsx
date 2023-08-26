import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { getEditUserProfileAbout } from '../../model/selectors/getEditUserProfileAbout';
import { Container } from '@/shared/ui/Container';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Block } from '@/shared/ui/Block';
import { Text } from '@/shared/ui/Text';
import { Icon } from '@/shared/ui/Icon';
import { Textarea } from '@/shared/ui/Textarea';
import Pen from '@/shared/assets/icons/Pen.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { editUserProfileActions } from '../../model/slice/editUserProfileSlice';

import styles from './EditUserProfile.module.scss';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAuthData } from '@/entities/User';

interface EditUserProfileAboutProps {
  className?: string;
}

export function EditUserProfileAbout({ className }: EditUserProfileAboutProps) {
  const { t } = useTranslation();
  const about = useSelector(getEditUserProfileAbout);
  const aboutFromProfile = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  // TODO
  // const onChange = (e: any) => {
  //   dispatch(editUserProfileActions.setAbout())
  // };

  return (
    <div className={styles.EditUserProfileAbout}>
      <HStack justify='between' className={styles.name}>
        <Text title='Николай Иванов, 20' bold='bold_900' size='size_xl' />
        <Icon Svg={Pen} clickable onClick={() => console.log('click')} />
      </HStack>
      <div className={styles.about}>
        <Text text='О себе' bold='bold_900' size='size_xl' />
        <Textarea placeholder={t('Расскажите о себе')} />
      </div>
    </div>
  );
}
