import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RegistrationSchema, RegistrationStep } from '../types/RegistrationSchema';

const initialState: RegistrationSchema = {
  body: {},
  step: '1',
} as RegistrationSchema;

export const registrationSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {
    setFirstName: (state, { payload }: PayloadAction<string>) => {
      state.body.firstName = payload;
    },
    setLastName: (state, { payload }: PayloadAction<string>) => {
      state.body.lastName = payload;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.body.email = payload;
    },
    setUsername: (state, { payload }: PayloadAction<string>) => {
      state.body.username = payload;
    },
    setPhoneNumber: (state, { payload }: PayloadAction<string>) => {
      state.body.phoneNumber = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.body.password = payload;
    },
    setConfirmPassword: (state, { payload }: PayloadAction<string>) => {
      state.body.confirmPassword = payload;
    },
    setStep: (state, { payload }: PayloadAction<RegistrationStep>) => {
      state.step = payload;
    },
  },
});

export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;
