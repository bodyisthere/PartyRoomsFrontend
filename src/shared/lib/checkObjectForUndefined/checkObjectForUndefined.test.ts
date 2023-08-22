import { describe, test, expect } from 'vitest';
import { checkObjectForUndefined } from './checkObjectForUndefined';

describe('checkObjectForUndefined', () => {
  test('should work with default object', () => {
    const expected = ['favoriteSport'];
    expect(
      checkObjectForUndefined({ name: 'Nik', age: 18, jobs: [], favoriteSport: undefined })
    ).toStrictEqual(expected);
  });
});
