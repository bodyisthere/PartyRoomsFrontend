export const matchValidationResult = (validationResult: Record<string, string>) => {
  if (validationResult.email) return validationResult.email;
  if (validationResult.phoneNumber) return validationResult.phoneNumber;
  if (validationResult.password) return validationResult.password;
  if (validationResult.confirmPassword) return validationResult.confirmPassword;
  return '';
};
