let input = require('fs')
  .readFileSync('example.txt')
  .toString()
  .trim()
  .split('\n');
let [num, value] = input;
num = Number(num);
value = value.split('').map((point) => Number(point));
let score = 0;
let stack = 0;
for (let i = 0; i < num; i++) {
  if (value[i] === 1) {
    stack++;
    score += stack;
  } else {
    stack = 0;
  }
}
console.log(score);
