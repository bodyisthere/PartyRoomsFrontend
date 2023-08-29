import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getEditUserProfileDWant } from './getEditUserProfileDWant';

describe('getEditUserProfileDWant', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {
        dwant: [{ id: '3', content: '3', important: false }],
      },
    };
    expect(getEditUserProfileDWant(state as StateSchema)).toEqual([
      { id: '3', content: '3', important: false },
    ]);
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {},
    };
    expect(getEditUserProfileDWant(state as StateSchema)).toEqual([]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditUserProfileDWant(state as StateSchema)).toEqual([]);
  });
});
