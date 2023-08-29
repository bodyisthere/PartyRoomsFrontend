import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserDWant = (state: StateSchema) =>
  state.user && state.user._inited && state.user.authData?.dwant ? state.user.authData.dwant : [];
