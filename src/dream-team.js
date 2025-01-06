const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) { return false };
  let name = members.reduce(function (acc, curr) {
    if (typeof curr === 'string') {
      return acc + curr.trim()[0];
    }
    return acc;
  }, '');
  if (name.length > 0) {
    name = name.toUpperCase();
    return name.split('')
      .sort()
      .join('');
  }
  return false;
}

module.exports = {
  createDreamTeam
};
