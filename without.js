// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`✅✅✅ Passed: ${actual}  ===  ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Failed: ${actual}  !==  ${expected}`);
//   }
//   return actual === expected;
  
// };


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
//const eqArrays = require('../eqArrays');

// const assertArraysEqual = function(arrayA, arrayB) {
//   const result = eqArrays(arrayA,arrayB);
//   if (result) {
//     console.log(`✅✅✅  Assertion passed: ${arrayA} === ${arrayB}`);
//   } else {
//     console.log(`🛑🛑🛑  Assertion failed: ${arrayA} !== ${arrayB}`);
//   }
// };
const assertArraysEqual = require('../assertArraysEqual');


const without = function(source, itemsToRemove) {
  let resultArray = source.filter((element) => {
    if (itemsToRemove.includes(element)) {
      return false;
    } else {
      return true;
    }
  });
  return resultArray;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;