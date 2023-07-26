function solution(players, callings) {
    const playerMap = {};
  
    for (let i = 0; i < players.length; i++) {
        playerMap[players[i]] = i;
    }

    callings.forEach(calledPlayer=>{
        const 제친선수이름 = calledPlayer;
        const 제친선수기존등수 = playerMap[calledPlayer];
        const 제쳐진선수이름 = players[제친선수기존등수-1];
        const 제쳐진선수기존등수 = playerMap[제쳐진선수이름];
                
        players[제쳐진선수기존등수] = 제친선수이름;
        players[제친선수기존등수] = 제쳐진선수이름;
        playerMap[제친선수이름] = 제쳐진선수기존등수;
        playerMap[제쳐진선수이름] = 제친선수기존등수;


    })
    
    return players;
}