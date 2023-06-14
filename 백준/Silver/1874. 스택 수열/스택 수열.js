const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [n, ...sequence] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

function checkStackSequence(n, sequence) {
  const stack = [];
  let result = [];
  let current = 1;
  let sequenceIndex = 0;

  while (sequenceIndex < n) {
    const target = sequence[sequenceIndex];

    if (current <= target) {
      while (current <= target) {
        stack.push(current);
        result.push('+');
        current++;
      }
    }

    if (stack[stack.length - 1] === target) {
      stack.pop();
      result.push('-');
    } else {
      console.log('NO');
      return;
    }

    sequenceIndex++;
  }

  console.log(result.join('\n'));
}

checkStackSequence(n, sequence);
