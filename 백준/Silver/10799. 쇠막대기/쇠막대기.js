const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().replaceAll('()', '.');

const stack = [];
let answer = 0;

for (let i = 0; i < input.length; i++) {
  const curStr = input[i];
  if (curStr === '(') {
    stack.push('(');
  }

  if (curStr === ')') {
    stack.pop();
    answer++;
  }

  if (curStr === '.') {
    answer += stack.length;
  }
}

console.log(answer);
