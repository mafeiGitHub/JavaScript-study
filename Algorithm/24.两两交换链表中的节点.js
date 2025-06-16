/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// var swapPairs = function(head) {
//   if (!head||!head.next) {
//     return head;
//   }
//   const dummy = new ListNode(0,head);//虚拟头节点
//   let pre = dummy;
//   while(pre.next&&pre.next.next){
//     const first = pre.next;
//     const second = pre.next.next;
//     //交换俩节点
//     pre.next = second;
//     first.next = second.next;
//     second.next = first;
//     //更新前驱节点
//     pre = first;
//   }   
//   return dummy.next;
// };
// 递归
var swapPairs = function(head) {
  if(!head||!head.next)return head;//递归出口
  let tmp = head.next;
  head.next = swapPairs(tmp.next);
  tmp.next = head;
  return tmp;
}

// @lc code=end

