/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

const { run } = require("node:test");

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let low = head;//慢指针
  let fast = head;//快指针
  while(n--){
    fast = fast.next;
  }
  if(!fast) {
    return head.next;
  }
  while(fast&&fast.next){
    fast = fast.next;
    low = low.next;
  }
  low.next = low.next.next;
  return head;
};

// @lc code=end

