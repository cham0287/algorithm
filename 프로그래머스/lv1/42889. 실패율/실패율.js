function solution(N, stages) {
    let stageStatMap ={}
    for(let i=1; i<N+1; i++){
        stageStatMap[i]={cleared:0,trying:0}
    }
    stages.forEach(stage=>{
        for(let i=1; i<stage; i++){
            stageStatMap[i].cleared++;
        }  
        if(stageStatMap[stage]) stageStatMap[stage].trying++;
    })
    const sortedArr = Object.entries(stageStatMap)
    .map(([index,{cleared,trying}])=>[Number(index),trying/(cleared+trying)])
    .sort((a,b)=>b[1]-a[1])
    
    return sortedArr.map(a=>a[0])
        
}