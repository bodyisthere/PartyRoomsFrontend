import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditUserProfileWant = (state: StateSchema) =>
  state.editUserProfile && state.editUserProfile?.want ? state.editUserProfile.want : [];
