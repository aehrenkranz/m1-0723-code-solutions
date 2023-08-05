/* exported isPalindromic */
function isPalindromic(string) {
  const newString1 = string.split(' ');
  const newString2 = newString1.join();
  let backwards = '';
  let forwards = '';
  for (let i = 0; i < newString2.length; i++) {
    if (newString2[i] !== ',') {
      forwards += newString2[i];
    }
  }
  for (let i = newString2.length - 1; i >= 0; i--) {
    if (newString2[i] !== ',') {
      backwards += newString2[i];
    }
  }
  if (backwards === forwards) {
    return true;
  }
  return false;
}
