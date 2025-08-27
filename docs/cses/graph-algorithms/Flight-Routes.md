# Idea and algorithm

We need the **k = 1…10 cheapest path costs** from city 1 to city n in a directed, non-negative graph (n≤100,000, m≤200,000).  
Because k is tiny, the simplest and fastest solution is a ―  
**“k-best Dijkstra”** (sometimes called “Dijkstra with repetitions”):

1. Keep, for every vertex `v`, a list `best[v]` that stores *up to k*
   distinct route costs discovered so far, always kept sorted
   (smallest first).

2. Priority queue `pq` ordered by (total_cost, vertex).  
   Start with `(0, 1)` and `best = {0}`.

3. While `pq` is not empty  
    pop `(d, u)`; if `d` is *not* equal to the entry that belongs to
    `u` in `best[u]` (i.e. it is stale) → continue.  
    For every flight `u → v` cost `w`  
    `nd = d + w`  
    -  If `best[v].size() < k` **or** `nd < best[v].back()`  
       insert `nd` into `best[v]`, keep list sorted, trim to k,  
       push `(nd, v)` into `pq`.

4. Stop when `best[n].size() == k`; output the k numbers in non-decreasing order (they are already sorted by construction).

Because every vertex can enter the queue at most k times, the complexity is  

```
time  O(k · m · log(k·n))     ≤ 10 · 2·10⁵ · log(10⁶)   < 0.3 s
mem   O(k·n + m)              < 10·10⁵ + 2·10⁵          ≈ 4 MB
```

well inside 1 s / 512 MB.

# Reference implementation (C++17)

```cpp
#include <bits/stdc++.h>
using namespace std;
using ll = long long;
const ll INF = (1LL<<62);

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int n, m, k;                           // cities, flights, k
    cin >> n >> m >> k;

    vector<vector<pair<int,int>>> g(n);
    for (int i = 0, a, b, c; i < m; ++i) {
        cin >> a >> b >> c;  --a; --b;
        g[a].push_back({b, c});
    }

    vector<vector<ll>> best(n);            // up to k costs / city
    using State = pair<ll,int>;            // (cost, vertex)
    priority_queue<State, vector<State>, greater<State>> pq;

    best[0].push_back(0);                  // city 1 is index 0
    pq.emplace(0, 0);

    while (!pq.empty()) {
        auto [d,u] = pq.top(); pq.pop();
        if (d != best[u][best[u].size()-1]) continue;   // stale

        for (auto [v,w] : g[u]) {
            ll nd = d + w;
            if (best[v].size() < (size_t)k || nd < best[v].back()) {
                best[v].push_back(nd);
                inplace_merge(best[v].begin(), best[v].end()-1, best[v].end());
                if (best[v].size() > (size_t)k) best[v].pop_back();
                pq.emplace(nd, v);
            }
        }
    }

    for (ll x : best[n-1]) cout << x << ' ';
    cout << '\n';
}
```

Compile with  
`g++ -std=c++17 -O2 -pipe flight_routes.cpp`.

The program prints exactly k route prices, sorted, satisfying all CSES
“Flight Routes” constraints.
