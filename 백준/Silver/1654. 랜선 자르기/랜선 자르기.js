const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [K, N] = input.shift().split(' ').map(Number);
const LANs = input.map(Number).sort((a, b) => a - b);

let left = 1;
let right = LANs[LANs.length - 1];
let result = 0;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let count = 0;

  for (let i = 0; i < LANs.length; i++) {
    count += Math.floor(LANs[i] / mid);
  }

  if (count >= N) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);
