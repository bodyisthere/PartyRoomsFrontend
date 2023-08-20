import { RegistrationSchema } from '../types/RegistrationSchema';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: RegistrationSchema = {} as RegistrationSchema;

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setFirstName: (state, { payload }: PayloadAction<string>) => {
      state.firstName = payload;
    },
    setLastName: (state, { payload }: PayloadAction<string>) => {
      state.lastName = payload;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.username = payload;
    },
    setPhoneNumber: (state, { payload }: PayloadAction<string>) => {
      state.phoneNumber = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    setConfirmPassword: (state, { payload }: PayloadAction<string>) => {
      state.confirmPassword = payload;
    },
  },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
