let input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n');
const N = +input[0];
const M = +input[2];
let haveCardList = input[1].split(' ');
let targetCardList = input[3].split(' ');

let cardCounts = {};
haveCardList.forEach((card) => {
    if (!cardCounts[card]) {
        cardCounts[card] = 1;
    } else {
        cardCounts[card]++;
    }
});

let answer = targetCardList.map((target) => {
    if (!cardCounts[target]) {
        return 0;
    } else {
        return cardCounts[target];
    }
});
console.log(answer.join(' '));
