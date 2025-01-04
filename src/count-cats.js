const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce(function (accum, current) {
    if (current.includes('^^')) {
      let cats = current.filter(a => a == '^^');
      return accum + cats.length;
    } else {
      return accum;
    }
  }, 0);
}

module.exports = {
  countCats
};
