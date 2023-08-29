import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationPassword = (state: StateSchema) =>
  state.registration && state.registration.body && state.registration.body.password
    ? state.registration.body.password
    : '';
