let input = require('fs').readFileSync('input.txt').toString().trim().split('');
console.log(input);
let stack = [];
input.forEach((a) => {
  a === '(' ? stack.push(a) : stack.pop();
});
if (stack.length === 0) console.log('YES');
else console.log('NO');
