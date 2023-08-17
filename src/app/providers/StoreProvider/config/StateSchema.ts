import { AnyAction, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { UserSchema } from '@/entities/User';
import { rtkApi } from '@/shared/api/rtkApi';
import { RoomSchema } from '@/entities/Room';

export interface StateSchema {
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // async reducers
  // example?: ExampleSchema;
  room?: RoomSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - mounted, false - demounted
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
