/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (const key in source) {
    if (keys.indexOf(key) !== -1 && source[key] !== undefined) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
