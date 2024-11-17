// let colors = new Array();
let colors = new Array(20);

console.log(colors.length);
let names = new Array("Greg","Tom");
console.log(names);

// from()和of()
console.log(Array.from('mawef'));
console.log(Array.of('mawef','a'));
const a1 = [1,2,3,4];
console.log(Array.from(a1,x=>x**2));
// 检测数组
console.log(a1 instanceof Array);
// isArray
console.log(Array.isArray(a1));
// 迭代器方法
const a = ["foo", "bar", "baz", "qux"]; 
console.log(Array.from(a.keys()));
console.log(Array.from(a.values()));
console.log(Array.from(a.entries()));
const entries = Array.from(a.entries());

for(const [id,element] of entries){
  console.log(id);
  console.log(element);
  
  
}
// 数组的复制和填充方法 copyWithin() fill()
const zeros =[0,0,0,0,0];
zeros.fill(5)
console.log(zeros);
zeros.fill(0);
console.log(zeros);
// 用6填充索引大于等于3的元素
zeros.fill(6,3);
console.log(zeros);
// 2填充索引大于等于1且小于3的元素
zeros.fill(7,1,3)
console.log(zeros);
// 用8 填充索引大于等于1且小于4的元素 
zeros.fill(8,1,4)
console.log(zeros);
let ints = [0,1,2,3,4,5,6,7,8,9];
ints.copyWithin(4,0,3)
console.log(ints);
// 入栈和duilie push pop shift unshift
let arr = ['red','orange'];
arr.push('green');
console.log(arr);
arr.pop();
console.log(arr);
arr.unshift('green')
console.log(arr);
arr.shift('green');
console.log(arr);
// 数组排序方法
let values = [1,2,3,6,5];
values.reverse()
console.log(values);
values.sort()
console.log(values);
// 数组拼接contart
let nums = [1,2,3]
let nums1 =nums.concat(['7','8'],['1'],['5','6'])//可以接受多个参数
console.log(nums1);
// slice
let nums2 = nums1.slice(2,3);//数组拆分
console.log(nums2);
// splice 删除 插入 替换
let colors1 = ["red", "green", "blue"]; 
let result = colors1.splice(0,1);//直接操作原数组
console.log(colors1);//删除第一项


 











