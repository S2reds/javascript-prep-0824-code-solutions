// create your loops here.
function whileLoop1() {
  let arr = [];
  let count = 0;
  while (arr.length < 10) {
    arr.push(count);
    count++;
  }
  return arr;
}
const whileLoop1Result = whileLoop1();
console.log('whileLoop1Result: ', whileLoop1Result);

function whileLoop2() {
  let arr = [];
  let count = 0;
  while (arr.length < 10) {
    arr.push(count);
    count += 2;
  }
  return arr;
}
const whileLoop2Result = whileLoop2();
console.log('whileLoop2Result: ', whileLoop2Result);

function forLoop1() {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr.push(i);
  }
  return arr;
}
const forLoop1Result = forLoop1();
console.log('forLoop1Result: ', forLoop1Result);

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    console.log('Time to explosion: ', i);
  }
}
const forLoop2Result = forLoop2();
console.log('forLoop2Result: ', forLoop2Result);

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  let arr = [];
  for (let key in object) {
    arr.push(key);
  }
  return arr;
}
const forInLoop1Result = forInLoop1(person);
console.log('forInLoop1Result: ', forInLoop1Result);

function forInLoop2(object) {
  let arr = [];
  for (let key in object) {
    arr.push(object[key]);
  }
  return arr;
}
const forInLoop2Result = forInLoop2(person);
console.log('forInLoop2Result: ', forInLoop2Result);
