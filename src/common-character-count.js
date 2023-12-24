const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const counts1 = {};
  const counts2 = {};

  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];

    if (counts1[char]) {
      counts1[char]++;
    } else {
      counts1[char] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (counts2[char]) {
      counts2[char]++;
    } else {
      counts2[char] = 1;
    }
  }

  let commonCount = 0;

  for (const char in counts1) {

    if (counts2[char]) {
      commonCount += Math.min(counts1[char], counts2[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
