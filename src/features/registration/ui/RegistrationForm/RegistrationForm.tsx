import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';

import { Text } from '@/shared/ui/Text';
import styles from './RegistrationForm.module.scss';
import { registrationReducer } from '../../model/slice/registrationSlice';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { RegistrationStepFirst } from '../RegistrationStep/RegistrationStepFirst';
import { RegistrationStepSecond } from '../RegistrationStep/RegistrationStepSecond';
import { getRegistrationStep } from '../../model/selectors/getRegistrationStep';

const initialReducers: ReducersList = {
  registration: registrationReducer,
};

interface RegistrationFormProps {
  className?: string;
}

export function RegistrationForm({ className }: RegistrationFormProps) {
  const { t } = useTranslation();
  const step = useSelector(getRegistrationStep);

  const stepSwitch = () => {
    switch (step) {
      case '1':
        return <RegistrationStepFirst />;
      default:
        return <RegistrationStepSecond />;
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(styles.RegistrationForm, {}, [className])}>
        <Text
          title={t('Давайте знакомиться!')}
          size='size_xl'
          bold='bold_900'
          theme='black'
          align='center'
          className={styles.text}
        />
        {stepSwitch()}
      </div>
    </DynamicModuleLoader>
  );
}
