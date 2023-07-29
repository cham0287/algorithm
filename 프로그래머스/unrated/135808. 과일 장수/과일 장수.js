function solution(k, m, score) {
    score = score.sort((a,b)=>b-a)
    const boxArr = splitArrayIntoChunks(score,m)
    var answer = boxArr.reduce((a,b)=>
                               {
        if(b.length===m) return a+b.length*b[b.length-1]
        else return a+0;
    }
                               ,0);
    return answer;
}

function splitArrayIntoChunks(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}