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
