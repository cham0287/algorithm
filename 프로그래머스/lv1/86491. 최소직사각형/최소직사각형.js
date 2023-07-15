function solution(sizes) {
    let maxX=0;
    let maxY=0;
    sizes.forEach(size=>{
        const [short,long] = size.sort((a,b)=>a-b)
        if(short>maxX) maxX=short;
        if(long>maxY) maxY=long;
    })
    var answer = maxX*maxY;
    return answer;
}