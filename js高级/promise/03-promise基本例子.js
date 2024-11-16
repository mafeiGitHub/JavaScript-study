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