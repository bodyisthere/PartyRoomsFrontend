import { rtkApi } from '@/shared/api/rtkApi';

const UploadImageApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    uploadImage: build.mutation<string, FormData>({
      query: () => ({
        url: 'uploads',
      }),
    }),
  }),
});

export const useUploadImageApi = UploadImageApi.useUploadImageMutation;
