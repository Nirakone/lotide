const eqArrays = require('./eqArrays');
// uncomment below module required for test code
//const assertEqual = require('../assertEqual');

// Returns true if both objects have identical keys with identical values.

const eqObjects = function(object1, object2) {
  let objectOne = Object.keys(object1); // turn to array
  let objectTwo = Object.keys(object2);
  if (objectOne.length !== objectTwo.length) {
    // if they aren't the same number values inside
    return false;
  }
  for (let key of Object.keys(object1)) {
    // isArray to confirm array to match values
    // && to make sure both changed objects match up
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
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
