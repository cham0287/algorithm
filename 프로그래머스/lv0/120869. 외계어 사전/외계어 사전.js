function solution(spell, dic) {
    var answer = 2;
    dic.forEach(word=>{
        if(canMakeWordChecker(spell,word)) answer=1;
    })
    return answer;
}

function canMakeWordChecker(combArr,word){
    const wordA = combArr.sort((a,b)=>a.localeCompare(b)).join('')
    const wordB = word.split('').sort((a,b)=>a.localeCompare(b)).join('')
    return wordA===wordB;
    
}