/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    let bit = (n >> i) & 1;
    result |= bit << (31 - i);
  }
  return result >>> 0;
};
// @lc code=end
// let n = parseInt("00000010100101000001111010011100", 2);
// let output = reverseBits(n);
// console.log(output);
