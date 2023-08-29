import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { EditUserProfilePick } from '../EditUserProfilePick/EditUserProfilePick';
import { getUserHobby } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { editUserProfileActions } from '../../model/slice/editUserProfileSlice';
import { TagInfo } from '../../model/types/EditUserProfileSchema';
import { getEditUserProfileHobby } from '../../model/selectors/getEditUserProfileHobby/getEditUserProfileHobby';

interface EditUserProfileHobbyProps {
  className?: string;
}

export function EditUserProfileHobby({ className }: EditUserProfileHobbyProps) {
  const { t } = useTranslation();
  const tagsFromProfile = useSelector(getUserHobby);
  const tags = useSelector(getEditUserProfileHobby);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (tagsFromProfile) {
      dispatch(editUserProfileActions.setHobby(tagsFromProfile));
    }
  }, [dispatch, tagsFromProfile]);

  const onDelete = (id: string) => {
    dispatch(editUserProfileActions.removeHobby(id));
  };

  const onAdd = (tag: TagInfo) => {
    dispatch(editUserProfileActions.setHobby(tag));
  };

  const onCancel = () => {
    if (tagsFromProfile) {
      dispatch(editUserProfileActions.setHobby(tagsFromProfile));
    } else {
      dispatch(editUserProfileActions.setHobby([]));
    }
  };

  console.log('tags from profile: ', tagsFromProfile);
  console.log('tags: ', tags);

  const onSave = () => {};

  return (
    <EditUserProfilePick
      tags={tags}
      addItem={onAdd}
      removeItem={onDelete}
      onCancel={onCancel}
      onSave={onSave}
    />
  );
}
