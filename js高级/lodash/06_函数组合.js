function compose(f, g) {
  return function (value) {
    return f(g(value));
  };
}
function reverse(arr) {
  return arr.reverse();
}
function first(array) {
    return array[0]
}
const last = compose(first,reverse);
console.log(last([1,4,6,8]));