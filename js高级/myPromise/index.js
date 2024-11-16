const MyPromise = require('./myPromise');
let promise = new MyPromise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve('success')
    // },2000)
    // resolve('success')
    reject('fail')   
});
promise.then((value) => {
    console.log(value);
},reason=>{
    console.log(reason);
});

promise.then((value) => {
    console.log(value);
},reason=>{
    console.log(reason);
});