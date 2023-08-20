import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import styles from './RegistrationForm.module.scss';
import { Input } from '@/shared/ui/Input';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { registrationActions } from '../../model/slice/registrationSlice';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername';
import { getRegistrationLastName } from '../../model/selectors/getRegistrationLastName';
import { getRegistrationFirstName } from '../../model/selectors/getRegistrationFirstName';
import { getRegistrationConfirmPassword } from '../../model/selectors/getRegistrationConfirmPassword';
import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword';
import { getRegistrationPhoneNumber } from '../../model/selectors/getRegistrationPhoneNumber';
import { useCallback } from 'react';
import { registrationValidation } from '../../lib/validation/registrationValidation';
import { checkObjectForUndefined } from '@/shared/lib/checkObjectForUndefined/checkObjectForUndefined';

interface RegistrationFormProps {
  className?: string;
}

export const RegistrationForm = ({ className }: RegistrationFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const firstName = useSelector(getRegistrationFirstName);
  const lastName = useSelector(getRegistrationLastName);
  const username = useSelector(getRegistrationUsername);
  const password = useSelector(getRegistrationPassword);
  const confirmPassword = useSelector(getRegistrationConfirmPassword);
  const email = useSelector(getRegistrationEmail);
  const phoneNumber = useSelector(getRegistrationPhoneNumber);
  // const password = useSelector(getLoginPassword);
  // const isLoading = useSelector(getLoginIsLoading);
  // const error = useSelector(getLoginError);

  const onChangeFirstName = useCallback(
    (value: string) => {
      dispatch(registrationActions.setFirstName(value));
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(registrationActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangeLastName = useCallback(
    (value: string) => {
      dispatch(registrationActions.setLastName(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(registrationActions.setPassword(value));
    },
    [dispatch]
  );
  const onChangeConfirmPassword = useCallback(
    (value: string) => {
      dispatch(registrationActions.setConfirmPassword(value));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(registrationActions.setEmail(value));
    },
    [dispatch]
  );

  const onChangePhoneNumber = useCallback(
    (value: string) => {
      dispatch(registrationActions.setPhoneNumber(value));
    },
    [dispatch]
  );

  const submitResult = useCallback(async () => {
    const body = {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      username: username ?? '',
      email: email ?? '',
      phoneNumber: phoneNumber ?? '',
      password: password ?? '',
      confirmPassword: confirmPassword ?? '',
    };
    const result = await registrationValidation(body);
    console.log(result);
  }, [confirmPassword, email, firstName, lastName, password, phoneNumber, username]);

  return (
    <div className={classNames(styles.RegistrationForm, {}, [className])}>
      <Text
        title={t('Давайте знакомиться!')}
        size='size_xl'
        bold='bold_900'
        theme='black'
        align='center'
        className={styles.text}
      />
      <Input
        label={t('Имя')}
        placeholder={t('Николай')}
        value={firstName}
        onChange={onChangeFirstName}
      />
      <Input
        label={t('Фамилия')}
        placeholder={t('Иванов')}
        value={lastName}
        onChange={onChangeLastName}
      />
      <Input
        label={t('Псевдоним')}
        placeholder={t('developer')}
        value={username}
        onChange={onChangeUsername}
      />
      <Input
        label={t('Почта')}
        placeholder='nikolay@gmail.com'
        value={email}
        onChange={onChangeEmail}
        type='email'
      />
      <Input
        label={t('Номер телефона')}
        placeholder='+ 7 (999) 999 99 99'
        value={phoneNumber}
        onChange={onChangePhoneNumber}
        type='tel'
      />
      <Input
        label={t('Пароль')}
        placeholder='************'
        value={password}
        onChange={onChangePassword}
      />
      <Input
        label={t('Повторите пароль')}
        placeholder='************'
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
      />
      <HStack justify='between' className={styles.buttons}>
        <Button theme='attention' size='size_xl'>
          {t('Войти')}
        </Button>
        <Button onClick={submitResult} size='size_xl'>
          {t('Продолжить')}
        </Button>
      </HStack>
    </div>
  );
};
