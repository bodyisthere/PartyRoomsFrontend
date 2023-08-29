import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getEditUserProfileWant } from './getEditUserProfileWant';

describe('getEditUserProfileWant', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {
        want: [{ id: '3', content: '3', important: false }],
      },
    };
    expect(getEditUserProfileWant(state as StateSchema)).toEqual([
      { id: '3', content: '3', important: false },
    ]);
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {},
    };
    expect(getEditUserProfileWant(state as StateSchema)).toEqual([]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditUserProfileWant(state as StateSchema)).toEqual([]);
  });
});
