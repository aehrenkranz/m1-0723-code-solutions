/* exported isVowel */
function isVowel(char) {
  const newChar = char.toUpperCase();
  if (
    newChar === 'A' ||
    newChar === 'E' ||
    newChar === 'I' ||
    newChar === 'O' ||
    newChar === 'U'
  ) {
    return true;
  }
  return false;
}
