import { object, string, ValidationError, InferType } from 'yup';

export type LoginSchema = InferType<typeof loginValidationYupSchema>;

// TODO localisation
// setLocale({
//   mixed: {
//     default(params) {},
//   },
// });

export const loginValidationYupSchema = object({
  email: string().required('Почта обязательное поле').email('Введите корректный email'),
  password: string()
    .required('Пароль обязательное поле')
    .min(5, 'Минимальная длина пароля 5 символов'),
});

export const loginValidation = (body: LoginSchema) => {
  try {
    loginValidationYupSchema.validateSync(body, { abortEarly: false });
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
