let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let [N, inputs] = input;
N = Number(N);
inputs = inputs.split(' ').map(Number);
let answer = Array.from({ length: N }, () => -1);
let stack = [];
for (let i = N - 1; i >= 0; i--) {
  while (stack.length > 0 && stack[stack.length - 1] <= inputs[i]) {
    stack.pop();
  }
  if (stack.length > 0) {
    answer[i] = stack[stack.length - 1];
  }
  stack.push(inputs[i]);
}
console.log(answer.join(' '));
