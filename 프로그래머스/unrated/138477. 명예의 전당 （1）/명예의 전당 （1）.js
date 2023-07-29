function solution(k, scores) {
    var answer = [];
    const table =[]
    scores.forEach(score=>{
        table.push(score)
        table.sort((a,b)=>b-a)
        if(table.length>k) table.pop()
        answer.push(table.at(-1))
    })
    return answer;
}