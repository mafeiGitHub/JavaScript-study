/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    const isMirror = (l,r)=>{
      // 递归终止条件
      if(!l && !r) return true;
      if(!l || !r) return false;
      if(l.val !== r.val) return false;
      // 递归
      return isMirror(l.left,r.right) && isMirror(l.right,r.left);
    }
    return isMirror(root.left,root.right);
};
// @lc code=end

