function once(fn) {
    let done = false;
    return function() {
        if (!done) {
            done = true;
            return fn.apply(this, arguments);
        }
    }
}
//测试
let pay = once(function(money) {
    console.log(`支付了${money}元`);
})
//多次调用只执行一次
pay(10);
pay(10);
pay(10);
pay(10);
