const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  const strFromNumber = number.toString();
  let maxNumb = 0;
  for (let i = 0; i < strFromNumber.length; i++) {
    let tmpStr = strFromNumber.replace(strFromNumber[i], '');
    maxNumb = Math.max(maxNumb, Number(tmpStr));
  }
  return maxNumb;
}

module.exports = {
  deleteDigit
};
