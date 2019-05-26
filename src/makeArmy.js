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

'use strict';

function makeArmy(num) {
	
	let shooters = [];
  	let Shooter = 0;

	const buffer = (personNum) => {

 		return () => {console.log(personNum)};
	};

    while (Shooter <= num) {

   		let shooter = buffer(Shooter);
    	shooters.push(shooter);
    	Shooter++;
 	}
 	return shooters;
}

const shooters = makeArmy(10)
 
shooters[0]() === 0;
shooters[5]() === 5;
shooters[9]() === 9;
module.exports = makeArmy;
