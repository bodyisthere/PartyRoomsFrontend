import { describe, test, expect } from 'vitest';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getRoom } from './getRoom';

describe('getRoom', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      room: {
        id: 1,
        title: '1',
        description: '1',
        price: 1,
        discountPercentage: 1,
        rating: 1,
        stock: 1,
        brand: '1',
        category: '1',
        thumbnail: '1',
        images: ['1'],
      },
    };
    expect(getRoom(state as StateSchema)).toEqual({
      id: 1,
      title: '1',
      description: '1',
      price: 1,
      discountPercentage: 1,
      rating: 1,
      stock: 1,
      brand: '1',
      category: '1',
      thumbnail: '1',
      images: ['1'],
    });
  });
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getRoom(state as StateSchema)).toEqual('');
  });
});
