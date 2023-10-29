function solution(numbers, target) {
    var answer = 0;
    
    function dfs(num,count){
        if(count === numbers.length){
            if(num===target) answer++;
            return;
        }
        dfs(num+numbers[count],count+1)   
        dfs(num-numbers[count],count+1)    

    }
    dfs(0,0)
    
    return answer;
}

