const test1 = 2;
const test2 = -5;
const test3 = 22;
const maximumValue = Math.max(test1, test2, test3);
console.log('variable maximumValue', maximumValue);

const heroes = ['Captain America', 'Red Hood', 'Deadpool', 'Starfire'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('variable randomIndex', randomIndex);

const library = [
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    author: 'J.K. Rowling',
  },
  {
    title: 'The Adventures of Tom Sawyer',
    author: 'Mark Twain',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
];
const lastBook = library.pop();
console.log('variable lastBook', lastBook);
const firstBook = library.shift();
console.log('variable firstBook', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log(library);

const fullName = 'Alex Ehrenkranz';
const firstAndLastName = fullName.split(' ');
console.log('variable firstAndLastName', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log(sayMyName);
