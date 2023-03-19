const assert = require('chai').assert;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe("#eqArrays", () => {

  it("returns true for [1,2,3] and [1,2,3]", () => {
    assert.equal(eqArrays([1,2,3], [1,2,3]), true);
  });
  
  it("returns false for [1,2,3] and [3,2,1]", () => {
    assert.equal(eqArrays([1,2,3], [3,2,1]), false);
  });

});


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
