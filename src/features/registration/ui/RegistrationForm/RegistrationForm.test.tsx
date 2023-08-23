import { screen, fireEvent } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { RegistrationForm } from './RegistrationForm';
import { registrationReducer } from '../../model/slice/registrationSlice';

describe('features/registration/RegistrationForm', () => {
  test('should render first step with value 1', async () => {
    componentRender(<RegistrationForm />, {
      asyncReducers: {
        registration: registrationReducer,
      },
      initialState: {
        registration: {
          step: '1',
          body: {},
        },
      },
    });

    const page = await screen.findByTestId('RegistrationStepFirst');
    expect(page).toBeInTheDocument();
  });

  test('should render second step with value 2', async () => {
    componentRender(<RegistrationForm />, {
      asyncReducers: {
        registration: registrationReducer,
      },
      initialState: {
        registration: {
          step: '2',
          body: {},
        },
      },
    });

    const page = await screen.findByTestId('RegistrationStepSecond');
    expect(page).toBeInTheDocument();
  });

  test('should render second step with other value', async () => {
    componentRender(<RegistrationForm />, {
      asyncReducers: {
        registration: registrationReducer,
      },
      initialState: {
        registration: {
          step: undefined,
          body: {},
        },
      },
    });

    const page = await screen.findByTestId('RegistrationStepSecond');
    expect(page).toBeInTheDocument();
  });

  test('should validate first step and go on second', async () => {
    componentRender(<RegistrationForm />, {
      asyncReducers: {
        registration: registrationReducer,
      },
      initialState: {
        registration: {
          step: '1',
          body: {},
        },
      },
    });

    const firstNameInput = await screen.findByTestId('firstNameInput');
    const secondNameInput = await screen.findByTestId('lastNameInput');
    const usernameInput = await screen.findByTestId('usernameInput');

    fireEvent.input(firstNameInput, {
      target: { value: 'Иван' },
    });
    fireEvent.input(secondNameInput, {
      target: { value: 'Иванов' },
    });
    fireEvent.input(usernameInput, {
      target: { value: 'developer' },
    });

    const continueButton = await screen.findByTestId('ContinueButton');
    fireEvent.click(continueButton);

    const page = await screen.findByTestId('RegistrationStepSecond');
    expect(page).toBeInTheDocument();
  });

  test('should validate first step and display error', async () => {
    componentRender(<RegistrationForm />, {
      asyncReducers: {
        registration: registrationReducer,
      },
      initialState: {
        registration: {
          step: '1',
          body: {},
        },
      },
    });

    const firstNameInput = await screen.findByTestId('firstNameInput');
    const secondNameInput = await screen.findByTestId('lastNameInput');
    const usernameInput = await screen.findByTestId('usernameInput');

    fireEvent.input(firstNameInput, {
      target: { value: '' },
    });
    fireEvent.input(secondNameInput, {
      target: { value: 'Иванов' },
    });
    fireEvent.input(usernameInput, {
      target: { value: 'developer' },
    });

    const continueButton = await screen.findByTestId('ContinueButton');
    fireEvent.click(continueButton);

    const page = screen.queryByTestId('RegistrationStepSecond');
    expect(page).toBeNull();

    const errorText = await screen.findByText('Имя обязательное поле');
    expect(errorText).toBeInTheDocument();
  });
});
