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
// const assertArraysEqual = function(arrayA, arrayB) {
//   const result = eqArrays(arrayA,arrayB);
//   if (result) {
//     console.log(`✅✅✅  Assertion passed: ${arrayA} === ${arrayB}`);
//   } else {
//     console.log(`🛑🛑🛑  Assertion failed: ${arrayA} !== ${arrayB}`);
//   }
// };

// const assertArraysEqual = require('../assertArraysEqual');


const middle = (arrayA) => {
  let middleItem = [];
  if (arrayA.length <= 2) {
    return middleItem;
    // less than 2 return empty
  } else if (arrayA.length % 2 === 0) {
    middleItem.push(Math.ceil(arrayA.length / 2));
    middleItem.push(Math.ceil(arrayA.length / 2) + 1);
    //returns upper and lower items near middle due to even
    //numbers of item in array
  } else if (!(arrayA.length % 2 === 0)) {
    middleItem.push(Math.ceil(arrayA.length / 2));
  }
  //return for odd number of items in array
  return middleItem;
};

//test code
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]

console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

module.exports = middle;
