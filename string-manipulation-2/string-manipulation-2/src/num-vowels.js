/* exported numVowels */
function numVowels(string) {
  const newStr = string.toLowerCase();
  let res = 0;
  for (let i = 0; i < newStr.length; i++) {
    if (
      newStr[i] === 'a' ||
      newStr[i] === 'e' ||
      newStr[i] === 'i' ||
      newStr[i] === 'o' ||
      newStr[i] === 'u'
    ) {
      res++;
    }
  }
  return res;
}
