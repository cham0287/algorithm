let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);
const [운동목표시간, 최소맥박, 최대맥박, 운동증가맥박, 휴식감소맥박] = input;
let 현재운동시간 = 0;
let 총소요시간 = 0;
let 현재박동수 = 최소맥박;
if (최소맥박 + 운동증가맥박 > 최대맥박) {
  console.log(-1);
} else {
  while (현재운동시간 < 운동목표시간) {
    if (현재박동수 + 운동증가맥박 <= 최대맥박) {
      현재박동수 += 운동증가맥박;
      현재운동시간++;
    } else {
      현재박동수 -= 휴식감소맥박;
      if (현재박동수 < 최소맥박) 현재박동수 = 최소맥박;
    }
    총소요시간++;
  }

  console.log(총소요시간);
}
