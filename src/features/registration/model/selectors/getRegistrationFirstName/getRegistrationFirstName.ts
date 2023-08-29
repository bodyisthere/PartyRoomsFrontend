import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationFirstName = (state: StateSchema) =>
  state.registration && state.registration.body && state.registration.body.firstName
    ? state.registration.body.firstName
    : '';
