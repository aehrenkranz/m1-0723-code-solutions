/* exported toObject */
function toObject(keyValuePair) {
  const obj = {};
  const key = keyValuePair[0];
  const val = keyValuePair[1];
  obj[key] = val;
  return obj;
}
