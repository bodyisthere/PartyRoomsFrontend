import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EditUserProfileSchema, TagInfo } from '../types/EditUserProfileSchema';

const initialState: EditUserProfileSchema = {
  about: '',
  hobby: [],
  dwant: [],
  want: [],
} as EditUserProfileSchema;

export const editUserProfileSlice = createSlice({
  name: 'editUserProfile',
  initialState,
  reducers: {
    setAbout: (state, { payload }: PayloadAction<string>) => {
      state.about = payload;
    },
    setWant: (state, { payload }: PayloadAction<TagInfo | TagInfo[]>) => {
      if (Array.isArray(payload)) {
        state.want = payload;
      } else {
        state.want.push(payload);
      }
    },
    removeWant: (state, { payload }: PayloadAction<string>) => {
      state.want = state.want.filter((el) => el.id !== payload);
    },
    setDWant: (state, { payload }: PayloadAction<TagInfo | TagInfo[]>) => {
      if (Array.isArray(payload)) {
        state.dwant = payload;
      } else {
        state.dwant.push(payload);
      }
    },
    removeDwant: (state, { payload }: PayloadAction<string>) => {
      state.dwant = state.dwant.filter((el) => el.id !== payload);
    },
    setHobby: (state, { payload }: PayloadAction<TagInfo | TagInfo[]>) => {
      if (Array.isArray(payload)) {
        state.hobby = payload;
      } else {
        state.hobby.push(payload);
      }
    },
    removeHobby: (state, { payload }: PayloadAction<string>) => {
      state.hobby = state.hobby.filter((el) => el.id !== payload);
    },
  },
});

export const { actions: editUserProfileActions } = editUserProfileSlice;
export const { reducer: editUserProfileReducer } = editUserProfileSlice;
