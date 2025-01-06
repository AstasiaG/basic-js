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
  let assStr = '';
  if (options.addition !== undefined) {
    let separator = options.additionSeparator ? options.additionSeparator : '|';
    let repeat = options.additionRepeatTimes ? options.additionRepeatTimes : 1;
    assStr = options.addition + separator;
    assStr = assStr.repeat(repeat).slice(0,-separator.length);
  }
  let separator = options.separator ? options.separator : '+';
  let repeat = options.repeatTimes ? options.repeatTimes : 1;
  let resultStr = str + assStr + separator;

  return resultStr.repeat(repeat).slice(0,-separator.length);
}

module.exports = {
  repeater
};
