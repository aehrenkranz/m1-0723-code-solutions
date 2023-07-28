/* exported ransomCase */
function ransomCase(string) {
  const strLower = string.toLowerCase();
  let res = '';
  for (let i = 0; i < strLower.length; i++) {
    if (i % 2 !== 0) {
      res += strLower[i].toUpperCase();
    } else {
      res += strLower[i];
    }
  }
  return res;
}
