let input = require('fs').readFileSync('input.txt').toString().trim();
input = Number(input);
let count = 0;
while (input > 2 ** count) {
  count++;
}
let gap = 2 ** count - input;
console.log(2 ** count - gap * 2);
// 1 1
// 2 2

// 3 2
// 4 -> 4

// 5 -> 2
// 6 -> 4
// 7 - 6
// 8 -> 8

// 9 2
// 10 4
// 11 6
// 12 8
// 13 10
// 14 12
// 15 14
// 16 -> 16
