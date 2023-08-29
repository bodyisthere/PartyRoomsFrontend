import { useTranslation } from 'react-i18next';

import Plus from '@/shared/assets/icons/Plus.svg';
import styles from './EditUserProfile.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { TagInfo } from '../../model/types/EditUserProfileSchema';

interface EditUserProfileTagProps {
  className?: string;
  info: TagInfo;
  onDelete: (id: string) => void;
}

export function EditUserProfileTag({ className, info, onDelete }: EditUserProfileTagProps) {
  const { t } = useTranslation();
  return (
    <HStack className={`${styles.tag} ${info?.important && styles.important}`} justify='between'>
      <p>#{info?.content}</p>
      <Button theme='clear' onClick={() => onDelete(info.id)}>
        <Icon Svg={Plus} />
      </Button>
    </HStack>
  );
}
