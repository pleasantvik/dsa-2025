/**
 * 345. Reverse Vowels of a String
Easy
Topics
premium lock icon
Companies
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "IceCreAm"

Output: "AceCreIm"

Explanation:

The vowels in s are ['I', 'e', 'e', 'A']. On reversing the vowels, s becomes "AceCreIm".

Example 2:

Input: s = "leetcode"

Output: "leotcede"

 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
 */

export const reverseVowels = function (s) {
  const vowel = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let arr = s.split("");
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    if (!vowel.includes(arr[start])) {
      start++;
    } else if (!vowel.includes(arr[end])) {
      end--;
    } else {
      // Swap vowels
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  return arr.join("");
};
