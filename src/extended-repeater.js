const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let repeatTimes = options.repeatTimes || 1,
      arrFromStr = [];
  for (let i = 0; i < repeatTimes; i++) {
    let arrFromAdditional = [];
    if (options.additionRepeatTimes) {
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        arrFromAdditional.push(String(options.addition));
      }
    } else if (options.addition) {
      arrFromAdditional.push(String(options.addition));
    }

    let tmpStr = String(str) + arrFromAdditional.join(options.additionSeparator || '|');
    arrFromStr.push(tmpStr);
  }
  return arrFromStr.join(options.separator || '+');
}

module.exports = {
  repeater
};
