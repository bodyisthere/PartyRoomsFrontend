import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './UserProfileLayout.module.scss';
import { Container } from '@/shared/ui/Container';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Block } from '@/shared/ui/Block';
import { Button } from '@/shared/ui/Button';
import { Text } from '@/shared/ui/Text';

interface UserProfileLayoutProps {
  avatar?: ReactNode;
  about?: ReactNode;
  want?: ReactNode;
  dwant?: ReactNode;
  hobby?: ReactNode;
}

export function UserProfileLayout({ avatar, about, dwant, hobby, want }: UserProfileLayoutProps) {
  const { t } = useTranslation();
  return (
    <Container maxWidth='1440px' className={styles.container} testid='UserProfileLayout'>
      <Block className={styles.block} width='auto' height='auto'>
        <div className={styles.avatarBlock}>
          {avatar}
          {about}
        </div>
        <div className={styles.item}>
          <Text
            text={t('Хобби')}
            bold='bold_900'
            align='center'
            size='size_xl'
            className={styles.text}
          />
          {hobby}
        </div>
        <div className={styles.item}>
          <Text
            text={t('Хотелки')}
            bold='bold_900'
            align='center'
            size='size_xl'
            className={styles.text}
          />
          {want}
        </div>
        <div className={styles.item}>
          <Text
            text={t('Не хотелки')}
            bold='bold_900'
            align='center'
            size='size_xl'
            className={styles.text}
          />
          {dwant}
        </div>
      </Block>
    </Container>
  );
}
