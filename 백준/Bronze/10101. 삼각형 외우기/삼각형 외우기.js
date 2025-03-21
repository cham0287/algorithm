const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const [a, b, c] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const len = [...new Set([a, b, c])].length;

let answer = '';

if (a + b + c !== 180) {
  answer = 'Error';
} else if (len === 2) {
  answer = 'Isosceles';
} else if (len === 1) {
  answer = 'Equilateral';
} else {
  answer = 'Scalene';
}

console.log(answer);
