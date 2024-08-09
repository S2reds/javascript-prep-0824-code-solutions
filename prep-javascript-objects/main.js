let person = {
  firstName: 'Kyle',
  lastName: 'Park',
  hobby: 'Gaming',
};

console.log(person);

let fullName =
  "This person's name is " + person.firstName + ' ' + person.lastName;
console.log(fullName);

person.job = 'Contractor';
console.log("This person's current job is: " + person.job);

person['previousJob'] = 'Waiter';
console.log("This person's previous job was: " + person['previousJob']);

console.log('The complete person object: ', person);
