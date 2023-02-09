let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let [num, ...inputs] = input;
num = Number(num);
inputs = inputs.map((input) => input.split(''));
let ans = [];
for (let i = 0; i < num; i++) {
  let stack = [];
  inputs[i].forEach((input) => {
    if (stack.length === 0) stack.push(input);
    else
      input === '('
        ? stack.push(input)
        : stack[stack.length - 1] === '('
        ? stack.pop()
        : null;
  });
  stack.length === 0 ? ans.push('YES') : ans.push('NO');
}
console.log(ans.join('\n'));
