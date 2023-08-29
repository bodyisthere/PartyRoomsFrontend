import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserAbout } from './getUserAbout';

describe('getUserAbout', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
        authData: {
          about: '321',
        },
      },
    };
    expect(getUserAbout(state as StateSchema)).toEqual('321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
        authData: {},
      },
    };
    expect(getUserAbout(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserAbout(state as StateSchema)).toEqual('');
  });
});
