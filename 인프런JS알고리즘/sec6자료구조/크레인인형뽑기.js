let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let [board, moves] = input;
board = JSON.parse(board);
moves = JSON.parse(moves);
let len = board.length;
console.log(board);
console.log(moves);
let stack = [];
let count = 0;
moves.forEach((move) => {
  for (let i = 0; i < len; i++) {
    if (board[i][move - 1] !== 0) {
      if (stack[stack.length - 1] !== board[i][move - 1]) {
        stack.push(board[i][move - 1]);
      } else {
        stack.pop();
        count += 2;
      }
      board[i][move - 1] = 0;
      break;
    }
  }
});
console.log(count);
