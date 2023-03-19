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


// const words = ["ground", "control", "to", "major", "tom"];
// const map = function(array, callback) {
//   // temporary code:
//   console.log('array: ', array);
//   console.log('callback: ', callback);
  
//   const results = [];
//   for (let item of array) {
//     results.push(callback(item));
//     //console.log('item BEFORE: ', item);
//     //console.log('item AFTER: ', callback(item));
//     //console.log('---');
//   }
//     return results;
// }
// const results1 = map(words, word => word[0]);
// console.log(results1);

const map = function(array,callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const resultsOne = map(words, word => word[0]);
console.log(resultsOne);
const expected = ["g", "c", "t", "m", "t"];
assertArraysEqual(resultsOne,expected);

const resultsTwo = map(words, word => word[2]);
assertArraysEqual(resultsTwo, ['o','n', null, 'j', 'm']);

const resultsThree = map(words, word => word.length);
assertArraysEqual(resultsThree, [1,1,1,1,1]);

const resultsFour = map(words, word => word.pop);
assertArraysEqual(resultsFour, ["ground", "control", "to", "major"]);

module.exports = map;
