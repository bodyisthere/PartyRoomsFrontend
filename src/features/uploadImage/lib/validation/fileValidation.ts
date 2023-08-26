import { FileValidationError } from '../../model/types/FileValidationError';

const validFileType = ['image/jpeg', 'image/png', 'image/jpg'];

export const fileValidation = (files: FileList) => {
  for (let i = 0; i < files.length; i += 1) {
    if (!validFileType.includes(files[i].type)) {
      return { images: FileValidationError.NO_CORRECT_FILE_EXTENSION };
    }
  }
  return false;
};
