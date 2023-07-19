function convertMinutesToSeconds(minutes) {
  const totalSeconds = minutes * 60;
  return totalSeconds;
}
console.log('total seconds is', convertMinutesToSeconds(5));

function greet(name) {
  const salutation = 'Whaddup' + ' ' + name;
  return salutation;
}
console.log('function greet:', greet('Kurt'));

function getArea(width, height) {
  const area = width * height;
  return area;
}
console.log('the area of the object is', getArea(33, 27));

function getFirstName(person) {
  const res = person.firstName;
  return res;
}
const person = { firstName: 'Levi', lastName: 'Ackerman' };
console.log("the individual's first name is", getFirstName(person));

function getLastElement(array) {
  const res = array[array.length - 1];
  return res;
}
const array = ['i', 'hecking', 'love', 'video', 'games'];
console.log('function getLastElement:', getLastElement(array));
