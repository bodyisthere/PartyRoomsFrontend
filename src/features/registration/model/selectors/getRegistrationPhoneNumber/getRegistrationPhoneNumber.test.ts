import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRegistrationPhoneNumber } from './getRegistrationPhoneNumber';

describe('getRegistrationPhoneNumber', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {
        body: {
          phoneNumber: '321321',
        },
      },
    };
    expect(getRegistrationPhoneNumber(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {},
    };
    expect(getRegistrationPhoneNumber(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRegistrationPhoneNumber(state as StateSchema)).toEqual('');
  });
});
