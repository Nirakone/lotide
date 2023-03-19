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
const eqArrays = require('../eqArrays');


// const assertEqual = function(actual, expected) {

//   if (actual === expected) {
//     console.log(`✅✅✅ Passed: ${actual}  ===  ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`🛑🛑🛑 Failed: ${actual}  !==  ${expected}`);
//   }
//   return actual === expected;
  
// };
const assertEqual = require('../assertEqual');



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectOne = Object.keys(object1); // turn to array
  let objectTwo = Object.keys(object2);
  if (objectOne.length !== objectTwo.length) {
    // if they aren't the same number values inside
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // isArray to confirm array to match values
      // && to make sure both changed objects match up
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};



/*
// test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertEqual(eqObjects(shirtObject , anotherShirtObject), true);


const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
eqObjects(shirtObject , longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
*/

module.exports = eqObjects;
