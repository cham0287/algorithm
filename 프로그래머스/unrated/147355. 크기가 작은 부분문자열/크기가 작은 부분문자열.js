function solution(t, p) {
    
    const len = p.length;
    var answer = 0;

    for(let i=0; i<t.length-len+1; i++){
        if(Number(t.slice(i,i+len))<=Number(p)) answer++;
    }
    return answer;
}