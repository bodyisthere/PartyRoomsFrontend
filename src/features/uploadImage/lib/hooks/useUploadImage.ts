import { useState } from 'react';
import { fileValidation } from '../validation/fileValidation';
import { useUploadImageApi } from '../../api/uploadImageApi';
import { FileValidationError } from '../../model/types/FileValidationError';

export const useUploadImage = () => {
  const [validationResult, setValidationResult] = useState<Record<string, string>>({});
  const [upload, { data, isError, isLoading }] = useUploadImageApi();

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    const { files } = e.target;
    if (!files) return setValidationResult({ images: FileValidationError.NO_FILES });

    const result = fileValidation(files);
    if (result) return setValidationResult(result);

    for (let i = 0; i < files.length; i += 1) {
      formData.append('files', files[i]);
    }

    return upload(formData);
  };

  return {
    uploadImage,
    validationResult,
    data,
    isError,
    isLoading,
  };
};
