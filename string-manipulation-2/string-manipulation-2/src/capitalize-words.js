/* exported capitalizeWords */
function capitalizeWords(string) {
  const strLower = string.toLowerCase();
  let res = '';
  for (let i = 0; i < strLower.length; i++) {
    if (strLower[i - 1] === ' ') {
      res += strLower[i].toUpperCase();
    } else {
      res += strLower[i];
    }
  }
  res = res.replace(res[0], res[0].toUpperCase());
  return res;
}
