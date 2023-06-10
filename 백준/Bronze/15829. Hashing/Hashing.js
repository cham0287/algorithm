const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();
const strArr = input.pop().split('');

const formatAlphabet = (alphabet, index) => {
  let r = 31 ** index % 1234567891;
  return ((alphabet.charCodeAt(0) - 96) * r) % 1234567891;
};

let result = 0;
for (let i = 0; i < strArr.length; i++) {
  result += formatAlphabet(strArr[i], i);
}

console.log(result);
