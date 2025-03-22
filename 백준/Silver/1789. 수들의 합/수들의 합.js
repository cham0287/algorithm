const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = Number(fs.readFileSync(filePath).toString().trim());
let num = 1;
let accSum = 0;

while (accSum <= input) {
  accSum += num;
  num++;
}

console.log(num - 2);
