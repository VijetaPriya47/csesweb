
## Detecting & printing a negative cycle with Bellman–Ford

### Why Bellman–Ford works  
* After |V| − 1 full relaxations every simple shortest path is fixed.  
* If a **|V|-th** relaxation still improves some vertex `v`, the edge that did the improvement lies on – or can reach – a **negative-weight cycle**.  
* Walking `parent[]` |V| times from that vertex guarantees we land **inside** the cycle, because a simple path can visit at most |V| − 1 distinct vertices.

---

### Algorithm  
1. `dist[i] ← 0`, `parent[i] ← −1`  for every vertex `i`.  
   (Any initial distances work; 0 is convenient.)

2. **Relax edges |V| times.**  
   ```
   x = -1                           // last vertex updated this round
   repeat |V| times:
       x = -1
       for each edge (u → v, w):
           if dist[u] + w < dist[v]:
               dist[v]   = dist[u] + w
               parent[v] = u
               x = v                // remember improvement
   ```
3. If after the last round `x == -1`  ⇒ no improvement ⇒ **NO** negative cycle.

4. Otherwise a cycle exists.  
   ```
   for i = 1 .. |V|        // jump inside the cycle
       x = parent[x]

   cycle = []
   cur = x
   do:
       cycle.push_back(cur)
       cur = parent[cur]
   while cur != x
   reverse(cycle.begin(), cycle.end())    // correct order
   ```
5. Output  
   ```
   YES
   cycle cycle … cycle[k-1]
   ```

---

### Complexity  
* Time  O(|V| · |E|)  (≤ 2 500 × 5 000 ≈ 12.5 M – fine for 1 s)  
* Memory O(|V| + |E|)  (dist, parent, edge list)

---

### Reference implementation (C++17)

```
#include <bits/stdc++.h>
using namespace std;
using ll = long long;
const ll INF = (1LL<<62);

struct Edge {
    int u, v;
    ll  w;
};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m;
    if (!(cin >> n >> m)) return 0;

    vector<Edge> e(m);
    for (auto &ed : e) cin >> ed.u >> ed.v >> ed.w, --ed.u, --ed.v;

    vector<ll> dist(n, 0);          // any value works
    vector<int> parent(n, -1);
    int x = -1;                     // last relaxed vertex

    for (int i = 0; i < n; ++i) {
        x = -1;
        for (auto [u,v,w] : e)
            if (dist[u] + w < dist[v]) {
                dist[v]   = dist[u] + w;
                parent[v] = u;
                x = v;
            }
    }

    if (x == -1) {
        cout << "NO\n";
        return 0;                   // no negative cycle
    }

    // jump inside the cycle
    for (int i = 0; i < n; ++i) x = parent[x];

    // collect the cycle
    vector<int> cyc;
    for (int cur = x;; cur = parent[cur]) {
        cyc.push_back(cur);
        if (cur == x && cyc.size() > 1) break;
    }
    reverse(cyc.begin(), cyc.end());

    cout << "YES\n";
    for (int v : cyc) cout << v + 1 << ' ';
    cout << '\n';
}
```

*Compile with* `g++ -std=c++17 -O2 -pipe -s cycle.cpp`.

[1](https://www.w3schools.com/dsa/dsa_algo_graphs_bellmanford.php)
[2](https://www.geeksforgeeks.org/dsa/bellman-ford-algorithm-dp-23/)
[3](https://www.programiz.com/dsa/bellman-ford-algorithm)
[4](https://www.geeksforgeeks.org/dsa/bellman-ford-algorithm-in-python/)
[5](https://takeuforward.org/data-structure/bellman-ford-algorithm-g-41/)
[6](https://www.boost.org/libs/graph/doc/bellman_ford_shortest.html)
[7](https://www.youtube.com/watch?v=obWXjtg0L64)
[8](https://cp-algorithms.com/graph/bellman_ford.html)
[9](https://stackoverflow.com/questions/16048159/implementing-bellman-ford-algorithm-c)
[10](https://heycoach.in/blog/bellman-ford-algorithm-and-practical-implementation/)
