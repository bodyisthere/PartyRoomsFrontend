import { StateSchema } from '@/app/providers/StoreProvider';

export const getRegistrationLastName = (state: StateSchema) => state.registration?.lastName;
