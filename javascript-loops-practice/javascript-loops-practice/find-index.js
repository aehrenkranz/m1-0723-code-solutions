/* exported findIndex */
function findIndex(array, value) {
  let res = -1;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      res = i;
      break;
    }
  }
  return res;
}
