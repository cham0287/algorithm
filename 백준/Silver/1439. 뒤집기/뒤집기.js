const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('');

let current = input[0];
let count = 0;

input.forEach((num) => {
  if (current !== num) {
    count++;
    current = num;
  }
});

console.log(Math.ceil(count / 2));
