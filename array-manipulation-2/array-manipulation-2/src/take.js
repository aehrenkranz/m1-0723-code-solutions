/* exported take */
/**
 * define a function named 'take' with two parameters, array and count
 * * define a new variable named 'arr' and assign it an empty array
 * * loop through the parameter 'array' as long as the iteration number is less than the value of 'count', and:
 * * * if the value of 'array' at the index location is not undefined,
 * * * push the value of the index location in 'array', based on the iteration number, into 'arr'
 * * return the variable 'arr'
 */

function take(array, count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    if (array[i] !== undefined) {
      arr.push(array[i]);
    }
  }
  return arr;
}
