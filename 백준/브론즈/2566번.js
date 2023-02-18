let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));
let max = 0;
let location = [1, 1];
for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < input[0].length; j++) {
    if (input[i][j] > max) {
      max = input[i][j];
      location = [i + 1, j + 1];
    }
  }
}
console.log(max + '\n' + location.join(' '));
