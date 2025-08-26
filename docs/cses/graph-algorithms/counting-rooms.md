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
