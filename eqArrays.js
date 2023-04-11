const assertEqual = require('./assertEqual');

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i] && (!Array.isArray(arrayA[i]) || !Array.isArray(arrayB[i]))) {
      return false;
    }
    if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i])) {
      if (!eqArrays(arrayA[i], arrayB[i])) {
        return false;
      }
    }
  }
  return true;
};

//test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = eqArrays;

