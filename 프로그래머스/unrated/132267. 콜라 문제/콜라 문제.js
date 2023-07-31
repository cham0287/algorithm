function solution(a, b, n) {
    var answer = 0;
    while(n >= a){
        const newCola = Math.floor(n/a)*b;
        n %= a;
        n += newCola;
        answer += newCola
    }
    
    return answer;
}