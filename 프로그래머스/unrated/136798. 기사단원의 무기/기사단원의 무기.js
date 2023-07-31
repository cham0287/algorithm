function solution(number, limit, power) {
    let stats =[]
    for(let i=1; i<number+1; i++){
        stats.push(countDivisors(i))
    }
    stats = stats.map(stat=>{
        return stat>limit ? power : stat
    })
    return stats.reduce((a,b)=>a+b);
}

function countDivisors(n) {
    let count = 0;
    for(let i = 1; i * i <= n; i++) {
        if(n % i === 0) {
            if (n / i === i) count++;
            else count += 2;
        }
    }
    return count;
}

