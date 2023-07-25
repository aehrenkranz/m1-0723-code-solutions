/* exported includesSeven */
function includesSeven(array) {
  let res = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      res = true;
    }
  }
  return res;
}
