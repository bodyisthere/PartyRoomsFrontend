import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationDateOfBirth = (state: StateSchema) => state.registration?.dateOfBirth;
