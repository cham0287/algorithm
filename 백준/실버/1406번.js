let input = require('fs')
  .readFileSync('input.txt')
  .toString()
  .trim()
  .split('\n');
let lStack = input.shift().split('');
let num = Number(input.shift());
let rStack = [];
input.forEach((order) => {
  if (order === 'L' && lStack.length) {
    console.log(lStack);
    rStack.push(lStack.pop());
  } else if (order === 'D' && rStack.length) {
    lStack.push(rStack.pop());
  } else if (order === 'B') {
    lStack.pop();
  } else if (order[0] === 'P') {
    lStack.push(order.split(' ')[1]);
  }
});
console.log([...lStack, ...rStack.reverse()].join(''));
/**
  pop 메소드는 시간복잡도가 O(1)인데 반해, shift 메소드는 배열 맨 앞 요소를 빼야 하기 때문에 시간복잡도가 O(n)이다.
  그래서 shift를 사용하지 않고 pop만 사용하기 위해 커서 좌측 스택, 우측 스택으로 스택을 둘로 나누는게 핵심
*/
