const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let numbers = n.toString().split(''),
      resNumb = 0;

  while (resNumb < 1 || resNumb > 9) {
    resNumb = 0;
    for (let i = 0; i < numbers.length; i++) {
      resNumb += Number(numbers[i]);
    }
    numbers = resNumb.toString().split('');
  }

  return resNumb;
}

module.exports = {
  getSumOfDigits
};
