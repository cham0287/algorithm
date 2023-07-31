function solution(n) {
    let arr = Array(n+1).fill(true);
    arr[0] = arr[1] = false; 
    for(let i=2; i*i<=n; i++){
        if(arr[i]) {
            for(let j=i*i; j<=n; j+=i){
                arr[j] = false;
            }
        }
    }
    let answer = 0;
    for(let i=1; i<n+1; i++){
        if(arr[i]) answer++
    }
    return answer;
}
