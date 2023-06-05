let input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('.\n');

const balanceChecker = (str) => {
  if (str === '.') return;
  const stack = [];
  const strArr = str.split('');
  strArr.forEach((str) => {
    if (str === '[' || str === '(') {
      stack.push(str);
    } else if (str === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      } else {
        stack.push(str);
      }
    } else if (str === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      } else {
        stack.push(str);
      }
    }
  });
  console.log(stack.pop() ? 'no' : 'yes');
};

input.forEach(balanceChecker);
