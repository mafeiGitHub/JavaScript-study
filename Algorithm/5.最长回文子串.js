/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s; // 如果字符串长度小于2，直接返回
  }
  let start = 0; // 回文子串的起始索引
  let maxLength = 1; // 最大回文子串的长度

  // 定义一个辅助函数，用于扩展回文
  const expand = (left, right) => {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--; // 向左扩展
      right++; // 向右扩展
    }
    return right - left - 1; // 返回回文长度
  };
  // 遍历每一个字符，包含奇数和偶数长度的回文
  for (let i = 0; i < s.length; i++) {
    // 奇数长度回文
    let len1 = expand(i, i);
    // 偶数长度回文
    let len2 = expand(i, i + 1);
    // 取最大长度
    let len = Math.max(len1, len2);

    // 如果找到更长的回文子串，更新起始索引和最大长度
    if (len > maxLength) {
      maxLength = len; // 更新最大长度
      start = i - Math.floor((len - 1) / 2); // 更新起始索引
    }
  }
  return s.substring(start, start + maxLength); // 返回最长回文子串
};

// @lc code=end
