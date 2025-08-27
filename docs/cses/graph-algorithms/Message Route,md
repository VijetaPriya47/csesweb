3. Path reconstruction is fragile – use a parent array
────────────────────────────────────────
Right now you walk backwards by scanning all neighbours and testing
dist[nei] == dist[cur]-1. In very dense graphs that is O(E).
A cleaner and faster way is to remember each vertex’s predecessor while
you run BFS:

```cpp
vector<int> dist(n, INF);
vector<int> parent(n, -1);     // <- add this
dist[v]    = dist[u] + 1;
parent[v]  = u;                // remember where we came from
```
Then rebuild the path in O(length):

```cpp
vector<int> path;
if (dist[n-1] != INF) {
    for (int v = n-1; v != -1; v = parent[v])
        path.push_back(v);
    reverse(path.begin(), path.end());
}
```
