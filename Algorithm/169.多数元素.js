/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let candidate = null; // 候选人
  let count = 0; // 票数
  for (let num of nums) {
    if (count === 0) {
      candidate = num; //当候选人
    }
    count += candidate === num ? 1 : -1; //当前人如果与候选人相同，+1，不同则-1
  }
  return candidate;
};
// @lc code=end

