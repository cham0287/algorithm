let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));
let [[num, budget], ...students] = input;
let maximum = 0;
for (let i = 0; i < num; i++) {
  let remain = budget;
  let count = 0;
  let testArr = students
    .map((a, index) => {
      if (index === i) return a[0] / 2 + a[1];
      return a[0] + a[1];
    })
    .sort((a, b) => a - b);
  testArr.forEach((val) => {
    if (remain > 0) {
      remain -= val;
      count++;
    }
  });
  if (count >= maximum) maximum = count;
}
console.log(maximum);
