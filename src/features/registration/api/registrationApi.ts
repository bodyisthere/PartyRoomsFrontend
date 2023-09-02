import { rtkApi } from '@/shared/api/rtkApi';
import { RegistrationBody } from '../model/types/RegistrationSchema';

type RegistrationApi = Omit<RegistrationBody, 'confirmPassword'>;

const registrationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    registration: build.mutation<string, RegistrationApi>({
      query: (body) => ({
        url: '/Account/Registration',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const useRegistration = registrationApi.useRegistrationMutation;
