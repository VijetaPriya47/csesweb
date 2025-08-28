
## Problem: Count Total Number of Unique Binary Search Trees with n Keys

**Problem Statement:**  
Given `n` distinct keys, find the total number of structurally unique binary search trees (BST) that can be constructed using those keys.

- Each BST follows the BST property: for any node, keys in the left subtree are smaller, keys in the right subtree are larger.
- Different arrangements of the keys that result in structurally different BSTs are considered distinct.

***

## Examples:

- For `n = 0` (empty tree), number of BSTs = 1.
- For `n = 1` (only one node), number of BSTs = 1.
- For `n = 3`, number of BSTs = 5.

***

## Approach:

The problem can be solved using dynamic programming and is closely related to **Catalan numbers**.

**Key Idea:**

- Select each key from 1 to n as the root of the BST.
- The keys to the left of the root form the left subtree.
- The keys to the right form the right subtree.
- Recursively calculate the number of BSTs in the left and right subtrees.
- The total number of BSTs for root i is the Cartesian product of the number of BSTs formed on the left and right.
- Sum these values for i = 1 to n.

**Mathematically:**

$$
dp[n] = \sum_{i=1}^{n} dp[i-1] \times dp[n - i]
$$

Where `dp = 1`, `dp = 1` (base cases).[1]

***

## Dynamic Programming Solution:

- Use a 1D dp array where `dp[i]` represents the number of BSTs with `i` nodes.
- Calculate values from small to large `i`.
- Each dp[i] can be computed from previously computed smaller dp values.

***

## Complexity:

- Time complexity: $$O(n^2)$$ due to nested loops
- Space complexity: $$O(n)$$

***

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

***

This program efficiently calculates the number of unique BSTs for a given number of keys `n`. It uses the dynamic programming table `dp` to store intermediate results avoiding recomputation.

***

#https://www.enjoyalgorithms.com/blog/total-number-of-binary-search-trees-with-n-keys
The linked article discusses the problem of counting the total number of unique Binary Search Trees (BSTs) that can be constructed using `n` distinct keys. This is a classic problem in combinatorics and dynamic programming, closely related to the Catalan numbers.

***

## Problem Statement

Given `n` distinct keys (for example, integers from 1 to `n`), the problem is to find how many unique Binary Search Trees (BSTs) can be constructed with these keys.

- Each BST must satisfy the binary search tree property: for any node, all the keys in the left subtree are smaller, and all the keys in the right subtree are greater.
- The structure of BSTs is important; two BSTs that differ in structure are considered different even if they store the same keys.

For example:
- If `n = 0` (empty tree), the number of BSTs is 1 by definition (empty tree).
- If `n = 1`, there is only 1 BST possible (one node).
- For `n = 3`, there are 5 unique BSTs.

***

## Approach

### Key Insight

The problem can be decomposed recursively:

- Choose each key from `1` to `n` as the root of the BST.
- The keys smaller than the root form the left subtree.
- The keys larger than the root form the right subtree.
- The total number of BSTs with `n` keys is the sum over all choices of the root of:

$$
\text{number\_of\_BSTs} = \sum_{i=1}^n (\text{BSTs\_with\_}i-1\text{\_keys}) \times (\text{BSTs\_with\_}n - i\text{\_keys})
$$

where `i` is the chosen root key index.

### Explanation

Consider the case for `n` keys:

1. If you pick the `i`-th key as root,
   - The left subtree must contain `i-1` nodes.
   - The right subtree must contain `n - i` nodes.

2. Since left and right subtrees are independent, multiply the number of BSTs from left and right.

3. Sum over all possible roots to get total BSTs for `n` keys.

***

## Dynamic Programming Solution

To avoid recomputation of the same subproblems, use a DP array:

- Define `dp[n]` as the number of unique BSTs with `n` distinct keys.
- Base cases:
  - `dp = 1` (empty tree)
  - `dp = 1` (single node)[1]

- Recurrence relation:
  $$
  dp[n] = \sum_{i=1}^n dp[i-1] \times dp[n - i]
  $$

***

## Computational Complexity

- Time Complexity: $$O(n^2)$$ due to nested summation for each `n`.
- Space Complexity: $$O(n)$$ for the DP array.

This is efficient enough for moderately large `n`.

***

## Summary and Steps

1. Initialize `dp` array of size `n+1`.
2. Set base cases `dp = 1` and `dp = 1`.[1]
3. For each `k` from `2` to `n`:
   - Compute `dp[k]` by summing over all `i` in `1` to `k` of `dp[i-1] * dp[k - i]`.
4. Return `dp[n]`.

***

## Example

For `n=3` keys, the number of BSTs is calculated as:

$$
dp = dp \times dp + dp \times dp + dp \times dp[2][3][1]
$$

Using `dp = 1`, `dp = 1`, `dp = 2` (calculated similarly):[3][1]

$$
dp = 1 \times 2 + 1 \times 1 + 2 \times 1 = 2 + 1 + 2 = 5[2]
$$

Hence, there are 5 unique BSTs possible with 3 keys.

***

This method effectively counts the total number of structurally unique BSTs for given keys by recursively dividing the problem into smaller subproblems, using dynamic programming to store and reuse previously computed results.

