function solution(park, routes) {
    var answer = [];
    let start;
    park = park.map((line,y)=>{
        const splitLine = line.split('')
        splitLine.forEach((item,x)=>{
            if(item==='S') start = [y,x];
        })
        return splitLine
    })
        
    routes.forEach(route=>{
        const [direction,count] = route.split(' ');
        
        let [tempY,tempX] = start
        let possible = true
        
        for (let i=0; i<count; i++){
            switch(direction){
                case 'E':
                    tempX++;
                    break;
                case 'W':
                    tempX--;
                    break;
                case 'N':
                    tempY--;
                    break;
                case 'S':
                    tempY++;
                    break;
            }
            if(tempX > park[0].length-1 ||
               tempY > park.length-1 ||
               tempY < 0 ||
               tempX < 0 ||
               park[tempY][tempX]==='X'
              ) {
                possible = false;
                break;
            }

        }
        if (possible){
            start = [tempY,tempX]
        }
        
        
    })
    
    return start;
}