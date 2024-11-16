function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
  }
}
//测试
let arr = [1, 2, 3, 4, 5];
forEach(arr, (item) => console.log(item));