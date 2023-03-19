// const assertEqual = require('../assertEqual');

const eqArrays = require('../eqArrays');


const assertArraysEqual = function(arrayA, arrayB) {
  const result = eqArrays(arrayA,arrayB);
  if (result) {
    console.log(`✅✅✅  Assertion passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${arrayA} !== ${arrayB}`);
  }
};

module.exports = assertArraysEqual;
