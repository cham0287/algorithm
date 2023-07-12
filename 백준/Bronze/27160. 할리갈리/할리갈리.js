const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [num, ...inputs] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
inputs = inputs.map((input) => input.split(' '));
const floor = {};
let answer = 'NO';
inputs.forEach(([item, number]) => {
  if (!floor[item]) floor[item] = Number(number);
  else floor[item] += Number(number);
});
Object.values(floor).forEach((count) => {
  if (count === 5) answer = 'YES';
});
console.log(answer);
