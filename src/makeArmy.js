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
 * @return {function[]}
 */
function makeSoldier(serialNumber) {
  return function() {
    return serialNumber;
  };
}

function makeArmy(count) {
  const army = [];
  let currentNumber = 0;

  while (currentNumber < count) {
    army[currentNumber] = makeSoldier(currentNumber);
    currentNumber++;
  }

  return army;
}

module.exports = makeArmy;
