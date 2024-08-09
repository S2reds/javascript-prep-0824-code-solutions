function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(10, 7.3);
console.log('addTwoNumbers exercise: ', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}
const minutes = convertHoursToMinutes(2);
console.log('converHourseToMinutes exercise: ', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
const greeting = getGreeting('KP');
console.log('getGreeting exercise: ', greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}
const addAndMultiply = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise: ', addAndMultiply);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}
const multiplyAndDivide = multiplyAndDivideBy5(5, 10);
console.log('multiplyAndDivideBy5 exercise: ', multiplyAndDivide);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
const difference = subtractTwoNumbers(100, 33);
console.log('subtractTwoNumbers exercise: ', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}
const circum = getCircleCircumference(5);
console.log('getCircleCircumference exercise: ', circum);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
const myName = getFullName('kyle', 'park');
console.log('getFullName exercise: ', myName);

function cube(number) {
  return number ** 3;
}
const cubed = cube(5);
console.log('cubed exercise: ', cubed);
