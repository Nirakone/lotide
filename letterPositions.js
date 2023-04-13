const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  let noSpaces = sentence.replace(/\s/g, "");
  for (let i = 0; i < noSpaces.length; i++) {
    if (results[noSpaces[i]]) {
      results[noSpaces[i]].push(i);
    }  else {
      results[noSpaces[i]] = [i];
    }
  }

  return results;
};

// test case
assertArraysEqual(letterPositions("h e l l o").e, [1]);

module.exports = letterPositions;
