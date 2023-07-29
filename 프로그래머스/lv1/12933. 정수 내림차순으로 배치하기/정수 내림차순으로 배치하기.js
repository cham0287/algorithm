function solution(n) {
    return +n.toString().split('').sort((a,b)=>Number(b)-Number(a)).join('');
}