const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

const flockA = 4;
const flockB = 2;
const flockC = 0;
const result = add(multiply(flockB, add(flockA, flockC)), multiply(flockA, flockB));
console.log(result);
