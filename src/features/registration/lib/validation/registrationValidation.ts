import { object, string } from 'yup';
import { RegistrationSchema } from '../..';

export const registrationValidationSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  username: string().required(),
  email: string().email().required(),
  phoneNumber: string().required(),
  password: string().length(5).required(),
  confirmPassword: string().length(5).required(),
});

type RegistrationValidation = (body: RegistrationSchema) => Promise<RegistrationSchema>;

export const registrationValidation: RegistrationValidation = async (body) => {
  const validationResult = await registrationValidationSchema
    .validate(body, { abortEarly: false })
    .catch((err) => err);

  return validationResult;
};

// const validateNestedSchema = async () => {
//   const validationResult = await validationSchemaNested
//     .validate(dataObjectNested, { abortEarly: false })
//     .catch((err) => {
//       return err;
//     });
//   console.log(validationResult.inner[0].path); // gives "basicDetails.emailId"
// };
