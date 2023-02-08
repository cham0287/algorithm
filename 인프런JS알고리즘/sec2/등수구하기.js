let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let [num, value] = input;
value = value.split(' ').map(Number);
num = Number(num);
let answer = Array.from({ length: num }, () => 1);
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (value[i] < value[j]) {
      answer[i]++;
    }
  }
}
console.log(answer);
