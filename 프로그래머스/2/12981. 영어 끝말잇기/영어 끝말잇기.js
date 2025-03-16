function solution(n, words) {
    var answer = [];
    
    const memo =[]

    words.forEach((word,index)=>{
        const order = (index+1) % n || n;
        const count = Math.floor(index/n)+1
        
        if(memo.includes(word)){
            answer.push([order,count])
            return;
        } 
        
        if(index===0){
            memo.push(word)    
            return;
        }    
        
        if(memo.at(-1).split('').at(-1)!==word.split('')[0]){
            answer.push([order,count])
            return;
        }
        
        memo.push(word)
        
    })
    
    answer.push([0,0])
    
    return answer[0];
}

// 1 1 
// 2 1 
// 3 1

// 1 2
// 2 2
// 3 2

// 1 3
// 2 3
// 3 3