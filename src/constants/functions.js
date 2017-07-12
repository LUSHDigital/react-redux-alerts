
/**
 * Get index of an item in an array by it's key matching a value.
 * @param array {array}
 * @param value
 * @param key {string}
 * @returns {int}
 */

export function getIndexByKey(array, value, key = 'id') {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}