import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationEmail = (state: StateSchema) =>
  state.registration && state.registration.body && state.registration.body.email
    ? state.registration.body.email
    : '';
