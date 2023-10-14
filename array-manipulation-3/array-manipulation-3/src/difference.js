/* exported difference */
function difference(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1 && arr.indexOf(first[i]) === -1) {
      arr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second[i]) === -1 && arr.indexOf(second[i]) === -1) {
      arr.push(second[i]);
    }
  }
  return arr;
}
