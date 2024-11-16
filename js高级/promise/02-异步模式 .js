console.log('start');
setTimeout(function() {
    console.log('timer1 invoked');
}, 1800);
setTimeout(function() {
    console.log('timer2 invoked');
    setTimeout(function() {
        console.log('timer3 invoked');
    }, 1000);
}, 1000);
console.log('end');
