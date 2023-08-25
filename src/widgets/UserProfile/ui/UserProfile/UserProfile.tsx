import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { userProfileActions, userProfileReducer } from '../../model/slice/userProfileSlice';

import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getUserProfileCondition } from '../../model/selectors/getUserProfileCondition';
import { EditUserProfile } from '@/features/EditUserProfile';
import { ViewUserProfile } from '@/features/ViewUserProfile';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const initialReducers: ReducersList = {
  userProfile: userProfileReducer,
};

interface UserProfileProps {
  className?: string;
}

export function UserProfile({ className }: UserProfileProps) {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const condition = useSelector(getUserProfileCondition);

  const setViewCondition = useCallback(() => {
    dispatch(userProfileActions.setCondition('view'));
  }, [dispatch]);

  const setEditCondition = useCallback(() => {
    dispatch(userProfileActions.setCondition('edit'));
  }, [dispatch]);

  const matchCondition = () => {
    switch (condition) {
      case 'edit':
        return <EditUserProfile />;
      case 'view':
        return <ViewUserProfile />;
      default:
        return <ViewUserProfile />;
    }
  };
  return <DynamicModuleLoader reducers={initialReducers}>{matchCondition()}</DynamicModuleLoader>;
}
