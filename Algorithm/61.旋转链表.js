/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
 */

const { log } = require("console");

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
var rotateRight = function (head, k) {
  //当链表为空或者只有一个节点或者k为0时直接返回原链表
  if (!head||!head.next||k==0) {
    return head;
  }
  // 计算链表长度并找到尾节点
  let len = 1;
  let tail = head;
  while(tail.next){
    tail = tail.next;
    len++;
  }
  // 计算实际旋转位置
  k = k%len;
  if (k===0) {
    return head;
  }
  // 找到新的表尾节点
  let newTail = head;
  for (let i = 0; i < len-k-1; i++) {
    newTail = newTail.next;
    
  }
  // 重组链表
  const newHead = newTail.next;
  newTail.next = null;
  tail.next = head;
  
  return newHead;
  
};
// @lc code=end
