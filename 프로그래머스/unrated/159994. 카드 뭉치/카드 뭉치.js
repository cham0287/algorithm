function solution(cards1, cards2, goal) {
//     const sequenceMap ={}
//     goal.forEach((word,idx)=>{
//         sequenceMap[word]=idx
//     })
//     const card1seq = cards1.map(card=>sequenceMap[card])
//     const card2seq = cards2.map(card=>sequenceMap[card])
    
//     const card1beforeSort = card1seq.join('')
//     const card1afterSort = card1seq.sort((a,b)=>a-b).join('')
//     const card2beforeSort = card2seq.join('')
//     const card2afterSort = card2seq.sort((a,b)=>a-b).join('')
    
//     const card1fine = card1beforeSort === card1afterSort
//     const card2fine = card2beforeSort === card2afterSort
    let answer = 'Yes'
    goal.forEach(item=>{
        if(cards1[0]===item){
            cards1.shift();
        }
        else if(cards2[0]===item){
            cards2.shift()
        } else {
            answer = 'No'
        }
        
    })
    console.log(cards1)
    console.log(cards2)
    return answer;

    
    // if(card1fine&&card2fine) return "Yes"
    // else return "No"
}