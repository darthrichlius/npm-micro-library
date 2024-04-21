var lastIndex; // In-Memory Store for the last generated index

function generateRandomIndex(arrLength) {
  do {
    var index = Math.floor(Math.random() * arrLength);
  } while (index === lastIndex);
  lastIndex = index;
  return index;
}

/**
 * Returns a random value from a given array.
 * The function is called 'uniqueAlmostRandomArray' because there is no 100% guarantee for its values to be unique for each operation.
 * However, the next value is guaranteed to be different from the previous one.
 *
 * @param {Array} arr
 */
module.exports = function uniqueAlmostRandomArray(arr) {
  return function () {
    var index = generateRandomIndex(arr.length);
    return arr[index];
  };
};
