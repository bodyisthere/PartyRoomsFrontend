import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EditUserProfileSchema, DWant, Hobby, Want } from '../types/EditUserProfileSchema';

const initialState: EditUserProfileSchema = {} as EditUserProfileSchema;

export const editUserProfileSlice = createSlice({
  name: 'editUserProfile',
  initialState,
  reducers: {
    setAbout: (state, { payload }: PayloadAction<string>) => {
      state.about = payload;
    },
    setWant: (state, { payload }: PayloadAction<Want[]>) => {
      state.want = payload;
    },
    setDWant: (state, { payload }: PayloadAction<DWant[]>) => {
      state.dwant = payload;
    },
    setHobby: (state, { payload }: PayloadAction<Hobby[]>) => {
      state.hobby = payload;
    },
  },
});

export const { actions: editUserProfileActions } = editUserProfileSlice;
export const { reducer: editUserProfileReducer } = editUserProfileSlice;
