import { useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ChangeAvatar.module.scss';
import { Avatar } from '@/shared/ui/Avatar';
import { Icon } from '@/shared/ui/Icon';
import Camera from '@/shared/assets/icons/Camera.svg';
import { getUserAuthData } from '@/entities/User';

interface ChangeAvatarProps {
  className?: string;
  size?: number;
  borderRadius?: string;
}

export function ChangeAvatar({ className, borderRadius, size }: ChangeAvatarProps) {
  const userData = useSelector(getUserAuthData);
  const [avatar, setAvatar] = useState<string>('');

  const handleUpload = async (e: any) => {
    const formData = new FormData();
    const files: FileList = e.target.files;
    isValidFiles(files, maxPhoto, setError);
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }
    uploadImg(formData)
      .unwrap()
      .then((data) => setUploadedPhoto(data.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className={classNames(styles.ChangeAvatar, {}, [className])}>
      <Avatar
        borderRadius={borderRadius}
        size={size}
        className={styles.avatar}
        src={userData?.avatar}
        alt={`${userData?.firstName} ${userData?.lastName}`}
      />
      <label className={styles.label} htmlFor='input-file'>
        <Icon width='40px' height='40px' Svg={Camera} />
        <input className={styles.fileUpload} type='file' id='input-file' />
      </label>
    </div>
  );
}
