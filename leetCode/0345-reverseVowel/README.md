---

# Question

- Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

# PSEUDOCODE

- Create an array of all vowels (both lowercase and uppercase)
- Convert the string to an array of characters for easy manipulation
- Initialize two pointers: start at the beginning (index 0) and end at the end (index s.length - 1)
- While start pointer is less than end pointer:
  - If character at start is not a vowel, move start pointer forward
  - If character at end is not a vowel, move end pointer backward
  - If both characters are vowels, swap them and move both pointers
- Convert the array back to string and return it

**Example 1:**

```
Input: s = "IceCreAm"
Output: "AceCreIm"
Explanation: The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".
```

**Example 2:**

```
Input: s = "leetcode"
Output: "leotcede"
```

**Example 3:**

```
Input: s = "aA"
Output: "Aa"
```

_Guaranteed constraints:_

- 1 <= s.length <= 3 \* 10^5
- s consist of printable ASCII characters
- Vowels include both uppercase and lowercase: 'a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'
