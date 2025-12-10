# Legacy Data Extraction



## Source: docs/intro.md
```markdown
---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

```


## Source: docs/codeforces/kk.md
```markdown


```


## Source: docs/codeforces/2136 E - By the Assignment.md
```markdown


```


## Source: docs/OA Problems/Lock the Key.md
```markdown
The problem is a classic shortest-path search on a limited state graph representing the lock combinations.

***

## Problem Statement

You have a lock with 4 wheels, each numbered from `0` to `9`. Each wheel can be rotated forward or backward by one digit, and the digits wrap around:  
- '9' rotated forward → '0'  
- '0' rotated backward → '9'

The lock initially shows `"0000"`.

- You are given a list of `deadends`: lock states that cause the lock to stop turning if reached.
- You are given a `target` lock state.  
- Your task is to find the minimum number of moves (rotations of one wheel by one slot) to reach `target` starting from `"0000"` without passing through any deadend.  
- If it’s impossible, return `-1`.

***

## Examples

1. Deadends: ["0201","0101","0102","1212","2002"], target: "0202"  
   Minimum moves: 6  
   Example path:  
   "0000" → "1000" → "1100" → "1200" → "1201" → "1202" → "0202"

2. Deadends: ["8888"], target: "0009"  
   Minimum moves: 1  
   Rotate last wheel backward by one

3. Deadends: ["8887","8889","8878","8898","8788","8988","7888","9888"], target: "8888"  
   No solution, return `-1`

4. Deadends: ["0000"], target: "8888"  
   No moves possible, return `-1`.

***

## Approach

The problem can be modeled as a shortest path search in a graph where:

- Vertices are 4-digit strings `"0000"` to `"9999"`.
- Edges connect states that differ by one wheel rotated one step.
- Avoid vertices in `deadends`.
- Start from `"0000"`, find shortest path to `target`.

### Breadth-First Search (BFS)

BFS is ideal because:

- Each move has equal cost (one step)
- BFS finds shortest path in unweighted graphs
- Efficiently explores states until target or deadends reached

### Details

- Use a queue initialized with `"0000"`.
- Maintain a visited set to avoid revisiting states.
- On each iteration, for the current state:
  - For each of the 4 wheels,
  - Generate two neighbors by incrementing or decrementing the wheel digit (with wraparound).
- Enqueue neighbors if not in visited or deadends.
- Maintain steps count per level.
- If `target` reached, return steps.
- If queue empties without reaching target, return -1.

***

## Code: C++ BFS implementation

```cpp
#include <bits/stdc++.h>
using namespace std;

string plusOne(string s, int idx) {
    s[idx] = s[idx] == '9' ? '0' : s[idx] + 1;
    return s;
}

string minusOne(string s, int idx) {
    s[idx] = s[idx] == '0' ? '9' : s[idx] - 1;
    return s;
}

int openLock(vector<string>& deadends, string target) {
    unordered_set<string> dead(deadends.begin(), deadends.end());
    if (dead.count("0000")) return -1;
    if (target == "0000") return 0;

    unordered_set<string> visited;
    queue<pair<string,int>> q;
    q.push({"0000", 0});
    visited.insert("0000");

    while (!q.empty()) {
        auto [node, steps] = q.front(); q.pop();

        if (node == target) return steps;

        for (int i = 0; i < 4; i++) {
            string up = plusOne(node, i);
            if (!dead.count(up) && !visited.count(up)) {
                visited.insert(up);
                q.push({up, steps + 1});
            }
            string down = minusOne(node, i);
            if (!dead.count(down) && !visited.count(down)) {
                visited.insert(down);
                q.push({down, steps + 1});
            }
        }
    }
    return -1;
}
```

***

## Complexity

- **Time:** O(10,000) because there are 10,000 possible states and BFS
  explores at most all of them.
- **Space:** O(10,000) for visited and queue storage.

***

Let me know if you want a detailed explanation or code in another language!

[1](https://leetcode.ca/all/752.html)

```


## Source: docs/OA Problems/Special Nodes.md
```markdown
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

```


## Source: docs/OA Problems/Count Total Number of Unique Binary Search Trees with n Keys.md
```markdown

## Problem: Count Total Number of Unique Binary Search Trees with n Keys

**Problem Statement:**  
Given `n` distinct keys, find the total number of structurally unique binary search trees (BST) that can be constructed using those keys.

- Each BST follows the BST property: for any node, keys in the left subtree are smaller, keys in the right subtree are larger.
- Different arrangements of the keys that result in structurally different BSTs are considered distinct.

---

## Examples:

- For `n = 0` (empty tree), number of BSTs = 1.
- For `n = 1` (only one node), number of BSTs = 1.
- For `n = 3`, number of BSTs = 5.

---

## Approach:

The problem can be solved using dynamic programming and is closely related to **Catalan numbers**.

**Key Idea:**

- Select each key from 1 to n as the root of the BST.
- The keys to the left of the root form the left subtree.
- The keys to the right form the right subtree.
- Recursively calculate the number of BSTs in the left and right subtrees.
- The total number of BSTs for root `i` is the product of the number of BSTs formed on the left and right.
- Sum these values for `i = 1` to `n`.

**Mathematically:**

```text
dp[n] = Σ (dp[i-1] * dp[n-i]),  for i = 1 to n
````

Where:

* `dp[0] = 1` (empty tree)
* `dp[1] = 1` (single node)

---

## Dynamic Programming Solution:

* Use a 1D dp array where `dp[i]` represents the number of BSTs with `i` nodes.
* Calculate values from small to large `i`.
* Each `dp[i]` can be computed from previously computed smaller dp values.

---

## Complexity:

* **Time complexity:** O(n²) due to nested loops
* **Space complexity:** O(n)

---

## Code Implementation (C++)

```cpp
#include <iostream>
#include <vector>
using namespace std;

int numTrees(int n) {
    vector<long long> dp(n + 1, 0);
    dp[0] = 1;  // empty tree
    dp[1] = 1;  // single node

    for (int nodes = 2; nodes <= n; ++nodes) {
        for (int root = 1; root <= nodes; ++root) {
            dp[nodes] += dp[root - 1] * dp[nodes - root];
        }
    }
    return dp[n];
}

int main() {
    int n;
    cout << "Enter number of keys: ";
    cin >> n;
    cout << "Total unique BSTs with " << n << " keys: " << numTrees(n) << endl;
    return 0;
}
```

---

This program efficiently calculates the number of unique BSTs for a given number of keys `n`. It uses the dynamic programming table `dp` to store intermediate results, avoiding recomputation.

---

## Example Walkthrough

For `n = 3`:

```text
dp[3] = dp[0] * dp[2] + dp[1] * dp[1] + dp[2] * dp[0]
```

Using values:

* `dp[0] = 1`
* `dp[1] = 1`
* `dp[2] = 2`

So:

```text
dp[3] = 1*2 + 1*1 + 2*1 = 2 + 1 + 2 = 5
```

Hence, there are **5 unique BSTs** possible with 3 keys.

---

## Summary

* This is the classic **Catalan number problem**.

* The recurrence relation is:

  ```text
  dp[n] = Σ (dp[i-1] * dp[n-i])   for i = 1 to n
  ```

* Base cases: `dp[0] = 1`, `dp[1] = 1`.

* Time: O(n²), Space: O(n).

---

Reference: [Enjoy Algorithms Blog](https://www.enjoyalgorithms.com/blog/total-number-of-binary-search-trees-with-n-keys)



```


## Source: docs/cses/intro.md
```markdown
---
id: intro
title: CSES Solutions
sidebar_label: Introduction
---

# CSES Solutions

Welcome to my comprehensive collection of solutions to CSES (Code Submission Evaluation System) problems. This guide follows a structured approach similar to the USACO Guide, helping you master competitive programming concepts through practical problem-solving.

## 🎯 About This Guide

This collection contains detailed solutions to CSES problems with:
- **Multiple approaches** for each problem
- **Step-by-step explanations** of algorithms
- **Optimization techniques** and complexity analysis
- **Code implementations** in C++ and Python
- **Practice problems** to reinforce concepts

## 📚 Problem Categories

### [Dynamic Programming](/docs/cses/dynamic-programming/intro)
Master the art of solving complex problems by breaking them down into simpler subproblems.

**Key Topics:**
- Basic DP concepts
- Knapsack problems
- Grid DP
- Tree DP
- Digit DP

### [Graph Algorithms](/docs/cses/graph-algorithms/intro)
Learn essential graph algorithms and their applications in competitive programming.

**Key Topics:**
- Graph representations
- DFS and BFS
- Shortest path algorithms
- Minimum spanning trees
- Strongly connected components

### [Sorting and Searching](/docs/cses/sorting-and-searching/intro)
Fundamental algorithms for organizing and finding data efficiently.

**Key Topics:**
- Sorting algorithms
- Binary search
- Two pointers technique
- Sliding window

### [Mathematics](/docs/cses/mathematics/intro)
Mathematical concepts and number theory problems.

**Key Topics:**
- Number theory
- Combinatorics
- Modular arithmetic
- Prime factorization

## 🚀 How to Use This Guide

1. **Start with Basics**: Begin with fundamental concepts in each category
2. **Practice Regularly**: Solve problems in order of difficulty
3. **Understand Multiple Solutions**: Learn different approaches for the same problem
4. **Implement Yourself**: Try coding solutions before reading explanations
5. **Track Progress**: Keep a log of solved problems and concepts mastered

## 🤝 How to Contribute

I welcome contributions to improve this guide! Here's how you can help:

### Contributing Solutions

1. **Fork the Repository**: Start by forking this project
2. **Choose a Problem**: Pick an unsolved problem or improve existing solutions
3. **Write Clear Explanations**: Include step-by-step reasoning
4. **Provide Multiple Approaches**: Show different solution methods
5. **Test Your Code**: Ensure solutions are correct and efficient
6. **Submit a Pull Request**: Follow the contribution guidelines

### Contribution Guidelines

- **Code Quality**: Write clean, readable, and well-commented code
- **Explanations**: Provide clear explanations of algorithms and logic
- **Multiple Languages**: Include solutions in C++ and Python when possible
- **Complexity Analysis**: Always mention time and space complexity
- **Edge Cases**: Consider and handle edge cases properly

### File Structure

```
docs/cses/
├── dynamic-programming/
│   ├── intro.md
│   ├── coin-combinations-i.md
│   ├── coin-combinations-ii.md
│   └── ...
├── graph-algorithms/
│   ├── intro.md
│   ├── counting-rooms.md
│   ├── labyrinth.md
│   └── ...
└── ...
```

### Pull Request Process

1. Create a new branch for your contribution
2. Add your solution file following the naming convention
3. Update the sidebar configuration if adding new categories
4. Test your changes locally
5. Submit a pull request with a clear description

## 📊 Progress Tracking

- **Total Problems**: 300+
- **Solved**: 150+
- **Categories**: 4 main categories
- **Languages**: C++, Python

## 🔗 Useful Resources

- [CSES Problem Set](https://cses.fi/problemset/)
- [USACO Guide](https://usaco.guide/)
- [Competitive Programming Handbook](https://cses.fi/book/book.pdf)
- [Codeforces](https://codeforces.com/)

## 📞 Contact

Have questions or suggestions? Feel free to reach out:
- **GitHub**: [@VijetaPriya47](https://github.com/VijetaPriya47)
- **Codeforces**: [vijetapriya](https://codeforces.com/profile/vijetapriya)

---

*Happy coding and happy learning! 🎉*

```


## Source: docs/cses/graph-algorithms/Round Trip II.md
```markdown

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

```


## Source: docs/cses/graph-algorithms/Cycle Detection.md
```markdown

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

```


## Source: docs/cses/graph-algorithms/intro.md
```markdown
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

```


## Source: docs/cses/graph-algorithms/Flight-Routes.md
```markdown
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

```


## Source: docs/cses/graph-algorithms/labyrinth.md
```markdown
```C++
struct Node{int r,c;};
const int INF = 1e9;
const int dr[4]={1,0,-1,0};
const int dc[4]={0,1,0,-1};
const char Ltr[4]={'D','R','U','L'};     // forward letters

string bfs(int sr,int sc,vector<string>& g){
    int n=g.size(), m=g[0].size();
    vector<vector<int>> dist(n,vector<int>(m,INF));
    vector<vector<int>> par(n,vector<int>(m,-1));

    queue<Node> q;
    dist[sr][sc]=0; q.push({sr,sc});

    while(!q.empty()){
        auto [r,c]=q.front(); q.pop();
        if(g[r][c]=='B') break;
        for(int k=0;k<4;k++){
            int nr=r+dr[k], nc=c+dc[k];
            if(0<=nr&&nr<n&&0<=nc&&nc<m&&(g[nr][nc]=='.'||g[nr][nc]=='B')&&dist[nr][nc]==INF){
                dist[nr][nc]=dist[r][c]+1;
                par[nr][nc]=k;            // store direction index
                q.push({nr,nc});
            }
        }
    }
    if(dist[?][?]==INF) return "";        // target not reached

    /* reconstruct */
    string path; int r=?,c=?;             // target coords
    while(!(r==sr&&c==sc)){
        int k=par[r][c];
        path.push_back(Ltr[k]);
        r-=dr[k]; c-=dc[k];
    }
    reverse(path.begin(),path.end());
    return path;
}
```
The program you posted is a classic breadth-first-search (BFS) + back-tracking solution—the standard way all competitive-programming editorials solve the CSES “Labyrinth” task.  
Below is a walk-through of the core ideas, how each code fragment implements them, and a few optional clean-ups you can practise on.

────────────────────────────────────────
1   Why BFS?
────────────────────────────────────────
-  The labyrinth is an un-weighted grid graph (every step costs 1).  
-  BFS explores vertices in non-decreasing distance order, so  
  the first time you pop the target **B** the distance stored is already the length of the *shortest* path.

Time `O(n·m)`   Memory `O(n·m)` – both fit comfortably in 1 000 × 1 000.

────────────────────────────────────────
2   Code tour
────────────────────────────────────────
a) Queue and distance array
```cpp
vector<int> dist(n*m, n*m+1);    // large = “∞”
queue<pair<int,int>> q;
dist[i*m + j] = 0;               // (i,j) is the start
q.push({i,j});
```
The grid is flattened: cell (r,c) ↔ index `r*m + c`.

b) Four step vectors
```cpp
int diri[4] = { 1,-1, 0, 0};     // D, U, L, R   (row delta)
int dirj[4] = { 0, 0,-1, 1};     //               (col delta)
char dirs[4]= {'U','D','R','L'}; // letters for *opposite* move
```
Notice the letters do **not** match the deltas: that is deliberate.
During back-tracking you walk *backwards* along the shortest-path tree,
so you must print the *opposite* direction; storing it already inverted
saves an extra conversion later.

c) BFS loop (forward search)

*Visit rule*  
```cpp
if (adj[newi][newj]=='.' || adj[newi][newj]=='B')
```
and immediately mark the cell wall `'#'` so it cannot be en-queued twice
(cheaper than a separate `visited[][]` array).

d) Early exit  
The boolean `flag` makes the loop stop as soon as **B** is met—
one more micro-optimisation.

e) Back-tracking (reconstruct path)

```cpp
while (dist[idx]>0){
    for p in 0..3
        if (dist[prev]==dist[cur]-1) {
            siri += dirs[p];      // store opposite letter
            cur  = prev;          // move one step back
            break;
        }
}
reverse(siri.begin(), siri.end());
```
Because `dirs` already contains opposite letters, a single
`reverse()` produces the forward path.

────────────────────────────────────────
3   Things you can polish
────────────────────────────────────────
1. Remove `farNode` / `flag` clutter  
   A cleaner variant uses a `parent[]` array and stops the outer loop with `break` instead of a flag.

2. Avoid linear search in back-tracking  
   If you store `parent[id] = prev_id` during BFS, the
   reconstruction is just
   ```cpp
   for (int v = target; v != start; v = parent[v])
       path.push_back(letter_from(parent[v], v));
   ```

3. Direction table that matches the deltas  
   Using
   ```cpp
   const int dr[4]={1,0,-1,0};
   const int dc[4]={0,1,0,-1};
   const char Ltr[4]={'D','R','U','L'};
   ```
   makes the intent explicit.

4. Pass the grid by *reference* in `solve`  
   `cnt = bfs(i,j, vec);` is already by reference, good.
   (Many beginners accidentally copy the whole grid.)

5. Replace the `dist` vector by a 2-D `vector<vector<int>>`
   to avoid manual indexing bugs.

────────────────────────────────────────
4   Suggested minimal clean version
────────────────────────────────────────
```cpp
struct Node{int r,c;};
const int INF = 1e9;
const int dr[4]={1,0,-1,0};
const int dc[4]={0,1,0,-1};
const char Ltr[4]={'D','R','U','L'};     // forward letters

string bfs(int sr,int sc,vector<string>& g){
    int n=g.size(), m=g[0].size();
    vector<vector<int>> dist(n,vector<int>(m,INF));
    vector<vector<int>> par(n,vector<int>(m,-1));

    queue<Node> q;
    dist[sr][sc]=0; q.push({sr,sc});

    while(!q.empty()){
        auto [r,c]=q.front(); q.pop();
        if(g[r][c]=='B') break;
        for(int k=0;k<4;k++){
            int nr=r+dr[k], nc=c+dc[k];
            if(0<=nr&&nr<n&&0<=nc&&nc<m&&(g[nr][nc]=='.'||g[nr][nc]=='B')&&dist[nr][nc]==INF){
                dist[nr][nc]=dist[r][c]+1;
                par[nr][nc]=k;            // store direction index
                q.push({nr,nc});
            }
        }
    }
    if(dist[?][?]==INF) return "";        // target not reached

    /* reconstruct */
    string path; int r=?,c=?;             // target coords
    while(!(r==sr&&c==sc)){
        int k=par[r][c];
        path.push_back(Ltr[k]);
        r-=dr[k]; c-=dc[k];
    }
    reverse(path.begin(),path.end());
    return path;
}
```
Same asymptotic complexity, shorter and safer.

Keep experimenting with variants like this; the pattern
“BFS + parent array + reverse” re-appears in dozens of grid and graph
shortest-path problems.

[1](https://github.com/ryanrixxh/maze-solver)
[2](https://en.wikipedia.org/wiki/Maze-solving_algorithm)
[3](https://emmilco.github.io/path_finder/)
[4](https://sqlpad.io/tutorial/python-maze-solver/)
[5](https://www.youtube.com/watch?v=MDD2VbM3FLM)
[6](https://github.com/Sma-Das/PathFinding)
[7](https://nthorn.com/articles/mazegen/)
[8](https://stackoverflow.com/questions/61218945/best-algorithm-for-maze-solving)

```


## Source: docs/cses/graph-algorithms/Course Schedule.md
```markdown

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

```


## Source: docs/cses/graph-algorithms/Message Route.md
```markdown
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

```


## Source: docs/cses/graph-algorithms/counting-rooms.md
```markdown
---
id: counting-rooms
title: Counting Rooms
sidebar_label: Counting Rooms
---

# Counting Rooms

## Problem Statement

You are given a map of a building, and your task is to count the number of its rooms. The size of the map is n×m squares, and each square is either floor (.) or wall (#).

Every room is connected to each other by floor squares. You can walk left, right, up, and down through floor squares.

## Input

- The first input line has two integers n and m: the height and width of the map.
- Then there are n lines that describe the map. Each line has m characters: . is floor and # is wall.

## Output

Print one integer: the number of rooms.

## Constraints

- 1 ≤ n,m ≤ 1000

## Solution

### Approach: Depth-First Search (DFS)

This is a classic connected components problem. We need to find the number of connected regions of floor squares.

```cpp
#include <bits/stdc++.h>
using namespace std;

int n, m;
vector<string> grid;
vector<vector<bool>> visited;

// Direction arrays for 4 adjacent cells
int dx[] = {-1, 0, 1, 0};
int dy[] = {0, 1, 0, -1};

void dfs(int x, int y) {
    // Mark current cell as visited
    visited[x][y] = true;
    
    // Check all 4 directions
    for(int i = 0; i < 4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        
        // Check if new position is valid and unvisited
        if(nx >= 0 && nx < n && ny >= 0 && ny < m && 
           grid[nx][ny] == '.' && !visited[nx][ny]) {
            dfs(nx, ny);
        }
    }
}

int main() {
    cin >> n >> m;
    
    grid.resize(n);
    for(int i = 0; i < n; i++) {
        cin >> grid[i];
    }
    
    visited.assign(n, vector<bool>(m, false));
    
    int rooms = 0;
    
    // Find all connected components
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            if(grid[i][j] == '.' && !visited[i][j]) {
                dfs(i, j);
                rooms++;
            }
        }
    }
    
    cout << rooms << endl;
    return 0;
}
```

### Approach 2: Breadth-First Search (BFS)

```cpp
#include <bits/stdc++.h>
using namespace std;

int n, m;
vector<string> grid;
vector<vector<bool>> visited;

int dx[] = {-1, 0, 1, 0};
int dy[] = {0, 1, 0, -1};

void bfs(int startX, int startY) {
    queue<pair<int, int>> q;
    q.push({startX, startY});
    visited[startX][startY] = true;
    
    while(!q.empty()) {
        int x = q.front().first;
        int y = q.front().second;
        q.pop();
        
        for(int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];
            
            if(nx >= 0 && nx < n && ny >= 0 && ny < m && 
               grid[nx][ny] == '.' && !visited[nx][ny]) {
                visited[nx][ny] = true;
                q.push({nx, ny});
            }
        }
    }
}

int main() {
    cin >> n >> m;
    
    grid.resize(n);
    for(int i = 0; i < n; i++) {
        cin >> grid[i];
    }
    
    visited.assign(n, vector<bool>(m, false));
    
    int rooms = 0;
    
    for(int i = 0; i < n; i++) {
        for(int j = 0; j < m; j++) {
            if(grid[i][j] == '.' && !visited[i][j]) {
                bfs(i, j);
                rooms++;
            }
        }
    }
    
    cout << rooms << endl;
    return 0;
}
```

## Time and Space Complexity

- **Time Complexity**: O(n × m)
- **Space Complexity**: O(n × m)

## Key Insights

1. **Connected Components**: Each room is a connected component of floor squares
2. **DFS vs BFS**: Both work equally well for this problem
3. **Boundary Check**: Always check if the new position is within grid bounds
4. **Visited Array**: Essential to avoid infinite loops and count each room only once

## Example Walkthrough

```
Input:
5 8
########
#..#...#
####.#.#
#..#...#
########

Output: 3
```

**Explanation:**
- Room 1: The 2×2 square in the top-left
- Room 2: The 2×2 square in the bottom-left  
- Room 3: The 1×1 square in the middle-right

## Practice Problems

- [Labyrinth](/docs/cses/graph-algorithms/labyrinth) - Find shortest path
- [Building Roads](/docs/cses/graph-algorithms/building-roads) - Minimum spanning tree
- [Message Route](/docs/cses/graph-algorithms/message-route) - BFS shortest path

## Related Topics

- [Graph Traversal](/docs/cses/graph-algorithms/intro)
- [Connected Components](/docs/cses/graph-algorithms/connected-components)
- [Depth-First Search](/docs/cses/graph-algorithms/dfs)
- [Breadth-First Search](/docs/cses/graph-algorithms/bfs)

```


## Source: docs/cses/dynamic-programming/coin-combinations-ii.md
```markdown
---
id: coin-combinations-ii
title: Coin Combinations II
sidebar_label: Coin Combinations II
---

# Coin Combinations II

## Problem Statement

Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ordered ways you can produce a money sum x using the available coins.

**Note**: This is different from Coin Combinations I. Here, the order doesn't matter. So 2+5 and 5+2 are considered the same combination.

## Input

- The first input line has two integers n and x: the number of coins and the desired sum of money.
- The second line has n distinct integers c1,c2,…,cn: the value of each coin.

## Output

Print one integer: the number of ways modulo 10^9+7.

## Constraints

- 1 ≤ n ≤ 100
- 1 ≤ x ≤ 10^6
- 1 ≤ ci ≤ 10^6

## Solution

### Approach: Dynamic Programming (Ordered)

The key difference from Coin Combinations I is that we need to process coins in a specific order to avoid counting the same combination multiple times.

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MOD = 1e9 + 7;

int main() {
    int n, x;
    cin >> n >> x;
    
    vector<int> coins(n);
    for(int i = 0; i < n; i++) {
        cin >> coins[i];
    }
    
    vector<int> dp(x + 1, 0);
    dp[0] = 1; // Base case: one way to make sum 0
    
    // Process coins in order to avoid duplicates
    for(int coin : coins) {
        for(int sum = coin; sum <= x; sum++) {
            dp[sum] = (dp[sum] + dp[sum - coin]) % MOD;
        }
    }
    
    cout << dp[x] << endl;
    return 0;
}
```

### Alternative Approach: 2D DP

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MOD = 1e9 + 7;

int main() {
    int n, x;
    cin >> n >> x;
    
    vector<int> coins(n);
    for(int i = 0; i < n; i++) {
        cin >> coins[i];
    }
    
    // dp[i][j] = number of ways to make sum j using first i coins
    vector<vector<int>> dp(n + 1, vector<int>(x + 1, 0));
    dp[0][0] = 1; // Base case
    
    for(int i = 1; i <= n; i++) {
        for(int sum = 0; sum <= x; sum++) {
            // Don't use the current coin
            dp[i][sum] = dp[i-1][sum];
            
            // Use the current coin
            if(sum >= coins[i-1]) {
                dp[i][sum] = (dp[i][sum] + dp[i][sum - coins[i-1]]) % MOD;
            }
        }
    }
    
    cout << dp[n][x] << endl;
    return 0;
}
```

## Time and Space Complexity

- **Time Complexity**: O(n × x)
- **Space Complexity**: O(x) for 1D approach, O(n × x) for 2D approach

## Key Insights

1. **Order matters**: Process coins in a specific order to avoid duplicates
2. **State definition**: dp[sum] = number of ways to make sum using coins processed so far
3. **Transition**: For each coin, update all sums that can be made using it
4. **Modulo arithmetic**: Use modulo 10^9+7 to handle large numbers

## Example Walkthrough

```
Input: n=3, x=5, coins=[1,2,3]

dp[0] = 1 (base case)
dp[1] = 1 (using coin 1)
dp[2] = 2 (1+1, 2)
dp[3] = 3 (1+1+1, 1+2, 3)
dp[4] = 4 (1+1+1+1, 1+1+2, 2+2, 1+3)
dp[5] = 5 (1+1+1+1+1, 1+1+1+2, 1+2+2, 1+1+3, 2+3)

Output: 5
```

## Practice Problems

- [Coin Combinations I](/docs/cses/dynamic-programming/coin-combinations-i) - Order matters
- [Minimizing Coins](/docs/cses/dynamic-programming/minimizing-coins) - Find minimum coins
- [Book Shop](/docs/cses/dynamic-programming/book-shop) - 0/1 Knapsack variant

## Related Topics

- [Dynamic Programming Basics](/docs/cses/dynamic-programming/intro)
- [Unbounded Knapsack](/docs/cses/dynamic-programming/knapsack)
- [Combinatorics](/docs/cses/mathematics/combinatorics)

```


## Source: docs/cses/dynamic-programming/intro.md
```markdown
---
id: intro
title: Dynamic Programming
sidebar_label: Introduction
---

# Dynamic Programming

Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems. It's one of the most important techniques in competitive programming and algorithmic problem-solving.

## 🎯 What is Dynamic Programming?

Dynamic Programming is an optimization technique that solves problems by:
1. **Breaking down** complex problems into simpler subproblems
2. **Storing** solutions to subproblems to avoid redundant calculations
3. **Building up** the solution to the original problem from subproblem solutions

## 📚 Key Concepts

### 1. Optimal Substructure
A problem has optimal substructure if an optimal solution contains optimal solutions to subproblems.

### 2. Overlapping Subproblems
The same subproblems are solved multiple times. DP stores these solutions to avoid recalculating.

### 3. Memoization vs Tabulation
- **Memoization**: Top-down approach (recursive with caching)
- **Tabulation**: Bottom-up approach (iterative)

## 🚀 Common DP Patterns

### 1. 1D Dynamic Programming
```cpp
// Example: Fibonacci
int dp[n+1];
dp[0] = 0, dp[1] = 1;
for(int i = 2; i <= n; i++) {
    dp[i] = dp[i-1] + dp[i-2];
}
```

### 2. 2D Dynamic Programming
```cpp
// Example: Grid DP
int dp[n][m];
// Fill based on problem requirements
```

### 3. Knapsack Problems
- 0/1 Knapsack
- Unbounded Knapsack
- Fractional Knapsack

### 4. Longest Common Subsequence (LCS)
```cpp
int dp[n+1][m+1];
// dp[i][j] = length of LCS of first i chars of s1 and first j chars of s2
```

## 📝 Problem List

### Basic DP
- [Coin Combinations I](/docs/cses/dynamic-programming/coin-combinations-i)
- [Coin Combinations II](/docs/cses/dynamic-programming/coin-combinations-ii)
- [Minimizing Coins](/docs/cses/dynamic-programming/minimizing-coins)
- [Coin Piles](/docs/cses/dynamic-programming/coin-piles)

### Grid DP
- [Grid Paths](/docs/cses/dynamic-programming/grid-paths)
- [Robot Paths](/docs/cses/dynamic-programming/robot-paths)

### Advanced DP
- [Edit Distance](/docs/cses/dynamic-programming/edit-distance)
- [Longest Common Subsequence](/docs/cses/dynamic-programming/longest-common-subsequence)

## 💡 Tips for DP Problems

1. **Identify the State**: What information do you need to represent a subproblem?
2. **Define the Transition**: How do you move from one state to another?
3. **Set Base Cases**: What are the smallest subproblems?
4. **Choose Implementation**: Top-down (memoization) or bottom-up (tabulation)?
5. **Optimize Space**: Can you reduce space complexity?

## 🔗 Related Resources

- [DP Tutorial on TopCoder](https://www.topcoder.com/thrive/articles/Dynamic%20Programming:%20From%20Novice%20to%20Advanced)
- [DP Problems on Codeforces](https://codeforces.com/problemset?tags=dp)
- [DP Visualization](https://visualgo.net/en/dp)

---

*Master DP and unlock the power to solve complex algorithmic problems efficiently! 🚀*

```


## Source: docs/cses/dynamic-programming/coin-combinations-i.md
```markdown
---
id: coin-combinations-i
title: Coin Combinations I
sidebar_label: Coin Combinations I
---

# Coin Combinations I

## Problem Statement

Consider a money system consisting of n coins. Each coin has a positive integer value. Your task is to calculate the number of distinct ways you can produce a money sum x using the available coins.

For example, if the coins are {2,3,5} and the desired sum is 9, there are 8 ways:
- 2+2+5
- 2+5+2  
- 5+2+2
- 3+3+3
- 2+2+2+3
- 2+2+3+2
- 2+3+2+2
- 3+2+2+2

## Input

- The first input line has two integers n and x: the number of coins and the desired sum of money.
- The second line has n distinct integers c1,c2,…,cn: the value of each coin.

## Output

Print one integer: the number of ways modulo 10^9+7.

## Constraints

- 1 ≤ n ≤ 100
- 1 ≤ x ≤ 10^6
- 1 ≤ ci ≤ 10^6

## Solution

### Approach 1: Dynamic Programming (Bottom-up)

This is a classic unbounded knapsack problem. We can use each coin multiple times.

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MOD = 1e9 + 7;

int main() {
    int n, x;
    cin >> n >> x;
    
    vector<int> coins(n);
    for(int i = 0; i < n; i++) {
        cin >> coins[i];
    }
    
    vector<int> dp(x + 1, 0);
    dp[0] = 1; // Base case: one way to make sum 0
    
    // For each coin
    for(int coin : coins) {
        // For each possible sum
        for(int sum = coin; sum <= x; sum++) {
            dp[sum] = (dp[sum] + dp[sum - coin]) % MOD;
        }
    }
    
    cout << dp[x] << endl;
    return 0;
}
```

### Approach 2: Dynamic Programming (Top-down with Memoization)

```cpp
#include <bits/stdc++.h>
using namespace std;

const int MOD = 1e9 + 7;
vector<int> coins;
vector<int> memo;

int solve(int sum) {
    if(sum == 0) return 1;
    if(sum < 0) return 0;
    
    if(memo[sum] != -1) return memo[sum];
    
    int ways = 0;
    for(int coin : coins) {
        ways = (ways + solve(sum - coin)) % MOD;
    }
    
    return memo[sum] = ways;
}

int main() {
    int n, x;
    cin >> n >> x;
    
    coins.resize(n);
    for(int i = 0; i < n; i++) {
        cin >> coins[i];
    }
    
    memo.assign(x + 1, -1);
    cout << solve(x) << endl;
    
    return 0;
}
```

## Time and Space Complexity

- **Time Complexity**: O(n × x)
- **Space Complexity**: O(x)

## Key Insights

1. **Order matters**: 2+5 and 5+2 are considered different combinations
2. **Unbounded knapsack**: Each coin can be used multiple times
3. **Modulo arithmetic**: Use modulo 10^9+7 to handle large numbers
4. **Base case**: dp[0] = 1 (one way to make sum 0)

## Practice Problems

- [Coin Combinations II](/docs/cses/dynamic-programming/coin-combinations-ii) - Order doesn't matter
- [Minimizing Coins](/docs/cses/dynamic-programming/minimizing-coins) - Find minimum coins needed
- [Removing Digits](/docs/cses/dynamic-programming/removing-digits) - Digit DP problem

## Related Topics

- [Dynamic Programming Basics](/docs/cses/dynamic-programming/intro)
- [Unbounded Knapsack](/docs/cses/dynamic-programming/knapsack)
- [Combinatorics](/docs/cses/mathematics/combinatorics)

```


## Source: blog/2021-08-01-mdx-blog-post.mdx
```markdown
---
slug: mdx-blog-post
title: MDX Blog Post
authors: [slorber]
tags: [docusaurus]
---

Blog posts support [Docusaurus Markdown features](https://docusaurus.io/docs/markdown-features), such as [MDX](https://mdxjs.com/).

:::tip

Use the power of React to create interactive blog posts.

:::

{/* truncate */}

For example, use JSX to create an interactive button:

```js
<button onClick={() => alert('button clicked!')}>Click me!</button>
```

<button onClick={() => alert('button clicked!')}>Click me!</button>

```


## Source: blog/2019-05-28-first-blog-post.md
```markdown
---
slug: first-blog-post
title: First Blog Post
authors: [slorber, yangshun]
tags: [hola, docusaurus]
---

Lorem ipsum dolor sit amet...

<!-- truncate -->

...consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

```


## Source: blog/2019-05-29-long-blog-post.md
```markdown
---
slug: long-blog-post
title: Long Blog Post
authors: yangshun
tags: [hello, docusaurus]
---

This is the summary of a very long blog post,

Use a `<!--` `truncate` `-->` comment to limit blog post size in the list view.

<!-- truncate -->

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elementum dignissim ultricies. Fusce rhoncus ipsum tempor eros aliquam consequat. Lorem ipsum dolor sit amet

```


## Source: blog/2021-08-26-welcome/index.md
```markdown
---
slug: welcome
title: Welcome
authors: [slorber, yangshun]
tags: [facebook, hello, docusaurus]
---

[Docusaurus blogging features](https://docusaurus.io/docs/blog) are powered by the [blog plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog).

Here are a few tips you might find useful.

<!-- truncate -->

Simply add Markdown files (or folders) to the `blog` directory.

Regular blog authors can be added to `authors.yml`.

The blog post date can be extracted from filenames, such as:

- `2019-05-30-welcome.md`
- `2019-05-30-welcome/index.md`

A blog post folder can be convenient to co-locate blog post images:

![Docusaurus Plushie](./docusaurus-plushie-banner.jpeg)

The blog supports tags as well!

**And if you don't want a blog**: just delete this directory, and use `blog: false` in your Docusaurus config.

```
