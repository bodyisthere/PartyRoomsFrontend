import {
  AppRoutes,
  getRouteAuthorization,
  getRouteForbidden,
  getRouteInvitation,
  getRouteMain,
  getRouteProfile,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { InvitationPage } from '@/pages/InvitationPage';
import { AuthorizationPage } from '@/pages/AuthorizationPage';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <MainPage />,
    authOnly: true,
  },
  [AppRoutes.AUTHORIZATION]: {
    path: getRouteAuthorization(),
    element: <AuthorizationPage />,
  },
  [AppRoutes.INVITATION]: {
    path: getRouteInvitation(),
    element: <InvitationPage />,
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
  },
};
