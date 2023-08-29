import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getUserProfileCondition } from './getUserProfileCondition';

describe('getUserProfileCondition', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        condition: 'edit',
      },
    };
    expect(getUserProfileCondition(state as StateSchema)).toBe('edit');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserProfileCondition(state as StateSchema)).toBe('view');
  });
});
