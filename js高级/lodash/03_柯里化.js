// const _ = require('lodash');

function getArea(r) {
    console.log(r);
    return Math.PI * r * r;
}
// let getAreaMemo = _.memoize(getArea);
// console.log(getAreaMemo(4));
// console.log(getAreaMemo(4));
// console.log(getAreaMemo(4));
function memoize(f){
    let cache = {};
    return function(){
        let key = JSON.stringify(arguments);
        console.log(key);
        cache[key] = cache[key] || f.apply(f,arguments);
        return cache[key];
    }
}
let memoizedGetArea = memoize(getArea);
console.log(memoizedGetArea(4));
console.log(memoizedGetArea(4));
console.log(memoizedGetArea(4));