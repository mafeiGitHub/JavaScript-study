/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  let n = 0;
  let p = head;
  while (p) {
    p = p.next;
    n+=1;
  }
  const dummy = new ListNode(0, head);
  let pre = null;
  
  let q = dummy;
  let cur = q.next;
  let tmp = null;
  while (n >= k) {
    let start = cur; //首节点会变成尾节点
    for (let i = 0; i < k; i++) {
      // 交换节点
      tmp = cur.next;
      cur.next = pre;
      pre = cur;
      cur = tmp;
    }
    q.next = pre;
    start.next = cur;
    q = start;
    n = n - k;
  }
  return dummy.next;
};
// @lc code=end
