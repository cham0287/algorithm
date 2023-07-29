function solution(array) {
  const frequencyMap = {};

  for (const num of array) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  let mode = -1;
  let maxFrequency = 0;

  for (const num in frequencyMap) {
    if (frequencyMap[num] > maxFrequency) {
      mode = parseInt(num, 10);
      maxFrequency = frequencyMap[num];
    } else if (frequencyMap[num] === maxFrequency) {
      mode = -1;
    }
  }

  return mode;
}

