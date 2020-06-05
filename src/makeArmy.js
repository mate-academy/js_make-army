'use strict';

function makeArmy(count) {
  const army = [];
  let i = 0;

  while (i < count) {
    army[i] = makeSoldier(i);

    i++;
  }

  function makeSoldier(soldier) {
    return () => soldier;
  }

  return army;
}

module.exports = makeArmy;
