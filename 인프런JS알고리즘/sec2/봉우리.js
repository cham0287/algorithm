let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const num = Number(input.shift());
input = input
  .map((row) => row.split(' ').map(Number))
  .map((row) => [0, ...row, 0]);
input.unshift(Array.from({ length: num + 2 }, () => 0));
input.push(Array.from({ length: num + 2 }, () => 0));
let count = 0;
for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= num; j++) {
    if (
      input[i][j] > input[i - 1][j] &&
      input[i][j] > input[i][j - 1] &&
      input[i][j] > input[i + 1][j] &&
      input[i][j] > input[i][j + 1]
    )
      count++;
  }
}
console.log(count);
