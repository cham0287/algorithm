const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
const T = input.shift();

const memo = [];

const getRoomPeopleNum = (k, n) => {
  if (k === 0 || n === 1) return n;
  if (!memo[k]) memo[k] = [];
  if (memo[k][n]) return memo[k][n];
  memo[k][n] = getRoomPeopleNum(k - 1, n) + getRoomPeopleNum(k, n - 1);
  return getRoomPeopleNum(k - 1, n) + getRoomPeopleNum(k, n - 1);
};

for (let i = 0; i < T; i++) {
  const k = input[i * 2];
  const n = input[i * 2 + 1];
  console.log(getRoomPeopleNum(k, n));
}