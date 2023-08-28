import { screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import RouterProvider from './RouterProvider';
import { getRouteAuthorization, getRouteMain, getRouteProfile } from '@/shared/const/router';

describe('app/router/RouterProvider', () => {
  test('should redirect no auth user to forbidden page', async () => {
    componentRender(<RouterProvider />, {
      route: getRouteMain(),
      initialState: {
        user: {
          _inited: false,
          authData: {},
        },
      },
    });

    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('should render close page for auth user', async () => {
    componentRender(<RouterProvider />, {
      route: getRouteProfile(':1'),
      initialState: {
        user: {
          _inited: true,
          authData: {
            id: '1',
          },
        },
      },
    });

    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('should render', async () => {
    componentRender(<RouterProvider />, {
      route: getRouteAuthorization(),
    });

    const page = await screen.findByTestId('AuthorizationPage');
    expect(page).toBeInTheDocument();
  });

  test('should return not found page', async () => {
    componentRender(<RouterProvider />, {
      route: '/random',
    });

    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });
});
