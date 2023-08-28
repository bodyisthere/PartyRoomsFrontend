import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';

interface MainPageProps {
  className?: string;
}

function MainPage({ className }: MainPageProps) {
  const { t } = useTranslation();
  return <div className={classNames('', {}, [className])} data-testid='MainPage' />;
}

export default MainPage;
