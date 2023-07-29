/* exported includes */
function includes(array, value) {
  let res = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      res = true;
    }
  }
  return res;
}
