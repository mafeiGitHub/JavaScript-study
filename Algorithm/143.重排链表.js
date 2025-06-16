/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

const { helpers } = require("handlebars");

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
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return;
  let low = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    low = low.next;
  }
  //反转后半部分
  let pre = null;
  let cur = low.next;
  while (cur) {
    const tmp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = tmp;
  }
  //交替合并两个链表
  let odd = head;
  let even = pre;
  while(even&&even.next){
    let oddNext = odd.next;//保存odd的下个节点
    let evenNext = even.next;//保存even的下个节点
    odd.next = even;
    odd = oddNext;
    even.next = odd;
    even = evenNext;
  }
  return;
};
// @lc code=end
