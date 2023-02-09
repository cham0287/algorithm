let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const num = Number(input.shift());
let stack = [];
let answer = [];
console.log(num);
console.log(input);
input.forEach((order) => {
  if (order.split(' ').length > 1) {
    const [newOrder, val] = order.split(' ');
    newOrder === 'push_front' ? stack.unshift(val) : stack.push(val);
  }
  if (order === 'pop_front') {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack.shift());
  }
  if (order === 'pop_back') {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack.pop());
  }
  if (order === 'size') answer.push(stack.length);
  if (order === 'empty') answer.push(stack.length === 0 ? 1 : 0);
  if (order === 'front') {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack[0]);
  }
  if (order === 'back') {
    if (stack.length === 0) answer.push(-1);
    else answer.push(stack[stack.length - 1]);
  }
});
console.log(answer.join('\n'));
