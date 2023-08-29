import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRegistrationLastName } from './getRegistrationLastName';

describe('getRegistrationLastName', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {
        body: {
          lastName: '321321',
        },
      },
    };
    expect(getRegistrationLastName(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {},
    };
    expect(getRegistrationLastName(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRegistrationLastName(state as StateSchema)).toEqual('');
  });
});
