export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  FORBIDDEN = 'forbidden',

  NOT_FOUND = 'not_found',
}

export const getRouteMain = () => '/';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteForbidden = () => '/forbidden';

export const AppRouteByPathPatter: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.MAIN,
  [getRouteProfile(':id')]: AppRoutes.PROFILE,
  [getRouteForbidden()]: AppRoutes.FORBIDDEN,
};
