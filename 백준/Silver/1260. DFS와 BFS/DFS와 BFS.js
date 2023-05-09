let input = require('fs')
  .readFileSync(0)
  .toString()
  .trim()
  .split('\n')
  .map((a) => a.split(' ').map(Number));
const [N, M, V] = input.shift();

const graph = [...Array(N + 1)].map(() => []);
input.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

const dfs = (start) => {
  const stack = [start];
  const visited = Array(N + 1).fill(false);
  const order = [];
  while (stack.length) {
    const node = stack.pop();
    if (!visited[node]) {
      visited[node] = true;
      order.push(node);
      stack.push(...graph[node]);
    }
  }
  return order.join(' ');
};

const bfs = (start) => {
  const queue = [start];
  const visited = Array(N + 1).fill(false);
  const order = [];
  while (queue.length) {
    const node = queue.shift();
    if (!visited[node]) {
      visited[node] = true;
      order.push(node);
      queue.push(...graph[node]);
    }
  }
  return order.join(' ');
};

graph.forEach((v) => v.sort((a, b) => b - a));
console.log(dfs(V));

graph.forEach((v) => v.sort((a, b) => a - b));
console.log(bfs(V));
