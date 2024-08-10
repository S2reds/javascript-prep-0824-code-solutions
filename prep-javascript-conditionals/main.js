/* Your JS goes in this file */
function isAdult(age) {
  return age < 18 ? false : true;
}
const isAdultResult = isAdult(19);
console.log(isAdultResult);

function didStudentPass(score) {
  return score < 70 ? false : true;
}
const didStudentPassResult = didStudentPass(69);
console.log(didStudentPassResult);

function gradeCalculator(score) {
  if (score > 100) return 'A++';
  else if (score >= 90) return 'A';
  else if (score >= 80) return 'B';
  else if (score >= 70) return 'C';
  else if (score >= 60) return 'D';
  else return 'F';
}
const gradeCalculatorResult = gradeCalculator(60);
console.log(gradeCalculatorResult);

function seasonMessenger(season) {
  if (season === 'summer') return 'it is hot today';
  else if (season === 'spring') return 'the flowers are blooming';
  else if (season === 'autumn') return 'the leaves are changing colors';
  else if (season === 'winter') return 'it is cold today';
  else return 'Please enter a valid season';
}
const seasonMessengerResult = seasonMessenger('autumn');
console.log(seasonMessengerResult);

function dayDetector(dayOfTheWeek) {
  return dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday'
    ? 'Have a good weekend'
    : "It's a weekday!";
}
const dayDetectorResult = dayDetector('saturday');
console.log(dayDetectorResult);
