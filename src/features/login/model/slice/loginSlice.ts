import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {} as LoginSchema;

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
});

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
