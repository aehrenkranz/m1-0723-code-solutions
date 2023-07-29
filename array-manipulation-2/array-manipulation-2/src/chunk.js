/* exported chunk */
function chunk(array, size) {
  const arr = [];
  for (let i = 0; i < array.length; i = i + size) {
    const arrNew = array.slice(i, i + size);
    arr.push(arrNew);
  }
  return arr;
}
