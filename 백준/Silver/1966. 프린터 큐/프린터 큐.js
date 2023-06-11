const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));
const N = input.shift().pop();
for (let i = 0; i < N; i++) {
  let [n, targetLocation] = input[i * 2];
  let docs = input[i * 2 + 1];
  let count = 1;
  while (docs.length > 0) {
    const max = Math.max(...docs);
    const currentDoc = docs.shift();
    if (currentDoc >= max) {
      if (targetLocation === 0) {
        console.log(count);
        break;
      } else {
        targetLocation -= 1;
      }
      count++;
    } else {
      docs.push(currentDoc);
      if (targetLocation === 0) {
        targetLocation = docs.length - 1;
      } else {
        targetLocation -= 1;
      }
    }
  }
}
