/* exported unique */
function unique(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (arr.indexOf(array[i]) === -1) {
      arr.push(array[i]);
    }
  }
  return arr;
}
