/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let filtered = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return filtered === filtered.split("").reverse().join("");
};
// @lc code=end
