function solution(cacheSize, cities) {
    var answer = 0;
    let cacheArr = [];
    
     if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    cities.forEach((city,index)=>{
        const CITY = city.toUpperCase()
        if(cacheArr.includes(CITY)){
            answer++;
            const newCache = cacheArr.filter(cache=>cache!==CITY)
            newCache.push(CITY);
            cacheArr = newCache;
            
        } else {
            answer +=5;
            if(cacheArr.length===cacheSize){
                cacheArr.shift();    
            }
            cacheArr.push(CITY)
        }
    })
        
    
    
    return answer;
}