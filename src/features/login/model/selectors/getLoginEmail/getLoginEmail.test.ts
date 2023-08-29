import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginEmail } from './getLoginEmail';

describe('getLoginEmail', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        email: '321321',
        password: '321321',
      },
    };
    expect(getLoginEmail(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      login: {},
    };
    expect(getLoginEmail(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginEmail(state as StateSchema)).toEqual('');
  });
});
