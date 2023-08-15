import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
  const { t } = useTranslation('');

  return <div>no access</div>;
};

export default ForbiddenPage;
