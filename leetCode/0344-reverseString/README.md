---

# Question

- Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

# PSEUDOCODE

- Initialize two pointers: left at the beginning (index 0) and right at the end (index s.length - 1)
- While left pointer is less than right pointer:
  - Swap the characters at left and right positions
  - Move left pointer forward (increment)
  - Move right pointer backward (decrement)
- Continue until pointers meet in the middle
- The array is now reversed in-place

**Example 1:**

```
Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**

```
Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

**Example 3:**

```
Input: s = ["a"]
Output: ["a"]
```

_Guaranteed constraints:_

- 1 <= s.length <= 10^5
- s[i] is a printable ascii character
- Must be done in-place with O(1) extra memory
