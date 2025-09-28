---

# Question

- Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

# PSEUDOCODE

- Initialize a variable insertPos to keep track of where to insert non-zero elements
- Loop through the given array
  - If the current element is not zero, place it at insertPos and increment insertPos
- After moving all non-zero elements, fill the remaining positions with zeros
- Return the modified array

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

**Example 3:**

```
Input: nums = [1,2,3,4,5]
Output: [1,2,3,4,5]
```

_Guaranteed constraints:_

- 1 <= nums.length <= 10^4
- -2^31 <= nums[i] <= 2^31 - 1
- Must be done in-place without making a copy of the array
