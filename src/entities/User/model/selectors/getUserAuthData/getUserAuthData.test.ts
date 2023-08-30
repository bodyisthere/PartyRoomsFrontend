import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
        authData: {
          about: '321',
          avatar: '213',
          dwant: [],
          firstName: '321',
          hobbies: [],
          id: '321',
          lastName: '321',
          want: [],
        },
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({
      about: '321',
      avatar: '213',
      dwant: [],
      firstName: '321',
      hobbies: [],
      id: '321',
      lastName: '321',
      want: [],
    });
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
        authData: {},
      },
    };
    expect(getUserAuthData(state as StateSchema)).toEqual({});
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserAuthData(state as StateSchema)).toEqual(undefined);
  });
});
