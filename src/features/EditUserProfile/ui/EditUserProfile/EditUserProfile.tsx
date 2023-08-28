import { ChangeAvatar } from '@/features/changeAvatar';
import { UserProfileLayout } from '@/shared/layouts/UserProfileLayout';
import { EditUserProfileAbout } from '../EditUserProfileAbout/EditUserProfileAbout';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { editUserProfileReducer } from '../../model/slice/editUserProfileSlice';
import { EditUserProfilePick } from '../EditUserProfilePick/EditUserProfilePick';

const initialReducers: ReducersList = {
  editUserProfile: editUserProfileReducer,
};

export function EditUserProfile() {
  const avatarBlock = <ChangeAvatar borderRadius='15px' size={300} />;

  const aboutBlock = <EditUserProfileAbout />;

  const hobby = <EditUserProfilePick />;

  const want = <EditUserProfilePick />;

  const dwant = <EditUserProfilePick />;

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <UserProfileLayout
        avatar={avatarBlock}
        about={aboutBlock}
        hobby={hobby}
        want={want}
        dwant={dwant}
      />
      ;
    </DynamicModuleLoader>
  );
}
