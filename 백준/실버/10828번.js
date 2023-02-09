let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const num = Number(input.shift());
let stack = [];
let answer = [];
input.forEach((order) => {
  if (order.split(' ').length > 1) {
    stack.push(order.split(' ')[1]);
  }
  if (order === 'pop') {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack.pop());
  }
  if (order === 'size') answer.push(stack.length);
  if (order === 'empty') answer.push(stack.length === 0 ? 1 : 0);
  if (order === 'top') {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack[stack.length - 1]);
  }
});
console.log(answer.join('\n'));
