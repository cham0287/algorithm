const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = +input.shift();

input.forEach((line) => {
  const stack = [];
  let answer = 'YES';
  for (let i = 0; i < line.length; i++) {
    const parensis = line[i];
    if (parensis === '(') {
      stack.push(parensis);
    }
    if (parensis === ')') {
      if (stack.at(-1) === '(') {
        stack.pop();
      } else {
        answer = 'NO';
      }
    }
  }
  if (stack.length) {
    answer = 'NO';
  }
  console.log(answer);
});
