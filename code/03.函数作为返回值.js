function makeFn() {
    let msg = 'Hello, World!'
    return function() {
        console.log(msg)
    }
}
// 第一种调用方式
const fn = makeFn()
fn() // 输出：Hello, World!
// 第二种调用方式
makeFn()() // 输出：Hello, World!