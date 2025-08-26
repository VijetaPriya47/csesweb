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
