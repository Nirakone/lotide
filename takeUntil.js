const assertArraysEqual = require('../assertArraysEqual');


const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item) === true) {
      //keep collecting items from a provided array until the callback provided returns a truthy value.
      return results;
    }
    results.push(item);
  }
};

// test cases from LHL
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertArraysEqual(results1,[1, 2, 5, 7, 3]);
assertArraysEqual(results2,["I've", "been", "to", "Hollywood"]);

module.exports = takeUntil;
