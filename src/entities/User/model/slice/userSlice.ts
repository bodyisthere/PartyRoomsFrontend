import { createSlice } from '@reduxjs/toolkit';
import { UserSchema } from '../types/UserSchema';

const initialState: UserSchema = {
  _inited: false,
  authData: {
    avatar:
      'https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80',
    firstName: 'Николай',
    lastName: 'Иванов',
    id: '3',
    about: '321321321321',
    hobbies: [
      { id: '1', content: 'рыбалка', important: false },
      { id: '2', content: 'шахматы', important: false },
      { id: '3', content: 'чтение', important: false },
      { id: '4', content: 'музыка', important: false },
    ],
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
