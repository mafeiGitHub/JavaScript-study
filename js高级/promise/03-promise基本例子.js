// promise是一种承诺，承诺将来某个时间点会给你一个结果
// 1.创建promise对象
const promise = new Promise((resolve, reject) => {
    resolve('成功');
    reject(new Error('promise失败了'));
})

promise.then(function(value){
    console.log('resloved',value);
},function(error) {
    console.log('rejected',error);
})
console.log('end');
// 由调用者调用，由调用者决定调用哪个方法，这就是回调函数