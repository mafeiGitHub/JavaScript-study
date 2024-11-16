const _ = require('lodash');
// const str = 'Tom d djac1k'
// 正则方式使用
// console.log(str.match(/\s+/g));
// console.log(str.match(/\d+/g));
// 将匹配方法封装为方法
const match = _.curry(function(reg,str){
    return str.match(reg)
})
// 匹配空格
const haveSapce = match(/\s+/g)
console.log(haveSapce('hello world!'));
// 匹配数字
const haveNumber = match(/\d+/g)
console.log(haveNumber('banana1'));
// 过滤封装为一个方法
const filter = _.curry(function(func,array){
    return array.filter(func)
})

const arr = ['apple','hello world','apple1']
// 过滤有空格的元素
console.log(filter(haveSapce,arr));
// 过滤有数字的元素
console.log(filter(haveNumber,arr));
// 封装过的过滤有空格的元素
const findSpace = filter(haveSapce)
console.log(findSpace(arr));
