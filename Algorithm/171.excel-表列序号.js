/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel 表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let result = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    let charValue = columnTitle[i].charCodeAt() - 64;
    result = result * 26 + charValue;
  }
  return result;
};
// @lc code=end
// console.log(titleToNumber("AB"));
