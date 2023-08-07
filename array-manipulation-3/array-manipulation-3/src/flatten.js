/* exported flatten */
function flatten(array) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (let x = 0; x < array[i].length; x++) {
        newArr.push(array[i][x]);
      }
      continue;
    }
    newArr.push(array[i]);
  }
  return newArr;
}
