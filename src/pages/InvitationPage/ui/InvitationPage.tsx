import { useTranslation } from 'react-i18next';
import { ConnectRoom } from '@/features/connectToRoom';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { roomReducer } from '@/entities/Room/model/slice/roomSlice';
import { Block } from '@/shared/ui/Block';
import { HStack } from '@/shared/ui/Stack';

const reducers: ReducersList = {
  room: roomReducer,
};

const InvitationPage = () => {
  return (
    <DynamicModuleLoader reducers={reducers}>
      <HStack align='center' justify='center' style={{ height: '100vh' }}>
        <Block>
          <ConnectRoom />
        </Block>
      </HStack>
    </DynamicModuleLoader>
  );
};

export default InvitationPage;
