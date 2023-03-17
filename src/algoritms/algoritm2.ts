
export const algoritm2 = (a: number, c: number, k: number):number => {
  if (k < 10) {
    return Math.pow(a + c, 4) - Math.pow(a - c, 2);
  } else {
    return Math.pow(a - c, 3) - Math.pow(a + c, 2);
  }
};