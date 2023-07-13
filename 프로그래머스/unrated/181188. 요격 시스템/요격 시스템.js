function solution(targets) {
    targets.sort((a, b) => b[0] - a[0]);
    let answer = 1;
    let target = targets[0][0]+0.5;

    targets.forEach(([start,end]) => {
          if (end <= target) {
            target = start;
            answer++;
          }
    })

  return answer;
}