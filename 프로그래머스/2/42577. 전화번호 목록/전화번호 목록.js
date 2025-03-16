function solution(phone_book) {
    let answer = true;
    const sorted = phone_book.sort()
    
    for (let i=0; i<sorted.length-1; i++){
        if (sorted[i+1].startsWith(sorted[i])) {
            return false;
        }
    }
    
    return answer;
}