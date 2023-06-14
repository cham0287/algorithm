const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [[N, M, B], ...field] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));

let lowest;

let [min, max] = [Infinity, -Infinity];

for (let rowIndex = 0; rowIndex < N; rowIndex++) {
  for (let columnIndex = 0; columnIndex < M; columnIndex++) {
    const height = field[rowIndex][columnIndex];
    min = Math.min(min, height);
    max = Math.max(max, height);
  }
}

for (let i = min; i <= max; i++) {
  let [dig, put] = [0, 0];

  for (let rowIndex = 0; rowIndex < N; rowIndex++) {
    for (let columnIndex = 0; columnIndex < M; columnIndex++) {
      const result = i - field[rowIndex][columnIndex];
      if (result < 0) {
        dig += result * -1; // 음수인 경우 -1을 곱한 값을 dig에 누적시킴
      } else {
        put += result; // 양수인 경우 그대로 값을 put에 누적시킴
      }
    }
  }
  if (B + dig < put) continue;
  const cost = dig * 2 + put;
  const height = i;
  if (!lowest) lowest = [cost, height];
  else {
    if (lowest[0] > cost) {
      lowest = [cost, height];
    }
    if (lowest[0] === cost) {
      lowest[1] = Math.max(lowest[1], height);
    }
  }
}

console.log(lowest[0], lowest[1]);
