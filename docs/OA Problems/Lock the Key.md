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
