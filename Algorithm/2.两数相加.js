/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;// 进位
  let dummy= new ListNode(0);// 虚拟头节点
  let current = dummy;// 当前节点指针
  // 遍历两个链表，直到都为空且没有进位
  while (l1 || l2 || carry) {
    const val1 = l1 ? l1.val : 0;// 获取 l1 的值
    const val2 = l2 ? l2.val : 0;// 获取 l2 的值
    const sum = val1 + val2 + carry;// 计算当前位的和
    carry = Math.floor(sum / 10);// 更新进位
    current.next = new ListNode(sum % 10);// 创建新节点存储当前位的结果
    current = current.next;// 移动当前节点指针
    if (l1) l1 = l1.next;// 移动 l1 指针
    if (l2) l2 = l2.next;// 移动 l2 指针
  }
  return dummy.next;
};

// @lc code=end
