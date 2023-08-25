import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditUserProfileHobby = (state: StateSchema) => state.editUserProfile?.hobby;
