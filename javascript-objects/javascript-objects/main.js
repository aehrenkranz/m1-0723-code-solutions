const student = {
  firstName: 'Alex',
  lastName: 'Ehrenkranz',
  Age: 27,
};
const fullName = student.firstName + ' ' + student.lastName;
console.log('full name is', fullName);
student.livesInIrvine = false;
student.previous0ccupation = 'CSM';
console.log('previous job was', student.previous0ccupation);
console.log('this student lives in irvine', student.livesInIrvine);

const vehicle = {
  make: 'Honda',
  model: 'Civic',
  year: '2003',
};
vehicle['color'] = 'red';
vehicle['isConvertible'] = false;
console.log('car color is', vehicle['color']);
console.log('the vehicle is a convertible', vehicle['isConvertible']);
console.log(vehicle);

const pet = {
  name: 'Sasha',
  type: 'dog',
};
delete pet.name;
delete pet.type;
console.log(pet);
