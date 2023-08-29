import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRegistrationConfirmPassword } from './getRegistrationConfirmPassword';

describe('getRegistrationConfirmPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {
        body: {
          confirmPassword: '321321',
        },
      },
    };
    expect(getRegistrationConfirmPassword(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {},
    };
    expect(getRegistrationConfirmPassword(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRegistrationConfirmPassword(state as StateSchema)).toEqual('');
  });
});
