import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ChangeAvatar } from '@/features/changeAvatar';
import { UserProfileLayout } from '@/shared/layouts/UserProfileLayout';
import { EditUserProfileAbout } from '../EditUserProfileAbout/EditUserProfileAbout';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  editUserProfileActions,
  editUserProfileReducer,
} from '../../model/slice/editUserProfileSlice';
import { EditUserProfileHobby } from '../EditUserProfileHobby/EditUserProfileHobby';
import { EditUserProfileDWant } from '../EditUserProfileDWant/EditUserProfileDWant';
import { EditUserProfileWant } from '../EditUserProfileWant/EditUserProfileWant';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserAbout } from '@/entities/User/model/selectors/getUserAbout/getUserAbout';
import { getUserDWant } from '@/entities/User/model/selectors/getUserDWant/getUserDWant';
import { getUserWant } from '@/entities/User/model/selectors/getUserWant/getUserWant';
import { getUserHobby } from '@/entities/User';

const initialReducers: ReducersList = {
  editUserProfile: editUserProfileReducer,
};

export function EditUserProfile() {
  const userWant = useSelector(getUserWant);
  const userDWant = useSelector(getUserDWant);
  const userAbout = useSelector(getUserAbout);
  const userHobby = useSelector(getUserHobby);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(editUserProfileActions.setWant(userWant));
    dispatch(editUserProfileActions.setDWant(userDWant));
    dispatch(editUserProfileActions.setAbout(userAbout));
    dispatch(editUserProfileActions.setHobby(userHobby));
  }, [dispatch, userAbout, userDWant, userHobby, userWant]);

  const avatarBlock = <ChangeAvatar borderRadius='15px' size={300} />;

  const aboutBlock = <EditUserProfileAbout />;

  const hobby = <EditUserProfileHobby />;

  const want = <EditUserProfileWant />;

  const dwant = <EditUserProfileDWant />;

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <UserProfileLayout
        avatar={avatarBlock}
        about={aboutBlock}
        hobby={hobby}
        want={want}
        dwant={dwant}
      />
    </DynamicModuleLoader>
  );
}
