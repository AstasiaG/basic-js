const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  try {
    if (!date) { return 'Unable to determine the time of year!' }

    if (typeof date.valueOf() === 'number') {
      const month = date.getMonth();

      if (month < 2 || month === 11) {
        return 'winter';
      } else if (month < 5 && month > 1) {
        return 'spring';
      } else if (month < 8 && month > 4) {
        return 'summer';
      } else if (month < 11 && month > 7) {
        return 'fall';
      }
    }
    throw new Error('Invalid date!');
  } catch (error) {
    throw new Error('Invalid date!');
  }
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
