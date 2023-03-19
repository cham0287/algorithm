let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
const N = Number(input.shift());
const isGoodStr = (str) => {
  const stack = [];
  const length = str.length;
  for (let i = 0; i < length; i++) {
    if (str[i] === stack[stack.length - 1]) stack.pop();
    else stack.push(str[i]);
  }
  return stack.length === 0 ? 1 : 0;
};

const countGood = input.reduce((acc, str) => acc + isGoodStr(str), 0);
console.log(countGood);
