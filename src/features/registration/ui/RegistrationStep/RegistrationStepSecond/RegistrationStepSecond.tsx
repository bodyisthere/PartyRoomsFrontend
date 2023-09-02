import { useTranslation } from 'react-i18next';

import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import styles from '../RegistrationStep.module.scss';

import { registrationActions } from '../../../model/slice/registrationSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button } from '@/shared/ui/Button';
import { Input } from '@/shared/ui/Input';
import { getRegistrationUsername } from '../../../model/selectors/getRegistrationUsername/getRegistrationUsername';
import { getRegistrationLastName } from '../../../model/selectors/getRegistrationLastName/getRegistrationLastName';
import { getRegistrationFirstName } from '../../../model/selectors/getRegistrationFirstName/getRegistrationFirstName';
import { getRegistrationConfirmPassword } from '../../../model/selectors/getRegistrationConfirmPassword/getRegistrationConfirmPassword';
import { getRegistrationEmail } from '../../../model/selectors/getRegistrationEmail/getRegistrationEmail';
import { getRegistrationPassword } from '../../../model/selectors/getRegistrationPassword/getRegistrationPassword';
import { getRegistrationPhoneNumber } from '../../../model/selectors/getRegistrationPhoneNumber/getRegistrationPhoneNumber';
import { registrationValidationStepSecond } from '../../../lib/validation/registrationValidation';
import { AuthorizationLayout } from '@/shared/layouts/AuthorizationLayout';
import { useRegistration } from '@/features/registration/api/registrationApi';
import { matchValidationResult } from '@/features/registration/lib/matchValidationResult/matchValidationResult';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

export function RegistrationStepSecond() {
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
  const [registrationSubmit, { data, isLoading, isError, error }] = useRegistration();
  const goTo = useNavigate();

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
    const result = registrationValidationStepSecond(body);
    if (result) {
      setValidationResult(result);
    } else {
      registrationSubmit({
        email,
        firstName,
        lastName,
        phoneNumber,
        password,
        username,
      });
    }
  }, [
    confirmPassword,
    email,
    password,
    phoneNumber,
    firstName,
    lastName,
    registrationSubmit,
    username,
  ]);

  console.log(data);

  useEffect(() => {
    if (data) {
      window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
      goTo('/profile/1');
    }
  }, [data, goTo]);

  const goBack = useCallback(() => dispatch(registrationActions.setStep('1')), [dispatch]);

  const form = (
    <>
      <Input
        label={t('Почта')}
        placeholder='nikolay@gmail.com'
        value={email}
        onChange={onChangeEmail}
        isError={!!validationResult.email}
        type='email'
      />
      <Input
        label={t('Номер телефона')}
        placeholder='+ 7 (999) 999 99 99'
        value={phoneNumber}
        onChange={onChangePhoneNumber}
        isError={!!validationResult.phoneNumber}
        type='tel'
      />
      <Input
        label={t('Пароль')}
        placeholder='************'
        isPassword
        value={password}
        onChange={onChangePassword}
        isError={!!validationResult.password}
      />
      <Input
        label={t('Повторите пароль')}
        placeholder='************'
        isPassword
        value={confirmPassword}
        onChange={onChangeConfirmPassword}
        isError={!!validationResult.confirmPassword}
      />
    </>
  );

  const buttons = (
    <>
      <Button onClick={goBack} className={styles.button} theme='attention' size='xl'>
        {t('Назад')}
      </Button>
      <Button
        onClick={submitResult}
        disabled={isLoading || false}
        theme='calm'
        className={styles.button}
        size='xl'
      >
        {isLoading ? t('Загрузка...') : t('Продолжить')}
      </Button>
    </>
  );

  return (
    <div data-testid='RegistrationStepSecond'>
      <AuthorizationLayout
        buttons={buttons}
        form={form}
        title={t('Давайте знакомиться!')}
        titleError={matchValidationResult(validationResult)}
      />
    </div>
  );
}
