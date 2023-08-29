import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getEditUserProfileAbout } from './getEditUserProfileAbout';

describe('getEditUserProfileAbout', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {
        about: '321321',
      },
    };
    expect(getEditUserProfileAbout(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      editUserProfile: {},
    };
    expect(getEditUserProfileAbout(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getEditUserProfileAbout(state as StateSchema)).toEqual('');
  });
});
