let input = require('fs').readFileSync('input.txt').toString().trim();
input = input.replaceAll('()', 'R').split('');
let stack = [];
let count = 0;
input.forEach((a) => {
  if (a === 'R') {
    count += stack.length;
  } else if (a === '(') {
    stack.push(a);
    count++;
  } else {
    stack.pop();
  }
});
console.log(count);
