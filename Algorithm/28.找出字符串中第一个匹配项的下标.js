/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for(let i=0;i<haystack.length-needle.length+1;i++){
      if (haystack.slice(i,i+needle.length)===needle) {
        return i;
      }
    }
    return -1;
};
// @lc code=end

