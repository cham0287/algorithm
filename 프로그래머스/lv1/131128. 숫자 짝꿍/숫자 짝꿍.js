function solution(X, Y) {
    let answer = '';
    X = X.split('')
    Y = Y.split('')
    const commonMap = {}

    X.sort((a,b)=>b-a)

    Y.forEach((y)=>{
        if(!commonMap[y])commonMap[y] = 1
        else commonMap[y]++
    })

    X.forEach(x=>{
        if(commonMap[x] && commonMap[x] ){
            commonMap[x]--
            answer = answer.concat(x)
        }
    })

    if(answer.length === 0) return "-1"
    if(answer[0] === "0") return "0"
    return answer
}