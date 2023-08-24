import { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './AuthorizationLayout.module.scss';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';

interface AuthorizationLayoutProps {
  className?: string;
  title: string;
  titleError: string | undefined;
  form: ReactNode;
  buttons: ReactNode;
}

export function AuthorizationLayout({
  className,
  title,
  titleError,
  form,
  buttons,
}: AuthorizationLayoutProps) {
  return (
    <div className={classNames(styles.AuthorizationLayout, {}, [className])}>
      <Text
        title={title}
        size='size_xl'
        bold='bold_900'
        theme='black'
        align='center'
        className={styles.text}
      />
      <Text text={titleError} bold='bold_700' theme='error' />
      {form}
      <HStack justify='between' className={styles.buttons}>
        {buttons}
      </HStack>
    </div>
  );
}
