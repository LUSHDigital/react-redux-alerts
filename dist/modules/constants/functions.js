
/**
 * Get index of an item in an array by it's key matching a value.
 * @param array {array}
 * @param value
 * @param key {string}
 * @returns {int}
 */

'use strict';

exports.__esModule = true;
exports.getIndexByKey = getIndexByKey;

function getIndexByKey(array, value) {
  var key = arguments.length <= 2 || arguments[2] === undefined ? 'id' : arguments[2];

  for (var i = 0; i < array.length; i++) {
    if (array[i][key] === value) {
      return i;
    }
  }
  return -1;
}