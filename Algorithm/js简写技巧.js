// let obj= 1
// let res = obj||[]
// console.log(res);
// console.log(obj??'');

// const arr1 = [...new Array(10).keys()]
// console.log(arr1);
// const arr2 = Array.from(Array(10), (v, k) => k)
// console.log(arr2);
// const arr3 = Array.from({length: 10}, (v, k) => k)
// console.log(arr3);
// console.log(~~3.14);
//Array.map()
// 接口返回数据
let res = [{
  id: 1,
  name: 'zhangsan',
  age: 16,
  gender: 0
}, {
  id: 2,
  name: 'lisi',
  age: 20,
  gender: 1
}]
// const data = res.map((id,name)=>{id,name})
// console.log(res);
const data = res.map(v=>{v.id,v.name});
console.log(data);



