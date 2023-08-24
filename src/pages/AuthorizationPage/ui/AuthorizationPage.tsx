import { ReactNode, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Block } from '@/shared/ui/Block';
import { VStack } from '@/shared/ui/Stack';
import { Container } from '@/shared/ui/Container';
import { LoginForm } from '@/features/login';
import { RegistrationForm } from '@/features/registration';
import styles from './AuthorizationPage.module.scss';
import { AuthorizationLayout } from '@/shared/layouts/AuthorizationLayout';

interface AuthorizationPageProps {
  className?: string;
}

export type AuthorizationCondition = 'registration' | 'login';

function AuthorizationPage({ className }: AuthorizationPageProps) {
  const [authCondition, setAuthCondition] = useState<AuthorizationCondition>('registration');

  const setLogin = useCallback(() => setAuthCondition('login'), []);
  const setRegistration = useCallback(() => setAuthCondition('registration'), []);

  const matchCondition = useCallback(() => {
    let element: ReactNode;
    switch (authCondition) {
      case 'login':
        element = <LoginForm changeCondition={setRegistration} />;
        break;
      default:
        element = <RegistrationForm changeCondition={setLogin} />;
        break;
    }
    return element;
  }, [authCondition, setLogin, setRegistration]);

  return (
    <div className={styles.AuthorizationPage} data-testid='AuthorizationPage'>
      <Container padding='0px 10px' maxWidth='1440px' maxHeight='100vh'>
        <VStack
          align='center'
          justify='center'
          style={{ height: '100vh' }}
          className={styles.content}
        >
          <Block
            className={classNames(styles.block, {}, [className])}
            height='auto'
            width='50vw'
            data-testid='AuthorizationPage'
          >
            {matchCondition()}
          </Block>
        </VStack>
      </Container>
    </div>
  );
}

export default AuthorizationPage;
