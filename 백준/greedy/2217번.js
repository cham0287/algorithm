let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
let N = input.shift();
input = input.sort((a, b) => b - a);
let maximum = 0;
for (let i = N; i > 0; i--) {
  if (input[i - 1] * i > maximum) maximum = input[i - 1] * i;
}
console.log(maximum);
