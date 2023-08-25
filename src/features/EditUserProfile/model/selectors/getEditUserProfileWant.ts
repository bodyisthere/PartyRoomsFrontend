import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditUserProfileWant = (state: StateSchema) => state.editUserProfile?.want;
