const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

let count = 0;
while (a !== b) {
  a = Math.ceil(a / 2);
  b = Math.ceil(b / 2);
  count++;
}

console.log(count);