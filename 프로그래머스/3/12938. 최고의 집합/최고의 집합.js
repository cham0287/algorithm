function solution(n, s) {
    var answer = [];
    const val = Math.floor(s/n)
    const remain = s - val*n;
    const arr = Array(n).fill(val)
        
    for (let i=0; i<remain; i++){
        arr[i]++;
    }
        
    return val ? arr.reverse() : [-1];
}