---
id: intro
title: Graph Algorithms
sidebar_label: Introduction
---

# Graph Algorithms

Graph algorithms are fundamental to competitive programming and computer science. They help solve problems involving relationships between objects, networks, and complex data structures.

## 🎯 What are Graphs?

A graph is a data structure consisting of:
- **Vertices (Nodes)**: Points in the graph
- **Edges**: Connections between vertices
- **Directed/Undirected**: Edges may have direction or be bidirectional
- **Weighted/Unweighted**: Edges may have associated weights

## 📚 Graph Representations

### 1. Adjacency Matrix
```cpp
int graph[n][n];
// graph[i][j] = weight of edge from i to j (0 if no edge)
```

### 2. Adjacency List
```cpp
vector<vector<int>> graph(n);
// graph[i] = list of neighbors of vertex i
```

### 3. Edge List
```cpp
vector<pair<int, int>> edges;
// List of all edges (u, v)
```

## 🚀 Essential Graph Algorithms

### 1. Graph Traversal

#### Depth-First Search (DFS)
```cpp
vector<bool> visited(n, false);

void dfs(int v) {
    visited[v] = true;
    for(int u : graph[v]) {
        if(!visited[u]) {
            dfs(u);
        }
    }
}
```

#### Breadth-First Search (BFS)
```cpp
vector<bool> visited(n, false);
queue<int> q;

void bfs(int start) {
    q.push(start);
    visited[start] = true;
    
    while(!q.empty()) {
        int v = q.front();
        q.pop();
        
        for(int u : graph[v]) {
            if(!visited[u]) {
                visited[u] = true;
                q.push(u);
            }
        }
    }
}
```

### 2. Shortest Path Algorithms

#### Dijkstra's Algorithm
```cpp
// For weighted graphs with non-negative weights
priority_queue<pair<int, int>> pq;
vector<int> dist(n, INF);
```

#### Bellman-Ford Algorithm
```cpp
// For graphs with negative weights (no negative cycles)
vector<int> dist(n, INF);
dist[source] = 0;
```

### 3. Minimum Spanning Tree

#### Kruskal's Algorithm
```cpp
// Sort edges by weight, use Union-Find
sort(edges.begin(), edges.end());
```

#### Prim's Algorithm
```cpp
// Start with one vertex, add minimum weight edges
priority_queue<pair<int, int>> pq;
```

### 4. Strongly Connected Components (SCC)
```cpp
// Kosaraju's Algorithm or Tarjan's Algorithm
vector<vector<int>> scc;
```

## 📝 Problem List

### Basic Graph Problems
- [Counting Rooms](/docs/cses/graph-algorithms/counting-rooms)
- [Labyrinth](/docs/cses/graph-algorithms/labyrinth)
- [Building Roads](/docs/cses/graph-algorithms/building-roads)

### Shortest Path
- [Shortest Routes I](/docs/cses/graph-algorithms/shortest-routes-i)
- [Shortest Routes II](/docs/cses/graph-algorithms/shortest-routes-ii)

### Tree Problems
- [Tree Diameter](/docs/cses/graph-algorithms/tree-diameter)
- [Tree Distances I](/docs/cses/graph-algorithms/tree-distances-i)
- [Tree Distances II](/docs/cses/graph-algorithms/tree-distances-ii)

### Advanced Graph Problems
- [Strongly Connected Components](/docs/cses/graph-algorithms/strongly-connected-components)
- [Cycle Detection](/docs/cses/graph-algorithms/cycle-detection)

## 💡 Tips for Graph Problems

1. **Choose the Right Representation**: Adjacency list for sparse graphs, matrix for dense graphs
2. **Consider Edge Cases**: Disconnected components, cycles, self-loops
3. **Optimize Traversal**: Use appropriate data structures (queue for BFS, stack for DFS)
4. **Handle Multiple Components**: Check for connectivity
5. **Memory Management**: Be careful with large graphs

## 🔗 Related Resources

- [Graph Theory Tutorial](https://cp-algorithms.com/graph/graph_representation.html)
- [Graph Problems on Codeforces](https://codeforces.com/problemset?tags=graphs)
- [Graph Visualization](https://visualgo.net/en/graphds)

---

*Master graph algorithms and solve complex network problems efficiently! 🌐*
