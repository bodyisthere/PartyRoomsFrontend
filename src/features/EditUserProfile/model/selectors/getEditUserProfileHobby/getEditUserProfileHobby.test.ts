import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getEditUserProfileHobby } from './getEditUserProfileHobby';

describe('getEditUserProfileHobby', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {
        hobby: [{ id: '3', content: '3', important: false }],
      },
    };
    expect(getEditUserProfileHobby(state as StateSchema)).toEqual([
      { id: '3', content: '3', important: false },
    ]);
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {},
    };
    expect(getEditUserProfileHobby(state as StateSchema)).toEqual([]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditUserProfileHobby(state as StateSchema)).toEqual([]);
  });
});
