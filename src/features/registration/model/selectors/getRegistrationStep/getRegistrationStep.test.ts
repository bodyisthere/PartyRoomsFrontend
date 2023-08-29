import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRegistrationStep } from './getRegistrationStep';

describe('getRegistrationStep', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {
        step: '1',
      },
    };
    expect(getRegistrationStep(state as StateSchema)).toBe('1');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {},
    };
    expect(getRegistrationStep(state as StateSchema)).toEqual('1');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRegistrationStep(state as StateSchema)).toEqual('1');
  });
});
