import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationPhoneNumber = (state: StateSchema) =>
  state.registration?.body.phoneNumber;
