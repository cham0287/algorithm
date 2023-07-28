function solution(participant, completion) {
    const playerMap ={}
    participant.forEach((player)=>{
        if(playerMap[player]){
            playerMap[player]++;
        } else {
        playerMap[player]=1;
        }
    })
    completion.forEach((player)=>{
        playerMap[player]--;
    })
        var answer = '';

    for(player in playerMap){
        if(playerMap[player]>0){
            answer+=player;
        }
    }
    return answer;
}