import { object, mixed } from 'yup';

const MAX_FILE_SIZE = 102400;

const validFileExtensions = ['jpg', 'png', 'jpeg'];

function isValidFileType(fileName: string) {
  const fileType = fileName.split('.').pop() || 'err';
  return fileName && validFileExtensions.includes(fileType);
}

object().shape({
  image: mixed()
    .required('Required')
    .test('is-valid-type', 'Not a valid image type', (value) =>
      // @ts-ignore
      isValidFileType(value && value.name.toLowerCase())
    )
    .test(
      'is-valid-size',
      'Max allowed size is 100KB',
      (value) => value && value.size <= MAX_FILE_SIZE
    ),
});
