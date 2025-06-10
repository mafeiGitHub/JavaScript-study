/*
 * @lc app=leetcode.cn id=876 lang=javascript
 *
 * [876] 链表的中间结点
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
var middleNode = function (head) {
  // 单指针法
  let n = 0;
  cur = head;
  while (cur != null) {
    n++;
    cur = cur.next;
  }
  let k = 0;
  cur = head;
  while (k < Math.floor(n / 2)) {
    k++;
    cur = cur.next;
  }
  return cur;
};
// @lc code=end

