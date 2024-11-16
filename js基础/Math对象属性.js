let max = Math.max(3,54,32,16);
let min = Math.min(3,54,32,16);
console.log(max,min);
// 扩展符
let arr = [2,3,4,5,6,7,8,9];
console.log(Math.max(...arr));
//舍入方法
let num = 4.35;
console.log(Math.ceil(num));//向上取整
console.log(Math.floor(num));//向下取整
console.log(Math.round(num));//四舍五入
console.log(Math.fround(num));//取浮点数
// 取随机数
console.log(Math.random());
// 取1~10的随机数
let number = Math.floor(Math.random()*10+1)
console.log(number);
// 取最大值和最小值之间的随机数
function getNumber(max,min){
  return Math.floor(Math.random()*(max-min+1)+min)
}
let result = getNumber(1,10);
console.log(result);
// 获取随机颜色
let colors = ["red", "green", "blue", "yellow", "black", "purple", "brown"];
let color = colors[getNumber(0,colors.length-1)];
console.log(color);









