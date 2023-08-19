import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routeConfig';
import { AppRoutesProps } from '@/shared/types/router';
import { CircleLoader } from '@/shared/ui/CircleLoader';

const RouterProvider = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<CircleLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
});

export default RouterProvider;
