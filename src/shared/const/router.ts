export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  INVITATION = 'invitation',
  FORBIDDEN = 'forbidden',
  AUTHORIZATION = 'authorization',

  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteInvitation = () => '/invitation';
export const getRouteAuthorization = () => '/authorization';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPatter: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteAuthorization()]: AppRoutes.AUTHORIZATION,
  [getRouteInvitation()]: AppRoutes.INVITATION,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
