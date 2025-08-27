
# Round Trip II — find any directed cycle

### 1.  Key observation  
A cycle in a directed graph appears exactly when a **DFS back-edge** is encountered  
(an edge that points to a vertex currently on the recursion stack).

### 2.  DFS + three–colour marking  

| colour | meaning            |
|-------:|--------------------|
| 0      | white – unvisited  |
| 1      | grey  – in current DFS stack |
| 2      | black – fully processed |

During DFS:

```
parent[v] = u          // tree edge
colour[v]  = 1         // push to recursion stack

for each edge v → w
    if colour[w] == 0          // tree edge
        dfs(w)
    else if colour[w] == 1     // back edge ⇒ cycle!
        cycle_start = w
        cycle_end   = v
        stop search            // we already found a cycle

colour[v] = 2         // pop from stack
```

### 3.  Reconstructing the cycle  
After the first back-edge we know one vertex (`cycle_start`) that lies
on the cycle and the current vertex (`cycle_end`).  
Follow `parent[]` from `cycle_end` until we return to `cycle_start`:

```
vector<int> cycle;
cycle.push_back(cycle_start);
for (int v = cycle_end; v != cycle_start; v = parent[v])
    cycle.push_back(v);
cycle.push_back(cycle_start);          // close the loop
reverse(cycle.begin(), cycle.end());   // correct order
```

### 4.  Full algorithm
```
for all vertices v
    colour[v] = 0 , parent[v] = -1

for v = 1 .. n
    if colour[v] == 0 and dfs(v) found cycle
        output cycle and exit

print "IMPOSSIBLE"
```

### 5.  Complexity  
*Time*  `O(n + m)` – every edge is examined once.  
*Memory* `O(n + m)` – adjacency list, colour[], parent[].

### 6.  Reference implementation (C++17)

```
#include <bits/stdc++.h>
using namespace std;

const int WHITE = 0, GREY = 1, BLACK = 2;

int n, m;
vector<vector<int>> g;
vector<int> colour, parent;
int start = -1, fin = -1;              // vertices of first back edge

bool dfs(int u) {
    colour[u] = GREY;
    for (int v : g[u]) {
        if (colour[v] == WHITE) {
            parent[v] = u;
            if (dfs(v)) return true;
        } else if (colour[v] == GREY) {        // back edge
            start = v; fin = u;
            return true;
        }
    }
    colour[u] = BLACK;
    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    cin >> n >> m;
    g.assign(n, {});
    for (int i = 0, a, b; i < m; ++i) {
        cin >> a >> b;
        g[a-1].push_back(b-1);
    }

    colour.assign(n, WHITE);
    parent.assign(n, -1);

    for (int v = 0; v < n && start == -1; ++v)
        if (colour[v] == WHITE && dfs(v))
            break;

    if (start == -1) {
        cout << "IMPOSSIBLE\n";
        return 0;
    }

    vector<int> cyc = {start};
    for (int v = fin; v != start; v = parent[v])
        cyc.push_back(v);
    cyc.push_back(start);
    reverse(cyc.begin(), cyc.end());

    cout << cyc.size() << '\n';
    for (int v : cyc) cout << v+1 << ' ';
    cout << '\n';
    return 0;
}
```

Compile with  
`g++ -std=c++17 -O2 -pipe round_trip2.cpp`.

[1](https://www.youtube.com/watch?v=GQX_RYftClg)
[2](https://cses.fi/problemset/task/1678)
[3](https://www.youtube.com/watch?v=nyPnYN0X3-Y)
[4](https://www.geeksforgeeks.org/competitive-programming/cses-problem-set-solutions/)
[5](https://www.simshadows.com/c/programming-challenges/cses/graph-algorithms/)
[6](https://www.youtube.com/watch?v=kzeAHV2Pw2o)
[7](https://cses.fi/problemset/task/1669)
[8](https://vjudge.net/problem/CSES-1678)
