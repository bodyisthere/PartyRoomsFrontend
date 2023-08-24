import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useCallback, useState } from 'react';

import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { registrationActions } from '../../model/slice/registrationSlice';
import { getRegistrationUsername } from '../../model/selectors/getRegistrationUsername';
import { getRegistrationLastName } from '../../model/selectors/getRegistrationLastName';
import { getRegistrationFirstName } from '../../model/selectors/getRegistrationFirstName';
import { registrationValidationStepFirst } from '../../lib/validation/registrationValidation';
import { AuthorizationLayout } from '@/shared/layouts/AuthorizationLayout';

interface RegistrationStepFirstProps {
  changeCondition: () => void;
}

export function RegistrationStepFirst({ changeCondition }: RegistrationStepFirstProps) {
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
    const result = registrationValidationStepFirst(body);
    if (result) {
      return setValidationResult(result);
    }
    return dispatch(registrationActions.setStep('2'));
  }, [firstName, lastName, username, dispatch]);

  const matchValidationResult = () => {
    if (validationResult.firstName) return validationResult.firstName;
    if (validationResult.lastName) return validationResult.lastName;
    if (validationResult.username) return validationResult.username;
    return '';
  };

  const form = (
    <>
      <Input
        label={t('Имя')}
        placeholder={t('Николай')}
        value={firstName}
        onChange={onChangeFirstName}
        isError={!!validationResult.firstName}
        data-testid='firstNameInput'
      />
      <Input
        label={t('Фамилия')}
        placeholder={t('Иванов')}
        value={lastName}
        onChange={onChangeLastName}
        isError={!!validationResult.lastName}
        data-testid='lastNameInput'
      />
      <Input
        label={t('Псевдоним')}
        placeholder='developer'
        value={username}
        addonLeft='@'
        onChange={onChangeUsername}
        isError={!!validationResult.username}
        data-testid='usernameInput'
      />
    </>
  );

  const buttons = (
    <>
      <Button theme='attention' size='size_xl' onClick={changeCondition}>
        {t('Войти')}
      </Button>
      <Button onClick={submitResult} size='size_xl' data-testid='ContinueButton'>
        {t('Продолжить')}
      </Button>
    </>
  );

  return (
    <div data-testid='RegistrationStepFirst'>
      <AuthorizationLayout
        form={form}
        buttons={buttons}
        title={t('Давайте знакомиться!')}
        titleError={matchValidationResult()}
      />
    </div>
  );
}
