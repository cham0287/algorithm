
const isChangeable = (curWord,targetWord)=>{
    const len = curWord.length;
    let unMatchCount = 0;
    
    for (let i=0; i<len; i++){
        if(curWord[i]!==targetWord[i]){
            unMatchCount++;
        }
    }
    
    if(unMatchCount===1) return true;
    else return false;
}

function solution(begin, target, words) {
        
    const visited = words.map(()=>false)
    const queue =[]
    
    queue.push([begin,0])
    
    while(queue.length){
        let [curWord,move] = queue.shift()
        
        if(curWord===target){
            return move;
        } 
        
        words.forEach((word,index)=>{

            // 단어 목록 중에 미방문이면서 변환 가능할 때 방문해야함
            if(isChangeable(curWord,word) && !visited[index]){
                visited[index] = true;
                queue.push([word,move+1])
            }
        })
        
    }
    
    return 0;
        
}
