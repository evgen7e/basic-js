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
  if (matrix.length) {
    let array = matrix.reduce(function(a, b) {
      return a.concat(b);
    });
    return array.filter(el => el === '^^').length;
  }
  return 0;
}

module.exports = {
  countCats
};