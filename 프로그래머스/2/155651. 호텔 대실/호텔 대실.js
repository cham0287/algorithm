function solution(book_time) {
    
    const book_time_min = book_time.map(time => {
        return time.map(transformTimeToMin)
    }).sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1]
        return a[0] - b[0]
    })
    
    let rooms = [];
    
    for(let i = 0; i < book_time_min.length; i++) {
        const [start, end] = book_time_min[i];
        
        let roomFound = false;
        
        for(let j = 0; j < rooms.length; j++) {
            if(rooms[j] + 10 <= start) {
                rooms[j] = end;
                roomFound = true;
                break;
            }
        }
        
        if(!roomFound) {
            rooms.push(end);
        }
    }
    
    return rooms.length;
}

const transformTimeToMin = (time) => {
    const [hour, min] = time.split(':')
    
    return Number(hour) * 60 + Number(min) 
}
