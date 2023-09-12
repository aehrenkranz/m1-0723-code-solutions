const arr = [
  {
    title: 'Harry Potter and the Prisoner of Azkaban',
    isbn: '9780439136365',
    author: 'J.K. Rowling',
  },
  {
    title: 'A Clockwork Orange',
    isbn: '9780434098002',
    author: 'Anthony Burgess',
  },
  {
    title: '1984',
    isbn: '9780198185215',
    author: 'George Orwell',
  },
];
console.log('typeof arr:', typeof arr, arr);

const stringify = JSON.stringify(arr);
console.log('typeof stringify:', typeof stringify, stringify);

const student = '{"Number id":"1234", "String name":"Alex"}';
console.log('typeof student:', typeof student);

const newObj = JSON.parse(student);
console.log('typeof newObj:', typeof newObj, newObj);
