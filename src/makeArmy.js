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
function makeArmy(count) {
  const army = [];
  let shooters = 0;

  while (shooters < count) {
    army[shooters] = makeShooter(shooters);

    shooters++;
  }

  function makeShooter(shooter) {
    return () => shooter;
  }

  return army;
}

module.exports = makeArmy;
