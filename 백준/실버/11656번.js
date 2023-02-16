let input = require('fs').readFileSync('input.txt').toString().trim().split('');
const length = input.length;
let answer = [];
for (let i = 0; i < length; i++) {
  answer.push(input.join(''));
  input.shift();
}
answer = answer.sort();
console.log(answer.join('\n'));
