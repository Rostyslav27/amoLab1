
export const algoritm3 = (a: number, b: number, p: number):number => {
  let sum1:number = 0;
  let sum2:number = 0;
  let f:number = 0;

  for (let i:number = 1; i <= p; i++) {
    sum1 = 0;

    for (let j:number = 1; j <= p; j++) {
      sum2 = 0;

      for (let k:number = 1; k <= p; k++) {
        sum2 += i * (i * j * (i * j * k * Math.sqrt(a + b)));
      }

      sum1 += sum2;
    }

    f += sum1;
  }

  return f;
};