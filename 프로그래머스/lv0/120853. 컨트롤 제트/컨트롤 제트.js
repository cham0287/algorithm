function solution(s) {
    let stack =[];
    s.split(' ').forEach(order=>{
        if(order!=='Z') stack.push(Number(order));
        else stack.pop()
    });
    var answer = 0;
        stack.forEach(num=>{answer+=num;})
    return answer;
    // console.log(stack.reduce((a,b)=>a+b))
    // return stack.reduce((a,b)=>a+b);
}