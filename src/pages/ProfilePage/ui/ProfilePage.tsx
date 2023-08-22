import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ProfilePageProps {
  className?: string;
}

function ProfilePage({ className }: ProfilePageProps) {
  const { t } = useTranslation();
  return <div className={classNames('', {}, [className])} data-testid='ProfilePage' />;
}

export default ProfilePage;
