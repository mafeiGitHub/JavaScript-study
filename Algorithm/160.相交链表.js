/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  // 双指针法
  while (!headA || !headB) return null;
  let p = headA, q = headB;
  while (p !== q) {// 当p和q相等时，说明找到了相交节点
    p = p ? p.next : headB;
    q = q ? q.next : headA;
  }
  return p;
};
// @lc code=end
