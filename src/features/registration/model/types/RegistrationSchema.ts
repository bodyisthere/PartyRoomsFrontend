import { registrationValidationSchema } from '../../lib/validation/registrationValidation';
import { InferType } from 'yup';

export type RegistrationSchema = InferType<typeof registrationValidationSchema>;
