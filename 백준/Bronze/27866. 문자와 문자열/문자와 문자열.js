const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [string, index] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
console.log(string[index - 1]);