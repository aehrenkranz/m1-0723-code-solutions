/* exported zip */
function zip(first, second) {
  let count = first.length;
  if (second.length < count) {
    count = second.length;
  }

  const arr = [];
  const secondArr = [];
  for (let i = 0; i < count; i++) {
    arr.push(first[i], second[i]);
  }
  for (let i = 0; i < arr.length; i += 2) {
    secondArr.push(arr.slice(i, i + 2));
  }
  return secondArr;
}
