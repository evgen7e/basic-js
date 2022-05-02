const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arrFromStr = str.split(''),
      resStr = '',
      count = 0;

  for (let i = 0; i < arrFromStr.length; i++) {
    if (i === 0) {
      count++;
    } else if (i === arrFromStr.length - 1) {
      if (arrFromStr[i] === arrFromStr[i - 1]) {
        count++;        
        resStr += (count !== 1 ? count : '') + arrFromStr[i];
      } else {
        resStr += (count !== 1 ? count : '') + arrFromStr[i - 1];
        count = 1;
        resStr += (count !== 1 ? count : '') + arrFromStr[i];
      }
    } else {
      if (arrFromStr[i] === arrFromStr[i - 1]) {
        count++;
      } else {
        resStr += (count !== 1 ? count : '') + arrFromStr[i - 1];
        count = 1;
      }
    }
  }
  return resStr;
}

module.exports = {
  encodeLine
};
