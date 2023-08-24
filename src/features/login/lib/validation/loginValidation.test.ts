import { describe, test, expect } from 'vitest';
import { loginValidation } from './loginValidation';

describe('features/login/lib/validation/loginValidation', () => {
  test('should work with correct values', () => {
    expect(
      loginValidation({
        email: 'ivanov@mail.ru',
        password: '12345678',
      })
    ).toBe(false);
  });
  test('should work with wrong email', () => {
    expect(
      loginValidation({
        email: 'ivanovmail.ru',
        password: '12345678',
      })
    ).toEqual({
      email: 'Введите корректный email',
    });
  });
  test('should work with wrong password', () => {
    expect(
      loginValidation({
        email: 'ivanov@mail.ru',
        password: '123',
      })
    ).toEqual({
      password: 'Минимальная длина пароля 5 символов',
    });
  });
});
