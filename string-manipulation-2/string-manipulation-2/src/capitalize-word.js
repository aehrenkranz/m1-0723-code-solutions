/* exported capitalizeWord */
/**
 * define a function named capitalizeWord with one parameter,'word'
 * * define a variable,strLower, with the value of the parameter 'word' turned to lower case
 * *define a variable sol with the following value:
 * * * the variable 'strLower' with the first index location replaced with a capitalized version of itself
 * * if the value of the variable 'sol' is equal to 'Javascript', then:
 * * * 'sol' will be equal to itself, but with the 5th index location replaced with a capitalized version of itself
 * * return the variable sol
 *
 */

function capitalizeWord(word) {
  const strLower = word.toLowerCase();
  let sol = strLower.replace(strLower[0], strLower[0].toUpperCase());
  if (sol === 'Javascript') {
    sol = sol.replace(sol[4], sol[4].toUpperCase());
  }
  return sol;
}
