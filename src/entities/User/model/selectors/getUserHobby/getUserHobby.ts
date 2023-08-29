import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserHobby = (state: StateSchema) =>
  state.user && state.user._inited && state.user.authData?.hobbies
    ? state.user.authData.hobbies
    : [];
