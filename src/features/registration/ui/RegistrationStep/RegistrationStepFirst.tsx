import { useTranslation } from 'react-i18next';

import styles from './RegistrationStep.module.scss';

import { Text } from '@/shared/ui/Text';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { registrationActions } from '../../model/slice/registrationSlice';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername';
import { getRegistrationLastName } from '../../model/selectors/getRegistrationLastName';
import { getRegistrationFirstName } from '../../model/selectors/getRegistrationFirstName';
import { useCallback, useState } from 'react';
import { registrationValidationStepFirst } from '../../lib/validation/registrationValidation';
import { HStack } from '@/shared/ui/Stack';

export const RegistrationStepFirst = () => {
  const { t } = useTranslation();
  const [validationResult, setValidationResult] = useState<Record<string, string>>({});
  const dispatch = useAppDispatch();
  const firstName = useSelector(getRegistrationFirstName);
  const lastName = useSelector(getRegistrationLastName);
  const username = useSelector(getRegistrationUsername);

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

  const submitResult = useCallback(() => {
    const body = {
      firstName: firstName ?? '',
      lastName: lastName ?? '',
      username: username ?? '',
    };
    const validationResult = registrationValidationStepFirst(body);
    if (validationResult) {
      return setValidationResult(validationResult);
    }
    dispatch(registrationActions.setStep('2'));
  }, [firstName, lastName, username, dispatch]);

  return (
    <>
      <Text text={validationResult['firstName']} theme='error' />
      <Input
        label={t('Имя')}
        placeholder={t('Николай')}
        value={firstName}
        onChange={onChangeFirstName}
        isError={!!validationResult['firstName']}
      />
      <Text text={validationResult['lastName']} theme='error' />
      <Input
        label={t('Фамилия')}
        placeholder={t('Иванов')}
        value={lastName}
        onChange={onChangeLastName}
        isError={!!validationResult['lastName']}
      />
      <Text text={validationResult['username']} theme='error' />
      <Input
        label={t('Псевдоним')}
        placeholder='developer'
        value={username}
        addonLeft='@'
        onChange={onChangeUsername}
        isError={!!validationResult['username']}
      />
      <HStack justify='between' className={styles.buttons}>
        <Button theme='attention' size='size_xl'>
          {t('Войти')}
        </Button>
        <Button onClick={submitResult} size='size_xl'>
          {t('Продолжить')}
        </Button>
      </HStack>
    </>
  );
};