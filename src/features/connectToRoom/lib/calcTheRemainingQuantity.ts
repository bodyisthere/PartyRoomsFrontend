type CalcTheRemainingQuantity = (length: number) => number;

export const calcTheRemainingQuantity: CalcTheRemainingQuantity = (length) => {
  let result = 0;

  switch (length) {
    case 0:
      result = 0;
      break;
    case 1:
      result = length - 1;
      break;
    case 2:
      result = length - 2;
      break;
    case 3:
      result = length - 3;
      break;
    case 4:
      result = length - 4;
      break;
    default:
      result = length - 4;
      break;
  }

  return result;
};
