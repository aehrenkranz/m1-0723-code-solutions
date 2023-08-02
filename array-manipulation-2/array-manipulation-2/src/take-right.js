/* exported takeRight */
function takeRight(array, count) {
  let arr = [];
  if (array.length < count) {
    arr = array;
  }
  for (
    let i = array.length - count;
    i < array.length && array.length >= count;
    i++
  ) {
    arr.push(array[i]);
  }
  return arr;
}
