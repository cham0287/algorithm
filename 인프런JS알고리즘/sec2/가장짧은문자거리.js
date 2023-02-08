let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split(' ');
let [str, char] = input;
str = str.split('');
const ans = [];
str.forEach((text, index) => {
  let distances = [];
  str.forEach((t, i) => {
    if (t === char) {
      let distance = index - i;
      distance < 0 ? distances.push(distance * -1) : distances.push(distance);
    }
  });
  distances.sort((a, b) => a - b);
  ans.push(distances[0]);
});
console.log(ans.join(' '));
