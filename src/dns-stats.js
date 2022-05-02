const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dnsStats = {};

  domains.forEach((el) => {
    for (let i = 0; i < el.split(".").length; i++) {
      let domain = '.' + el.split(".").slice(i).reverse().join(".");

      if (dnsStats.hasOwnProperty(domain)) {
        dnsStats[domain]++;
      } else {
        dnsStats[domain] = 1;
      }
    }
  });
  
  return dnsStats;
}

module.exports = {
  getDNSStats
};
