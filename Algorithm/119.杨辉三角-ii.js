/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let triangle = [];
  triangle.push([1]);

  for (let i = 1; i <= rowIndex; i++) {
    let raw = new Array(i + 1).fill(1);
    for (let j = 1; j < i; j++) {
      raw[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
    triangle.push(raw);
  }
  return triangle[rowIndex];
};
// @lc code=end


