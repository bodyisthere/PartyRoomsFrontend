import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserInited } from './getUserInited';

describe('getUserInited', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _inited: true,
      },
    };
    expect(getUserInited(state as StateSchema)).toBe(true);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserInited(state as StateSchema)).toBe(false);
  });
});
