/* exported capitalize */
function capitalize(word) {
  const remaining = word.slice(1);
  const lower = remaining.toLowerCase();
  const first = word[0];
  const upper = first.toUpperCase();
  const newWord = upper + lower;
  return newWord;
}
