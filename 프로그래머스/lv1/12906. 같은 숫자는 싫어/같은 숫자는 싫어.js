function solution(arr){
        var answer = [];

    arr.forEach(num=>{
        if(!answer.length) answer.push(num)
        else {
            const topNum = answer.pop();
            if(topNum!==num) {
                answer.push(topNum);
                answer.push(num);
             } else{
                 answer.push(topNum);

             }
        }
    })
    
    return answer;
}