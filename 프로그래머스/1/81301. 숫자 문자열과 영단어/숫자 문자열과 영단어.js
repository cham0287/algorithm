function solution(s) {
    const wordTable= ['zero','one','two','three','four','five','six','seven','eight','nine']
    
    wordTable.forEach((word,index)=>{
        s = s.replaceAll(word,index)
    })  
    
    var answer = 0;
    return Number(s);
}