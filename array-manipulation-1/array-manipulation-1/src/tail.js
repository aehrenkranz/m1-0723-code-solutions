/* exported tail */
/**
 * Define a function named tail with one parameter, 'array'
 * * Define a variable named arr and assign it an empty array
 * * Create a loop that iterates through the parameter 'array', but begins at the second index location, and
 * * * for each index in the array, push the value of the index location into the variable arr
 * * Return the variable arr
 */

function tail(array) {
  const arr = [];
  for (let i = 1; i < array.length; i++) {
    arr.push(array[i]);
  }
  return arr;
}
