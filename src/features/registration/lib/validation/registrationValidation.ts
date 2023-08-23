import { object, string, ValidationError, ref, InferType } from 'yup';

export type RegistrationSchemaFirstStep = InferType<
  typeof registrationValidationStepFirstYupSchema
>;

export type RegistrationSchemaSecondStep = InferType<
  typeof registrationValidationStepSecondYupSchema
>;

// TODO localisation
// setLocale({
//   mixed: {
//     default(params) {},
//   },
// });

export const registrationValidationStepFirstYupSchema = object({
  firstName: string()
    .matches(/^[aA-zZА-ЯЁа-яё\s]+$/, 'Имя может содержать только буквы')
    .required('Имя обязательное поле'),
  lastName: string()
    .matches(/^[aA-zZА-ЯЁа-яё\s]+$/, 'Фамилия может содержать только буквы')
    .required('Фамилия обязательное поле'),
  username: string().required('Псевдоним обязательное поле'),
});

export const registrationValidationStepSecondYupSchema = object({
  email: string().required('Почта обязательное поле').email('Введите корректный email'),
  // TODO should add phone number validation and mask
  phoneNumber: string().required('Номер телефона обязательное поле'),
  password: string()
    .required('Пароль обязательное поле')
    .min(5, 'Минимальная длина пароля 5 символов'),
  confirmPassword: string()
    .required('Повторите пароль')
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
