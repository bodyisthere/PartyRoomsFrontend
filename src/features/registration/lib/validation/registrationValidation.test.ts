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
        password: 'correct',
        confirmPassword: 'correct',
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
  test('should work with wrong confirmPassword', () => {
    expect(
      registrationValidationStepSecond({
        password: '123456781',
        confirmPassword: '12345678',
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
        password: '12345678',
        confirmPassword: '12345678',
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
        password: '12345678',
        confirmPassword: '12345678',
        email: 'developer@mail.ru',
        phoneNumber: '',
      })
    ).toEqual({
      phoneNumber: 'Номер телефона обязательное поле',
    });
  });
});
