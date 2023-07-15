function solution(n) {
    var answer = 0;
    let start = 1;
    while(start<n){
        let sum = 0;
        let addCount = 0;  
        while(sum<n){
            sum+=start+addCount;
            addCount++;
            if(sum===n) answer++;
        }
        
        start++;
    }
    return answer+1;
}