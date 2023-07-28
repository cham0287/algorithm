function solution(n, lost, reserve) {
    lost.sort((a,b)=>a-b);
    reserve.sort((a,b)=>a-b);
    
    lost.forEach((lostStudent)=>{
        if(reserve.includes(lostStudent)){
            const lostIdex = lost.indexOf(lostStudent)
            lost.splice(lostIdex,1);
            const idx = reserve.indexOf(lostStudent);
            reserve.splice(idx,1)
        }
    })
    
    const initialLost = [...lost];
    initialLost.forEach((lostStudent)=>{
        if(reserve.includes(lostStudent)){
            const lostIdex = lost.indexOf(lostStudent)
            lost.splice(lostIdex,1);
            const idx = reserve.indexOf(lostStudent);
            reserve.splice(idx,1)
        }
        else if(reserve.includes(lostStudent-1)){
            const lostIdex = lost.indexOf(lostStudent-1)
            lost.splice(lostIdex,1);
            const idx = reserve.indexOf(lostStudent-1);
            reserve.splice(idx,1)
        }
        else if(reserve.includes(lostStudent+1)){
    const lostIdex = lost.indexOf(lostStudent+1)
            lost.splice(lostIdex,1);            
            const idx = reserve.indexOf(lostStudent+1);
            reserve.splice(idx,1)
        }
    })
    console.log(lost,reserve)
    return n-lost.length;
}