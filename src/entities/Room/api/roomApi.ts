import { rtkApi } from '@/shared/api/rtkApi';
import { RoomSchema } from '../model/types/RoomSchema';

const roomApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getRoom: build.query<RoomSchema, void>({
      query: () => ({
        url: '/products/1',
      }),
    }),
  }),
});

export const useRoom = roomApi.useGetRoomQuery;
