const assertArraysEqual = require('./assertArraysEqual');

const map = function(array,callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

// test cases
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
