import { isLowerThanFive } from "./business/calculator.business.js";

export const add = (
  a: number,
  b: number
): number => {
  const result = a + b;

  if (result < 5) {
    isLowerThanFive(result);
  }

  return result;
};




