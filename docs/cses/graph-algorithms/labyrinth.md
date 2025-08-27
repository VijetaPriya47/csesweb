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
