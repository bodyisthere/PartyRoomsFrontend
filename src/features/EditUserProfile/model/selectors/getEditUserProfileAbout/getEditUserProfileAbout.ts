import { StateSchema } from '@/app/providers/StoreProvider';

export const getEditUserProfileAbout = (state: StateSchema) =>
  state.editUserProfile && state.editUserProfile?.about ? state.editUserProfile.about : '';
