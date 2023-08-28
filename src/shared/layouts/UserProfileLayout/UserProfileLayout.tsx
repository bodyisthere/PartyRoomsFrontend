import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './UserProfileLayout.module.scss';
import { Container } from '@/shared/ui/Container';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Block } from '@/shared/ui/Block';
import { Button } from '@/shared/ui/Button';

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
    <Container padding='10px 10px' maxWidth='1440px' testid='UserProfileLayout'>
      <VStack align='center' justify='center'>
        <Block className={styles.block} width='auto' height='auto'>
          <div>{avatar}</div>
          <div>{about}</div>
          <div>
            <Button className={styles.button} size='size_xl'>
              {t('Хобби')}
            </Button>
          </div>
          <div>{hobby}</div>
          <div>
            <Button className={styles.button} size='size_xl'>
              {t('Хотелки')}
            </Button>
          </div>
          <div>{want}</div>
          <div>
            <Button className={styles.button} size='size_xl'>
              {t('Не хотелки')}
            </Button>
          </div>
          <div>{dwant}</div>
        </Block>
      </VStack>
    </Container>
  );
}
