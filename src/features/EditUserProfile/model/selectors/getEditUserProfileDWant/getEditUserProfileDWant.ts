import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditUserProfileDWant = (state: StateSchema) =>
  state.editUserProfile && state.editUserProfile?.dwant ? state.editUserProfile.dwant : [];
