/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head || !head.next) return true;
  //  快慢指针
  let [slow,fast] = [head,head]
  while(fast && fast.next){ 
    slow = slow.next;
    fast = fast.next.next;
  }
  // 反转后半部分
  let pre = null;
  let cur = slow;
  while(cur){ 
    let tmp = cur.next;// 临时存储当前指针后续内容
    cur.next = pre; // 反转链表
    pre = cur;//接收反转结果
    cur = tmp;// 移动到下一个节点
  }
  let right = pre;
  let left = head;
  while(right){
    if(right.val !== left.val) return false;
    right = right.next;
    left = left.next;
  }
  return true;
};
// @lc code=end

