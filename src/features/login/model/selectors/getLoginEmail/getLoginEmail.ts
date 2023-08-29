import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginEmail = (state: StateSchema) =>
  state.login && state.login.email ? state.login.email : '';
