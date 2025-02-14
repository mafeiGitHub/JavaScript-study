/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let i = 0;
    let j = str.length-1;
    while (i<j) {
      if ( str[i]!==str[j]) {
        return false;
      }
      i++;
      j--;      
    }
    return true;   
};
// @lc code=end

