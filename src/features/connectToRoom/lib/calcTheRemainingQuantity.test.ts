import { describe, test, expect } from 'vitest';
import { calcTheRemainingQuantity } from './calcTheRemainingQuantity';

describe('classNames', () => {
  test('with 10', () => {
    expect(calcTheRemainingQuantity(10)).toBe(6);
  });
  test('with 4', () => {
    expect(calcTheRemainingQuantity(0)).toBe(0);
  });
  test('with 0', () => {
    expect(calcTheRemainingQuantity(0)).toBe(0);
  });
});
