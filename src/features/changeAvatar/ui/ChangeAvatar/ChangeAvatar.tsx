import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ChangeAvatar.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import Camera from '@/shared/assets/icons/Camera.svg';
import { getUserAuthData } from '@/entities/User';
import { useUploadImage } from '@/features/uploadImage';
import { Modal } from '@/shared/ui/Modal';
import { ChangeAvatarModal } from '../ChangeAvatarModal/ChangeAvatarModal';

interface ChangeAvatarProps {
  className?: string;
  size?: number;
  borderRadius?: string;
}

export function ChangeAvatar({ className, borderRadius, size }: ChangeAvatarProps) {
  const userData = useSelector(getUserAuthData);
  const [avatar, setAvatar] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { uploadImage, data, isError, isLoading, validationResult } = useUploadImage();

  const closeModal = useCallback(() => setIsModalOpen(false), []);

  useEffect(() => {
    if (data) {
      setIsModalOpen(true);
      setAvatar(data);
    }
  }, [data]);

  return (
    <div className={classNames(styles.ChangeAvatar, {}, [className])}>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <ChangeAvatarModal onClose={closeModal} src={avatar} />
        </Modal>
      )}
      <Avatar
        borderRadius={borderRadius}
        size={size}
        className={`${styles.avatar} ${validationResult.images && styles['avatar--error']}`}
        src={userData?.avatar}
        alt={`${userData?.firstName} ${userData?.lastName}`}
      />
      <label className={styles.label} htmlFor='input-file'>
        <Icon width='40px' height='40px' Svg={Camera} />
        <input
          className={styles.fileUpload}
          type='file'
          onChange={uploadImage}
          multiple
          id='input-file'
        />
      </label>
    </div>
  );
}
