import { Suspense, memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { getUserInited } from '@/entities/User';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Block } from '@/shared/ui/Block';
import { RouterProvider } from './providers/RouterProvider';
import { InvitationPage } from '@/pages/InvitationPage';
import { ProfilePage } from '@/pages/ProfilePage';

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
        <RouterProvider />
      </Suspense>
    </div>
  );
});

export default App;
