import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserWant = (state: StateSchema) =>
  state.user && state.user._inited && state.user.authData?.want ? state.user.authData.want : [];
