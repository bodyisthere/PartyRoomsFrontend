import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditUserProfileAbout = (state: StateSchema) => state.editUserProfile?.about;
