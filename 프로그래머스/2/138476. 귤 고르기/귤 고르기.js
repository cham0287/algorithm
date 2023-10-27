function solution(k, tangerine) {
    var answer = 0;
    
    const tangerineSizeMap = {}
    
    const sizes =[]
    
    tangerine.forEach((size,index)=>{
        if(!tangerineSizeMap[size]) {
            tangerineSizeMap[size] = 1;
        } else {
            tangerineSizeMap[size]++
        }
    })
    
    Object.values(tangerineSizeMap).forEach(size=>{
        sizes.push(size)
    })
    
    sizes.sort((a,b)=>b-a)
    
    console.log(sizes)
    
    let count = 0;
    
    for (let i=0; i<sizes.length; i++){
        if(count<k) {
            count +=sizes[i]
            answer++;
        }   
        else break;
    }
        
    return answer;
}