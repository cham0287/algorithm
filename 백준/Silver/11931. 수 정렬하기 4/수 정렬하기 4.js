const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, ...nums] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
console.log(nums.sort((a, b) => b - a).join('\n'));