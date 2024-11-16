const every = (array,fn)=>{
    let result = true;
    for (let value of array){
        result = fn(value);
        if(!result) break;
    }
    return result;
}
// 测试
let arr = [1,2,3,4,5];
let res = every(arr,(value)=>value>0);
console.log(res);