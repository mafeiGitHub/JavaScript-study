function filter(array,fn){
    let result = [];
    for(let i = 0; i < array.length; i++){
        if (fn(array[i])) {
            result.push(array[i]);
        }
    }
    return result;
}
// 测试
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res = filter(arr, function(item) {
    return item % 2 === 0;
})
console.log(res);