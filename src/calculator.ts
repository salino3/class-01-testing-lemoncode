import { isLowerThan, max } from './business/calculator.business.js';

export const add = (a: number, b: number): number => {
  const result = a + b;

  if (result < max) {
    isLowerThan(result, max);
  };

  return result;
};
