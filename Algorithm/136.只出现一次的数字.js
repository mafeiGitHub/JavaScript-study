/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var singleNumber = function(nums) {
  let res = [];
    for (let i = 0; i < nums.length; i++) {
      let index = res.indexOf(nums[i]);
      if (index===-1) {
        res.push(nums[i]);
      }
      else{
        res.splice(index,1)
      }
      
    }
    return res[0]
}; */
var singleNumber = function(nums){
  let result = 0;
  for (let num of nums) {
    result ^= num;//异或
  }
  return result;
}
// @lc code=end

