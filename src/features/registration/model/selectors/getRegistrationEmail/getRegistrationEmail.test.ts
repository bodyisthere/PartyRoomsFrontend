import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRegistrationEmail } from './getRegistrationEmail';

describe('getRegistrationEmail', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {
        body: {
          email: '321321',
        },
      },
    };
    expect(getRegistrationEmail(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {},
    };
    expect(getRegistrationEmail(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRegistrationEmail(state as StateSchema)).toEqual('');
  });
});
