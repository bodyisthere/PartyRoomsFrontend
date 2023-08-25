import { rtkApi } from '@/shared/api/rtkApi';
import { UserSchema } from '../model/types/UserSchema';

const UserApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUser: build.query<UserSchema, void>({
      query: () => ({
        url: '/products/1',
      }),
    }),
    changeAvatar: build.mutation<UserSchema, void>({
      query: () => ({
        url: '/products/1',
      }),
    }),
  }),
});

export const useUser = UserApi.useGetUserQuery;
export const useChangeUserAvatar = UserApi.useLazyGetUserQuery;
