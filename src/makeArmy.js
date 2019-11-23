'use strict';

/**
 * Implement makeArmy function:
 *
 * Function takes number (count) and generates an array with 'count' elements.
 * Each element is a function which returns its position in the array when
 * called.
 *
 * const shooters = makeArmy(10)
 *
 * shooters[0]() === 0;
 * shooters[5]() === 5;
 * shooters[9]() === 9;
 *
 * Don't use loop 'for' in the implementation. Try with 'while' and closures
 * instead.
 *
 * @param {number} count
 *
 * @return {void}
 */
function makeArmy(count) {
  let shoot = 0;
  const shooters = [];

  while (shoot <= count) {
    const index = shoot;
    shooters.push(function() {
      return index;
    });
    shoot++;
  }
  return shooters;
}

module.exports = makeArmy;
