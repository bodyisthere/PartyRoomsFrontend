import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import styles from './RegistrationForm.module.scss';

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm = ({ className }: RegistrationFormProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.RegistrationForm, {}, [className])}>
      <Text
        title={t('Давайте знакомиться!')}
        size='size_xl'
        bold='bold_900'
        theme='black'
        align='center'
      />
      <HStack justify='between'>
        <Button theme='attention' size='size_xl'>
          {t('Войти')}
        </Button>
        <Button size='size_xl'>{t('Продолжить')}</Button>
      </HStack>
    </div>
  );
};
