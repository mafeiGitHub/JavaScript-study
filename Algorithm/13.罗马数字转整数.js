/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanMap = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900]
    ]);
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        if(romanMap.has(s[i] + s[i+1])) {
            result += romanMap.get(s[i] + s[i+1]);
            i++;
        }
        else {
            result += romanMap.get(s[i]);
        }
    }
    return result;
};
// @lc code=end

