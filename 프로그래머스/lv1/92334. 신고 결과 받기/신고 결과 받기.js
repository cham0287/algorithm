function solution(id_list, report, k) {
    const reportMap ={}
    id_list.forEach(id=>{
        reportMap[id] = new Set()
    })
    report.forEach(report=>{
        const [reporter,target] = report.split(' ');
        reportMap[reporter].add(target)
        
    })
    let bannedIdMap={}
    Object.values(reportMap).forEach(item=>{
        item.forEach(reportedId=>{
            if(!bannedIdMap[reportedId]) bannedIdMap[reportedId] = 1;
            else bannedIdMap[reportedId]++; 
        })
   
    })
    const bannedList = []
    for(reportedId in bannedIdMap){
        if(bannedIdMap[reportedId]>=k) bannedList.push(reportedId)
    }
    var answer = [];

    for(reporter in reportMap){
        let count = 0;
        reportMap[reporter].forEach(target=>{
            if(bannedList.includes(target)) count++;
        })
        answer.push(count)
    }
    return answer;
}