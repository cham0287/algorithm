let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));
const [[n, m], ...tests] = input;
let ans = [];
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (i === j) break;
    let count = 0;
    tests.forEach((test) => {
      const mentorGrade = test.findIndex((a) => a === i);
      const menteeGrade = test.findIndex((a) => a === j);
      if (mentorGrade >= menteeGrade) count++;
    });
    if (count == 0) ans.push([i, j]);
  }
}
console.log(ans);
