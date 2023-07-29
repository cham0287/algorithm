function solution(board) {
    board.forEach((row,yIdx)=>{
        row.forEach((place,xIdx)=>{
            if(place===1){
                if(board[yIdx-1]&&board[yIdx-1][xIdx-1]===0) board[yIdx-1][xIdx-1]=2;
                if(board[yIdx-1])  board[yIdx-1][xIdx]=2;
                if(board[yIdx-1]&&board[yIdx-1][xIdx+1]===0)board[yIdx-1][xIdx+1]=2;
                if(board[yIdx][xIdx-1]===0)board[yIdx][xIdx-1]=2;
                if(board[yIdx][xIdx+1]===0)board[yIdx][xIdx+1]=2;
                if(board[yIdx+1]&&board[yIdx+1][xIdx-1]===0) board[yIdx+1][xIdx-1]=2;
                if(board[yIdx+1])board[yIdx+1][xIdx]=2;
                if(board[yIdx+1]&&board[yIdx+1][xIdx+1]===0) board[yIdx+1][xIdx+1]=2;
            }
        })
    })
    var answer = 0;
    console.log(board)
    board.forEach(a=>{
        a.forEach(b=>{
            if(b===0) answer++;
        })
    })
    return answer;
}