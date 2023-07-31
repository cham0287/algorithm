function solution(balls, share) {
    if(balls===share) return 1
    else return comb(balls,share);
}

function factorial(n) {
    let result = 1;
    for(let i = 2; i <= n; i++)
        result *= i;
    return result;
}

function comb(n, m) {
    return Math.round(factorial(n) / (factorial(n-m) * factorial(m)));
}
