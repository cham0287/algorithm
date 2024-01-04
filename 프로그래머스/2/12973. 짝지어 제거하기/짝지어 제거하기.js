function solution(s)
{
    var answer = -1;
    const arr = s.split('')
    const stack = []
    arr.forEach(str=>{
        if(stack.at(-1)===str){
            stack.pop()
        } else {
            stack.push(str)
        }
    })


    return stack.length ? 0 : 1 ;
}