import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRegistrationFirstName } from './getRegistrationFirstName';

describe('getRegistrationFirstName', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {
        body: {
          firstName: '321321',
        },
      },
    };
    expect(getRegistrationFirstName(state as StateSchema)).toBe('321321');
  });

  test('should return value without field', () => {
    const state: DeepPartial<StateSchema> = {
      registration: {},
    };
    expect(getRegistrationFirstName(state as StateSchema)).toEqual('');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRegistrationFirstName(state as StateSchema)).toEqual('');
  });
});
