/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0);
    let cur = dummy;
    while(list1&&list2){
      if(list1.val<list2.val){
        cur.next = list1;
        list1 = list1.next;
      }else{
        cur.next = list2;
        list2 = list2.next;
      }
      cur = cur.next;
    }
    if(list1){
      cur.next = list1;
    }else{
      cur.next = list2;
    }
    return dummy.next;
};
// @lc code=end
/* 
测试代码
 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }
//  创建第一个链表 1->2->4
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);
// 创建第二个链表 1->3->4
let list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);
let mergedList = mergeTwoLists(list1, list2); 
// 打印合并后的链表
let current = mergedList;
while (current !== null) {
    console.log(current.val);
    current = current.next;
}

  */