import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationConfirmPassword = (state: StateSchema) =>
  state.registration && state.registration.body && state.registration.body.confirmPassword
    ? state.registration.body.confirmPassword
    : '';
