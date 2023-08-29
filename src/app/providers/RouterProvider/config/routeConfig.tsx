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
    displayTitle: 'Главная',
    authOnly: true,
  },
  [AppRoutes.AUTHORIZATION]: {
    path: getRouteAuthorization(),
    element: <AuthorizationPage />,
    displayTitle: 'Авторизация',
  },
  [AppRoutes.INVITATION]: {
    path: getRouteInvitation(),
    element: <InvitationPage />,
    displayTitle: 'Приглашение',
  },
  [AppRoutes.PROFILE]: {
    path: getRouteProfile(':id'),
    element: <ProfilePage />,
    authOnly: true,
    displayTitle: 'Профиль',
  },
  [AppRoutes.FORBIDDEN]: {
    path: getRouteForbidden(),
    element: <ForbiddenPage />,
    displayTitle: 'Нет доступа',
  },
  [AppRoutes.NOT_FOUND]: {
    path: '*',
    element: <NotFoundPage />,
    displayTitle: 'Не найдена',
  },
};
