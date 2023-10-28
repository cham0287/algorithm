function solution(priorities, location) {
    let queue = []
        
    let prioritiesMap = priorities.map((priority,index)=>{
        return {priority, target:location===index}
    })
        
    while(prioritiesMap.length>0){
        let reverse =[]
        
        if(queue.length>0){
            while(queue.at(-1).priority<prioritiesMap[0].priority){
                reverse.push(queue.pop())    
                if(queue.length===0) break;
            }
        }
        
        prioritiesMap = [...prioritiesMap,...reverse.reverse()]
        queue.push(prioritiesMap[0])
        
        prioritiesMap.splice(0,1)
        
    }       
        
    return queue.findIndex(item=>item.target)+1;
}