import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRegistrationUsername } from './getRegistrationUsername';

describe('getRegistrationUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {
        body: {
          username: '321321',
        },
      },
    };
    expect(getRegistrationUsername(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {},
    };
    expect(getRegistrationUsername(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRegistrationUsername(state as StateSchema)).toEqual('');
  });
});
