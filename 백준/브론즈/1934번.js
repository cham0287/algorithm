let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
let [num, ...inputs] = input;
inputs = inputs.map((a) => a.split(' ').map(Number));
let answer = [];
function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
inputs.forEach((pair) => {
  let [a, b] = pair;
  answer.push(lcm(a, b));
});
console.log(answer.join('\n'));
