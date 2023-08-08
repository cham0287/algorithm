function solution(progresses, speeds) {
    let days = progresses.map((progress,index)=>{
        return Math.ceil((100-progress)/speeds[index])
    })
    return batchDeployer(days);
}

const batchDeployer = (arr) => {
  let answer = [];
  while (arr.length > 0) {
    let count = 0;
    let head = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] <= head) count++;
      else break;
    }
    answer.push(count);
    arr.splice(0, count); 
  }
  return answer;
};


