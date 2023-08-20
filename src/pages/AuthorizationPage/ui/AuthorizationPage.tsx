import { classNames } from '@/shared/lib/classNames/classNames';
import { Block } from '@/shared/ui/Block';
import { VStack } from '@/shared/ui/Stack';
import { Container } from '@/shared/ui/Container';
import { ReactNode, useCallback, useState } from 'react';
import { LoginForm } from '@/features/login';
import { RegistrationForm } from '@/features/registration';

interface AuthorizationPageProps {
  className?: string;
}

export type AuthorizationCondition = 'registration' | 'login';

const AuthorizationPage = ({ className }: AuthorizationPageProps) => {
  const [authCondition, setAuthCondition] = useState<AuthorizationCondition>('registration');

  const matchCondition = useCallback(() => {
    let element: ReactNode;
    switch (authCondition) {
      case 'login':
        element = <LoginForm />;
        break;
      default:
        element = <RegistrationForm />;
        break;
    }
    return element;
  }, [authCondition]);

  return (
    <Container padding='0px 10px' maxWidth='1440px' testId='AuthorizationPage'>
      <VStack align='start' justify='center' style={{ height: '100vh' }}>
        <Block
          className={classNames('', {}, [className])}
          width='40vw'
          height='auto'
          data-testid='AuthorizationPage'
        >
          {matchCondition()}
        </Block>
      </VStack>
    </Container>
  );
};

export default AuthorizationPage;
