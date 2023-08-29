import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserAuthData = (state: StateSchema) =>
  state.user && state.user._inited ? state.user.authData : '';
