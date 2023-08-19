import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
  const { t } = useTranslation('');

  console.log('frobiden');

  return <div data-testid='ForbiddenPage'>no access321321321</div>;
};

export default ForbiddenPage;
