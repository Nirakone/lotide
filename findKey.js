const assertEqual = require('./assertEqual');

const findKey = function(object,callback) {
  let keys = Object.keys(object);
  for (const key of keys) {
    if (callback(object[key])) {
      return key;
    }
  }
};

// test case from LHL
findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
let actualAns = findKey(object, x => x.stars === 2);
let expectedAns = "noma";
assertEqual(actualAns, expectedAns);
// Ora is not returned as answer even though it is 2 because it comes after noma
// findKey returns the first hit that is true
module.exports = findKey;