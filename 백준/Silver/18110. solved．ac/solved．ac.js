const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const N = input.shift();
input.sort((a, b) => a - b);

const tearChecker = (N, input) => {
  if (N === 0) return 0;
  const ignoredCount = Math.round(input.length * 0.15);
  const end = input.length - ignoredCount;
  const validInput = input.slice(ignoredCount, end);
  const average = Math.round(
    validInput.reduce((a, b) => a + b) / validInput.length
  );
  return average;
};

console.log(tearChecker(N, input));
