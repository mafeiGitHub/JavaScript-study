/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
var isBalanced = function (root) {
  if (!root) return true;
  const getHeight = (root) => {
    // 终止递归
    if (!root) return 0;
    // 计算左子树高度
    const leftHeight = getHeight(root.left);
    if (leftHeight === -1) return -1;
    const rightHeight = getHeight(root.right);
    if (rightHeight === -1) return -1;
    // 如果高度差大于-1表示不平衡
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    // 返回当前节点高度
    return Math.max(leftHeight, rightHeight) + 1;
  };
  
  return getHeight(root) !== -1;
};
// @lc code=end
