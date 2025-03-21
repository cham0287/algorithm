const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const sum = input.reduce((a, b) => a + b, 0);
const surplus = sum - 100;

const map = {};

const wrong = [];

input.forEach((a) => {
  const target = surplus - a;

  if (map[a]) {
    wrong.push(a);
    wrong.push(map[a]);
  } else {
    map[target] = a;
  }
});

console.log(input.filter((a) => !wrong.includes(a)).join('\n'));
