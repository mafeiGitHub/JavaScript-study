/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let i = a.length - 1,
    j = b.length - 1;
  let carry = 0;
  let res = "";
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;//初始化sum
    if (i >= 0) {
      sum += parseInt(a[i]);
      i--;
    }
    if (j >= 0) {
      sum += parseInt(b[j]);
      j--;
    }
    carry = Math.floor(sum / 2);//进位
    res = (sum % 2) + res;
  }
  if (carry > 0) {
    res = '1' + res;
  }else if(res === ''){
    res = '0'
  }
  return res;
};
// @lc code=end
