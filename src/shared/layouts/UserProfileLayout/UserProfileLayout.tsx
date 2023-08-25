import { ReactNode } from 'react';
import styles from './UserProfileLayout.module.scss';
import { Container } from '@/shared/ui/Container';
import { VStack } from '@/shared/ui/Stack';
import { Block } from '@/shared/ui/Block';

interface UserProfileLayoutProps {
  avatar?: ReactNode;
  about?: ReactNode;
  want?: ReactNode;
  dwant?: ReactNode;
  hobby?: ReactNode;
}

export function UserProfileLayout({ avatar, about, dwant, hobby, want }: UserProfileLayoutProps) {
  return (
    <Container padding='10px 10px' maxWidth='1440px'>
      <VStack align='center' justify='center'>
        <Block className={styles.block} width='auto' height='auto'>
          <div>{avatar}</div>
          <div>{about}</div>
          <div>hobby</div>
          <div>{hobby}</div>
          <div>want</div>
          <div>{want}</div>
          <div>dont want</div>
          <div>{dwant}</div>
        </Block>
      </VStack>
    </Container>
  );
}
