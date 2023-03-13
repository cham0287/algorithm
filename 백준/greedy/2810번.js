let input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n');
const N = Number(input.shift());
let str = input[0];
const people = str.length;
const cupholders = str.replaceAll('LL', 'S').length + 1;
console.log(Math.min(people, cupholders));
