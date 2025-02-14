/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  // 如果数组为空，返回空字符串
    let prefix = '';
    if (strs.length === 0) return prefix;
    // 以第一个字符串为基准
    for (let i = 0; i < strs[0].length; i++) {
      // 以第一个字符串的每个字符为基准，与其他字符串的相同位置的字符比较
        const c = strs[0][i];
        // 如果有不相同的字符，返回当前的prefix
        for(let j=1;j<strs.length;j++){
          if (strs[j][i]!==c) {
            return prefix;
          }
        }
        //如果都相同，加入到prefix中
        prefix += c;
    }
    return prefix;
};
// @lc code=end

