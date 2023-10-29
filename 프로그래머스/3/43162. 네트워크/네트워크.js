function solution(n, computers) {
  let answer = 0;
  const length = computers.length;
  const visited = [];

  function dfs(index) {
      if(!visited.includes(index)) visited.push(index);
      computers[index].forEach((com,idx)=>{
          if(computers[index][idx]&&!visited.includes(idx)) dfs(idx)
      })
  }

  for (let i = 0; i < length; i++) {
      if(!visited.includes(i)) {
          answer++;
          dfs(i);
      }
  }
    

  return answer;
}