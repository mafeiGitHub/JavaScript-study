const map = (array,fn)=>{
    let results = [];
    for (const value of array) {
        results.push(fn(value));
    }
    return results;
}
// 测试
let arr = [1,2,3,4,5];
arr = map(arr,v=>v*v)
console.log(arr); // [1, 4, 9, 16, 25]