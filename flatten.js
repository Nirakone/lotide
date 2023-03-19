// const eqArrays = function(arrayA, arrayB) {
//   if (arrayA.length !== arrayB.length) {
//     return false;
//   } // if arrays are not the same
  
//   for (let i = 0; i < arrayA.length; i++) {
//     if (arrayA[i] !== arrayB[i] && (!Array.isArray(arrayA[i]) || !Array.isArray(arrayB[i]))) {
//       return false;
//     }
//     // if pieces of arrays don't match
//     if (Array.isArray(arrayA[i]) && Array.isArray(arrayB[i])) {
//       if (!eqArrays(arrayA[i], arrayB[i])) {
//         return false;
//       }
//     }
//   }
//   return true;
// };
// const eqArrays = require('../eqArrays');

// const assertArraysEqual = function(arrayA, arrayB) {
//   const result = eqArrays(arrayA,arrayB);
//   if (result) {
//     console.log(`✅✅✅  Assertion passed: ${arrayA} === ${arrayB}`);
//   } else {
//     console.log(`🛑🛑🛑  Assertion failed: ${arrayA} !== ${arrayB}`);
//   }
// };
//const assertArraysEqual = require('../assertArraysEqual');



/* goes through array items, pushes them out of inner array, gives count of how many
items in new flat array */

const flatten = (nestedArrays) => {
  let flattenedArray = [];
  for (let f = 0; f < nestedArrays.length; f++) {
    if (Array.isArray(nestedArrays[f])) {
      for (let l = 0; l < nestedArrays[f].length; l++) {
        flattenedArray.push(nestedArrays[f][l]);
      }
    } else {
      flattenedArray.push(nestedArrays[f]);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
};

// flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]

module.exports = flatten;
