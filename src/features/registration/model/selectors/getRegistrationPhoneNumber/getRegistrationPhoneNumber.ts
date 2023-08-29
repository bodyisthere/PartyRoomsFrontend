import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationPhoneNumber = (state: StateSchema) =>
  state.registration && state.registration.body && state.registration.body.phoneNumber
    ? state.registration.body.phoneNumber
    : '';
