/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
 
  let helper = (left,right)=>{
    if(left>right) return null;
    let mid = Math.floor((left+right)/2);
    let root = new TreeNode(nums[mid]);
    root.left = helper(left,mid-1);
    root.right = helper(mid+1,right);
    return root;
  }
  return helper(0,nums.length-1);
    
};
// @lc code=end

