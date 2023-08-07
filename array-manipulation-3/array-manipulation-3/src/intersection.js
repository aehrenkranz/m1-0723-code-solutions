/* exported intersection */
function intersection(first, second) {
  const arr = [];
  for (let i = 0; i < first.length; i++) {
    if (arr.indexOf(first[i]) === -1 && second.indexOf(first[i]) !== -1) {
      arr.push(first[i]);
    }
  }
  for (let i = 0; i < second.length; i++) {
    if (arr.indexOf(second[i]) === -1 && first.indexOf(second[i]) !== -1) {
      arr.push(second[i]);
    }
  }
  return arr;
}
