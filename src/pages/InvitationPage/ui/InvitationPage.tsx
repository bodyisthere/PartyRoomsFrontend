import { useTranslation } from 'react-i18next';
import { ConnectRoom } from '@/features/connectToRoom';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { roomReducer } from '@/entities/Room/model/slice/roomSlice';

const reducers: ReducersList = {
  room: roomReducer,
};

const InvitationPage = () => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <ConnectRoom />
    </DynamicModuleLoader>
  );
};

export default InvitationPage;
