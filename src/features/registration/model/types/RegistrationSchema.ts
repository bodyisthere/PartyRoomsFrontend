import { InferType } from 'yup';

import {
  registrationValidationStepFirstYupSchema,
  registrationValidationStepSecondYupSchema,
} from '../../lib/validation/registrationValidation';

export type RegistrationSchemaFirstStep = InferType<
  typeof registrationValidationStepFirstYupSchema
>;

export type RegistrationSchemaSecondStep = InferType<
  typeof registrationValidationStepSecondYupSchema
>;

export type RegistrationStep = '1' | '2';

export interface RegistrationBody {
  confirmPassword: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
}

export interface RegistrationSchema {
  body: RegistrationBody;
  step: RegistrationStep;
}
