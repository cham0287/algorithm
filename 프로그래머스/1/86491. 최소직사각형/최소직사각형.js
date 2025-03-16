function solution(sizes) {
    const sorted = sizes.map(size=>size.sort((a,b)=>a-b))
    
    let maxWidth = 0;
    let maxHeight = 0;
        
    sorted.forEach(([w,h])=>{
        if(w>maxWidth) maxWidth = w;
        if(h>maxHeight) maxHeight = h;
    })
    
    return maxWidth * maxHeight;
}