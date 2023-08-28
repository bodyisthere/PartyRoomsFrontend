import { describe, test, expect } from 'vitest';
import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { EditUserProfile } from './EditUserProfile';
import { editUserProfileReducer } from '../../model/slice/editUserProfileSlice';

describe('features/EditUserProfile/ui/EditUserProfile', () => {
  test('should render', async () => {
    componentRender(<EditUserProfile />, {
      asyncReducers: {
        editUserProfile: editUserProfileReducer,
      },
      initialState: {
        user: {
          authData: {
            id: '321',
          },
        },
      },
    });

    const page = await screen.findByTestId('UserProfileLayout');
    expect(page).toBeInTheDocument();
  });
});
