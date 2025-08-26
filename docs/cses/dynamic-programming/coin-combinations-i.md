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
