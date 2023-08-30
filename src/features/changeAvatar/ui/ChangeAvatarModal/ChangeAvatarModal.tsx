import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './ChangeAvatarModal.module.scss';
import { Block } from '@/shared/ui/Block';
import { Text } from '@/shared/ui/Text';
import { Avatar } from '@/shared/ui/Avatar';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';

interface ChangeAvatarModalProps {
  className?: string;
  src?: string;
  onClose?: () => void;
}

export function ChangeAvatarModal({ className, src, onClose }: ChangeAvatarModalProps) {
  const { t } = useTranslation();
  return (
    <Block
      width='auto'
      height='auto'
      className={classNames(styles.ChangeAvatarModal, {}, [className])}
    >
      <Text
        className={styles.title}
        title={t('Ваше новое фото')}
        bold='bold_700'
        size='size_l'
        align='center'
      />
      <Avatar src={src} alt={t('Новый аватар')} className={styles.avatar} />
      <HStack justify='between'>
        <Button size='l' theme='attention' onClick={onClose}>
          {t('Отмена')}
        </Button>
        <Button size='l' theme='success'>
          {t('Сохранить')}
        </Button>
      </HStack>
    </Block>
  );
}
