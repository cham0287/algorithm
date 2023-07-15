function solution(s) {
    const a = s.split(' ').sort((a,b)=>(a-b))
    var answer = `${a[0]} ${a.at(-1)}`;
    return answer;
}