const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  try {
    if (arr.indexOf('--double-next') !== -1) {
      const index = arr.indexOf('--double-next');
      return index + 1 > arr.length - 1 ? arr.splice(0, arr.length - 1) : arr.splice(index, 1, arr[index + 1]);
    } else if (arr.indexOf('--double-prev') !== -1) {
      const index = arr.indexOf('--double-prev');
      return index-1 < 0 ? arr.splice(index + 1) : arr.splice(index, 1, arr[index - 1]);
    } else if (arr.indexOf('--discard-next') !== -1) {
      const index = arr.indexOf('--discard-next');
      return index + 1 > arr.length - 1 ? arr.splice(0, arr.length - 1) : arr.splice(index, 2);
    } else if (arr.indexOf('--discard-prev') !== -1) {
      const index = arr.indexOf('--discard-prev');
      return index-1 < 0 ? arr.splice(index + 1) : arr.splice(index - 1, 2);
    }

    return arr;
  } catch (err) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  transform
};
