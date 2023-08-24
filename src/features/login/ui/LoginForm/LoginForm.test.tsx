import { screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { LoginForm } from './LoginForm';
import { loginReducer } from '../../model/slice/loginSlice';

describe('features/login/LoginForm', () => {
  test('should validate first step and success', async () => {
    componentRender(<LoginForm changeCondition={() => {}} />, {
      asyncReducers: {
        login: loginReducer,
      },
      initialState: {
        login: {},
      },
    });

    const emailInput = await screen.findByTestId('EmailInput');
    const passwordInput = await screen.findByTestId('PasswordInput');

    fireEvent.input(emailInput, {
      target: { value: 'nikolay@gmail.com' },
    });
    fireEvent.input(passwordInput, {
      target: { value: '1234567890' },
    });

    const submitButton = await screen.findByTestId('SubmitButton');
    fireEvent.click(submitButton);

    // const page = await screen.findByTestId('ProfilePage');
    // expect(page).toBeInTheDocument();
  });

  test('should validate and display email error', async () => {
    componentRender(<LoginForm changeCondition={() => {}} />, {
      asyncReducers: {
        login: loginReducer,
      },
      initialState: {
        login: {},
      },
    });

    const emailInput = await screen.findByTestId('EmailInput');
    const passwordInput = await screen.findByTestId('PasswordInput');

    fireEvent.input(emailInput, {
      target: { value: '' },
    });
    fireEvent.input(passwordInput, {
      target: { value: 'password' },
    });

    const submitButton = await screen.findByTestId('SubmitButton');
    fireEvent.click(submitButton);

    const errorText = await screen.findByText('Почта обязательное поле');
    expect(errorText).toBeInTheDocument();
  });
});
