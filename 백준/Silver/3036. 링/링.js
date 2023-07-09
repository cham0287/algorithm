const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [n, radiuses] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
radiuses = radiuses.split(' ').map(Number);

function findGCD(a, b) {
  const min = Math.min(a, b);
  let gcd = 1;
  for (let i = 1; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
    }
  }
  return gcd;
}

for (let i = 1; i < n; i++) {
  let roll = radiuses[i];
  let firstRoll = radiuses[0];
  const gcd = findGCD(roll, firstRoll);
  console.log(firstRoll / gcd + '/' + roll / gcd);
}
