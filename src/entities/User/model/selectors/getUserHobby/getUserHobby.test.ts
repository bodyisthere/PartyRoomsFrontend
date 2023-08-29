import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserHobby } from './getUserHobby';

describe('getUserHobby', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
        authData: {
          hobbies: [{ id: '321', content: '321', important: false }],
        },
      },
    };
    expect(getUserHobby(state as StateSchema)).toEqual([
      { id: '321', content: '321', important: false },
    ]);
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
        authData: {},
      },
    };
    expect(getUserHobby(state as StateSchema)).toEqual([]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserHobby(state as StateSchema)).toEqual([]);
  });
});
