let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let [num, values] = input;
num = Number(num);
values = values.split(' ');
let ans = [];
let max = 0;
values.forEach((val) => {
  val = val.split('').map(Number);
  const sum = val.reduce((a, b) => a + b);
  if (sum >= max) {
    max = sum;
    ans.push(Number(val.join('')));
  }
});
console.log(ans.sort((a, b) => b - a)[0]);
