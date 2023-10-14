/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const res1 = [];
  const res2 = [];
  for (let i = 0; i < firstString.length; i++) {
    if (firstString[i] !== ' ') {
      res1.push(firstString[i]);
    }
  }
  for (let i = 0; i < secondString.length; i++) {
    if (secondString[i] !== ' ') {
      res2.push(secondString[i]);
    }
  }
  res1.sort();
  res2.sort();

  if (res1.toString() === res2.toString()) {
    return true;
  }
  return false;
}
