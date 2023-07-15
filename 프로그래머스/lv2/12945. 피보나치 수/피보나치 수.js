function solution(n) {
    var fib = [0, 1];
    for (var i = 2; i <= n; i++) {
        fib[i] = (fib[i - 2] + fib[i - 1])%1234567;
    }
    return fib[n];
}
