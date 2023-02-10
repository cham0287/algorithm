let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
const [N, M] = input.shift().split(' ').map(Number);
input = input.map((a) => a.split(''));
let ans = [];
for (let x = 0; x <= N - 8; x++) {
  for (let y = 0; y <= M - 8; y++) {
    let count1 = 0;
    let count2 = 0;
    for (let i = x; i < x + 8; i++) {
      for (let j = y; j < y + 8; j++) {
        if ((i + j) % 2 === 0) {
          if (input[i][j] === 'B') count1++;
          else count2++;
        } else {
          if (input[i][j] === 'W') count1++;
          else count2++;
        }
      }
    }
    ans.push(count1);
    ans.push(count2);
  }
}
console.log(ans.sort((a, b) => a - b)[0]);
