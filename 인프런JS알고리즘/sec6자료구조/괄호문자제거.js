let input = require('fs').readFileSync('input.txt').toString().trim().split('');
console.log(input);
let stack = [];
let ans = '';
input.forEach((a) => {
  if (a === '(') stack.push(a);
  else if (a === ')') stack.pop();
  else {
    if (stack.length === 0) {
      ans += a;
    }
  }
});
console.log(ans);
