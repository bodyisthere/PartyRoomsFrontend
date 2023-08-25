import { StateSchema } from '@/app/providers/StoreProvider';

export const getUserProfileCondition = (state: StateSchema) => state.userProfile?.condition;
