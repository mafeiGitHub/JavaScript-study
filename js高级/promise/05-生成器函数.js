/* function * foo() {
  console.log('start');
  yield 'foo'
}
const generator = foo()
const result = generator.next()
console.log(result); */

function * foo() {
  console.log('start');
  try {
    const res = yield 'foo'
    console.log(res);
  }catch (err) {
    console.log(err);
  }
  yield 'foo'
}
const generator = foo()
const result = generator.next()
console.log(result);
generator.throw(new Error('Generator error'))


