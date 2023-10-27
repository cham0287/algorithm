function solution(clothes) {
    var answer = 0;
    
    const clothesMap = {}
    
    clothes.forEach(([clothe,type])=>{
        if(!clothesMap[type]){
            clothesMap[type] = [clothe]
            return;
        } 
        clothesMap[type].push(clothe)
    })
        
    return Object.values(clothesMap).reduce((a,b)=>{
       return a*(b.length+1)
    },1)-1;
}