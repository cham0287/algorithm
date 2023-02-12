// let input = require('fs').readFileSync('input.txt').toString().trim();
// input = input.replaceAll('()', 'R').split('');
// let stack = [];
// let count = 0;
// input.forEach((a) => {
//   if (a === 'R') {
//     stack = stack.map((num) => num + 1);
//   } else if (a === '(') {
//     stack.push(1);
//   } else {
//     count += stack.pop();
//   }
// });
// console.log(count);
let input = require('fs').readFileSync('input.txt').toString().trim();
input = input.replaceAll('()', 'R').split('');
let stack = [];
let count = 0;
input.forEach((a) => {
  if (a === 'R') {
    count += stack.length;
  } else if (a === '(') {
    stack.push(a);
    count++;
  } else {
    stack.pop();
  }
});
console.log(count);
// R(((RR)(R)R))(R)
// let input = require('fs').readFileSync('input.txt').toString().trim();
// input = input.replace(/\(\)/g, 'R');

// let count = 0;
// let stack = 0;

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === 'R') {
//     stack++;
//   } else if (input[i] === '(') {
//     stack = 0;
//   } else {
//     count += stack + 1;
//     stack--;
//   }
// }

// console.log(count);
