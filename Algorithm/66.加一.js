/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let n = digits.length;

  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    // 如果当前位是9，将当前位变为0，继续循环
    digits[i] = 0;
  }
  // 如果循环结束，说明所有位都是9
  let newDigits = new Array(n + 1).fill(0);
  newDigits[0]=1;
  return newDigits;
};
// @lc code=end
