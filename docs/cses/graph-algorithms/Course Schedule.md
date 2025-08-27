
## Topological ordering for *Course Schedule*

We have a directed graph of `n` courses and `m` prerequisite edges  
(`a → b` means “take a before b”).  
A valid study plan is exactly a **topological ordering** of the graph;
it exists **iff** the graph is acyclic.

### Kahn’s algorithm (in-degree queue)

1. Build the adjacency list `g` and an in-degree array `deg[]`.
2. Push every course whose in-degree is 0 into a queue.
3. Repeatedly  
   ```
   pop u from queue
   output u
   for each edge u → v
       deg[v]--
       if deg[v] == 0  push v
   ```
4. If we output `n` courses we have an order.  
   Otherwise a cycle exists → print `IMPOSSIBLE`.

*Time* `O(n+m)` *Memory* `O(n+m)` — easily fits the limits.

### Reference code (C++17)

```
#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;                    // courses, prerequisites
    cin >> n >> m;

    vector<vector<int>> g(n);
    vector<int> indeg(n, 0);

    for (int i = 0, a, b; i < m; ++i) {
        cin >> a >> b;           // a before b
        g[a-1].push_back(b-1);
        ++indeg[b-1];
    }

    queue<int> q;
    for (int i = 0; i < n; ++i)
        if (indeg[i] == 0) q.push(i);

    vector<int> order;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        order.push_back(u);
        for (int v : g[u])
            if (--indeg[v] == 0) q.push(v);
    }

    if ((int)order.size() != n) {
        cout << "IMPOSSIBLE\n";
        return 0;
    }

    for (int v : order) cout << v + 1 << ' ';
    cout << '\n';
    return 0;
}
```

Compile with  
`g++ -std=c++17 -O2 -pipe course_schedule.cpp`.


[1](https://www.interviewcake.com/concept/java/topological-sort)
[2](https://www.geeksforgeeks.org/dsa/topological-sorting/)
[3](https://cp-algorithms.com/graph/topological-sort.html)
[4](https://jojozhuang.github.io/algorithm/data-structure-topological-sorting/)
[5](https://en.wikipedia.org/wiki/Topological_sorting)
[6](https://www.geeksforgeeks.org/competitive-programming/cses-solutions-course-schedule/)
[7](https://takeuforward.org/data-structure/topological-sort-algorithm-dfs-g-21/)
[8](https://usaco.guide/problems/cses-1757-course-schedule-ii/solution)
[9](https://www.youtube.com/watch?v=7J3GadLzydI)
[10](https://github.com/TheAnshul756/CSES-Solutions)
