const formatTimeToSecond = (time)=>{
    const [min,sec] = time.split(':').map(Number)
    return min*60 + sec;
}

const moveTime = (action,currentTime,video_len)=>{
    if(action==="next") return Math.min(currentTime + 10, video_len)
    if(action==='prev') return Math.max(currentTime - 10, 0)
    else return currentTime
}

const skipOpenning = (currentTime,op_start,op_end) =>{
    if(currentTime>=op_start && currentTime<=op_end) return op_end
    else return currentTime
}

function solution(video_len, pos, op_start, op_end, commands) {
    const op_start_sec = formatTimeToSecond(op_start)
    const op_end_sec = formatTimeToSecond(op_end)
    const video_len_sec = formatTimeToSecond(video_len)
    let currentTime_sec = formatTimeToSecond(pos)
    
    commands.forEach(command=>{
        const skippedTime1 = skipOpenning(currentTime_sec,op_start_sec,op_end_sec)
        const movedTime = moveTime(command,skippedTime1,video_len_sec)
        const skippedTime2 = skipOpenning(movedTime,op_start_sec,op_end_sec)
        currentTime_sec = skippedTime2
    })
        
    const minute = Math.floor(currentTime_sec/60).toString()
    const minuteFormat = minute.length < 2 ? "0" + minute : minute
    const second = (currentTime_sec%60).toString()
    const secondFormat = second.length <2 ? "0" + second.toString() : second
    
    return `${minuteFormat}:${secondFormat}`;
}


