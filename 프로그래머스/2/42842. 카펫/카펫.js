function solution(brown, yellow) {
    let answer;
    const possibleYellowHeights = findDivisors(yellow).filter(item=>{
        return item===1 || item<=yellow/2
    })
    const possibleYellowSizes = possibleYellowHeights.map(item=>{
        return [yellow/item,item]
     }).filter(([width,height])=>width>=height)
    
    possibleYellowSizes.forEach(([width,height])=>{
        if(((width+2)*2 + height*2)===brown){
            answer = [width+2,height+2]
        }
    })
    return answer;
}

function findDivisors(number) {

    const divisors = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors.push(i);
        }
    }

    return divisors;
}
