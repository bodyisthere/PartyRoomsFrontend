import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserAbout = (state: StateSchema) =>
  state.user && state.user._inited && state.user.authData?.about ? state.user.authData.about : '';
