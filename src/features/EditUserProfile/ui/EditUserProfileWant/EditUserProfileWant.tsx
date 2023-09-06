import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { EditUserProfilePick } from '../EditUserProfilePick/EditUserProfilePick';
import { getUserHobby } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { editUserProfileActions } from '../../model/slice/editUserProfileSlice';
import { TagInfo } from '../../model/types/EditUserProfileSchema';
import { getEditUserProfileWant } from '../../model/selectors/getEditUserProfileWant/getEditUserProfileWant';
import { getUserWant } from '@/entities/User/model/selectors/getUserWant/getUserWant';

interface EditUserProfileHobbyProps {
  className?: string;
}

export function EditUserProfileWant({ className }: EditUserProfileHobbyProps) {
  const { t } = useTranslation();
  const tagsFromProfile = useSelector(getUserWant);
  const tags = useSelector(getEditUserProfileWant);
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (tagsFromProfile) {
  //     dispatch(editUserProfileActions.setHobby(tagsFromProfile));
  //   }
  // }, [dispatch, tagsFromProfile]);

  const onDelete = (id: string) => {
    dispatch(editUserProfileActions.removeWant(id));
  };

  const onAdd = (tag: TagInfo) => {
    dispatch(editUserProfileActions.setWant(tag));
  };

  const onCancel = () => {
    if (tagsFromProfile) {
      dispatch(editUserProfileActions.setWant(tagsFromProfile));
    } else {
      dispatch(editUserProfileActions.setWant([]));
    }
  };

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
