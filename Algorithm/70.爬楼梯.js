/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  // 1. 递归
  // if(n <= 2) return n;
  // return climbStairs(n - 1) + climbStairs(n - 2);
  // 2. 动态规划
  let dp = new Array(n+1).fill(0);
  dp[1]=1;
  dp[2]=2;
  for (let i = 3; i < dp.length; i++) {
    dp[i] = dp[i-1]+dp[i-2];
  }
  return dp[n];
    
};
// @lc code=end
console.log(climbStairs(4));//2


