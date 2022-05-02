const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect
  
  }
  encrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");

    let messageArray = message.toUpperCase().split("");
    let keyArr = message.length > key.length ? key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split("") : key.toUpperCase().split("");

    let result = "";

    messageArray.forEach((mes) => {
      if (mes.charCodeAt() >= 65 && mes.charCodeAt() <= 90) {
        let codeMessage = mes.charCodeAt() - 65;
        let codeKey = keyArr.splice(0, 1).join("").charCodeAt() - 65;
        result += String.fromCharCode(((codeMessage + codeKey) % 26) + 65);
      } else {
        result += mes;
      }
    });

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");

    let messageArray = message.toUpperCase().split("");
    let keyArr = message.length > key.length ? key.repeat(Math.ceil(message.length / key.length)).toUpperCase().split("") : key.toUpperCase().split("");

    let result = "";

    messageArray.forEach((mes) => {
      if (mes.charCodeAt() >= 65 && mes.charCodeAt() <= 90) {
        let codeMessage = mes.charCodeAt() - 65;
        let codeKey = keyArr.splice(0, 1).join("").charCodeAt() - 65;
        result += String.fromCharCode(codeMessage - codeKey < 0 ? 91 + (codeMessage - codeKey) : ((codeMessage - codeKey) % 26) + 65);
      } else {
        result += mes;
      }
    });

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
