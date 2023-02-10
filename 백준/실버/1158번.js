let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
let ans = [];
const [N, K] = input;
const arr = Array.from({ length: N }, (_, index) => index + 1);
let count = K - 1;
while (arr.length !== 0) {
  if (count >= arr.length) count %= arr.length;
  ans.push(...arr.splice(count, 1));
  count += K - 1;
}
console.log(`<${ans.join(', ')}>`);
