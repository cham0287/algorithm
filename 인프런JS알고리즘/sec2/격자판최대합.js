let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const num = Number(input.shift());
input = input.map((arr) => arr.split(' ').map(Number));
const rowSum = input.map((row) => row.reduce((a, b) => a + b));
const colSum = Array.from({ length: num }, () => 0);
let tri1 = 0;
let tri2 = 0;
for (let i = 0; i < num; i++) {
  for (let j = 0; j < num; j++) {
    colSum[j] += input[i][j];
  }
  tri1 += input[i][i];
  tri2 += input[i][num - i - 1];
}
const answer = [...rowSum, ...colSum, tri1, tri2].sort((a, b) => b - a);
console.log(answer[0]);
