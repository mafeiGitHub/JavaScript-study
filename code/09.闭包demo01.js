function makePower(power) {
  return function (number) {
    return Math.pow(number,power)
  }
}
// 求平方
let power2 = makePower(2)
console.log(power2(5)) // 25
// 求立方
let power3 = makePower(3)
console.log(power3(5)) // 125