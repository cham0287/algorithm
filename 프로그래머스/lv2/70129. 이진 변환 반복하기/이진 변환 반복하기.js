function solution(s) {
  let answer = [0,0];
  let length = 0;

  while (s.length > 1) {
    length = s.length;
    s = s.split("0").join("");
    answer[0]++;
    answer[1] += (length - s.length);
    s = s.length.toString(2);
  }

  return answer;
}