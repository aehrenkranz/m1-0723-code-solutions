/* exported reverseWords */
function reverseWords(string) {
  const newWord = string.split(' ');
  for (let i = 0; i < newWord.length; i++) {
    newWord[i] = newWord[i].split('').reverse().join('');
  }
  return newWord.join(' ');
}
