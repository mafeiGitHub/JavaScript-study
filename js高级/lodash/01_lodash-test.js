const _ = require("lodash");

// 测试 lodash 库
let array = ["orange", "banana", "apple"];
console.log(_.first(array));
console.log(_.last(array));
console.log(_.toUpper(array));
console.log('reverse后的数据：',_.reverse(array));
console.log('再次reverse后的数据：',_.reverse(array));
const res = _.each(array,(item,index)=>{
    console.log(item,index);
})
console.log("aa:",res);
console.log(_.includes(array,'aaa'));
console.log(_.includes(array,'apple'));
console.log(_.find(array,0));
console.log(_.findIndex(array,item=>item==='apple'));
