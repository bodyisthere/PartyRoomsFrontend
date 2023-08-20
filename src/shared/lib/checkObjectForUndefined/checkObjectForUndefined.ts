// eslint-disable-next-line @typescript-eslint/no-explicit-any
type CheckObjectForUndefined = (obj: Record<any, any>) => any[];

export const checkObjectForUndefined: CheckObjectForUndefined = (obj) => {
  return Object.keys(obj).filter((key) => obj[key] === undefined);
};
