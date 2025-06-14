/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m-1;
  let j=n-1;
  let k = m+n-1;
  while(j>=0){
    if(i>=0&&nums1[i]>nums2[j]){
      nums1[k]=nums1[i];
      i--;
    }else{
      nums1[k]=nums2[j];
      j--;
    }
    k--;
  }
  return nums1;
};
// @lc code=end
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));//[1,2,2,3,5,6]


