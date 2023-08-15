import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

import styles from './InvitationPage.module.scss';
import { Block } from '@/shared/ui/Block';
import { Button } from '@/shared/ui/Button';
import { VStack } from '@/shared/ui/Stack';

interface InvitationPageProps {
  className?: string;
}

const InvitationPage = ({ className }: InvitationPageProps) => {
  const { t } = useTranslation();
  return (
    <Block className={styles.block}>
      <VStack>
        <Button>click!</Button>
      </VStack>
    </Block>
  );
};

export default InvitationPage;
