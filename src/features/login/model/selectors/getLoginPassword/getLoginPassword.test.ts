import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        email: '321321',
        password: '321321',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      login: {},
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
