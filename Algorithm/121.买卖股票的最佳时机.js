/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
/* var maxProfit = function (prices) {
  let money = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0) {
        money = Math.max(money, prices[j] - prices[i]);
      }
    }
  }
  return money;
}; */
var maxProfit = function (prices) {
  if (prices.length === 0) {
    return 0;
  }
  let maxProfit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};
// @lc code=end
