/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  // 快慢指针找中点
  let low = head;
  let fast = head;
  let pre = null;
  while (fast && fast.next) {
    pre = low;
    low = low.next;
    fast = fast.next.next;
  }
  pre.next = null;
  let left = sortList(head);
  let right = sortList(low);
  return merge(left, right);
};
function merge(l1, l2) {
  let dummy = new ListNode(0);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 || l2;
  return dummy.next;
}
// @lc code=end
