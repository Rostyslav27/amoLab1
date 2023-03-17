
export const algoritm1 = (a: number, b: number, c: number, d: number):number => {
  return ((Math.sqrt(a) + b * b) / (Math.sqrt(a) - b * b)) + Math.sqrt((a * b) / (c * d));
};