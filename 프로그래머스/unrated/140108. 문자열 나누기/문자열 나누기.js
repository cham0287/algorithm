function solution(s) {
    s = s.split('')
    let stack =[]
    let currentStr = ''
    let count = 0;
    let len = 0
    var answer = 0;
    s.forEach(str=>{
        if(!currentStr.length){
            currentStr=str;
            count++;
            len++;
        } else {
            if(str===currentStr){
                count++
                len++;
            } else {
                count--
                len++;
                if(count===0){
                    currentStr=''
                    answer++
                    stack.push(len)
                    len=0;
                }
            }
        }
    })
    if(!stack.length||stack.reduce((a,b)=>a+b)<s.length)    return answer+1;
    else return answer;
}