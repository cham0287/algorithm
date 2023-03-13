let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));
const [[N], arr1, arr2] = input;
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => b - a);
let sum = 0;
for (let i = 0; i < N; i++) {
  sum += arr1[i] * arr2[i];
}
console.log(sum);
