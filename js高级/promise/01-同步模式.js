console.log('start');   

setTimeout(function() {
    console.log('time');
},100)
function test(params) {
    console.log('first')
}
test() // 直接执行


console.log('end');