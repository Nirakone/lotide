//const assertEqual = require('../assertEqual');


const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  } // if arrays are not the same
  
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i] && (!Array.isArray(arrayA[i]) || !Array.isArray(arrayB[i]))) {
      return false;
    }
    // if pieces of arrays don't match
    if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i])) {
      if (!eqArrays(arrayA[i], arrayB[i])) {
        return false;
      }
    }
  }
  return true;
};

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;

