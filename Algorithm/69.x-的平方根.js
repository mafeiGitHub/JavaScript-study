/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x === 0 || x === 1) return x;
  for(let i = 0; i <= x; i++){
    if(i * i > x){
      return i - 1;
    }
  }
    
};
// @lc code=end

