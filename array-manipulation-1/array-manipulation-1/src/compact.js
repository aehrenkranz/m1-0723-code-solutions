/* exported compact */
function compact(array) {
  const arr = [];
  let i = 0;
  while (i < array.length) {
    if (array[i]) {
      arr.push(array[i]);
    }
    i++;
  }
  return arr;
}
