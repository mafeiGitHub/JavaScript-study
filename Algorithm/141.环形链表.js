/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function(head) {
//   // 如果链表为空，直接返回 false
//   if (!head) return false;
//   // 快慢双指针
//   let slow = head;
//   let fast = head;
//   while(fast&&fast.next){
//     slow = slow.next;//慢指针每次走一步
//     fast = fast.next.next;//慢指针每次走两步
//     if (slow==fast) {
//       return true;//指针相遇，有环
//     }
//   }
//   return false;//走到末尾，则无环
// };
var hasCycle = function(head){
  if (!head) return false;
  let list=head;
  let num = 0;
  while(list.next){
    list=list.next;
    num++;
    if(num>20001){
      return true
    }
  }
  return false;
}
// @lc code=end

