/* exported sumAll */
function sumAll(numbers) {
  let res = 0;
  for (let i = 0; numbers.length > i; i++) {
    res += numbers[i];
  }
  return res;
}
