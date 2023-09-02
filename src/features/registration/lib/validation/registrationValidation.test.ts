import { describe, test, expect } from 'vitest';
import {
  registrationValidationStepFirst,
  registrationValidationStepSecond,
} from './registrationValidation';

describe('features/registration/lib/validation/registrationValidationStepFirst', () => {
  test('should work with correct values', () => {
    expect(
      registrationValidationStepFirst({
        firstName: 'Иван',
        lastName: 'Иванов',
        username: 'developer',
      })
    ).toBe(false);
  });

  test('should work with wrong firstName', () => {
    expect(
      registrationValidationStepFirst({
        firstName: 'Иван3',
        lastName: 'Иванов',
        username: 'developer',
      })
    ).toEqual({
      firstName: 'Имя может содержать только буквы',
    });
  });

  test('should work with wrong lastName', () => {
    expect(
      registrationValidationStepFirst({
        firstName: 'Иван',
        lastName: 'Иванов3',
        username: 'developer',
      })
    ).toEqual({
      lastName: 'Фамилия может содержать только буквы',
    });
  });

  test('should work with wrong username', () => {
    expect(
      registrationValidationStepFirst({
        firstName: 'Иван',
        lastName: 'Иванов',
        username: '',
      })
    ).toEqual({
      username: 'Псевдоним обязательное поле',
    });
  });
});

describe('features/registration/lib/validation/registrationValidationStepSecond', () => {
  test('should work with correct values', () => {
    expect(
      registrationValidationStepSecond({
        password: 'correct123C!',
        confirmPassword: 'correct123C!',
        email: 'developer@mail.ru',
        phoneNumber: '+79999999999',
      })
    ).toBe(false);
  });

  test('should work with wrong password', () => {
    expect(
      registrationValidationStepSecond({
        password: '1234',
        confirmPassword: '1234',
        email: 'developer@mail.ru',
        phoneNumber: '+79999999999',
      })
    ).toEqual({
      confirmPassword: 'Минимальная длина пароля 5 символов',
      password: 'Минимальная длина пароля 5 символов',
    });
  });

  test('should work with wrong weak password', () => {
    expect(
      registrationValidationStepSecond({
        password: 'test321aA',
        confirmPassword: 'test321aA',
        email: 'developer@mail.ru',
        phoneNumber: '+79999999999',
      })
    ).toEqual({
      password:
        'Пароль должен содержать, как минимум 1 цифру, 1 маленькую букву, 1 большую и символы',
    });
  });

  test('should work with wrong confirmPassword', () => {
    expect(
      registrationValidationStepSecond({
        password: 'correct123C!',
        confirmPassword: 'correct123C!321',
        email: 'developer@mail.ru',
        phoneNumber: '+79999999999',
      })
    ).toEqual({
      confirmPassword: 'Пароли не сходятся',
    });
  });

  test('should work with wrong email', () => {
    expect(
      registrationValidationStepSecond({
        password: 'correct123C!',
        confirmPassword: 'correct123C!',
        email: 'developermail.ru',
        phoneNumber: '+79999999999',
      })
    ).toEqual({
      email: 'Введите корректный email',
    });
  });

  test('should work with wrong phone number', () => {
    expect(
      registrationValidationStepSecond({
        password: 'correct123C!',
        confirmPassword: 'correct123C!',
        email: 'developer@mail.ru',
        phoneNumber: '',
      })
    ).toEqual({
      phoneNumber: 'Номер телефона обязательное поле',
    });
  });

  test('should work with wrong invalid phone number', () => {
    expect(
      registrationValidationStepSecond({
        password: 'correct123C!',
        confirmPassword: 'correct123C!',
        email: 'developer@mail.ru',
        phoneNumber: '9179352944',
      })
    ).toEqual({
      phoneNumber: 'Некорректный номер',
    });
  });
});
