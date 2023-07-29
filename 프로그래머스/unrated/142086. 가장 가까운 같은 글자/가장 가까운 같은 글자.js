function solution(s) {
    var answer = [];
    const strMap ={}
    s.split('').forEach((str,index)=>{
        if(strMap[str]!==0&&!strMap[str]) answer.push(-1)
        else answer.push(index-strMap[str])
        strMap[str]=index;

    })
    return answer;
}