function solution(keymap, targets) {
    var answer = [];

    targets.forEach(word=>{
        let count = 0;
        let idxs = []
        for(str of word){
            let idx =[]
            keymap.forEach(key=>idx.push(key.indexOf(str)))
            idx = idx.filter(num=>num>-1)
            if(!idx.length) idxs.push(-1)
            else idxs.push(Math.min(...idx)+1)
        }
        const isImpossible = idxs.includes(-1)
        if(isImpossible) answer.push(-1)
        else answer.push(idxs.reduce((a,b)=>a+b,0))
        
    })
    
    
    return answer;
}