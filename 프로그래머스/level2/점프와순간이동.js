function solution(n) {
  let count = 0;
  while (n > 0) {
    if (n % 2 == 0) {
      while (n % 2 == 0) {
        n /= 2;
      }
    } else {
      while (n % 2 !== 0) {
        n--;
        count++;
      }
    }
  }
  return count;
}
