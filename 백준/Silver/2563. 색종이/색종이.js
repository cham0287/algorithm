const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [N, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
input = input.map((a) => a.split(' ').map(Number));
const getFormattedPoints = (input) => {
  let minX, minY, max;
  input.forEach(([x, y]) => {
    if (!minX || x < minX) minX = x;
    if (!minY || y < minY) minY = y;
    if (!max || x > max) max = x;
    if (!max || y > max) max = y;
  });

  const formattedInput = input.map(([x, y]) => [x - minX, y - minY]);

  return [formattedInput, max + 10];
};
const [formattedInput, max] = getFormattedPoints(input);

const plate = Array.from({ length: max }, () =>
  Array.from({ length: max }, () => 0)
);
formattedInput.forEach(([x, y]) => {
  for (let i = x; i < x + 10; i++) {
    for (let j = y; j < y + 10; j++) {
      plate[i][j]++;
    }
  }
});
let count = 0;
plate.forEach((a) =>
  a.forEach((i) => {
    if (i > 0) count++;
  })
);
console.log(count);
