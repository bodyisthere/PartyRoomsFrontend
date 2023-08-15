import { getUserInited } from '@/entities/User';
import { InvitationPage } from '@/pages/InvitationPage';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';

const App = memo(() => {
  const dispatch = useAppDispatch();
  // const inited = useSelector(getUserInited);
  const inited = true;

  useEffect(() => {
    if (!inited) {
      // dispatch(initAuthData());
    }
  }, [dispatch, inited]);

  if (!inited) {
    return <h1>loading</h1>;
  }

  return (
    <div id='app'>
      <Suspense fallback=''>
        {/* <MainLayout /> */}
        <InvitationPage />
      </Suspense>
    </div>
  );
});

export default App;
