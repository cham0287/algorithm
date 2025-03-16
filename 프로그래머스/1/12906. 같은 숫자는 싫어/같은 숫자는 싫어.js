function solution(arr)
{
    const temp = []
    var answer = [];
    
    for (let i=0; i<arr.length; i++){
        const curVal = arr[i]
        if(i===0){
            temp.push(curVal)
        } else {
            const prevVal = temp.pop()
            if(prevVal===curVal){
                temp.push(curVal)
            } else {
                answer.push(prevVal)
                temp.push(curVal)
            }
            
        }
    }
    
    
    if(answer.at(-1)!==temp[0]){
        answer.push(temp[0])
    }

    
    return answer;
}