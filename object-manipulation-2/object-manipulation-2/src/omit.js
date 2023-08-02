/* exported omit */
/**
 * define a function named omit with two parameters, 'source' and 'keys'
 * * define a variable named 'newObj' and assign it the value of an empty object
 * * loop through each key in the parameter 'source' and:
 * * * if the parameter 'keys' contains the same value as the key, and the key is not undefined
 * * * * assign the value of the key from 'source' to 'newObj" with the same key and value
 * * return the variable 'newObj'
 */
function omit(source, keys) {
  const newObj = {};
  for (const key in source) {
    if (keys.indexOf(key) === -1 && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }

  return newObj;
}
