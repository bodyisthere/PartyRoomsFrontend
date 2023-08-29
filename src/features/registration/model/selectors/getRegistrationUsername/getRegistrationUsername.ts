import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationUsername = (state: StateSchema) =>
  state.registration && state.registration.body && state.registration.body.username
    ? state.registration.body.username
    : '';
