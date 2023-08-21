import { useTranslation } from 'react-i18next';

import styles from './RegistrationStep.module.scss';

import { useCallback, useState } from 'react';
import { registrationActions } from '../../model/slice/registrationSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Text } from '@/shared/ui/Text';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { useSelector } from 'react-redux';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername';
import { getRegistrationLastName } from '../../model/selectors/getRegistrationLastName';
import { getRegistrationFirstName } from '../../model/selectors/getRegistrationFirstName';
import { getRegistrationConfirmPassword } from '../../model/selectors/getRegistrationConfirmPassword';
import { getRegistrationEmail } from '../../model/selectors/getRegistrationEmail';
import { getRegistrationPassword } from '../../model/selectors/getRegistrationPassword';
import { getRegistrationPhoneNumber } from '../../model/selectors/getRegistrationPhoneNumber';
import { registrationValidationStepSecond } from '../../lib/validation/registrationValidation';

export const RegistrationStepSecond = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [validationResult, setValidationResult] = useState<Record<string, string>>({});
  const firstName = useSelector(getRegistrationFirstName);
  const lastName = useSelector(getRegistrationLastName);
  const username = useSelector(getRegistrationUsername);
  const password = useSelector(getRegistrationPassword);
  const confirmPassword = useSelector(getRegistrationConfirmPassword);
  const email = useSelector(getRegistrationEmail);
  const phoneNumber = useSelector(getRegistrationPhoneNumber);

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

  const submitResult = useCallback(() => {
    const body = {
      email: email ?? '',
      phoneNumber: phoneNumber ?? '',
      password: password ?? '',
      confirmPassword: confirmPassword ?? '',
    };
    const validationResult = registrationValidationStepSecond(body);
    if (validationResult) {
      setValidationResult(validationResult);
    }
  }, [confirmPassword, email, password, phoneNumber]);

  const goBack = useCallback(() => dispatch(registrationActions.setStep('1')), [dispatch]);

  return (
    <>
      <Text text={validationResult['email']} theme='error' />
      <Input
        label={t('Почта')}
        placeholder='nikolay@gmail.com'
        value={email}
        onChange={onChangeEmail}
        isError={!!validationResult['email']}
        type='email'
      />
      <Text text={validationResult['phoneNumber']} theme='error' />
      <Input
        label={t('Номер телефона')}
        placeholder='+ 7 (999) 999 99 99'
        value={phoneNumber}
        onChange={onChangePhoneNumber}
        isError={!!validationResult['phoneNumber']}
        type='tel'
      />
      <Text text={validationResult['password']} theme='error' />
      <Input
        label={t('Пароль')}
        placeholder='************'
        isPassword
        value={password}
        onChange={onChangePassword}
        isError={!!validationResult['password']}
      />
      <Text text={validationResult['confirmPassword']} theme='error' />
      <Input
        label={t('Повторите пароль')}
        placeholder='************'
        isPassword
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        isError={!!validationResult['confirmPassword']}
      />
      <HStack justify='between' className={styles.buttons}>
        <Button onClick={goBack} theme='attention' size='size_xl'>
          {t('Назад')}
        </Button>
        <Button onClick={submitResult} size='size_xl'>
          {t('Продолжить')}
        </Button>
      </HStack>
    </>
  );
};
