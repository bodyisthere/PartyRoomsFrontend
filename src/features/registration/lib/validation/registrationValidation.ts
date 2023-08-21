import { object, string, ValidationError, ref } from 'yup';
import {
  RegistrationSchemaFirstStep,
  RegistrationSchemaSecondStep,
} from '../../model/types/RegistrationSchema';

// TODO localisation
// setLocale({
//   mixed: {
//     default(params) {},
//   },
// });

export const registrationValidationStepFirstYupSchema = object({
  firstName: string().required('Это поле обязательно'),
  lastName: string().required('Это поле обязательно'),
  username: string().required('Это поле обязательно'),
});

export const registrationValidationStepSecondYupSchema = object({
  email: string().required('Это поле обязательно').email('Введите корректный email'),
  phoneNumber: string().required('Это поле обязательно'),
  password: string().required('Это поле обязательно').min(5, 'Минимальная длина пароля 5 символов'),
  confirmPassword: string()
    .min(5, 'Минимальная длина пароля 5 символов')
    .oneOf([ref('password')], 'Пароли не сходятся'),
});

const registrationValidation = (
  schema:
    | typeof registrationValidationStepFirstYupSchema
    | typeof registrationValidationStepSecondYupSchema,
  body: RegistrationSchemaFirstStep | RegistrationSchemaSecondStep
) => {
  try {
    schema.validateSync(body, { abortEarly: false });
    return false;
  } catch (error) {
    if (error instanceof ValidationError) {
      const errorObject: Record<string, string> = {};
      error.inner.forEach((e: ValidationError) => {
        errorObject[e.path ? e.path : 'e'] = e.message;
      });
      return errorObject;
    }
  }
};

export const registrationValidationStepFirst = (body: RegistrationSchemaFirstStep) =>
  registrationValidation(registrationValidationStepFirstYupSchema, body);

export const registrationValidationStepSecond = (body: RegistrationSchemaSecondStep) =>
  registrationValidation(registrationValidationStepSecondYupSchema, body);
