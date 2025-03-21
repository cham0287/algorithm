const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());

const arr = input.map((a) => a.split(' ').map(Number));

arr.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

console.log(arr.map((a) => a.join(' ')).join('\n'));
