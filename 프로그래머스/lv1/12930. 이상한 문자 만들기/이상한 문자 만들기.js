function solution(s) {
    var answer = s.split(' ').map(a=>wordFormatter(a)).join(' ');
    return answer;
}

const wordFormatter= (str)=>{
    let result = ''
    str.split('').forEach((s,index)=>{
        if(index%2===0) result +=s.toUpperCase()
        else result+=s.toLowerCase();
    })
    return result;
}