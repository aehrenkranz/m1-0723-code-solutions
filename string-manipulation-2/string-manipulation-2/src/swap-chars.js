/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  console.log(string.slice(0, firstIndex) + string[secondIndex]);
  return (
    string.slice(0, firstIndex) +
    string[secondIndex] +
    string.substring(firstIndex + 1, secondIndex) +
    string[firstIndex] +
    string.substr(secondIndex + 1)
  );
}
