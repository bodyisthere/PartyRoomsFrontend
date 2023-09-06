import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { EditUserProfilePick } from '../EditUserProfilePick/EditUserProfilePick';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { editUserProfileActions } from '../../model/slice/editUserProfileSlice';
import { TagInfo } from '../../model/types/EditUserProfileSchema';
import { getEditUserProfileDWant } from '../../model/selectors/getEditUserProfileDWant/getEditUserProfileDWant';
import { getUserDWant } from '@/entities/User/model/selectors/getUserDWant/getUserDWant';

interface EditUserProfileHobbyProps {
  className?: string;
}

export function EditUserProfileDWant({ className }: EditUserProfileHobbyProps) {
  const { t } = useTranslation();
  const tagsFromProfile = useSelector(getUserDWant);
  const tags = useSelector(getEditUserProfileDWant);
  const dispatch = useAppDispatch();

  const onDelete = (id: string) => {
    dispatch(editUserProfileActions.removeDwant(id));
  };

  const onAdd = (tag: TagInfo) => {
    dispatch(editUserProfileActions.setDWant(tag));
  };

  const onCancel = () => {
    if (tagsFromProfile) {
      dispatch(editUserProfileActions.setDWant(tagsFromProfile));
    } else {
      dispatch(editUserProfileActions.setDWant([]));
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
