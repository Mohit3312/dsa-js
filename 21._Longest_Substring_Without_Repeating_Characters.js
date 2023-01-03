// Longest Substring Without Repeating Characters

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// abcabcbb (Brute Force) - O(n^2)
// Combinations
// a
// ab
// abc
// abca

const lengthOfLongestSubstring = function (s) {
  // Sliding window approach
  if (!s) {
    return 0;
  }

  let end = 0;
  let start = 0;
  let maxLength = 0;

  const uniqueChars = new Set();

  while (end < s.length) {
    // console.log(uniqueChars, "end:", end, "start:", start);
    if (!uniqueChars.has(s[end])) {
    //   console.log(`Adding ${s[end]} end:${end} start:${start}`);
      uniqueChars.add(s[end]);
      end++;
      maxLength = Math.max(maxLength, uniqueChars.size);
    } else {
    //   console.log(`Deleting ${s[start]} end:${end} start:${start}`);
      uniqueChars.delete(s[start]);
      start++;
    }
  }
//   return uniqueChars;
  return maxLength;
};

const res = lengthOfLongestSubstring("abcabcbb");
console.log(res);
