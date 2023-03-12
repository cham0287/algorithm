let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const N = input.shift();
const countCoins = (cent) => {
  let answer = [];
  answer.push(Math.floor(cent / 25));
  cent %= 25;
  answer.push(Math.floor(cent / 10));
  cent %= 10;
  answer.push(Math.floor(cent / 5));
  cent %= 5;
  answer.push(cent);
  console.log(answer.join(' '));
};
input.forEach(countCoins);
