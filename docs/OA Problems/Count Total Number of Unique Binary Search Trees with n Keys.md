
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


