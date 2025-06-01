/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel 表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--;
    const remainder = columnNumber % 26;

    result = String.fromCharCode(65 + remainder) + result;
    columnNumber = Math.floor(columnNumber / 26);
  }
  return result;
};
// @lc code=end
