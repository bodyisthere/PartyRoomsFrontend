import { useTranslation } from 'react-i18next';

import Plus from '@/shared/assets/icons/Plus.svg';
import styles from './EditUserProfile.module.scss';
import { HStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { TagInfo } from '../../model/types/EditUserProfileSchema';

interface EditUserProfileTagProps {
  className?: string;
  info?: TagInfo;
}

export function EditUserProfileTag({ className, info }: EditUserProfileTagProps) {
  const { t } = useTranslation();
  return (
    <HStack className={`${styles.tag} ${info?.important && styles.important}`} justify='between'>
      <p>#{info?.content}</p>
      <Button theme='clear'>
        <Icon Svg={Plus} />
      </Button>
    </HStack>
  );
}
