import { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { userReducer } from '@/entities/User/model/slice/userSlice';

const defaultAsyncReducers: ReducersList = {
  // user: userReducer,
};

type StoreDecoratorFunction = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => Decorator;

export const StoreDecorator: StoreDecoratorFunction = (state, asyncReducers) =>
  function (Story) {
    return (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <Story />
      </StoreProvider>
    );
  };
