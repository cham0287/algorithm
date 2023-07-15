function solution(s) {
    let str = s.split(' ').map(letter=>{
        const a = letter.toLowerCase()
        let firstChar = a.charAt(0);
        let others = a.slice(1);
        return firstChar.toUpperCase() + others;
    })
    var answer = str.join(' ');
    return answer;
}