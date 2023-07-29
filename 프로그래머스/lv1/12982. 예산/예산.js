function solution(d, budget) {
    d.sort((a,b)=>a-b)
    console.log(d)
    var answer = 0;
    let sum = 0;
    d.forEach(part=>{
        if(sum+part<=budget) {
            sum +=part;
            answer++;
        }
    })
    return answer;
}