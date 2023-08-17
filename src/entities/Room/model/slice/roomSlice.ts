import { RoomSchema } from '../types/RoomSchema';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: RoomSchema = {} as RoomSchema;

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoom: (state, { payload }: PayloadAction<RoomSchema>) => {
      state = payload;
    },
  },
});

export const { actions: roomActions } = roomSlice;
export const { reducer: roomReducer } = roomSlice;
