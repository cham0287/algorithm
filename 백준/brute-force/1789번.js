let input = Number(require('fs').readFileSync('./input.txt').toString().trim());
let num = 0;
let sum = 0;
while (sum <= input) {
  num++;
  sum += num;
}
console.log(num - 1);
