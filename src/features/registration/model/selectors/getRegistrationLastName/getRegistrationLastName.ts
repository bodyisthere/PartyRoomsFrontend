import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationLastName = (state: StateSchema) =>
  state.registration && state.registration.body && state.registration.body.lastName
    ? state.registration.body.lastName
    : '';
