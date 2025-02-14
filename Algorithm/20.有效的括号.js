/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) {
    return false;
  }
  const stack = [];
  const map = {
    "]": "[",
    "}": "{",
    ")": "(",
  };
  for (let i = 0; i < s.length; i++) {
    if(map[s[i]]){
      if(stack.pop()!=map[s[i]])return false;
    }
    else{
      stack.push(s[i]);
    }
  }
  if (stack.length !== 0) {
    return false;
  } else {
    return true;
  }
};
// @lc code=end
