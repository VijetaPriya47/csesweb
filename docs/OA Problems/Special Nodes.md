Special Nodes  
=============

Problem statement  
-----------------
You are given an **undirected tree** with  

* `tree_nodes (n)`  `1 ≤ n ≤ 100 000`  
* two integer arrays `tree_from[0 … n-2]`, `tree_to[0 … n-2]`  
  (`1 ≤ tree_from[i], tree_to[i] ≤ n`)  

`tree_from[i]` and `tree_to[i]` describe the i-th edge; the tree contains
all `n` vertices and exactly `n-1` edges.

A vertex *v* is called **special** if it can be an *endpoint* of **any
diameter** of the tree.  
(The diameter of a tree is the longest simple path; its length is the
number of edges on that path.  If several longest paths exist, we
consider the endpoints of **all** of them.)

Return an integer array `ans[1 … n]` such that  

```
ans[i] = 1   if vertex i is special
ans[i] = 0   otherwise
```

Input / output format used by the judge  
---------------------------------------
The library function you must implement is

```cpp
vector<int> isSpecial(int              tree_nodes,
                      vector<int>      tree_from,
                      vector<int>      tree_to);
```

It has to return the binary array described above (index 0 ⇢ vertex 1).

-------------------------------------------------
Sample tests
-------------------------------------------------

```
Test 1
n = 3
edges = { (1,2), (2,3) }

Output  : 1 0 1
Explanation: diameter is 1–2–3 so endpoints 1 and 3 are special.
```

```
Test 2
n = 7
edges =
1 2
2 3
3 4
3 5
1 6
1 7

Output  : 0 0 0 1 1 1 1
Explanation:
diameters of length 4 are 4–3–2–1–6 and 4–3–2–1–7  
⇒ endpoints are {4,6,7}.  Node 5 is also at distance 4 from 6/7 via 3,
so {4,5,6,7} are special.

```
Given in Oracle OA

Approach (three linear BFS)  
---------------------------
1. Run BFS/DFS from any vertex (e.g. 0) to find a farthest vertex **A**.  
2. BFS from **A** to find a farthest vertex **B** and record
   `distA[ ]`; the diameter length is `D = distA[B]`.  
3. BFS from **B** to obtain `distB[ ]`.  
4. A vertex `v` is an endpoint of **some** diameter **iff**

```
distA[v] == D  OR  distB[v] == D        // logical OR
```

Every diameter has one endpoint at distance `D` from `A` and the other
at distance `D` from `B`; no other vertex satisfies this property.

Complexities  
-  Time  `O(n)`  -  Memory  `O(n)`

Exact solution (C++17)  
----------------------

```cpp
#include <bits/stdc++.h>
using namespace std;

/* ----------------------------------------------------------- */
/* single BFS: returns (farthest vertex, full distance vector) */
static pair<int,vector<int>>
bfs_far(int src, const vector<vector<int>>& g)
{
    int n = g.size();
    vector<int> dist(n, -1);
    queue<int> q;
    dist[src] = 0;                    // start
    q.push(src);

    int far = src;
    while (!q.empty()) {
        int u = q.front(); q.pop();
        for (int v : g[u])
            if (dist[v] == -1) {      // undiscovered
                dist[v] = dist[u] + 1;
                q.push(v);
                if (dist[v] > dist[far])   // update only on larger distance
                    far = v;
            }
    }
    return {far, dist};
}
/* ----------------------------------------------------------- */

vector<int> isSpecial(int tree_nodes,
                      vector<int> tree_from,
                      vector<int> tree_to)
{
    const int n = tree_nodes;
    vector<vector<int>> g(n);                     // adjacency list (0-based)

    for (int i = 0; i < n-1; ++i) {
        int a = tree_from[i] - 1;
        int b = tree_to[i]   - 1;
        g[a].push_back(b);
        g[b].push_back(a);
    }

    /* 1️⃣  arbitrary start → farthest vertex A */
    auto [A, _] = bfs_far(0, g);

    /* 2️⃣  A → farthest vertex B, get distA and diameter length D */
    auto [B, distA] = bfs_far(A, g);
    int D = distA[B];

    /* 3️⃣  B → distB */
    auto [__, distB] = bfs_far(B, g);
    (void)__;                                   // silence unused warning

    /* 4️⃣  mark special nodes */
    vector<int> ans(n, 0);
    for (int v = 0; v < n; ++v)
        if (distA[v] == D || distB[v] == D)
            ans[v] = 1;

    return ans;                                 // 0 / 1 array
}
```

This code meets the constraints (`n ≤ 10^5`) and prints exactly the
expected arrays for all the tests above.

[1](https://www.geeksforgeeks.org/diameter-tree-using-dfs/)
[2](https://takeuforward.org/data-structure/calculate-the-diameter-of-a-binary-tree/)
[3](https://leetcode.com/problems/diameter-of-binary-tree/)
[4](https://www.geeksforgeeks.org/competitive-programming/cses-solutions-tree-diameter/)
[5](https://algo.monster/liteproblems/1245)
[6](https://www.hackerearth.com/problem/algorithm/diameter-of-tree/)
