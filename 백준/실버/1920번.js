let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let [N, A, M, B] = input;
N = Number(N);
M = Number(M);
A = A.split(' ')
  .map(Number)
  .sort((a, b) => a - b);
B = B.split(' ').map(Number);

function binarySearch(arr, x) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === x) return true;
    else if (arr[mid] < x) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

let answer = [];
B.forEach((a) => {
  answer.push(binarySearch(A, a) ? 1 : 0);
});
console.log(answer.join('\n'));
