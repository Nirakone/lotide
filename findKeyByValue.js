const assertEqual = require('../assertEqual');

const findKeyByValue = function(showType, showName) {

  for (const key of Object.keys(showType)) {
    if (showType[key] === showName) {
      return key;
    }
  }
};
// test cases

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;