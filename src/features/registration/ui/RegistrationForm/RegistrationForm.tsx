import { useSelector } from 'react-redux';

import { registrationReducer } from '../../model/slice/registrationSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { RegistrationStepFirst } from '../RegistrationStep/RegistrationStepFirst/RegistrationStepFirst';
import { RegistrationStepSecond } from '../RegistrationStep/RegistrationStepSecond/RegistrationStepSecond';
import { getRegistrationStep } from '../../model/selectors/getRegistrationStep/getRegistrationStep';

const initialReducers: ReducersList = {
  registration: registrationReducer,
};

interface RegistrationFormProps {
  changeCondition: () => void;
}

export function RegistrationForm({ changeCondition }: RegistrationFormProps) {
  const step = useSelector(getRegistrationStep);

  const stepSwitch = () => {
    switch (step) {
      case '1':
        return <RegistrationStepFirst changeCondition={changeCondition} />;
      case '2':
        return <RegistrationStepSecond />;
      default:
        return <RegistrationStepSecond />;
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div style={{ width: '100%' }}>{stepSwitch()}</div>
    </DynamicModuleLoader>
  );
}
