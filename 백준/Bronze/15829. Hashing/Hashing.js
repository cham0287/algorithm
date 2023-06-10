const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const strArr = input.pop().split('');

const formatAlphabet = (alphabet, index) => {
  return (alphabet.charCodeAt(0) - 96) * 31 ** index%1234567891;
};
const result = strArr.reduce(
  (sum, alphabet, index) => sum + formatAlphabet(alphabet, index),
  0
);

console.log(result);
