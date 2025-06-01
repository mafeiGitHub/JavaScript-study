/*
 * @lc app=leetcode.cn id=112 lang=javascript
 *
 * [112] 路径总和
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
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  if (!root)return false; 
  if (!root.left&&!root.right) {
    return root.val===targetSum;//当前节点是否等于剩余和
  }
  // 在左子树和柚子树中寻找
  return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val)
    
};
// @lc code=end

