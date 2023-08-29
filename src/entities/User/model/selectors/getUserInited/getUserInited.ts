import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserInited = (state: StateSchema) =>
  state.user && state.user._inited ? state.user._inited : false;
