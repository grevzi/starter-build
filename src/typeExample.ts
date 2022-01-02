export interface User {
  name: {
    first: string;
    middle: string;
    last: string;
  };
}
const sum = (
  a: number,

  b: number
) => a + b;
export const sayMyName = (name: string) => `Hello ${name}`;

console.log(sum(1, 2));
console.log(sayMyName("John"));
