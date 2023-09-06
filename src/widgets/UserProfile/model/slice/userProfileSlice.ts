import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserProfileCondition, UserProfileSchema } from '../types/UserProfileSchema';

const initialState: UserProfileSchema = {
  condition: 'view',
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setCondition: (state, { payload }: PayloadAction<UserProfileCondition>) => {
      state.condition = payload;
    },
  },
});

export const { actions: userProfileActions } = userProfileSlice;
export const { reducer: userProfileReducer } = userProfileSlice;
