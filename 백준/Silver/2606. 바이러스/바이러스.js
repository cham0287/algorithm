const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let [nodes, edges, ...inputs] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
inputs = inputs.map((input) => input.split(' ').map(Number));

function arrayToGraph(edges) {
  let graph = {};

  for (let edge of edges) {
    let [node1, node2] = edge;

    if (!graph[node1]) {
      graph[node1] = [];
    }

    if (!graph[node2]) {
      graph[node2] = [];
    }

    graph[node1].push(node2);
    graph[node2].push(node1);
  }

  return graph;
}

function dfs(graph, start) {
  let visited = new Set();
  let stack = [start];
  let result = [];

  while (stack.length > 0) {
    let node = stack.pop();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      if (graph[node]) {
        graph[node].forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }
  }

  return result;
}

console.log(dfs(arrayToGraph(inputs), 1).length - 1);
