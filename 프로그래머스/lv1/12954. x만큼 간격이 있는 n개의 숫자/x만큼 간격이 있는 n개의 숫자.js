function solution(x, n) {
    var answer = [];
    let number = 0;
    for(let i=0; i<n; i++){
        number+=x;
        answer.push(number)
    }
    return answer;
}