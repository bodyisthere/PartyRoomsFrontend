import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationStep = (state: StateSchema) =>
  state.registration && state.registration.step ? state.registration.step : '1';
