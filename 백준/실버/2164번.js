let input = require('fs').readFileSync('input.txt').toString().trim();
input = Number(input);
let count = 0;
while (input > 2 ** count) {
  count++;
}
let gap = 2 ** count - input;
console.log(2 ** count - gap * 2);
// 규칙성을 찾아서 풀었으나 정식 풀이가 아닌듯
