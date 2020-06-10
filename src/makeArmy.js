'use strict';

function makeArmy(count) {
  let amount = 0;
  const functionArr = [];

  while (amount <= count) {
    const check = amount;

    const item = function() {
      return check;
    };

    functionArr.push(item);
    amount++;
  }

  return functionArr;
}

module.exports = makeArmy;
