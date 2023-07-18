const colors = ['red', 'white', 'blue'];
console.log('colors[0]', colors[0]);
console.log('colors[1]', colors[1]);
console.log('colors[2]', colors[2]);
console.log(`America is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]}, and ${colors[2]}`);
console.log('variable colors', colors);

const students = ['John', 'Samatha', 'Lexi', 'Steven'];
const numberOfStudents = students.length;
console.log('There are', numberOfStudents, 'students in the class');
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log('the last student is', lastStudent);
console.log(students);
