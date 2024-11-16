// function checkAge(min) {
//     return function(age) {
//         return age >= min;
//     };
// }
// ES6写法
let checkAge = min=>(age=>age>=min);
let checkAge18 = checkAge(18);
console.log(checkAge18(20)); // true
console.log(checkAge18(8)); // false