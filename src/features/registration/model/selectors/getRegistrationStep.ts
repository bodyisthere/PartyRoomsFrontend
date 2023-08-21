import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationStep = (state: StateSchema) => state.registration?.step;
