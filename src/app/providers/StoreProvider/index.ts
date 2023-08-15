import { StoreProvider } from './ui/StoreProvider';
import { AppDispatch, createReduxStore } from './config/store';
import type { StateSchema, StateSchemaKey, ReduxStoreWithManager } from './config/StateSchema';

export { StoreProvider, createReduxStore };

export type { StateSchema, AppDispatch, ReduxStoreWithManager, StateSchemaKey };
