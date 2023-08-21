import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationConfirmPassword = (state: StateSchema) =>
  state.registration?.body.confirmPassword;
