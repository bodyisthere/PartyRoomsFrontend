import { useTranslation } from 'react-i18next';

import { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';

import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { Input } from '@/shared/ui/Input';
import { loginValidation } from '../../lib/validation/loginValidation';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginEmail } from '../../model/selectors/getLoginEmail/getLoginEmail';
import { Button } from '@/shared/ui/Button';
import { AuthorizationLayout } from '@/shared/layouts/AuthorizationLayout';

const initialReducers: ReducersList = {
  login: loginReducer,
};

interface LoginFormProps {
  changeCondition: () => void;
}

export function LoginForm({ changeCondition }: LoginFormProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const [validationResult, setValidationResult] = useState<Record<string, string>>({});
  const password = useSelector(getLoginPassword);
  const email = useSelector(getLoginEmail);

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch]
  );

  const submitResult = useCallback(() => {
    const body = {
      email: email ?? '',
      password: password ?? '',
    };
    const result = loginValidation(body);
    if (result) {
      setValidationResult(result);
    }
  }, [email, password]);

  const matchValidationResult = () => {
    if (validationResult.email) return validationResult.email;
    if (validationResult.password) return validationResult.password;
    return '';
  };

  const form = (
    <>
      <Input
        label={t('Почта')}
        placeholder='nikolay@gmail.com'
        value={email}
        onChange={onChangeEmail}
        isError={!!validationResult.email}
        type='email'
        data-testid='EmailInput'
      />
      <Input
        label={t('Пароль')}
        placeholder='************'
        isPassword
        value={password}
        onChange={onChangePassword}
        isError={!!validationResult.password}
        data-testid='PasswordInput'
      />
    </>
  );

  const buttons = (
    <>
      <Button onClick={changeCondition} theme='attention' size='xl'>
        {t('Регистрация')}
      </Button>
      <Button onClick={submitResult} size='xl' data-testid='SubmitButton'>
        {t('Подтвердить')}
      </Button>
    </>
  );

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <AuthorizationLayout
        title={t('Вход в профиль')}
        form={form}
        buttons={buttons}
        titleError={matchValidationResult()}
      />
    </DynamicModuleLoader>
  );
}
