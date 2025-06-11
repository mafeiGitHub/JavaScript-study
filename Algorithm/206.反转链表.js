/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
    let [pre,cur] = [null,head]
    while(cur){ 
      let tmp = cur.next;// 临时存储当前指针后续内容
      cur.next = pre; // 反转链表
      pre = cur;//接收反转结果
      cur = tmp;//接收临时存储的后续内容
    }
  
    return pre;
    
};
// @lc code=end

